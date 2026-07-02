import DetailNav from '../components/DetailNav.jsx';
import Footer from '../components/Footer.jsx';
import PaintingImage from '../components/PaintingImage.jsx';
import { useSiteConfig } from '../context/SiteConfigContext.jsx';

export default function PaintingDetail({ paintingId }) {
  const { config } = useSiteConfig();
  const paintings = config.paintings ?? [];
  const painting = paintings.find((p) => p.id === paintingId) ?? null;

  if (!painting) {
    return (
      <div style={{ background: '#F5F0E8', minHeight: '100vh' }} className="fade-in">
        <DetailNav />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 64px 80px' }}>
          <p style={{ fontSize: 16, color: 'var(--ap-warm-body)' }}>
            Painting not found.
          </p>
        </div>
        <Footer minimal />
      </div>
    );
  }

  const related = paintings.filter((p) => p.id !== painting.id).slice(0, 3);

  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }} className="fade-in">
      <DetailNav />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 64px 80px' }}>
        <div
          className="mob-detail-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: 72,
            alignItems: 'start',
          }}
        >
          <div style={{ overflow: 'hidden', boxShadow: '4px 12px 52px rgba(26,46,38,0.16)' }}>
            <div style={{ aspectRatio: '4/3' }}>
              <PaintingImage painting={painting} />
            </div>
          </div>

          <div style={{ paddingTop: 8 }}>
            <p
              style={{
                margin: '0 0 18px',
                fontSize: 11,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#8FA67A',
              }}
            >
              {painting.year}
            </p>
            <h1
              style={{
                margin: '0 0 16px',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 50,
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.06,
                color: 'var(--ap-dark)',
              }}
            >
              {painting.title}
            </h1>
            <p
              style={{
                margin: '0 0 36px',
                fontSize: 14,
                letterSpacing: 0.8,
                color: '#8FA67A',
                paddingBottom: 36,
                borderBottom: '1px solid rgba(45,74,62,0.12)',
              }}
            >
              {painting.medium} · {painting.size}
            </p>
            <p
              style={{
                margin: '0 0 52px',
                fontSize: 16,
                lineHeight: 1.88,
                color: '#5A5040',
                fontWeight: 300,
              }}
            >
              {painting.desc}
            </p>
            <a
              href="#contact"
              className="hover-fade-82"
              style={{
                display: 'block',
                padding: '16px 32px',
                background: 'var(--ap-dark)',
                color: '#F5F0E8',
                fontSize: 12,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                textAlign: 'center',
                marginBottom: 14,
                transition: 'opacity 0.15s',
              }}
            >
              Inquire About This Work
            </a>
            <p style={{ fontSize: 13, color: '#8FA67A', textAlign: 'center', lineHeight: 1.6 }}>
              Available by private enquiry · I respond personally
            </p>
          </div>
        </div>
      </div>

      <div className="mob-detail-related" style={{ borderTop: '1px solid rgba(45,74,62,0.13)', padding: '56px 64px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p
            style={{
              margin: '0 0 40px',
              fontSize: 11,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#8FA67A',
            }}
          >
            More from the Collection
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {related.map((p) => (
              <div key={p.id}>
                <a
                  href={`#/${p.id}`}
                  className="hover-fade-84"
                  style={{
                    display: 'block',
                    aspectRatio: '4/3',
                    overflow: 'hidden',
                    boxShadow: '2px 4px 18px rgba(26,46,38,0.11)',
                    transition: 'opacity 0.18s',
                  }}
                >
                  <PaintingImage painting={p} />
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
                    {p.title}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: '#8FA67A' }}>
                    {p.medium} · {p.size}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer minimal />
    </div>
  );
}
