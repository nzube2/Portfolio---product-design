import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import caseStudyContent from '../data/caseStudyContent';
import { observeReveals } from '../behaviors/scroll-reveal';
import './MarketTrackCaseStudy.css';
const data = caseStudyContent.portfolio;
export default function PortfolioStory() {
 const root=useRef(null);
 useEffect(()=>observeReveals(root.current),[]);
 return <article className="mt-page portfolio-story" ref={root}><div className="mt-container">
  <nav className="mt-topnav" aria-label="Case study navigation"><Link to="/#case-studies">← Back to work</Link><span>CS-04 / Personal portfolio</span><Link to="/case-studies/thermal">← Previous project</Link></nav>
  <header className="ps-hero"><p className="mt-label">{data.hero.eyebrow}</p><h1>{data.hero.heading}</h1><p className="mt-lead">A working product that introduces my craft, makes the work easy to explore, and gives the reader a clear next step.</p><a href="#portfolio-decisions" className="btn-secondary">Explore the decisions ↓</a></header>
  <dl className="mt-meta">{data.meta.map(item=><div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
  <aside className="mt-outcome" data-reveal><p className="mt-label">./The design direction</p><h2>Clear work. Personal presence. Consistent details.</h2><p>The refinement connects the first impression to the full reading experience, from the hero portrait to the final contact link.</p><div className="ps-palette" aria-label="Portfolio palette"><span>Warm dark</span><span>Off-white</span><span>Muted rose / #B89595</span></div></aside>
  <div id="portfolio-decisions">{data.sections.map((section,index)=><section className="mt-section" key={section.title}><div className="mt-section-heading" data-reveal><span className="mt-number">0{index+1}</span><h2>{section.title}</h2></div><div className="mt-section-content mt-prose" data-reveal><p>{section.body}</p></div></section>)}</div>
  <div className="ps-end"><p className="mt-label">./See the decisions in practice</p><Link to="/" className="btn-primary">Explore the portfolio ↗</Link><Link to="/#contact" className="btn-secondary">Get in touch ↗</Link></div>
 </div></article>;
}
