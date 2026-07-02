import { FeaturedCard, StandardCard } from './GalleryCard.jsx';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function Gallery() {
  const { config } = useSiteConfig();
  const paintings = config.paintings ?? [];
  const [first, second, ...rest] = paintings;

  return (
    <section id="gallery" style={{ padding: '80px 64px 88px', background: '#F5F0E8' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 48,
          borderBottom: '1px solid rgba(45,74,62,0.13)',
          paddingBottom: 20,
        }}
      >
        <div>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: 10,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#8FA67A',
            }}
          >
            Current Collection
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 44,
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--ap-dark)',
            }}
          >
            Original Works
          </h2>
        </div>
        <p style={{ fontSize: 13, color: '#8FA67A', fontWeight: 300 }}>
          Click any painting to view details
        </p>
      </div>

      {paintings.length === 0 && (
        <p style={{ fontSize: 15, color: 'var(--ap-warm-body)' }}>
          No paintings in the collection yet.
        </p>
      )}

      {first && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: second ? '2fr 1fr' : '1fr',
            gap: 28,
            marginBottom: rest.length > 0 ? 28 : 0,
          }}
        >
          <FeaturedCard painting={first} large />
          {second && <FeaturedCard painting={second} />}
        </div>
      )}

      {rest.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 28,
          }}
        >
          {rest.map((painting) => (
            <StandardCard key={painting.id} painting={painting} />
          ))}
        </div>
      )}
    </section>
  );
}
