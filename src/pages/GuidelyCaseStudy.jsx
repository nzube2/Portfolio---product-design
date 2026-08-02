import React from 'react';
import { Link } from 'react-router-dom';
import guidelyLogo from '../assets/guidely-logo-transparent.svg';
import dashedArrow from '../assets/dashed-arrow-transparent.svg';
import section1Illustration from '../assets/guidely-section1-illustration.svg';
import section2MockupImg from '../assets/guidely-section2-mockup.png';
import typographyChartImg from '../assets/guidely-typography-chart.svg';
import './GuidelyCaseStudy.css';

const WorkIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"
      fill="currentColor"
    />
    <path
      d="M9 6V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M3 13h19" stroke="#fff" strokeWidth="1.2" />
  </svg>
);

const ToolsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 3.5a4 4 0 0 0-4.9 4.9L3 17l4 4 8.6-8.6a4 4 0 0 0 4.9-4.9l-2.9 2.9-2-2 2.9-2.9Z"
      fill="currentColor"
    />
  </svg>
);

const HourglassIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 3.5h13M6 21.5h13M7 3.5v3.8c0 1.6 1 3.1 2.5 3.9l2.5 1.3 2.5-1.3c1.5-.8 2.5-2.3 2.5-3.9V3.5M7 21.5v-3.8c0-1.6 1-3.1 2.5-3.9l2.5-1.3 2.5 1.3c1.5.8 2.5 2.3 2.5 3.9v3.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PersonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12.5" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 21c0-4.1 3.8-7.5 8.5-7.5S21 16.9 21 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TeamIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="8" r="3.4" fill="currentColor" />
    <circle cx="19" cy="8" r="3.4" fill="currentColor" />
    <path
      d="M2 22c0-3.8 3.1-6.4 7-6.4s7 2.6 7 6.4M12 22c0-3.8 3.1-6.4 7-6.4s7 2.6 7 6.4"
      fill="currentColor"
    />
  </svg>
);

const QuoteMarkIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 47 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 22.5C0 12.5 6.5 4.5 17 0l3 6C13 9 8.5 13.5 7.5 19.5c1-1 2.5-1.5 4.5-1.5 5 0 8.5 3.5 8.5 8.5S16.5 35 11.5 35C4.5 35 0 30 0 22.5Z"
      fill="#274193"
    />
    <path
      d="M25 22.5C25 12.5 31.5 4.5 42 0l3 6C38 9 33.5 13.5 32.5 19.5c1-1 2.5-1.5 4.5-1.5 5 0 8.5 3.5 8.5 8.5S41.5 35 36.5 35C29.5 35 25 30 25 22.5Z"
      fill="#274193"
    />
  </svg>
);

const VectorPlaceholder = ({ className }) => (
  <span className={`guidely-vector-placeholder ${className || ''}`} />
);

const ResearchCard = ({ number, icon, title, body, className }) => (
  <div className={`guidely-research-card-group ${className}`}>
    <span className="guidely-research-number">{number}</span>
    <div className="guidely-research-card">
      {icon}
      <h3 className="guidely-research-card-title">{title}</h3>
      <p className="guidely-research-card-body">{body}</p>
    </div>
  </div>
);

const ColorSwatch = ({ className, segments, name, hex }) => (
  <div className={`guidely-swatch ${className}`}>
    <div className="guidely-swatch-bar">
      {segments.map((color, i) => (
        <span
          key={color}
          className={`guidely-swatch-segment guidely-swatch-segment-${i}`}
          style={{ background: color }}
        />
      ))}
    </div>
    <div className="guidely-swatch-title">
      <span className="guidely-swatch-name">{name}</span>
      <span className="guidely-swatch-hex">{hex}</span>
    </div>
  </div>
);

const MetaItem = ({ icon, className, label, value, valueCentered }) => (
  <div className={`guidely-meta-item ${className}`}>
    {icon}
    <div className="guidely-meta-text">
      <span className="guidely-meta-label">{label}</span>
      <span
        className={`guidely-meta-value${valueCentered ? ' guidely-meta-value-centered' : ''}`}
      >
        {value}
      </span>
    </div>
  </div>
);

const GuidelyCaseStudy = () => {
  return (
    <div className="guidely-page">
      <div className="guidely-topbar">
        <Link to="/#case-studies" className="guidely-back">
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
          Back To Case Studies
        </Link>
        <span className="guidely-id">CS-01</span>
      </div>

      <div className="guidely-body">
        <section className="guidely-hero">
          <img
            src={guidelyLogo}
            alt="Guidely"
            className="guidely-hero-logo"
          />

          <div className="guidely-hero-title">
            <span className="guidely-hero-eyebrow">UI/UX case study</span>
            <h1 className="guidely-hero-heading">
              A campus companion for Nile University students; Mobile
              design &amp; development.
            </h1>
            <button type="button" className="guidely-hero-btn">
              Read Case Study
            </button>
          </div>

          <img
            src={dashedArrow}
            alt=""
            className="guidely-hero-arrow"
            aria-hidden="true"
          />
        </section>

        <div className="guidely-meta-card">
          <MetaItem
            icon={<WorkIcon className="guidely-meta-icon" />}
            className="guidely-meta-item-1"
            label="Project Type"
            value="Academic"
          />
          <MetaItem
            icon={<ToolsIcon className="guidely-meta-icon" />}
            className="guidely-meta-item-2"
            label="Tools"
            value="Figma, React Native, Firebase"
          />
          <MetaItem
            icon={<HourglassIcon className="guidely-meta-icon" />}
            className="guidely-meta-item-3"
            label="Timeline"
            value="Nov 2024- April 2025"
          />
          <MetaItem
            icon={<PersonIcon className="guidely-meta-icon" />}
            className="guidely-meta-item-4"
            label="Role"
            value="UI/UX Designer/ Front-end Dev"
          />
          <MetaItem
            icon={<TeamIcon className="guidely-meta-icon guidely-meta-icon-team" />}
            className="guidely-meta-item-5"
            label="Team"
            value="5 Members"
            valueCentered
          />
        </div>

        <div className="guidely-content">
          <section className="guidely-section-1">
            <div className="guidely-section-1-text">
              <h2 className="guidely-section-1-title">./The Problem</h2>
              <p className="guidely-section-1-body">
                Nile University&apos;s official portal does one thing well:
                academics. Grades, course registration, timetables. What it
                can&apos;t do is tell you there&apos;s a drama festival
                tonight, help a first-year find the Student Centre, or show
                you which clubs are even worth joining. The result was a
                fractured student experience. Events lived on notice boards
                and WhatsApp groups. Clubs had no real presence. New students
                spent weeks feeling lost and disconnected, not because they
                weren&apos;t interested in campus life, but because there was
                no single place to look.
              </p>
            </div>

            <img
              src={section1Illustration}
              alt=""
              className="guidely-section-1-image"
              aria-hidden="true"
            />
          </section>

          <section className="guidely-section-2">
            <img
              src={section2MockupImg}
              alt="Guidely app splash screen on an iPhone mockup"
              className="guidely-section-2-mockup"
            />

            <div className="guidely-section-2-text">
              <h2 className="guidely-section-2-title">
                ./Reframing The Problem
              </h2>
              <p className="guidely-section-2-body-1">
                The brief started broad: improve non-academic student life.
                The easy move would&apos;ve been to design a super-app with
                social feeds, messaging, peer networking. We didn&apos;t.
                After reviewing 40 comparable university apps and systems, we
                found a consistent pattern: apps that tried to do everything
                ended up doing nothing particularly well. Students
                weren&apos;t disengaged because they lacked features. They
                were disengaged because the information was scattered. Our
                reframe: This is a centralisation problem, not a features
                problem. The question became:
              </p>

              <div className="guidely-quote-block">
                <QuoteMarkIcon className="guidely-quote-mark guidely-quote-mark-open" />
                <p className="guidely-quote-text">
                  How might we bring campus events, clubs, and orientation
                  into one place, without building another social media
                  distraction?
                </p>
                <QuoteMarkIcon className="guidely-quote-mark guidely-quote-mark-close" />
              </div>

              <p className="guidely-section-2-body-2">
                We narrowed down the scope. Real-time GPS navigation, peer
                messaging, and social feeds were all ruled out. Not because
                they&apos;re bad ideas, but because they weren&apos;t the
                job.
              </p>
            </div>
          </section>

          <section className="guidely-section-3">
            <h2 className="guidely-section-3-title">./Research</h2>

            <ResearchCard
              number="01"
              className="guidely-research-1"
              icon={<VectorPlaceholder className="guidely-research-icon" />}
              title="GPS navigation creates more problems than it solves"
              body="Systems like UUM Navigate relied on continuous location tracking, which drained battery and broke down indoors. We replaced real-time navigation with a static campus map, simpler, faster, and genuinely usable day-to-day."
            />

            <ResearchCard
              number="02"
              className="guidely-research-2"
              icon={<VectorPlaceholder className="guidely-research-icon" />}
              title="Event platforms fail without personalisation"
              body="Existing systems like CEMS centralised events but showed everyone the same feed. Students still didn't know which events were relevant to them. This pushed interest-based filtering to the top of our feature list."
            />

            <ResearchCard
              number="03"
              className="guidely-research-3"
              icon={<VectorPlaceholder className="guidely-research-icon" />}
              title="Students need information to come to them"
              body="A usability study on the UniKL Link app found high task completion but low return visits because notifications were weak. Bookmarking and push notifications became non-negotiables."
            />

            <ResearchCard
              number="04"
              className="guidely-research-4"
              icon={<VectorPlaceholder className="guidely-research-icon" />}
              title="Cross-platform wasn't optional"
              body="Several comparable apps were Android-only, immediately excluding part of their own campus. React Native with Expo let us build once for both iOS and Android."
            />
          </section>

          <section className="guidely-section-3-2">
            <h2 className="guidely-section-3-2-title">./Design Decisions</h2>

            <span className="guidely-branding-label">Branding - 01</span>
            <p className="guidely-branding-body">
              Colors: We used Nile University&apos;s official colors, green
              and blue, as the base of the visual system. This choice was
              deliberate: students already link those colors to the
              institution. Using that palette made Guidely feel like it was
              part of Nile University instead of a separate tool added to
              it. Secondary Colors : Used mainly for text, active and
              inactive modes.
            </p>

            <p className="guidely-typography-body">
              Typography: Guidely&apos;s type system uses Kumbh Sans. This
              typeface was chosen for its rounded, approachable letterforms,
              making it suitable for a student-facing app. Inter is used
              carefully within form elements, such as input fields and
              primary buttons because of its neutral, highly legible
              letterforms.
            </p>

            <div className="guidely-swatch-group">
              <ColorSwatch
                className="guidely-swatch-blue"
                segments={['#274193', '#5065A7', '#7989BA', '#A3ADCE', '#CCD1E1']}
                name="Dark Blue"
                hex="#274193"
              />
              <ColorSwatch
                className="guidely-swatch-green"
                segments={['#75B946', '#8FC569', '#A8D18C', '#C2DDAF', '#DBE9D2']}
                name="Lemon Green"
                hex="#75B946"
              />
              <ColorSwatch
                className="guidely-swatch-grey"
                segments={['#A6A4A4', '#B6B4B4', '#C6C4C4', '#D5D4D4', '#E5E5E5']}
                name="Grey"
                hex="#A6A4A4"
              />
              <ColorSwatch
                className="guidely-swatch-black"
                segments={['#000000', '#313131', '#626262', '#939393', '#C4C4C4']}
                name="Black"
                hex="#000000"
              />
            </div>

            <img
              src={typographyChartImg}
              alt="Typography scale showing Kumbh Sans and Inter at 32, 24, 20, 16, 14, and 11px, in Semi Bold, Medium, and Regular weights"
              className="guidely-type-chart-img"
            />
          </section>

          <section className="guidely-section-3-3">
            <h2 className="guidely-section-3-3-title">Personalization - 02</h2>

            <p className="guidely-personalization-body-1">
              The home screen displays the student&apos;s name and the
              current date. This small detail was a deliberate choice. Most
              campus apps act like notice boards, sharing the same
              information with everyone. We wanted Guidely to feel like it
              was made just for the person using the phone. Showing a name
              and the date was an easy way to communicate that this app
              knows who you are and it is here for you today.
            </p>

            <p className="guidely-personalization-body-2">
              The interest-based recommendation engine was driven by the
              same philosophy. During onboarding, students choose their
              areas of interest.
            </p>

            <p className="guidely-personalization-body-3">
              Instead of a flat chronological dump, the event feed
              organizes material into three sections: Featured, Clubs You
              Follow, and Recommended For You. A student who chose
              &quot;tech&quot; and &quot;arts&quot; should not have to sift
              through sporting events to identify what is important to
              them.
            </p>

            <div className="guidely-personalization-frame guidely-placeholder">
              <span>Screenshot placeholder</span>
            </div>

            <div className="guidely-personalization-mockup guidely-personalization-mockup-1 guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>
            <div className="guidely-personalization-mockup guidely-personalization-mockup-2 guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>
            <div className="guidely-personalization-mockup guidely-personalization-mockup-3 guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>

            <div className="guidely-personalization-arrow-2" />
            <div className="guidely-personalization-arrow-1" />

            <div className="guidely-personalization-frame-2 guidely-placeholder">
              <span>Screenshot placeholder</span>
            </div>
          </section>

          <section className="guidely-section-3-4">
            <h2 className="guidely-section-3-4-title">
              Guest vs Student Access - 03
            </h2>

            <p className="guidely-access-body">
              We designed two different access levels. Guests, including
              visitors, prospective students, and parents, can browse
              events, explore clubs, access the campus map, and take the
              virtual tour without needing an account. However, when a
              guest tries to use an interactive feature, like bookmarking
              an event, following a club, or setting a reminder, they see
              a screen that explains what they&apos;re missing. This
              screen offers them a choice: sign in as a student or go
              back. They&apos;re not blocked without an explanation;
              they&apos;re invited. This distinction was important
              because the people most likely to explore Guidely without a
              student ID are also the ones who might be deciding whether
              to attend Nile University. Blocking them at the door would
              have created a negative first impression.
            </p>

            <div className="guidely-access-mockup guidely-access-mockup-1 guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>
            <div className="guidely-access-mockup guidely-access-mockup-2 guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>
          </section>

          <section className="guidely-section-3-5">
            <h2 className="guidely-section-3-5-title">
              The Virtual Tour - 04
            </h2>

            <div className="guidely-tour-mockup guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>

            <p className="guidely-tour-body-1">
              The virtual tour caters to those unable to physically attend,
              dividing the campus into four sections: School Blocks,
              Student Center, Hostels, and Outdoor View, each showcased
              through photo slideshows. Research into augmented reality and
              3D models revealed high resource demands and prolonged
              production times, leading to a decision to modify the scope
              due to timing constraints.
            </p>

            <p className="guidely-tour-body-2">
              The slideshow was that call, and it was the correct one.
              Because the people who most benefit from this feature are
              not current students navigating campus. They&apos;re
              prospective students who can&apos;t afford to travel out for
              an open day, or first-years who want to get a feel for the
              campus before arriving. For that purpose, high-quality
              photographs in a tidy slideshow outperform a sluggish 3D
              model.
            </p>

            <div className="guidely-tour-card guidely-tour-card-1 guidely-placeholder">
              <span>Virtual tour screen placeholder</span>
            </div>
            <div className="guidely-tour-card guidely-tour-card-2 guidely-placeholder">
              <span>Virtual tour screen placeholder</span>
            </div>
          </section>

          <section className="guidely-section-3-6">
            <h2 className="guidely-section-3-6-title">
              The Four-Card Home Screen - 05
            </h2>

            <p className="guidely-fourcard-body">
              We chose to design the homescreen as a 2x2 grid of large
              image cards: Discover Events, Discover Clubs, Campus Map,
              and Virtual Tour. Each card is backed by a descriptive
              photos. The first wireframes in our design process had a
              bottom nav bar, but during review we realised that an
              icon-based navigation assumes the student already knows how
              the app works, while cards present the content before
              they&apos;ve even tapped. This means a brand new user knows
              &quot;Discover Clubs&quot; shows actual busy campus events
              just from looking at it.
            </p>

            <div className="guidely-fourcard-mockup guidely-placeholder">
              <span>Phone screen placeholder</span>
            </div>

            <div className="guidely-fourcard-vector" />
          </section>

          <section className="guidely-section-3-7">
            <h2 className="guidely-section-3-7-title">
              Events Auto Expire - 06
            </h2>

            <p className="guidely-expire-body">
              Events are removed from the main feed once their dates have
              passed. They do not completely vanish; instead, they are
              moved to a Past Events section on each club&apos;s profile
              page. Two reasons. First, displaying expired events clutters
              the feed and irritates students who click on something only
              to discover it has already occurred. Second, past
              occurrences demonstrate that clubs are still active. A club
              with a visible history of events is more credible to a
              student contemplating whether to join it than one that looks
              to be empty.
            </p>

            <div className="guidely-expire-form guidely-placeholder">
              <span>Form UI placeholder</span>
            </div>
          </section>

          <section className="guidely-section-4">
            <h2 className="guidely-section-4-title">./Scope Management</h2>

            <p className="guidely-section-4-body">
              We made strategic compromises throughout the project, not
              due to a lack of desire, but due to good time management.
              The most notable item we deleted was interactive campus
              navigation with real-time GPS. It would have been the most
              technically difficult thing to develop correctly, and a
              poor construction would have harmed the rest of the
              program. The virtual tour was our solution to that gap,
              achieving the same essential purpose (helping students
              grasp the campus) without the technical overhead. Knowing
              what to cut and why was as important as any other design
              decision we made.
            </p>

            <div className="guidely-section-4-icon guidely-vector-placeholder" />
          </section>

          <section className="guidely-section-5">
            <h2 className="guidely-section-5-title">./Testing</h2>

            <p className="guidely-section-5-body">
              We executed 17 functional test cases across all main user
              flows, including login, guest access, interest selection,
              event bookmarking, club following, organiser event
              production, and notification delivery, and they all passed.
              Beyond functionality, we evaluated usability, responsiveness
              across device sizes, and security measures such as login and
              role-based access. No big concerns arose. One thing we
              discovered late was that the event creation form lacked a
              category selection, preventing newly created events from
              feeding into the recommendation engine. Fixed before to
              submission.
            </p>

            <div className="guidely-section-5-icon guidely-vector-placeholder" />
          </section>

          <section className="guidely-section-6">
            <h2 className="guidely-section-6-title">./Outcome</h2>

            <p className="guidely-section-6-body">
              Guidely was submitted and approved as our final year project
              at Nile University&apos;s Faculty of Computing in June 2025,
              signed off by our supervisor and external examiner. All 17
              test cases passed. Students who tested the app during
              development were able to complete every major task: finding
              events, following clubs, exploring the virtual tour,
              receiving notifications, without instruction. The honest
              summary from our own conclusion:
            </p>

            <div className="guidely-quote-block guidely-quote-block-2">
              <QuoteMarkIcon className="guidely-quote-mark guidely-quote-mark-open" />
              <p className="guidely-quote-text">
                The project might not have everything we first imagined,
                but what we did build already makes a real difference.
              </p>
              <QuoteMarkIcon className="guidely-quote-mark guidely-quote-mark-close" />
            </div>

            <div className="guidely-section-6-icon guidely-vector-placeholder" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default GuidelyCaseStudy;
