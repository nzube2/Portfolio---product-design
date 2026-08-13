import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import thermalWordmark from "../assets/thermal-wordmark.png";
import thermalMockup1 from "../assets/thermal-mockup-1.png";
import thermalMockup2 from "../assets/thermal-mockup-2.png";
import thermalMockup3 from "../assets/thermal-mockup-3.png";
import thermalQuoteMark from "../assets/thermal-quote-mark.svg";
import thermalMoodScreen from "../assets/thermal-mood-screen-design.png";
import thermalVector10 from "../assets/thermal-vector-10.svg";
import thermalSimilarMusic from "../assets/thermal-similar-music.png";
import thermalSimilarArtiste from "../assets/thermal-similar-artiste.png";
import thermalVector11 from "../assets/thermal-vector-11.svg";
import thermalWebApp1 from "../assets/thermal-web-app-1.png";
import thermalArtistePopularChoices from "../assets/thermal-artiste-popular-choices.png";
import thermalWaveform from "../assets/thermal-waveform.png";
import thermalResultScreen1 from "../assets/thermal-result-screen-1.png";
import thermalResultScreen2 from "../assets/thermal-result-screen-2.png";
import caseStudies from "../data/caseStudies";
import {
  WorkIcon,
  ToolsIcon,
  HourglassIcon,
  PersonIcon,
  TeamIcon,
} from "../components/MetaIcons";
import "./ThermalCaseStudy.css";

const MetaItem = ({ icon, className, label, value }) => (
  <div className={`thermal-meta-item ${className}`}>
    {icon}
    <div className="thermal-meta-text">
      <span className="thermal-meta-label">{label}</span>
      <span className="thermal-meta-value">{value}</span>
    </div>
  </div>
);

const ThermalCaseStudy = () => {
  const nextCaseStudy = caseStudies[2];
  const heroVideoRef = useRef(null);
  const illustrationVideoRef = useRef(null);

  // React applies `muted` as a property after the element is created, so the
  // muted *attribute* is absent when the browser evaluates its autoplay
  // policy — which blocks playback. Set it directly, then start the loop.
  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", "");
    // Browsers may still refuse (e.g. video-only media in a background tab);
    // it resumes on its own once the page is visible, so ignore the reject.
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  useEffect(() => {
    const v = illustrationVideoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("muted", "");
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  return (
    <div className="thermal-page">
      <div className="thermal-topbar">
        <div className="thermal-topbar-nav">
          <Link to="/case-studies/guidely" className="thermal-back">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12.5 5.5 8 10 3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Previous
          </Link>

          <Link to="/case-studies/portfolio" className="thermal-next">
            Next
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3.5 10.5 8 6 12.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <span className="thermal-id">CS-02</span>
      </div>

      <div className="thermal-body">
        {/* decorative glow — first in the DOM so every section paints over it */}
        <div className="thermal-gradient" aria-hidden="true">
          <span className="thermal-gradient-warm" />
          <span className="thermal-gradient-cool" />
        </div>

        <div className="thermal-gradient thermal-gradient-2" aria-hidden="true">
          <span className="thermal-gradient-warm" />
          <span className="thermal-gradient-cool" />
        </div>

        <div className="thermal-gradient thermal-gradient-3" aria-hidden="true">
          <span className="thermal-gradient-warm" />
          <span className="thermal-gradient-cool" />
        </div>

        <div className="thermal-gradient thermal-gradient-4" aria-hidden="true">
          <span className="thermal-gradient-warm" />
          <span className="thermal-gradient-cool" />
        </div>

        <div className="thermal-gradient thermal-gradient-5" aria-hidden="true">
          <span className="thermal-gradient-warm" />
          <span className="thermal-gradient-cool" />
        </div>

        <section className="thermal-hero">
          <div className="thermal-hero-card">
            <video
              ref={heroVideoRef}
              className="thermal-hero-card-img"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            >
              <source src="/videos/thermal-hero.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="thermal-hero-title">
            <span className="thermal-hero-eyebrow">UI/UX case study</span>
            <h1 className="thermal-hero-heading">
              Thermal — designing a music discovery experience built around
              feeling, not data
            </h1>
            <button type="button" className="thermal-hero-btn">
              Read Case Study
            </button>
          </div>
        </section>

        <div className="thermal-meta-card">
          <MetaItem
            icon={<WorkIcon className="thermal-meta-icon" />}
            className="thermal-meta-item-1"
            label="Project Type"
            value="Personal"
          />
          <MetaItem
            icon={<PersonIcon className="thermal-meta-icon" />}
            className="thermal-meta-item-2"
            label="My Role"
            value="concept, UX, visual design"
          />
          <MetaItem
            icon={
              <TeamIcon className="thermal-meta-icon thermal-meta-icon-team" />
            }
            className="thermal-meta-item-3"
            label="team"
            value="solo"
          />
          <MetaItem
            icon={<HourglassIcon className="thermal-meta-icon" />}
            className="thermal-meta-item-4"
            label="timeline"
            value="ongoing"
          />
          <MetaItem
            icon={<ToolsIcon className="thermal-meta-icon" />}
            className="thermal-meta-item-5"
            label="Tools"
            value="Figma, Adobe"
          />
        </div>

        <h2 className="thermal-question">
          What if you could find music by describing how you want to feel?
        </h2>

        <section className="thermal-problem">
          <h3 className="thermal-problem-title">./The Problem</h3>
          <div className="thermal-problem-body">
            <p>
              There was a time when shuffling your Spotify library or hitting
              Song Radio genuinely surprised you. You&apos;d find something
              you&apos;d never heard and wonder how you missed it. That
              doesn&apos;t really happen anymore.
            </p>
            <p>
              Spotify&apos;s recommendation engine has become a mirror. The more
              you use it, the more it reflects your existing taste back at you —
              the same artists, the same sounds, slightly reshuffled. Discovery
              has been replaced by confirmation. Finding genuinely new music now
              requires a special kind of patience and intentionality that most
              people don&apos;t have time for, and shouldn&apos;t have to
              develop just to enjoy music.
            </p>
            <p>
              The problem isn&apos;t that good music doesn&apos;t exist.
              It&apos;s that the tools built to surface it stopped being curious
              on your behalf.
            </p>
          </div>
        </section>

        <section className="thermal-concept">
          <h3 className="thermal-concept-title">./The Concept</h3>
          <p className="thermal-concept-body">
            Thermal began with a natural phenomenon I considered while growing
            up in Nigeria. There are places where hot and cold water meet in the
            same body of water but never fully mix (
            <a
              href="https://en.wikipedia.org/wiki/Ikogosi_Warm_Springs"
              target="_blank"
              rel="noopener noreferrer"
              className="thermal-link"
            >
              ikogosi warm springs
            </a>
            ). Two distinct energies coexist, each with its own character, and
            the boundary between them is alive and shifting.
          </p>
        </section>

        <img
          src={thermalWordmark}
          alt="Thermal"
          className="thermal-concept-wordmark"
          loading="lazy"
        />

        <div className="thermal-img-row">
          <img
            src={thermalMockup1}
            alt="Thermal landing page shown on a laptop"
            className="thermal-mockup-1"
            loading="lazy"
          />
          <img
            src={thermalMockup2}
            alt="Thermal landing page shown on a phone"
            className="thermal-mockup-2"
            loading="lazy"
          />
          <img
            src={thermalMockup3}
            alt="Thermal landing page"
            className="thermal-mockup-3"
            loading="lazy"
          />
        </div>

        <div className="thermal-concept-2">
          <div className="thermal-concept-2-card">
            <p className="thermal-concept-2-body">
              That&apos;s what music does to people. A song can make you feel
              energized and introspective at the same time. Different tracks
              bring out different emotions in you, not because they are
              opposites but because they exist on a spectrum. The feeling a song
              gives you isn&apos;t a genre. It isn&apos;t a BPM count. It&apos;s
              a temperature. That became the design principle:
            </p>

            <div className="thermal-quote">
              <img
                src={thermalQuoteMark}
                alt=""
                className="thermal-quote-mark thermal-quote-mark-open"
                aria-hidden="true"
                loading="lazy"
              />
              <p className="thermal-quote-text">
                what if you could find music by describing how you want to feel,
                not what you already know you like?
              </p>
              <img
                src={thermalQuoteMark}
                alt=""
                className="thermal-quote-mark thermal-quote-mark-close"
                aria-hidden="true"
                loading="lazy"
              />
            </div>
          </div>

          <video
            ref={illustrationVideoRef}
            className="thermal-wheel-group"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src="/videos/thermal-illustration.mp4" type="video/mp4" />
          </video>
        </div>

        <section className="thermal-who-for">
          <h3 className="thermal-who-for-title">./Who Thermal is for</h3>
          <p className="thermal-who-for-body">
            Thermal is for two types of people who are really the same person in
            different moods. The first is the music lover who craves a
            particular sound and wants more of it. They seek out more artists
            like their favorite, more songs with that energy, more of whatever
            that feeling is. They know what they want but can&apos;t always find
            it.
            <br />
            The second type is the person who opens Spotify, looks at their
            library, and closes the app without playing anything. They
            aren&apos;t sure what they want; they just know how they want to
            feel at that moment. They need a starting point that isn&apos;t
            &ldquo;here&apos;s what you listened to last Tuesday.&rdquo; Thermal
            supports both by asking a different first question. Instead of
            &ldquo;what do you like?&rdquo; it asks, &ldquo;what do you need
            right now?&rdquo;
          </p>
        </section>

        <section className="thermal-design-decisions">
          <h3 className="thermal-design-decisions-title">./Design Decisions</h3>

          <div className="thermal-decision-item">
            <h4 className="thermal-decision-title">
              01- The Temperature Slider
            </h4>
            <p className="thermal-decision-body">
              The main feature in Thermal is a slider that goes from hot to
              cold. Hot represents high energy, upbeat, and intense. Cold
              signifies mellow, introspective, and chill. The middle point—where
              the two meet without completely mixing—is warm.
            </p>
          </div>
        </section>

        <div className="thermal-mood-group">
          <div className="thermal-mood-screen">
            <img
              src={thermalMoodScreen}
              alt="Thermal mood screen — temperature slider and keyword filters"
              className="thermal-mood-screen-img"
              loading="lazy"
            />
          </div>

          <img
            src={thermalVector10}
            alt=""
            className="thermal-mood-vector"
            aria-hidden="true"
            loading="lazy"
          />

          <span className="thermal-mood-label thermal-mood-label-1">
            01 — sets energy level
          </span>
          <span className="thermal-mood-label thermal-mood-label-2">
            02 — sets emotional context
          </span>

          <p className="thermal-mood-caption">
            &ldquo;The temperature slider — energy level and emotional context
            in one interaction&rdquo;
          </p>
        </div>

        <section className="thermal-decision-detail">
          <div className="thermal-decision-detail-content">
            <p>
              This choice wasn&apos;t just visual. The slider appears on every
              screen in the app, no matter which discovery mode you select.
              Whether you&apos;re searching by similar artist, genre, mood, or
              reference song, the temperature slider is always with you. It
              continually asks, &ldquo;How do you want it to feel?&rdquo;
            </p>
          </div>
        </section>

        <section className="thermal-discovery-subsection">
          <img
            src={thermalSimilarMusic}
            alt="Thermal similar music discovery screen"
            className="thermal-discovery-screen thermal-discovery-music"
            loading="lazy"
          />
          <img
            src={thermalSimilarArtiste}
            alt="Thermal similar artiste discovery screen"
            className="thermal-discovery-screen thermal-discovery-artiste"
            loading="lazy"
          />
          <img
            src={thermalVector11}
            alt=""
            aria-hidden="true"
            className="thermal-discovery-connector"
            loading="lazy"
          />
          <p className="thermal-discovery-label">
            Similar Music + Similar Artiste side by side
          </p>
          <p className="thermal-discovery-caption">
            &ldquo;The slider appears on every screen — the temperature concept
            runs through the entire system&rdquo;
          </p>
        </section>

        <section className="thermal-decision-2">
          <div className="thermal-decision-item">
            <h4 className="thermal-decision-title">
              02 — Discovery modes as starting points, not features
            </h4>
            <p className="thermal-decision-body">
              Similar Music, Similar Artiste, Genre, Mood, and Shuffle are not
              the main focus. The temperature is the main feature. The modes are
              starting points, different ways for Thermal to have a reference.
              Each mode alters the input method, but the temperature slider and
              playlist logic remain the same. The mode tells Thermal where to
              search, while the temperature indicates how to feel.
            </p>
          </div>
        </section>

        <div className="thermal-webapp-group">
          <img
            src={thermalWebApp1}
            alt="Thermal mobile web app — genre selection sidebar"
            className="thermal-webapp-1"
            loading="lazy"
          />
          <p className="thermal-webapp-caption">
            &ldquo;Five access ports, one temperature. Every mode alters the
            input, not the concept&rdquo;
          </p>
        </div>

        <section className="thermal-decision-3">
          <div className="thermal-decision-item">
            <h4 className="thermal-decision-title">
              03 — Solving the blank input problem
            </h4>
            <p className="thermal-decision-body">
              Before a user has even started typing on the Similar Artist
              screen, a row of starting point suggestions shows up: Rihanna,
              Kendrick Lamar, Lana Del Ray, Bad Bunny, with an icon to shuffle
              through those suggestions. An empty search field places the entire
              burden on the user to know what they&apos;re looking for before
              they even get a chance to touch the product; The Popular Choices
              row offers a low-commitment way into the system. Those four
              artists offer distinctly different vibes (pop, hip hop, indie,
              latin), so no matter how broad your taste, something is bound to
              spark some inspiration.
            </p>
          </div>
        </section>

        <div className="thermal-artiste-group">
          <img
            src={thermalArtistePopularChoices}
            alt="Thermal artiste screen — Popular Choices suggestions"
            className="thermal-artiste-popular"
            loading="lazy"
          />
          <p className="thermal-artiste-caption">
            &ldquo;Popular Options-an easy first step in commitment which solves
            the blank input issue&rdquo;
          </p>
        </div>

        <section className="thermal-decision-4">
          <div className="thermal-decision-item">
            <h4 className="thermal-decision-title">
              04 — Making waiting meaningful
            </h4>
            <p className="thermal-decision-body">
              And in the space between your input and the results, Thermal
              displays an analysis state: a single waveform that shifts from
              warm orange at the left to cool teal at the right, with
              &ldquo;Analyzing reference music...&rdquo; below it. Many apps
              treat their loading states as dead space, but this is where the
              premise of Thermal becomes most apparent. The waveform visually
              displays the temperature of music -- hot and cold energy blending
              within a single sound wave -- explaining to you what the AI is
              doing in an accessible, if abstract, way.
            </p>
          </div>
        </section>

        <div className="thermal-waveform-group">
          <img
            src={thermalWaveform}
            alt="Thermal analysis waveform, shifting from warm orange to cool teal"
            className="thermal-waveform-img"
            loading="lazy"
          />
          <p className="thermal-waveform-caption">
            &ldquo;The analysis state — the temperature concept at its most
            literal&rdquo;
          </p>
        </div>

        <section className="thermal-decision-5">
          <div className="thermal-decision-item">
            <h4 className="thermal-decision-title">
              05 - Findings that beckon, not conclude
            </h4>
            <p className="thermal-decision-body">
              The results page kicks off with one line: &ldquo;30 Songs Curated
              set to cool mode.&rdquo; That line does the following three things
              at once: confirms the temp settings stuck; indicates how many
              results were produced; and positions the upcoming stream as
              deliberated rather than machine generated. Every result provides
              album artwork, playback controls (including two preview-play
              buttons), and both title and artist for the selection. Minus/Plus
              toggles offer both song exclusion, as well as the addition of more
              like music-in this, it&apos;s just a starting point.
            </p>
          </div>
        </section>

        <div className="thermal-results-group">
          <img
            src={thermalResultScreen1}
            alt="Thermal results screen — curated playlist set to cool mode"
            className="thermal-results-1"
            loading="lazy"
          />
          <img
            src={thermalResultScreen2}
            alt="Thermal results header — 30 songs curated set to cool mode"
            className="thermal-results-2"
            loading="lazy"
          />
          <p className="thermal-results-caption">
            &ldquo;Every detail speaks the same language — the text confirms the
            temperature, the scrollbar reflects it&rdquo;
          </p>
        </div>

        <section className="thermal-decision-6">
          <div className="thermal-decision-item">
            <h4 className="thermal-decision-title">
              06 — Temperature as a design system, not a feature
            </h4>
            <p className="thermal-decision-body">
              The temperature metaphor isn&apos;t a visual theme. It&apos;s the
              logic the entire product is built on, present in the brand, the
              core interaction, the microcopy, and the smallest UI details. That
              consistency was the most deliberate decision in the whole project.
            </p>
          </div>
        </section>

        <div className="thermal-closing-group">
          <img
            src={thermalResultScreen1}
            alt="Thermal results screen"
            className="thermal-closing-results"
            loading="lazy"
          />
          <img
            src={thermalMoodScreen}
            alt="Thermal mood screen"
            className="thermal-closing-mood"
            loading="lazy"
          />
          <img
            src={thermalMockup3}
            alt="Thermal landing page hero"
            className="thermal-closing-hero"
            loading="lazy"
          />
        </div>

        <section className="thermal-reflection">
          <h3 className="thermal-reflection-title">./Reflection</h3>
          <p className="thermal-reflection-body">
            The one thing, to be honest with you, that I&apos;ve since changed
            my mind about is the slider. We put that onto every individual
            screen at first. That made sense to me at the time because it put
            that temperature control visibly in front of people on every screen.
            But sitting with it, the one thing I thought was like oh, now
            we&apos;re making the user do the same interaction again, and again,
            and again, which is probably something that isn&apos;t optimal. And
            the new design I&apos;m heading to now is to set that one
            temperature one time in the header when you get to the product, and
            it sticks with you everywhere else. The idea remains the same,
            you&apos;re always within a temperature, but you&apos;re not having
            to reconfirm it, constantly touching that thing again. And
            that&apos;s really the only thing, outside of that, that I would
            necessarily change. The wireframing came before the polishing.
            It&apos;s exactly the order I&apos;d want to go into things in
            again, and the only place I&apos;d maybe spend more time would be on
            the small judgment calls under pressure, like does Genre get to
            exist in a product that&apos;s centered around a feeling and make
            those calls with people other than in my own head a bit sooner.
            Thermal is a personal project I&apos;m currently working on. The
            basic flow: landing page, input your discovery, tune your vibe, wait
            in analysis state, get results, are established. Next up I&apos;ll
            design the Library section for stored playlists, and polish the
            result state for the hot mode state.
          </p>
        </section>
      </div>

      <Link
        to={`/case-studies/${nextCaseStudy.slug}`}
        className="thermal-next-case"
      >
        <span className="thermal-next-label">See Next Case Study</span>
        <div className="thermal-next-card">
          <img
            src={nextCaseStudy.image}
            alt={`${nextCaseStudy.id} preview`}
            className="thermal-next-image"
            loading="lazy"
          />
          <span className="thermal-next-title">{nextCaseStudy.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default ThermalCaseStudy;
