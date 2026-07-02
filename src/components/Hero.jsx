import PaintingImage from './PaintingImage.jsx';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function Hero() {
  const { config } = useSiteConfig();
  const { hero, paintings, heroPaintingId } = config;
  const heroPainting = paintings.find((p) => p.id === heroPaintingId) ?? paintings[0];

  return (
    <section
      id="home"
      className="mob-hero"
      style={{
        background: 'var(--ap-dark)',
        minHeight: 640,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="mob-hero-content"
        style={{
          padding: '90px 56px 90px 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <p
          className="fade-up-0"
          style={{
            margin: '0 0 22px',
            fontSize: 11,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: 'var(--ap-accent)',
          }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="fade-up-1 mob-hero-h1"
          style={{
            margin: '0 0 28px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 78,
            fontWeight: 300,
            lineHeight: 0.96,
            color: '#F5F0E8',
          }}
        >
          {hero.headingLine1}
          <br />
          <em style={{ color: 'var(--ap-accent)', fontStyle: 'italic' }}>
            {hero.headingEmphasis}
          </em>
          <br />
          {hero.headingLine2}
        </h1>
        <p
          className="fade-up-2"
          style={{
            margin: '0 0 44px',
            fontSize: 15,
            lineHeight: 1.8,
            color: 'rgba(245,240,232,0.58)',
            maxWidth: 360,
            fontWeight: 300,
          }}
        >
          {hero.body}
        </p>
        <div className="fade-up-3" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <a
            href="#gallery"
            style={{
              display: 'inline-block',
              padding: '15px 34px',
              background: 'var(--ap-accent)',
              color: 'var(--ap-dark)',
              fontSize: 12,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Explore the Collection
          </a>
          <a
            href="#commission"
            style={{
              fontSize: 12,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.52)',
              borderBottom: '1px solid rgba(201,168,76,0.35)',
              paddingBottom: 3,
            }}
          >
            Commission a Painting →
          </a>
        </div>
      </div>

      {heroPainting && (
        <div className="mob-hero-image" style={{ position: 'relative', overflow: 'hidden', background: '#0C1C12' }}>
          <a href={`#/${heroPainting.id}`} style={{ position: 'absolute', inset: 0, display: 'block' }}>
            <PaintingImage painting={heroPainting} />
          </a>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: 100,
              background: 'linear-gradient(to right, var(--ap-dark), transparent)',
              pointerEvents: 'none',
            }}
          />
          <a
            href={`#/${heroPainting.id}`}
            style={{
              position: 'absolute',
              bottom: 32,
              right: 32,
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '14px 20px',
              background: 'rgba(26,46,38,0.72)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <p
              style={{
                margin: '0 0 3px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 18,
                fontStyle: 'italic',
                color: '#F5F0E8',
              }}
            >
              {heroPainting.title}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'var(--ap-accent)',
              }}
            >
              {heroPainting.medium} · {heroPainting.year} — View →
            </p>
          </a>
        </div>
      )}
      <div
        className="shimmer-line"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            'linear-gradient(to right, transparent, var(--ap-accent) 30%, var(--ap-accent) 70%, transparent)',
        }}
      />
    </section>
  );
}
