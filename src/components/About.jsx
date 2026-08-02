import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import aboutIllustration from '../assets/about-illustration.svg';

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
        <img
          src={aboutIllustration}
          alt=""
          className="about-illustration"
          aria-hidden="true"
        />

        <h2 className="about-heading">
          Hi, I&apos;m Valentina —{' '}
          <span className="about-heading-accent">
            A Product Designer With A Software Engineering Background.
          </span>
        </h2>
      </div>

      <div className="about-text">
        <p>
          My foundation taught me to think in systems before I think in
          screens - components, states, the relationships between parts etc.
          the same logic that makes good code makes good design. It&apos;s
          why my work isn&apos;t judged on visuals alone; it&apos;s built to
          scale, with a real understanding of what&apos;s actually feasible
          to ship.
        </p>
        <p>
          But the technical lens is only half of it . I care just as much
          about the person on the other side of the screen, and what they
          need, the experience and how it makes them feel, hence why i value
          the journey of product thinking as much as the design itself and
          this is widely represented throughout my works.
        </p>
      </div>
    </section>
  );
};

export default About;
