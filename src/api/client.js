// In development the Vite proxy forwards /api → localhost:4000.
// In production set VITE_API_URL to your backend origin (e.g. https://api.example.com).
// When VITE_API_URL is not set in production the app falls back to the static
// public/data/config.json bundle so the site renders without a live backend.
const API_BASE = import.meta.env.VITE_API_URL ?? '';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}/api${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export async function getConfig() {
  // Use static snapshot when no backend URL is configured (dev or prod)
  if (!import.meta.env.VITE_API_URL) {
    const res = await fetch('/data/config.json');
    if (!res.ok) throw new Error('Failed to load site config');
    return res.json();
  }
  return request('/config');
}

export function updateConfig(config, token) {
  return request('/config', {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(config),
  });
}

export function login(password) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify({ password }),
  });
}

export function logout(token) {
  return request('/logout', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function uploadImage(file, token) {
  const formData = new FormData();
  formData.append('image', file);
  const res = await fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Upload failed (${res.status})`);
  }
  return res.json();
}
