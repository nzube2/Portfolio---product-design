import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    // React Router's client-side navigation doesn't trigger the browser's
    // native scroll-to-hash behavior (only full page loads do), and the
    // target section may not be mounted yet on the frame right after
    // navigation, so retry briefly until it's found.
    let attempts = 0;
    const id = hash.slice(1);

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
    return undefined;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
