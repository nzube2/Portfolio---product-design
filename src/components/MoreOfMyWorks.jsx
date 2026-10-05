import React, { useEffect, useRef, useState } from 'react';


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

const useRevealOnScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { node.classList.add('more-works-revealed'); observer.unobserve(node); }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const MoreOfMyWorks = () => {
  const pillRef = useRevealOnScroll();
  const videoWrapRef = useRevealOnScroll();
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const seeMoreRef = useRef(null);
  const hasPlayedRef = useRef(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
  }, []);

  // The video and audio should only start once the reveal animation has
  // actually finished, not the instant the section scrolls into view.
  // Timed to the .6s duration of .more-works-reveal rather than a
  // transitionend listener, since that duration is skipped entirely under
  // prefers-reduced-motion and transitionend would then never fire.
  useEffect(() => {
    const wrap = videoWrapRef.current;
    const v = videoRef.current;
    const a = audioRef.current;
    if (!wrap || !v) return undefined;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayedRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        hasPlayedRef.current = true;
        observer.disconnect();
        timeoutId = setTimeout(() => {
          const playVideo = v.play();
          if (playVideo && typeof playVideo.catch === 'function') playVideo.catch(() => {});

        }, 600);
      },
      { threshold: 0.15 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [videoWrapRef]);

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
    <section className="more-works-section" id="more-of-my-works">
      <div className="more-works-pill more-works-reveal" ref={pillRef}>
        <HeadingBorder className="more-works-pill-border" />
        <span>./More of my works (preview)</span>
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

      <div className="more-works-media">
        <div
          className="more-works-video-wrap more-works-reveal"
          ref={videoWrapRef}

        >
          <video
            ref={videoRef}
            className="more-works-video"
            src="/videos/more-works-preview.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            controls
            poster="/images/more-works-poster.webp"
            aria-label="More of my work video preview"
          />

          <a
            href="https://dribbble.com/nzube-molokwu"
            target="_blank"
            rel="noopener noreferrer"
            className="more-works-see-more"
            ref={seeMoreRef}
          >
            Explore Dribbble projects
          </a>
        </div>

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





