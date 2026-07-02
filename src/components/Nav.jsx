import { useState } from 'react';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

const LINKS = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#commission', label: 'Commission' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const { config } = useSiteConfig();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="mob-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(245,240,232,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(45,74,62,0.14)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
      }}
    >
      <a
        href="#home"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: 3,
          color: 'var(--ap-dark)',
          textTransform: 'uppercase',
        }}
      >
        {config.artistName}
      </a>
      <nav
        className="mob-nav-links"
        style={{
          display: 'flex',
          gap: 40,
          fontSize: 12,
          letterSpacing: 2.5,
          textTransform: 'uppercase',
          color: '#2D4A3E',
        }}
      >
        <a href="#gallery" style={{ opacity: 0.85 }}>
          Gallery
        </a>
        <a href="#about" style={{ opacity: 0.85 }}>
          About
        </a>
        <a href="#commission" style={{ opacity: 0.85 }}>
          Commission
        </a>
        <a href="#contact" style={{ opacity: 0.85 }}>
          Contact
        </a>
      </nav>

      <button
        type="button"
        className="mob-nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          padding: 8,
          cursor: 'pointer',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <span
          style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--ap-dark)',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--ap-dark)',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }}
        />
        <span
          style={{
            display: 'block',
            width: 22,
            height: 2,
            background: 'var(--ap-dark)',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      <nav
        className="mob-nav-dropdown"
        style={{
          display: open ? 'flex' : 'none',
        }}
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
