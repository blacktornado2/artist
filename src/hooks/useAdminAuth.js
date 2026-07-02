import { useCallback, useState } from 'react';
import { login as apiLogin, logout as apiLogout } from '../api/client.js';

const STORAGE_KEY = 'annie_admin_token';

export function useAdminAuth() {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));

  const login = useCallback(async (password) => {
    const { token: newToken } = await apiLogin(password);
    localStorage.setItem(STORAGE_KEY, newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    const current = localStorage.getItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    if (current) apiLogout(current).catch(() => {});
  }, []);

  return { token, isAuthenticated: !!token, login, logout };
}
