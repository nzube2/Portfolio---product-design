import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const storageKey = 'portfolio-scroll-position';
let initialNavigation = true;
export default function ScrollToTop() {
 const { pathname, hash } = useLocation();
 useEffect(() => {
  const save = () => { try { sessionStorage.setItem(storageKey, JSON.stringify({ url: location.pathname + location.hash, x: scrollX, y: scrollY })); } catch {} };
  window.addEventListener('pagehide', save); window.addEventListener('beforeunload', save);
  return () => { window.removeEventListener('pagehide', save); window.removeEventListener('beforeunload', save); };
 }, []);
 useEffect(() => {
  let cancelled = false; let frame;
  const reload = initialNavigation && performance.getEntriesByType('navigation')[0]?.type === 'reload';
  initialNavigation = false;
  let saved;
  try { saved = JSON.parse(sessionStorage.getItem(storageKey)); } catch {}
  if (reload && saved?.url === pathname + hash) {
   const restore = async () => {
    await document.fonts.ready;
    if(cancelled) return;
    frame = requestAnimationFrame(() => { if(!cancelled) window.scrollTo({ left: saved.x, top: saved.y, behavior: 'instant' }); });
   };
   if(document.readyState === 'complete') restore(); else window.addEventListener('load', restore, {once:true});
   return () => { cancelled=true; cancelAnimationFrame(frame); window.removeEventListener('load',restore); };
  }
  if (!hash) { window.scrollTo({top:0,left:0,behavior:'instant'}); return; }
  let attempts=0;
  const seek = () => {
   if(cancelled) return;
   const target=document.getElementById(decodeURIComponent(hash.slice(1)));
   if(target) target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant':'smooth'});
   else if(++attempts<120) frame=requestAnimationFrame(seek);
  };
  seek();
  return () => { cancelled=true; cancelAnimationFrame(frame); };
 }, [pathname,hash]);
 return null;
}
