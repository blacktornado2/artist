import { useState } from 'react';
import { fieldStyle, primaryButtonStyle } from './formStyles.js';

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await onLogin(password);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--ap-dark)',
        padding: 24,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 360,
          background: '#F5F0E8',
          padding: '44px 40px',
          boxShadow: '0 2px 24px rgba(0,0,0,0.3)',
        }}
      >
        <p
          style={{
            margin: '0 0 8px',
            fontSize: 10,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: 'var(--ap-accent)',
          }}
        >
          Owner Dashboard
        </p>
        <h1
          style={{
            margin: '0 0 28px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 32,
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--ap-dark)',
          }}
        >
          Sign in to customise
        </h1>
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...fieldStyle, marginBottom: 16 }}
          autoFocus
          required
        />
        {error && (
          <p style={{ margin: '0 0 16px', fontSize: 13, color: '#A0402C' }}>{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          style={{ ...primaryButtonStyle, width: '100%', opacity: submitting ? 0.7 : 1 }}
        >
          {submitting ? 'Signing in…' : 'Sign In'}
        </button>
        <a
          href="#gallery"
          style={{
            display: 'block',
            marginTop: 20,
            fontSize: 11,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            textAlign: 'center',
            color: 'var(--ap-warm-subtle)',
          }}
        >
          ← Back to site
        </a>
      </form>
    </div>
  );
}
