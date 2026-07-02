import { useEffect, useRef, useState } from 'react';

function parseRoute() {
  const hash = window.location.hash;
  if (hash === '#/admin' || hash.startsWith('#/admin/')) {
    return { route: 'admin', paintingId: null };
  }
  const m = hash.match(/^#\/(.+)$/);
  if (m) return { route: 'detail', paintingId: decodeURIComponent(m[1]) };
  return { route: 'home', paintingId: null };
}

export function useHashRoute() {
  const [state, setState] = useState(parseRoute);
  const prevRoute = useRef(state.route);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseRoute();
      setState(next);
      if (next.route === 'detail' || next.route === 'admin') window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (prevRoute.current !== 'home' && state.route === 'home') {
      const hash = window.location.hash;
      if (hash.length > 1 && !hash.startsWith('#/')) {
        const anchorId = hash.slice(1);
        const timeout = setTimeout(() => {
          document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
        return () => clearTimeout(timeout);
      }
    }
    prevRoute.current = state.route;
  }, [state.route]);

  return state;
}
