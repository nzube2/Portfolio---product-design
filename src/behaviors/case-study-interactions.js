export function enableCaseStudyInteractions(root) {
  document.querySelectorAll('.screenshot-dialog').forEach(node => node.remove());
  const dialog = document.createElement('dialog');
  dialog.setAttribute('aria-label', 'Project screenshot preview');
  dialog.className = 'screenshot-dialog';
  const close = document.createElement('button');
  close.type = 'button'; close.className = 'screenshot-close'; close.textContent = 'Close preview ×';
  const image = document.createElement('img'); image.className = 'screenshot-expanded';
  dialog.append(close, image); document.body.append(dialog);
  let trigger;
  const open = (target) => { trigger = target; image.src = target.currentSrc || target.src; image.alt = target.alt; dialog.showModal(); close.focus(); };
  const closeDialog = () => dialog.close();
  close.addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener('close', () => trigger?.focus());
  const eligible = (img) => img.naturalWidth >= 600 && !img.closest('a') && !/icon|logo|swatch|graphic/.test(img.className);
  const enhance = () => {
    root.querySelectorAll('img').forEach((img) => {
      if (!eligible(img) || img.dataset.zoomable) return;
      img.dataset.zoomable = 'true'; img.tabIndex = 0; img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Enlarge ${img.alt || 'project screenshot'}`); img.setAttribute('aria-haspopup', 'dialog');
    });
  };
  const click = (event) => { if (event.target.matches('img[data-zoomable]')) open(event.target); };
  const key = (event) => { if (event.target.matches('img[data-zoomable]') && ['Enter', ' '].includes(event.key)) { event.preventDefault(); open(event.target); } };
  root.addEventListener('click', click); root.addEventListener('keydown', key); root.addEventListener('load', enhance, true);
  const mutation = new MutationObserver(enhance); mutation.observe(root, { childList: true, subtree: true }); enhance();
  return () => { mutation.disconnect(); root.removeEventListener('click', click); root.removeEventListener('keydown', key); root.removeEventListener('load', enhance, true); dialog.remove(); };
}
export function observeChapters(root) {
 const links = [...root.querySelectorAll('.mt-chapters a')];
 const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
  if (!visible) return;
  links.forEach(link => { if(link.hash === `#${visible.target.id}`) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
 }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
 links.forEach(link => { const section = document.getElementById(link.hash.slice(1)); if(section) observer.observe(section); });
 return () => observer.disconnect();
}

