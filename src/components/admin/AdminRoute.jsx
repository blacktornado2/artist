import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';

export default function AdminRoute() {
  const { token, isAuthenticated, login, logout } = useAdminAuth();

  if (!isAuthenticated) {
    return <AdminLogin onLogin={login} />;
  }
  return <AdminDashboard token={token} onLogout={logout} />;
}
