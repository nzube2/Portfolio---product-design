import React, { useEffect, useRef, useState } from 'react';
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

const SpeakerOnIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 7.5h3.333L10 4.167v11.666L5.833 12.5H2.5v-5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.75 7.083a3.75 3.75 0 0 1 0 5.834M16.25 4.583a7.5 7.5 0 0 1 0 10.834"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpeakerOffIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 7.5h3.333L10 4.167v11.666L5.833 12.5H2.5v-5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.333 8.333 3.334 3.334M16.667 8.333l-3.334 3.334"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoreOfMyWorks = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const v = videoRef.current;
    if (!section || !v) return;

    v.muted = true;
    v.setAttribute('muted', '');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playVideo = v.play();
          if (playVideo && typeof playVideo.catch === 'function') playVideo.catch(() => {});
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (audioEnabled) {
      a.pause();
      setAudioEnabled(false);
    } else {
      const playAudio = a.play();
      if (playAudio && typeof playAudio.catch === 'function') playAudio.catch(() => {});
      setAudioEnabled(true);
    }
  };

  return (
    <section className="more-works-section" id="more-of-my-works" ref={sectionRef}>
      <div className="more-works-pill">
        <HeadingBorder className="more-works-pill-border" />
        <span>./More of My Works(Preview)</span>
        <a
          href="https://dribbble.com/nzube-molokwu"
          target="_blank"
          rel="noopener noreferrer"
          className="more-works-icon-link"
          aria-label="View more work on Dribbble"
        >
          <ExternalLinkIcon className="more-works-icon" />
        </a>
      </div>

      <div className="more-works-video-wrap">
        <video
          ref={videoRef}
          className="more-works-video"
          src="/videos/more-works-preview.mp4"
          muted
          loop
          playsInline
        />
        <audio ref={audioRef} src="/audio/more-works-preview.m4a" loop />
        <button
          type="button"
          className="more-works-mute-btn"
          onClick={toggleAudio}
          aria-label={audioEnabled ? 'Mute audio' : 'Unmute audio'}
          aria-pressed={!audioEnabled}
        >
          {audioEnabled ? (
            <SpeakerOnIcon className="more-works-mute-icon" />
          ) : (
            <SpeakerOffIcon className="more-works-mute-icon" />
          )}
        </button>
      </div>
    </section>
  );
};

export default MoreOfMyWorks;
