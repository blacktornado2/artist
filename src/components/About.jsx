import PaintingIllustration from './PaintingIllustration.jsx';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function About() {
  const { config } = useSiteConfig();
  const { about } = config;

  return (
    <section
      id="about"
      className="mob-about"
      style={{
        background: 'var(--ap-dark)',
        padding: '96px 64px',
        display: 'grid',
        gridTemplateColumns: '380px 1fr',
        gap: 80,
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{
            aspectRatio: '3/4',
            overflow: 'hidden',
            boxShadow: '8px 8px 40px rgba(0,0,0,0.45)',
          }}
        >
          {about.image ? (
            <img
              src={about.image}
              alt={about.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <PaintingIllustration name="flowers" />
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: -14,
            right: 14,
            bottom: 14,
            border: '1px solid rgba(201,168,76,0.22)',
            pointerEvents: 'none',
          }}
        />
      </div>
      <div>
        <p
          style={{
            margin: '0 0 18px',
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: 'var(--ap-accent)',
          }}
        >
          About the Artist
        </p>
        <h2
          style={{
            margin: '0 0 10px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 52,
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.08,
            color: '#F5F0E8',
          }}
        >
          {about.name}
        </h2>
        <p
          style={{
            margin: '0 0 28px',
            fontSize: 13,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.65)',
          }}
        >
          {about.subLabel}
        </p>
        {about.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            style={{
              margin: i === about.paragraphs.length - 1 ? '0 0 40px' : '0 0 20px',
              fontSize: 16,
              lineHeight: 1.84,
              color: 'rgba(245,240,232,0.72)',
              fontWeight: 300,
            }}
          >
            {paragraph}
          </p>
        ))}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <a
            href="#commission"
            style={{
              display: 'inline-block',
              padding: '14px 30px',
              border: '1px solid rgba(201,168,76,0.35)',
              color: 'var(--ap-accent)',
              fontSize: 10,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
            }}
          >
            Commission a Work
          </a>
          <a
            href="#contact"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.42)',
              borderBottom: '1px solid rgba(245,240,232,0.18)',
              paddingBottom: 2,
            }}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
