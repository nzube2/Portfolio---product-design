import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import pinIcon from '../assets/pin-icon.svg';
import caseStudies from '../data/caseStudies';
import './CaseStudy.css';

const EXIT_DURATION = 350;
const ENTER_DURATION = 450;
const PIN_FLOURISH_DURATION = 450;
const PILL_REVEAL_DURATION = 500;

const CaseStudy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'exiting' | 'entering'
  const [pendingIndex, setPendingIndex] = useState(null);
  const [pinFlourish, setPinFlourish] = useState(false);

  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [framesRevealed, setFramesRevealed] = useState(false);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === caseStudies.length - 1;
  const current = caseStudies[activeIndex];

  const goTo = (index) => {
    if (phase !== 'idle' || index === activeIndex || index < 0) return;
    if (index >= caseStudies.length) return;
    setPendingIndex(index);
    setPhase('exiting');
  };

  const goPrev = () => {
    if (!isFirst) goTo(activeIndex - 1);
  };

  const goNext = () => {
    if (!isLast) goTo(activeIndex + 1);
  };

  const triggerPinFlourish = () => {
    setPinFlourish(true);
    setTimeout(() => setPinFlourish(false), PIN_FLOURISH_DURATION);
  };

  // Scroll reveal sequencing: heading pill reveals first, then once it
  // settles, the CS-01 frames slide in, then the pin flourish plays.
  // Replays every time the section scrolls into view, resetting when it
  // scrolls out so the sequence starts fresh again next time.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    let framesTimeoutId = null;
    let flourishTimeoutId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          framesTimeoutId = setTimeout(() => {
            setFramesRevealed(true);
            flourishTimeoutId = setTimeout(triggerPinFlourish, 700);
          }, PILL_REVEAL_DURATION);
        } else {
          if (framesTimeoutId) clearTimeout(framesTimeoutId);
          if (flourishTimeoutId) clearTimeout(flourishTimeoutId);
          setIsRevealed(false);
          setFramesRevealed(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (framesTimeoutId) clearTimeout(framesTimeoutId);
      if (flourishTimeoutId) clearTimeout(flourishTimeoutId);
    };
  }, []);

  // Carousel transition sequencing: exit -> swap content -> enter -> flourish
  useEffect(() => {
    if (phase === 'exiting') {
      const t = setTimeout(() => {
        setActiveIndex(pendingIndex);
        setPhase('entering');
      }, EXIT_DURATION);
      return () => clearTimeout(t);
    }
    if (phase === 'entering') {
      const t = setTimeout(() => {
        setPhase('idle');
        triggerPinFlourish();
      }, ENTER_DURATION);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase, pendingIndex]);

  return (
    <section
      ref={sectionRef}
      className={`case-studies-section${isRevealed ? ' is-revealed' : ''}${
        framesRevealed ? ' frames-revealed' : ''
      }`}
      id="case-studies"
    >
      <div className="cs-heading-pill">
        <svg
          className="cs-heading-pill-border"
          viewBox="0 0 91 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.5 0.5H10.5C4.97715 0.5 0.5 4.97715 0.5 10.5V53.5C0.5 59.0228 4.97715 63.5 10.5 63.5H90.5"
            stroke="#F3EEE8"
          />
        </svg>
        <span>./Case Studies</span>
      </div>

      <div className="cs-card">
        <div className="cs-body">
          <div className={`cs-image-col cs-frame-right cs-phase-${phase}`}>
            <img
              src={pinIcon}
              alt=""
              className={`cs-pin-icon${pinFlourish ? ' cs-pin-flourish' : ''}`}
            />

            <div className="cs-image-frame">
              <span className="cs-badge-text">{current.id}</span>
              <div className="cs-image-placeholder">
                {current.image ? (
                  <img
                    src={current.image}
                    alt={`${current.id} preview`}
                    className="cs-image"
                  />
                ) : (
                  <span>Case study image placeholder</span>
                )}
              </div>
            </div>
          </div>

          <div className={`cs-text-card cs-frame-left cs-phase-${phase}`}>
            <div className="cs-pagination">
              <span className="cs-pagination-label">See next</span>
              <button
                className="cs-arrow cs-arrow-prev"
                aria-label="Previous case study"
                onClick={goPrev}
                disabled={isFirst || phase !== 'idle'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="cs-arrow cs-arrow-next"
                aria-label="Next case study"
                onClick={goNext}
                disabled={isLast || phase !== 'idle'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="cs-text-header">
              <Link
                to={`/case-studies/${current.slug}`}
                className="cs-read-more"
              >
                Read more
                <svg
                  className="cs-read-more-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <h3 className="cs-title">{current.title}</h3>

            <div className="cs-text-block">
              <span className="cs-label">Brief</span>
              <p>{current.brief}</p>
            </div>

            <div className="cs-text-block">
              <span className="cs-label">What I Did</span>
              <p>{current.whatIDid}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-dots">
        {caseStudies.map((cs, i) => (
          <button
            key={cs.id}
            className={`cs-dot${i === activeIndex ? ' cs-dot-active' : ''}`}
            aria-label={`Go to case study ${cs.id}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
