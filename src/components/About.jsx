import Image from './Image.jsx';
import React, { useEffect, useRef, useState } from 'react';

import aboutPortrait from '../assets/valentina-about.webp';

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

const About = () => {
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
      className={`about-section${isRevealed ? ' is-revealed' : ''}`}
      id="about"
    >
      <div className="about-heading-pill">
        <HeadingBorder className="about-heading-pill-border" />
        <span>./About</span>
      </div>

      <div className="about-top-row">
        <Image
          src={aboutPortrait}
          alt="Valentina Molokwu, product designer"
          className="about-portrait"
          width={591}
          height={683}
        />

        <div className="about-copy">
        <h2 className="about-heading">
          Hi, I&apos;m Valentina —{' '}
          <span className="about-heading-accent">
            A product designer with a software engineering background.
          </span>
        </h2>
      <div className="about-text">
        <p>
          My engineering foundation taught me to think in systems before
          screens: components, states, and the relationships between them.
          The same logic that makes good code makes good design. I design
          for scale with an understanding of what is feasible to ship.
        </p>
        <p>
          The technical lens is only half of it. I care about the person
          using the product: what they need, how the experience works,
          and how it makes them feel. That is why I value product thinking
          as much as the interface itself.
        </p>
      </div>
        </div>
      </div>
    </section>
  );
};

export default About;

