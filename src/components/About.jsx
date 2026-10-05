import Image from './Image.jsx';
import React, { useEffect, useRef, useState } from 'react';

import aboutPortrait from '../assets/valentina-about-graduation.webp';

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
<div className="about-portrait"><Image src={aboutPortrait} alt="Valentina Molokwu in her graduation gown" className="about-photo" width={1200} height={1600} /></div>

        <div className="about-copy">
        <h2 className="about-heading">
          Hi, I&apos;m Valentina —{' '}
          <span className="about-heading-accent">
            A product designer with a software engineering background.
          </span>
        </h2>
      <div className="about-text">
        <p>
          I bring an engineering lens to product design: clear systems,
          thoughtful interactions, and an understanding of what can ship.
          I start with the person using the product and turn their needs
          into interfaces that work in practice.
        </p>
        <div className="about-outside">
          <h3>Outside work</h3>
          <p>
            I&apos;m building a small coloring book brand, with printed books
            designed to pull people off their screens for a while. It&apos;s
            where I practice product thinking with real customers, a real
            price, and real printing costs.
          </p>
          <p>
            I also train at home with weights and bands. I like anything
            where you set a goal, track it, and get a little better each week.
          </p>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default About;



