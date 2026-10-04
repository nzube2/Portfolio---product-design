import React, { useEffect, useRef, useState } from 'react';


const HeadingBorder = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 91 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M90.5 0.5H10.5C4.97715 0.5 0.5 4.97715 0.5 10.5V53.5C0.5 59.0228 4.97715 63.5 10.5 63.5H90.5"
      stroke="currentColor"
    />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.667 3.333H3.333A1.333 1.333 0 0 0 2 4.667v8A1.333 1.333 0 0 0 3.333 14h8A1.333 1.333 0 0 0 12.667 12.667V9.333M9.333 2h4.667v4.667M14 2 7.333 8.667"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BriefcaseIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="6.5"
      width="16"
      height="10.5"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M6.5 6.5V5A1.5 1.5 0 0 1 8 3.5h4A1.5 1.5 0 0 1 13.5 5v1.5"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M2 11h16" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const PersonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="6.5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const Experience = () => {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`experience-section${isRevealed ? ' is-revealed' : ''}`}
      id="experience"
    >
      <div className="exp-heading-pill">
        <HeadingBorder className="exp-heading-pill-border" />
        <h2>./Experience</h2>
      </div>

      <div className="exp-card">
        <div className="exp-links-row">
          <a
            className="exp-github-link"
            href="https://github.com/nzube2/market-tracker.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="exp-github-icon" />
            <span>View code</span>
          </a>

          <a
            className="exp-prototype-link"
            href="https://www.loom.com/share/aeff9793ba7f423193972d26cb93a6cd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="exp-prototype-icon" />
            <span>Watch product demo</span>
          </a>
        </div>

        <h3 className="exp-title">Ifythel Lights &amp; Accessories.</h3>
        <p className="exp-dates">Jun 2023 – Oct 2025</p>

        <div className="exp-details-row">
          <div className="exp-details exp-details-1">
            <BriefcaseIcon className="exp-meta-icon" />
            <div className="exp-meta-text">
              <span className="exp-meta-label">Company type:</span>
              <span className="exp-meta-value">Small business</span>
            </div>
          </div>
          <div className="exp-details exp-details-3">
            <PersonIcon className="exp-meta-icon" />
            <div className="exp-meta-text">
              <span className="exp-meta-label">Position:</span>
              <span className="exp-meta-value">Product designer</span>
            </div>
          </div>
        </div>

        <span className="exp-what-label">Design & delivery</span>
        <ul className="exp-what-list">
          <li><h4>Business operations product</h4><p>Owned the design and implementation of MarketTrack, moving inventory, sales, and expense management from paper records into a working digital system.</p></li>
          <li><h4>From flows to a shipped interface</h4><p>Mapped user flows, created wireframes and high-fidelity UI, developed interactive prototypes, and translated design specifications into the product.</p></li>
          <li><h4>Testing & iteration</h4><p>Conducted usability testing and refined SKU search, manual inventory entry, and sales editing. The system is actively used in the business’s daily operations.</p></li>
          <li><h4>Company website & visual identity</h4><p>Led UX and interface design for the company landing page with a focus on SEO. Designed the company logo and supporting graphic design assets.</p></li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

