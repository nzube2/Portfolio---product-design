import React from 'react';
import './MoreOfMyWorks.css';

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

const MoreOfMyWorks = () => {
  return (
    <section className="more-works-section" id="more-of-my-works">
      <div className="more-works-pill">
        <HeadingBorder className="more-works-pill-border" />
        <span>./More Of My Works</span>
        <ExternalLinkIcon className="more-works-icon" />
      </div>

      <div className="more-works-preview">
        <div className="more-works-preview-header">
          <span>PREVIEW</span>
          <ExternalLinkIcon className="more-works-preview-icon" />
        </div>
        <div className="more-works-preview-body">VIDEO GOES HERE</div>
      </div>
    </section>
  );
};

export default MoreOfMyWorks;
