import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function QuoteDivider() {
  const { config } = useSiteConfig();

  return (
    <section
      className="mob-section"
      style={{
        background: '#F5F0E8',
        padding: '80px 64px',
        textAlign: 'center',
        borderTop: '1px solid rgba(45,74,62,0.1)',
        borderBottom: '1px solid rgba(45,74,62,0.1)',
      }}
    >
      <p
        className="mob-quote-text"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 36,
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--ap-dark)',
          maxWidth: 720,
          margin: '0 auto 18px',
          lineHeight: 1.42,
        }}
      >
        {config.tagline}
      </p>
      <p style={{ fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#8FA67A' }}>
        — {config.about.name}
      </p>
    </section>
  );
}
