import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function Footer({ minimal = false }) {
  const { config } = useSiteConfig();

  return (
    <footer
      style={{
        background: '#0C1C12',
        padding: '28px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p
          style={{
            margin: '0 0 4px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 17,
            letterSpacing: 2,
            color: 'rgba(245,240,232,0.55)',
          }}
        >
          {config.artistName}
        </p>
        <p style={{ margin: 0, fontSize: 11, color: 'rgba(245,240,232,0.28)' }}>
          © {new Date().getFullYear()} {config.about?.name} · Original Paintings
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 28,
          fontSize: 10,
          letterSpacing: 2.5,
          textTransform: 'uppercase',
          color: 'rgba(245,240,232,0.3)',
        }}
      >
        <a href="#gallery">Gallery</a>
        {!minimal && <a href="#about">About</a>}
        {!minimal && <a href="#commission">Commission</a>}
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
