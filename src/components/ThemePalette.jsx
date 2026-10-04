import React, { useState } from 'react';
const themes = [
 { id: 'rose', name: 'Rose' },
 { id: 'sage', name: 'Sage' },
 { id: 'lavender', name: 'Lavender' },
 { id: 'paper', name: 'Paper' },
];
export default function ThemePalette() {
 const [theme,setTheme] = useState(document.documentElement.dataset.theme || 'rose');
 const choose = (id) => { setTheme(id); document.documentElement.dataset.theme=id; try { localStorage.setItem('portfolio-theme',id); } catch {} };
 return <aside className="theme-palette" aria-label="Choose a color palette"><span>Pick a mood</span><div className="theme-swatches">{themes.map(item=><button key={item.id} className={`theme-swatch theme-swatch-${item.id}`} type="button" aria-label={`${item.name} color palette`} title={item.name} aria-pressed={theme===item.id} onClick={()=>choose(item.id)}><span aria-hidden="true">{theme===item.id ? '✓' : ''}</span></button>)}</div></aside>;
}
