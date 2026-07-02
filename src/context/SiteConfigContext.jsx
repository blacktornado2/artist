import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getConfig } from '../api/client.js';

const SiteConfigContext = createContext(null);

export function SiteConfigProvider({ children }) {
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);

  const refresh = useCallback(() => {
    return getConfig()
      .then((data) => {
        setConfig(data);
        setError(null);
        return data;
      })
      .catch((err) => {
        setError(err.message);
        throw err;
      });
  }, []);

  useEffect(() => {
    refresh().catch(() => {});
  }, [refresh]);

  useEffect(() => {
    if (!config) return;
    const root = document.documentElement;
    if (config.accentColor) root.style.setProperty('--ap-accent', config.accentColor);
    if (config.darkColor) root.style.setProperty('--ap-dark', config.darkColor);
  }, [config]);

  const value = useMemo(
    () => ({ config, error, refresh, setConfig }),
    [config, error, refresh],
  );

  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  return ctx;
}
