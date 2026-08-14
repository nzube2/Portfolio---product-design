import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const HeadingBorder = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 91 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M90.5 0.5H10.5C4.97715 0.5 0.5 4.97715 0.5 10.5V53.5C0.5 59.0228 4.97715 63.5 10.5 63.5H90.5"
      stroke="#F3EEE8"
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
        <span>./Experience</span>
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
            <span>github</span>
          </a>

          <a
            className="exp-prototype-link"
            href="https://drive.google.com/file/d/1qgtVUWVNqUcXz8MuevcxUSI0_kER0uHx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="exp-prototype-icon" />
            <span>prototype</span>
          </a>
        </div>

        <h3 className="exp-title">Ifythel Lights &amp; Accessories.</h3>
        <p className="exp-dates">Jun 2023 - Sept 2024</p>

        <div className="exp-details-row">
          <div className="exp-details exp-details-1">
            <BriefcaseIcon className="exp-meta-icon" />
            <div className="exp-meta-text">
              <span className="exp-meta-label">Compant Type:</span>
              <span className="exp-meta-value">Small Business</span>
            </div>
          </div>
          <div className="exp-details exp-details-3">
            <PersonIcon className="exp-meta-icon" />
            <div className="exp-meta-text">
              <span className="exp-meta-label">Position:</span>
              <span className="exp-meta-value">Intern</span>
            </div>
          </div>
        </div>

        <span className="exp-what-label">What I Did</span>
        <ul className="exp-what-list">
          <li>
            ・ Contributed to the company&apos;s digital rebranding,
            designing user journeys and performing interface prototyping.
          </li>
          <li>
            ・ Designed and implemented a market tracking system, for
            inventory, sales(showed best selling products ) and expenses
            across various timelines.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
