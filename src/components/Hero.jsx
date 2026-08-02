import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Hero Body */}
      <div className="hero-body">
        {/* Videos Container */}
        <div className="videos-container">
          {/* Video 1 */}
          <div className="video-wrapper video-1">
            <video
              className="video-element"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Video 2 */}
          <div className="video-wrapper video-2">
            <video
              className="video-element"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Video 3 */}
          <div className="video-wrapper video-3">
            <video
              className="video-element"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video3.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Button Component Image */}
          <div className="button-component-wrapper">
            <img
              src="/images/button-component.png"
              alt="Button component"
              className="button-component-image"
            />
          </div>
        </div>

        {/* Display Text */}
        <div className="display-text-wrapper">
          <h1 className="display-text">
            I Design In Systems, Not Just Pixels – Product Designs That Feel
            Personal.
          </h1>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#case-studies" className="btn-primary">
              View Case Studies
            </a>
            <button className="btn-secondary">View Resume</button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#case-studies" className="scroll-indicator" aria-label="Scroll down">
          <span className="scroll-indicator-label">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7L10 13L16 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
