import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function DetailNav() {
  const { config } = useSiteConfig();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#F5F0E8',
        borderBottom: '1px solid rgba(45,74,62,0.14)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        padding: '0 64px',
      }}
    >
      <a
        href="#gallery"
        className="hover-fade-5"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 11,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: '#2D4A3E',
          flex: '0 0 auto',
          transition: 'opacity 0.15s',
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1, marginTop: -1 }}>←</span>
        <span>Back to Gallery</span>
      </a>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <a
          href="#gallery"
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
      </div>
      <div style={{ flex: '0 0 auto', width: 160 }} />
    </header>
  );
}
