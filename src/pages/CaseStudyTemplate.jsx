import React, { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  WorkIcon,
  ToolsIcon,
  HourglassIcon,
  PersonIcon,
  TeamIcon,
} from '../components/MetaIcons';
import caseStudyContent from '../data/caseStudyContent';
import caseStudies from '../data/caseStudies';
import searchIcon from '../assets/markettrack-icon-search.svg';
import computerCheckIcon from '../assets/markettrack-icon-computer-check.svg';
import bubbleChatIcon from '../assets/markettrack-icon-bubble-chat.svg';
import problemIcon from '../assets/markettrack-icon-problem.svg';
import './PortfolioCaseStudy.css';

const META_ICONS = {
  work: WorkIcon,
  tools: ToolsIcon,
  hourglass: HourglassIcon,
  person: PersonIcon,
  team: TeamIcon,
};

// Recolored (#3B82F6) copies of Guidely's own section icons
// (guidely-icon-search/computer-check/bubble-chat.svg) — separate files so
// Guidely's originals (#75B946 green) stay untouched.
const SECTION_ICONS = {
  search: searchIcon,
  'computer-check': computerCheckIcon,
  chat: bubbleChatIcon,
  problem: problemIcon,
  // the MarketTrack brand mark itself, not a bundled asset — already
  // living in public/images/ as the homepage carousel card image
  mlogo: '/images/cs-00.png',
};

// Hero background video (sits inset within the hero section behind the
// eyebrow/heading/button, replacing the red gradient) with a dark scrim so
// the title stays legible over whatever's playing.
const HeroVideo = ({ src }) => {
  const videoRef = useRef(null);

  // React applies `muted` as a property after the element is created, so
  // the muted *attribute* is absent when the browser evaluates autoplay
  // policy — which blocks playback. Set it directly, then start the loop
  // (same fix used for Thermal's and MoreOfMyWorks' hero videos).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, []);

  return (
    <div className="portfolio-hero-video-wrap">
      <video
        ref={videoRef}
        className="portfolio-hero-video"
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="portfolio-hero-video-scrim" aria-hidden="true" />
    </div>
  );
};

const HeroCta = ({ href, children }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-hero-btn"
    >
      {children}
    </a>
  ) : (
    <button type="button" className="portfolio-hero-btn">
      {children}
    </button>
  );

const MetaItem = ({ icon, index, label, value }) => {
  const Icon = META_ICONS[icon];
  return (
    <div className={`portfolio-meta-item portfolio-meta-item-${index}`}>
      {Icon && (
        <Icon
          className={`portfolio-meta-icon${
            icon === 'team' ? ' portfolio-meta-icon-team' : ''
          }`}
        />
      )}
      <div className="portfolio-meta-text">
        <span className="portfolio-meta-label">{label}</span>
        <span className="portfolio-meta-value">{value}</span>
      </div>
    </div>
  );
};

const SectionMedia = ({ list, image, images, imagePlaceholder }) => (
  <>
    {list && list.length > 0 && (
      <ul className="portfolio-section-list">
        {list.map((item) => (
          <li key={item.slice(0, 40)}>{item}</li>
        ))}
      </ul>
    )}
    {images && images.length > 0 ? (
      <div className="portfolio-section-gallery">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="portfolio-section-gallery-image"
          />
        ))}
      </div>
    ) : image ? (
      <img src={image.src} alt={image.alt} className="portfolio-section-image" />
    ) : (
      imagePlaceholder && (
        <div className="portfolio-section-image-placeholder">
          <span>
            {typeof imagePlaceholder === 'string' ? imagePlaceholder : 'Image placeholder'}
          </span>
        </div>
      )
    )}
  </>
);

const Section = ({
  accent,
  title,
  subheading,
  body,
  list,
  image,
  images,
  imagePlaceholder,
  glass,
  narrow,
  icon,
  iconRounded,
  iconSize,
  subItem,
}) => {
  const paragraphs = Array.isArray(body) ? body : [body];
  const IconSrc = icon && SECTION_ICONS[icon];
  // Icon stays centered in the narrow card's ~473px side gap even when
  // iconSize overrides the default 120px — the CSS left/right offset was
  // only tuned for that default, so recentre explicitly here instead.
  const iconStyle =
    IconSrc && iconSize && narrow
      ? {
          width: iconSize,
          height: iconSize,
          [accent === 'left' ? 'left' : 'right']: `calc(100% + ${(473 - iconSize) / 2}px)`,
        }
      : IconSrc && iconSize
      ? { width: iconSize, height: iconSize }
      : undefined;
  return (
    <section
      className={`portfolio-section portfolio-section-accent-${accent}${
        glass ? ' portfolio-section-glass' : ''
      }${narrow ? ' portfolio-section-narrow' : ''}${
        subheading ? ' portfolio-section-subsection' : ''
      }`}
    >
      <span className="portfolio-section-line" aria-hidden="true" />
      {IconSrc && (
        <img
          src={IconSrc}
          alt=""
          aria-hidden="true"
          style={iconStyle}
          className={`portfolio-section-icon${
            iconRounded ? ' portfolio-section-icon-rounded' : ''
          }`}
        />
      )}
      <h3
        className={`portfolio-section-title${
          subheading ? ' portfolio-section-title-sub' : ''
        }`}
      >
        {title}
      </h3>
      <div className="portfolio-section-body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <SectionMedia list={list} image={image} images={images} imagePlaceholder={imagePlaceholder} />
      {subItem && (
        <div className="portfolio-subitem">
          <h4 className="portfolio-section-title portfolio-section-title-sub">
            {subItem.title}
          </h4>
          <div className="portfolio-section-body">
            {(Array.isArray(subItem.body) ? subItem.body : [subItem.body]).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <SectionMedia
            list={subItem.list}
            image={subItem.image}
            images={subItem.images}
            imagePlaceholder={subItem.imagePlaceholder}
          />
        </div>
      )}
    </section>
  );
};

const BackOrPrevIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 12.5 5.5 8 10 3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 3.5 10.5 8 6 12.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CaseStudyTemplate = () => {
  const { slug } = useParams();
  const data = caseStudyContent[slug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const { id, prevSlug, nextSlug, hero, meta, sections, bodyBg, glassCards } = data;
  const nextCaseStudy = caseStudies.find((cs) => cs.slug === nextSlug);

  return (
    <div className="portfolio-page">
      <div className="portfolio-topbar">
        <div className="portfolio-topbar-nav">
          {prevSlug ? (
            <Link to={`/case-studies/${prevSlug}`} className="portfolio-back">
              <BackOrPrevIcon />
              Previous
            </Link>
          ) : (
            <Link to="/#case-studies" className="portfolio-back">
              <BackOrPrevIcon />
              Back To Case Studies
            </Link>
          )}
          {nextSlug && (
            <Link to={`/case-studies/${nextSlug}`} className="portfolio-next">
              Next
              <NextIcon />
            </Link>
          )}
        </div>
        <span className="portfolio-id">{id}</span>
      </div>

      <div
        className="portfolio-body"
        style={bodyBg ? { '--case-bg': bodyBg } : undefined}
      >
        <section
          className={`portfolio-hero${hero.video ? ' portfolio-hero-has-video' : ''}`}
          style={hero.bg ? { '--hero-bg': hero.bg } : undefined}
        >
          {hero.video && <HeroVideo src={hero.video} />}
          {hero.video ? (
            <div className="portfolio-hero-title">
              <span className="portfolio-hero-eyebrow">{hero.eyebrow}</span>
              <h1 className="portfolio-hero-heading">{hero.heading}</h1>
              <HeroCta href={hero.ctaHref}>{hero.ctaLabel}</HeroCta>
            </div>
          ) : (
            <>
              <span className="portfolio-hero-eyebrow">{hero.eyebrow}</span>
              <h1 className="portfolio-hero-heading">{hero.heading}</h1>
              <HeroCta href={hero.ctaHref}>{hero.ctaLabel}</HeroCta>
              {hero.image && (
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className="portfolio-hero-image"
                />
              )}
            </>
          )}
        </section>

        <div className="portfolio-meta-card">
          {meta.map((item, index) => (
            <MetaItem
              key={item.label}
              icon={item.icon}
              index={index + 1}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        {sections.map((section) => (
          <Section
            key={section.title}
            accent={section.accent}
            title={section.title}
            subheading={section.subheading}
            body={section.body}
            list={section.list}
            image={section.image}
            images={section.images}
            imagePlaceholder={section.imagePlaceholder}
            glass={glassCards}
            narrow={section.narrow}
            icon={section.icon}
            iconRounded={section.iconRounded}
            iconSize={section.iconSize}
            subItem={section.subItem}
          />
        ))}
      </div>

      {nextCaseStudy && (
        <Link
          to={`/case-studies/${nextCaseStudy.slug}`}
          className="portfolio-next-case"
        >
          <span className="portfolio-next-label">See Next Case Study</span>
          <div className="portfolio-next-card">
            <img
              src={nextCaseStudy.image}
              alt={`${nextCaseStudy.id} preview`}
              className="portfolio-next-image"
              loading="lazy"
            />
            <span className="portfolio-next-title">{nextCaseStudy.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CaseStudyTemplate;
