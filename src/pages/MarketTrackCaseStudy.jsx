import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import caseStudyContent from '../data/caseStudyContent';
import caseStudies from '../data/caseStudies';
import { observeReveals } from '../behaviors/scroll-reveal';
import './MarketTrackCaseStudy.css';

const data = caseStudyContent.markettrack;
const nextProject = caseStudies.find((project) => project.slug === data.nextSlug);
const storySections = data.sections.filter((section) => !section.subheading).map((section) => ({
  ...section,
  pages: section.subItem ? [section.subItem, ...data.sections.filter((item) => item.subheading)] : [],
}));
const sectionId = (title) => title.replace(/^\.\//, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
const Paragraphs = ({ body }) => (Array.isArray(body) ? body : [body]).filter(Boolean).map((text) => <p key={text}>{text}</p>);
const Media = ({ image, images }) => (images || (image ? [image] : [])).map((item) => (
  <figure className="mt-screen" key={item.src}>
    <Image src={item.src} alt={item.alt} />
    <figcaption>{item.alt}</figcaption>
  </figure>
));

export default function MarketTrackCaseStudy() {
  const root = useRef(null);
  useEffect(() => observeReveals(root.current), []);
  return (
    <article className="mt-page" ref={root}>
      <div className="mt-container">
        <nav className="mt-topnav" aria-label="Case study navigation">
          <Link to="/#case-studies">← Back to case studies</Link>
          <span>{data.id} / Client project</span>
          <Link to="/case-studies/guidely" className="portfolio-next">Next project →</Link>
        </nav>
        <header className="mt-hero">
          <div className="mt-intro">
            <p className="mt-label">./MarketTrack / Product design & development</p>
            <h1>From paper records to a clearer picture of the business.</h1>
            <p className="mt-lead">An inventory, sales, and expense tracking system built for Ifythel Lights &amp; Accessories, a small electrical business.</p>
            <div className="mt-actions">
              <a className="btn-primary" href={data.hero.ctaHref} target="_blank" rel="noopener noreferrer">Watch Loom demo ↗</a>
              <a className="btn-secondary" href="#problem">Explore the case study ↓</a>
            </div>
          </div>
          <figure className="mt-hero-screen">
            <Image src="/images/markettrack-dashboard.webp" alt="MarketTrack dashboard showing revenue, expenses, profit and stock alerts" loading="eager" />
            <figcaption>One view of inventory, sales, expenses, and profit.</figcaption>
          </figure>
        </header>
        <dl className="mt-meta" aria-label="Project details">
          {data.meta.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </dl>
        <aside className="mt-outcome" id="project-overview" data-reveal>
          <p className="mt-label">./Shipped outcome</p>
          <h2>Built for a real store. In active use.</h2>
          <p>MarketTrack replaced a fully paper-based system with digital records, giving the business visibility into inventory, sales, and expenses.</p>
          <span className="mt-note">Internal business tool · Not publicly accessible</span>
        </aside>
        <nav className="mt-chapters" aria-label="On this page">
          {storySections.map((section) => <a href={`#${sectionId(section.title)}`} key={section.title}>{section.title.replace('./', '')}</a>)}
        </nav>
        <div className="mt-story">
          {storySections.map((section, index) => (
            <section className="mt-section" id={sectionId(section.title)} key={section.title}>
              <div className="mt-section-heading" data-reveal>
                <span className="mt-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title.startsWith('./') ? section.title : `./${section.title}`}</h2>
              </div>
              <div className="mt-section-content">
                <div className="mt-prose" data-reveal><Paragraphs body={section.body} /></div>
                {section.list && <ul className="mt-iterations">{section.list.map((item, i) => <li key={item} data-reveal><span aria-hidden="true">0{i + 1}</span><p>{item}</p></li>)}</ul>}
                <Media image={section.image} images={section.images} />
                {section.pages.map((page) => <div className="mt-subsection" key={page.title} id={sectionId(page.title)}><h3>{page.title}</h3><div className="mt-prose"><Paragraphs body={page.body} /></div><Media image={page.image} images={page.images} />{page.evidence && <aside className="mt-evidence"><h4>Evidence & verification</h4><p>{page.evidence}</p></aside>}</div>)}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-demo" data-reveal>
          <div><p className="mt-label">./Product walkthrough</p><h2>See the system in motion.</h2></div>
          <video src={data.hero.video} controls playsInline preload="none" poster="/images/markettrack-dashboard.webp" aria-label="MarketTrack product preview" />
        </section>
        <Link className="mt-next" to={`/case-studies/${nextProject.slug}`}>
          <span className="mt-next-label">See next case study</span>
          <div className="mt-next-card">
            <Image src={nextProject.image} alt="Guidely case study preview" className="mt-next-image" />
            <span className="mt-next-title">{nextProject.title}</span>
          </div>
        </Link>
      </div>
    </article>
  );
}
