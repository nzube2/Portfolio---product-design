import React from "react";
import { RESUME_URL } from "../data/links";
import portrait from "../assets/valentina-portrait-torn.webp";
const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-body">
      <div className="hero-copy">
        <p className="hero-eyebrow">Valentina Molokwu / Product designer</p>
        <h1 id="hero-title" className="display-text">
          I design in systems,
          <br />
          <span>not just pixels.</span>
        </h1>
        <p className="hero-subhead">
          Product designer with an engineering foundation, creating scalable
          digital experiences from Port Harcourt, Nigeria—open to remote.
        </p>
        <div className="cta-buttons">
          <a href="#case-studies" className="btn-primary">
            View case studies <span aria-hidden="true">↗</span>
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <img
          src={portrait}
          alt="Valentina Molokwu, product designer"
          width="776"
          height="1064"
          loading="eager"
          decoding="async"
        />
        <figcaption className="hero-stamp">
          <span className="hero-stamp-check" aria-hidden="true">
            ✓
          </span>
          <span>
            Tested &amp;
            <br />
            trusted
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
);
export default Hero;
