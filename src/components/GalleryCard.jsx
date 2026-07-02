import PaintingImage from './PaintingImage.jsx';

const SHADOW_FEATURED = '2px 6px 28px rgba(26,46,38,0.14)';
const SHADOW_STANDARD = '2px 4px 18px rgba(26,46,38,0.11)';

export function FeaturedCard({ painting, large = false }) {
  return (
    <div>
      <a
        href={`#/${painting.id}`}
        className="hover-fade-84"
        style={{
          display: 'block',
          aspectRatio: large ? '16/10' : '4/3',
          overflow: 'hidden',
          boxShadow: SHADOW_FEATURED,
          transition: 'opacity 0.18s',
        }}
      >
        <PaintingImage painting={painting} />
      </a>
      <div
        style={{
          padding: `${large ? 18 : 14}px 0 0`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <p
            style={{
              margin: '0 0 4px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: large ? 24 : 20,
              fontStyle: 'italic',
              color: 'var(--ap-dark)',
            }}
          >
            {painting.title}
          </p>
          <p style={{ margin: 0, fontSize: 12, color: '#8FA67A' }}>
            {painting.medium} · {painting.size}
            {large ? ` · ${painting.year}` : ''}
          </p>
        </div>
        <a
          href="#contact"
          style={{
            fontSize: 10,
            letterSpacing: large ? 2.5 : 2,
            textTransform: 'uppercase',
            color: '#2D4A3E',
            borderBottom: '1px solid rgba(45,74,62,0.45)',
            paddingBottom: 2,
          }}
        >
          Inquire →
        </a>
      </div>
    </div>
  );
}

export function StandardCard({ painting }) {
  return (
    <div>
      <a
        href={`#/${painting.id}`}
        className="hover-fade-84"
        style={{
          display: 'block',
          aspectRatio: '4/3',
          overflow: 'hidden',
          boxShadow: SHADOW_STANDARD,
          transition: 'opacity 0.18s',
        }}
      >
        <PaintingImage painting={painting} />
      </a>
      <div style={{ padding: '16px 0 0' }}>
        <p
          style={{
            margin: '0 0 4px',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20,
            fontStyle: 'italic',
            color: 'var(--ap-dark)',
          }}
        >
          {painting.title}
        </p>
        <p style={{ margin: '0 0 10px', fontSize: 12, color: '#8FA67A' }}>
          {painting.medium} · {painting.size}
        </p>
        <a
          href="#contact"
          style={{
            fontSize: 10,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#2D4A3E',
            borderBottom: '1px solid rgba(45,74,62,0.45)',
            paddingBottom: 1,
          }}
        >
          Inquire →
        </a>
      </div>
    </div>
  );
}
