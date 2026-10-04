import React from "react";
import { RESUME_URL } from "../data/links";
const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-body">
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
  </section>
);
export default Hero;
