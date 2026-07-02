import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, 'data', 'config.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const DIST_DIR = path.join(__dirname, '..', 'dist');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'annie-admin';
const PORT = process.env.PORT || 4000;

fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// In-memory session tokens. Reset on server restart — acceptable for a
// single-owner admin dashboard, not a substitute for real auth.
const sessions = new Set();

function readConfig() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeConfig(config) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(config, null, 2));
}

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

const upload = multer({
  storage: multer.diskStorage({
    destination: UPLOADS_DIR,
    filename: (req, file, cb) => {
      cb(null, `${crypto.randomUUID()}${path.extname(file.originalname)}`);
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image uploads are allowed'));
    }
    cb(null, true);
  },
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(UPLOADS_DIR));

app.post('/api/login', (req, res) => {
  const { password } = req.body || {};
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Incorrect password' });
  }
  const token = crypto.randomBytes(24).toString('hex');
  sessions.add(token);
  res.json({ token });
});

app.post('/api/logout', requireAuth, (req, res) => {
  const token = req.headers.authorization.slice(7);
  sessions.delete(token);
  res.json({ ok: true });
});

app.get('/api/config', (req, res) => {
  res.json(readConfig());
});

app.put('/api/config', requireAuth, (req, res) => {
  const config = req.body;
  if (!config || typeof config !== 'object' || !Array.isArray(config.paintings)) {
    return res.status(400).json({ error: 'Invalid config payload' });
  }
  writeConfig(config);
  res.json(config);
});

app.post('/api/upload', requireAuth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}` });
});

// Serve the built frontend when running as a single deployable server.
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) return next();
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

// Multer/JSON errors land here instead of crashing the process.
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message || 'Request error' });
});

app.listen(PORT, () => {
  console.log(`Annie Artist API listening on http://localhost:${PORT}`);
  if (ADMIN_PASSWORD === 'annie-admin') {
    console.log('Using default admin password "annie-admin" — set ADMIN_PASSWORD to change it.');
  }
});
