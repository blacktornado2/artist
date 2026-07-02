import Home from './pages/Home.jsx';
import PaintingDetail from './pages/PaintingDetail.jsx';
import AdminRoute from './components/admin/AdminRoute.jsx';
import { useHashRoute } from './hooks/useHashRoute.js';
import { useSiteConfig } from './context/SiteConfigContext.jsx';

export default function App() {
  const { route, paintingId } = useHashRoute();
  const { config, error } = useSiteConfig();

  if (error) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
          background: '#F5F0E8',
          padding: 24,
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 16, color: '#5A5040' }}>Couldn't reach the site's data server.</p>
        <p style={{ fontSize: 13, color: '#8A7A64' }}>{error}</p>
      </div>
    );
  }

  if (!config) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F5F0E8',
        }}
      >
        <p style={{ fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: '#8FA67A' }}>
          Loading…
        </p>
      </div>
    );
  }

  if (route === 'admin') return <AdminRoute />;
  if (route === 'detail') return <PaintingDetail paintingId={paintingId} />;
  return <Home />;
}
