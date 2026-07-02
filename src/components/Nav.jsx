import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function Nav() {
  const { config } = useSiteConfig();

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
    </header>
  );
}
