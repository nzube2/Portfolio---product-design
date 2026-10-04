import React, { useState } from 'react';
const themes = [
 { id: 'rose', name: 'Rose' },
 { id: 'sage', name: 'Sage' },
 { id: 'lavender', name: 'Lavender' },
 { id: 'paper', name: 'Paper' },
];
export default function ThemePalette() {
 const [expanded, setExpanded] = useState(false);
 const [theme,setTheme] = useState(document.documentElement.dataset.theme || 'rose');
 const choose = (id) => { setTheme(id); setExpanded(false); document.documentElement.dataset.theme=id; try { localStorage.setItem('portfolio-theme',id); } catch {} };
 return <aside className="theme-palette" aria-label="Choose a color palette"><button className="theme-palette-toggle" type="button" aria-label="Choose color palette" aria-expanded={expanded} aria-controls="theme-options" onClick={()=>setExpanded(!expanded)}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.5 1.5 0 0 1 .8-2.8H17a4 4 0 0 0 4-4C21 6.4 17 3 12 3Z"/><circle cx="7" cy="10" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/></svg></button><div id="theme-options" className="theme-swatches" hidden={!expanded}>{themes.map(item=><button key={item.id} className={`theme-swatch theme-swatch-${item.id}`} type="button" aria-label={`${item.name} color palette`} title={item.name} aria-pressed={theme===item.id} onClick={()=>choose(item.id)}><span aria-hidden="true">{theme===item.id ? '✓' : ''}</span></button>)}</div></aside>;
}

