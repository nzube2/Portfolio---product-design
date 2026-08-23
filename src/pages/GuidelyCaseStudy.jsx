import React from "react";
import { Link } from "react-router-dom";
import guidelyLogo from "../assets/guidely-logo-transparent.png";
import dashedArrow from "../assets/dashed-arrow-transparent.png";
import section1Illustration from "../assets/guidely-section1-illustration.svg";
import section2MockupImg from "../assets/guidely-section2-mockup.png";
import typographyChartImg from "../assets/guidely-typography-chart.svg";
import wireframesGalleryImg from "../assets/guidely-wireframes-gallery.svg";
import quoteBlockImg from "../assets/guidely-quote-block.svg";
import homeWelcomeImg from "../assets/guidely-home-welcome.png";
import mockup1Img from "../assets/guidely-mockup-1.png";
import interestsSelectionImg from "../assets/guidely-interests-selection.png";
import eventFeedImg from "../assets/guidely-event-feed.png";
import recommendedFeedImg from "../assets/guidely-recommended-feed.png";
import personalizationArrow2 from "../assets/guidely-arrow-2.svg";
import personalizationArrow1 from "../assets/guidely-arrow-1.svg";
import arrowFeatured from "../assets/guidely-arrow-featured.svg";
import arrowClubs from "../assets/guidely-arrow-clubs.svg";
import arrowRecommended from "../assets/guidely-arrow-recommended.svg";
import guestChoiceImg from "../assets/guidely-guest-choice.png";
import accessLockedImg from "../assets/guidely-access-locked.png";
import tourGuideImg from "../assets/guidely-tour-guide.png";
import tourCard1Img from "../assets/guidely-tour-card-1.png";
import tourCard2Img from "../assets/guidely-tour-card-2.png";
import fourcardMockupImg from "../assets/guidely-fourcard-mockup.png";
import fourcardVectorImg from "../assets/guidely-fourcard-vector.svg";
import eventFormImg from "../assets/guidely-event-form.png";
import iconSearchImg from "../assets/guidely-icon-search.svg";
import iconComputerCheckImg from "../assets/guidely-icon-computer-check.svg";
import iconBubbleChatImg from "../assets/guidely-icon-bubble-chat.svg";
import quoteMarkImg from "../assets/guidely-quote-mark.svg";
import caseStudies from "../data/caseStudies";
import {
  WorkIcon,
  ToolsIcon,
  HourglassIcon,
  PersonIcon,
  TeamIcon,
} from "../components/MetaIcons";
import "./GuidelyCaseStudy.css";

const GpsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 15H26.9538C26.7167 12.4401 25.5919 10.0438 23.7741 8.22592C21.9562 6.40808 19.5599 5.28325 17 5.04625V2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2V5.04625C12.4401 5.28325 10.0438 6.40808 8.22592 8.22592C6.40808 10.0438 5.28325 12.4401 5.04625 15H2C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17H5.04625C5.28325 19.5599 6.40808 21.9562 8.22592 23.7741C10.0438 25.5919 12.4401 26.7167 15 26.9538V30C15 30.2652 15.1054 30.5196 15.2929 30.7071C15.4804 30.8946 15.7348 31 16 31C16.2652 31 16.5196 30.8946 16.7071 30.7071C16.8946 30.5196 17 30.2652 17 30V26.9538C19.5599 26.7167 21.9562 25.5919 23.7741 23.7741C25.5919 21.9562 26.7167 19.5599 26.9538 17H30C30.2652 17 30.5196 16.8946 30.7071 16.7071C30.8946 16.5196 31 16.2652 31 16C31 15.7348 30.8946 15.4804 30.7071 15.2929C30.5196 15.1054 30.2652 15 30 15ZM16 25C14.22 25 12.4799 24.4722 10.9999 23.4832C9.51982 22.4943 8.36627 21.0887 7.68508 19.4442C7.0039 17.7996 6.82567 15.99 7.17293 14.2442C7.5202 12.4984 8.37737 10.8947 9.63604 9.63604C10.8947 8.37737 12.4984 7.5202 14.2442 7.17293C15.99 6.82567 17.7996 7.0039 19.4442 7.68508C21.0887 8.36627 22.4943 9.51982 23.4832 10.9999C24.4722 12.4799 25 14.22 25 16C24.9974 18.3861 24.0483 20.6738 22.361 22.361C20.6738 24.0483 18.3861 24.9974 16 25Z"
      fill="#75B946"
    />
  </svg>
);

const MegaphoneIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2401 7.81117V14.9088L22.4001 18.2256V4.49437L10.2401 7.81117ZM8.64014 14.9088C8.64007 15.2599 8.75547 15.6012 8.96857 15.8802C9.18166 16.1593 9.48061 16.3604 9.81934 16.4528L21.9793 19.7696C22.2168 19.8343 22.4661 19.8434 22.7077 19.7961C22.9492 19.7488 23.1766 19.6463 23.3722 19.4968C23.5677 19.3472 23.7261 19.1546 23.835 18.9338C23.9439 18.7131 24.0004 18.4701 24.0001 18.224V4.49437C24.0002 4.24834 23.9435 4.00561 23.8345 3.78505C23.7255 3.56449 23.567 3.37204 23.3715 3.22267C23.176 3.0733 22.9487 2.97102 22.7073 2.9238C22.4658 2.87657 22.2167 2.88566 21.9793 2.95037L9.81934 6.26717C9.48061 6.3595 9.18166 6.56069 8.96857 6.83971C8.75547 7.11872 8.64007 7.46008 8.64014 7.81117V14.9088Z"
      fill="#75B946"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.52964 14.8797H8.80004V7.83975H5.52484C4.69718 8.8262 4.24392 10.0729 4.2448 11.3606C4.24568 12.6483 4.70064 13.8944 5.52964 14.8797ZM8.80004 16.4797C9.22439 16.4797 9.63135 16.3112 9.93141 16.0111C10.2315 15.7111 10.4 15.3041 10.4 14.8797V7.83975C10.4 7.4154 10.2315 7.00843 9.93141 6.70838C9.63135 6.40832 9.22439 6.23975 8.80004 6.23975H5.20484C5.08505 6.23964 4.9665 6.264 4.85645 6.31132C4.7464 6.35864 4.64717 6.42793 4.56484 6.51495C2.00164 9.22055 2.01284 13.4797 4.56164 16.1981C4.64493 16.2866 4.74532 16.3571 4.85671 16.4055C4.96811 16.4539 5.08818 16.4792 5.20964 16.4797H8.80004Z"
      fill="#75B946"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6305 17.3918L7.61446 16.9438L6.04966 23.1998H10.2673L11.6305 17.3918ZM7.79046 15.355C7.40579 15.312 7.01855 15.4099 6.70052 15.6305C6.38249 15.8512 6.15524 16.1796 6.06087 16.555L4.49767 22.811C4.43857 23.0469 4.43403 23.2932 4.48439 23.5312C4.53476 23.7691 4.6387 23.9924 4.78833 24.1842C4.93796 24.3759 5.12932 24.531 5.34789 24.6377C5.56645 24.7444 5.80646 24.7998 6.04966 24.7998H10.2673C10.6283 24.7999 10.9787 24.678 11.2617 24.4537C11.5446 24.2295 11.7434 23.9161 11.8257 23.5646L13.1889 17.7566C13.2407 17.5362 13.2452 17.3072 13.202 17.0849C13.1588 16.8626 13.0689 16.652 12.9382 16.467C12.8075 16.282 12.6391 16.1269 12.444 16.0119C12.2489 15.8969 12.0316 15.8246 11.8065 15.7998L7.79046 15.355ZM29.7857 5.15662C29.9031 5.33317 29.9457 5.54914 29.904 5.75705C29.8623 5.96496 29.7397 6.14781 29.5633 6.26542L27.1633 7.86542C27.076 7.92733 26.9771 7.97109 26.8726 7.9941C26.7681 8.01712 26.66 8.01893 26.5547 7.99942C26.4495 7.97991 26.3492 7.93949 26.2599 7.88053C26.1706 7.82158 26.094 7.7453 26.0347 7.65621C25.9753 7.56712 25.9345 7.46704 25.9145 7.36188C25.8946 7.25672 25.896 7.14863 25.9186 7.04401C25.9411 6.93939 25.9845 6.84036 26.046 6.75279C26.1076 6.66523 26.1861 6.5909 26.2769 6.53422L28.6769 4.93422C28.8534 4.81677 29.0694 4.77422 29.2773 4.81592C29.4852 4.85762 29.6681 4.98017 29.7857 5.15662ZM25.9201 11.3598C25.9201 11.1476 26.0044 10.9442 26.1544 10.7941C26.3044 10.6441 26.5079 10.5598 26.7201 10.5598H29.1201C29.3322 10.5598 29.5357 10.6441 29.6858 10.7941C29.8358 10.9442 29.9201 11.1476 29.9201 11.3598C29.9201 11.572 29.8358 11.7755 29.6858 11.9255C29.5357 12.0755 29.3322 12.1598 29.1201 12.1598H26.7201C26.5079 12.1598 26.3044 12.0755 26.1544 11.9255C26.0044 11.7755 25.9201 11.572 25.9201 11.3598ZM26.1073 14.9278C26.175 14.8474 26.2579 14.7811 26.3513 14.7327C26.4446 14.6844 26.5466 14.6549 26.6514 14.646C26.7561 14.6371 26.8616 14.6489 26.9618 14.6808C27.062 14.7127 27.1549 14.764 27.2353 14.8318L29.4433 16.6862C29.5969 16.8252 29.6906 17.0183 29.7047 17.2249C29.7188 17.4316 29.6522 17.6357 29.519 17.7942C29.3857 17.9528 29.1961 18.0535 28.9901 18.0751C28.7841 18.0967 28.5778 18.0376 28.4145 17.9102L26.2065 16.0542C26.044 15.9179 25.9424 15.7228 25.9238 15.5115C25.9052 15.3003 25.9712 15.0904 26.1073 14.9278Z"
      fill="#75B946"
    />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.3334 5.33317H22.6667V3.99984C22.6667 3.64622 22.5263 3.30708 22.2762 3.05703C22.0262 2.80698 21.687 2.6665 21.3334 2.6665C20.9798 2.6665 20.6407 2.80698 20.3906 3.05703C20.1406 3.30708 20.0001 3.64622 20.0001 3.99984V5.33317H12.0001V3.99984C12.0001 3.64622 11.8596 3.30708 11.6096 3.05703C11.3595 2.80698 11.0204 2.6665 10.6667 2.6665C10.3131 2.6665 9.97399 2.80698 9.72394 3.05703C9.47389 3.30708 9.33341 3.64622 9.33341 3.99984V5.33317H6.66675C5.60588 5.33317 4.58847 5.7546 3.83832 6.50474C3.08818 7.25489 2.66675 8.2723 2.66675 9.33317V25.3332C2.66675 26.394 3.08818 27.4115 3.83832 28.1616C4.58847 28.9117 5.60588 29.3332 6.66675 29.3332H25.3334C26.3943 29.3332 27.4117 28.9117 28.1618 28.1616C28.912 27.4115 29.3334 26.394 29.3334 25.3332V9.33317C29.3334 8.2723 28.912 7.25489 28.1618 6.50474C27.4117 5.7546 26.3943 5.33317 25.3334 5.33317ZM26.6667 25.3332C26.6667 25.6868 26.5263 26.0259 26.2762 26.276C26.0262 26.526 25.687 26.6665 25.3334 26.6665H6.66675C6.31313 26.6665 5.97399 26.526 5.72394 26.276C5.47389 26.0259 5.33341 25.6868 5.33341 25.3332V15.9998H26.6667V25.3332ZM26.6667 13.3332H5.33341V9.33317C5.33341 8.97955 5.47389 8.64041 5.72394 8.39036C5.97399 8.14031 6.31313 7.99984 6.66675 7.99984H9.33341V9.33317C9.33341 9.68679 9.47389 10.0259 9.72394 10.276C9.97399 10.526 10.3131 10.6665 10.6667 10.6665C11.0204 10.6665 11.3595 10.526 11.6096 10.276C11.8596 10.0259 12.0001 9.68679 12.0001 9.33317V7.99984H20.0001V9.33317C20.0001 9.68679 20.1406 10.0259 20.3906 10.276C20.6407 10.526 20.9798 10.6665 21.3334 10.6665C21.687 10.6665 22.0262 10.526 22.2762 10.276C22.5263 10.0259 22.6667 9.68679 22.6667 9.33317V7.99984H25.3334C25.687 7.99984 26.0262 8.14031 26.2762 8.39036C26.5263 8.64041 26.6667 8.97955 26.6667 9.33317V13.3332Z"
      fill="#75B946"
    />
  </svg>
);

const MoveDownIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.01338 14.2935C3.92313 15.9078 4.42439 17.4996 5.42329 18.7709C6.42219 20.0423 7.85023 20.9059 9.44004 21.2002L8.38671 20.1468C8.26327 20.0234 8.16535 19.8768 8.09854 19.7156C8.03174 19.5543 7.99735 19.3814 7.99735 19.2068C7.99735 18.8543 8.13741 18.5161 8.38671 18.2668C8.63601 18.0175 8.97414 17.8775 9.32671 17.8775C9.67928 17.8775 10.0174 18.0175 10.2667 18.2668L13.72 21.7202C14.24 22.2402 14.24 23.0802 13.72 23.6002L10.28 27.0668C10.1566 27.1903 10.0101 27.2882 9.84877 27.355C9.68748 27.4218 9.51462 27.4562 9.34004 27.4562C9.16547 27.4562 8.99261 27.4218 8.83132 27.355C8.67004 27.2882 8.52349 27.1903 8.40004 27.0668C8.2766 26.9434 8.17868 26.7968 8.11188 26.6356C8.04507 26.4743 8.01068 26.3014 8.01068 26.1268C8.01068 25.9523 8.04507 25.7794 8.11188 25.6181C8.17868 25.4568 8.2766 25.3103 8.40004 25.1868L9.57338 24.0135V23.9335C7.18649 23.6499 5.00126 22.4557 3.47348 20.6C1.94571 18.7443 1.19336 16.3704 1.37338 13.9735C1.72004 9.04016 6.06671 5.3335 11.0134 5.3335H13.3334C14.0667 5.3335 14.6667 5.9335 14.6667 6.66683C14.6667 7.40016 14.0667 8.00016 13.3334 8.00016H10.96C7.36004 8.00016 4.20004 10.7202 4.01338 14.2935ZM20 14.6668H26.6667C28.1334 14.6668 29.3334 13.4668 29.3334 12.0002V8.00016C29.3334 6.5335 28.1334 5.3335 26.6667 5.3335H20C18.5334 5.3335 17.3334 6.5335 17.3334 8.00016V12.0002C17.3334 13.4668 18.5334 14.6668 20 14.6668ZM26.6667 12.0002H20V8.00016H26.6667V12.0002ZM26.6667 26.6668H20C18.5334 26.6668 17.3334 25.4668 17.3334 24.0002V20.0002C17.3334 18.5335 18.5334 17.3335 20 17.3335H26.6667C28.1334 17.3335 29.3334 18.5335 29.3334 20.0002V24.0002C29.3334 25.4668 28.1334 26.6668 26.6667 26.6668Z"
      fill="#75B946"
    />
  </svg>
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

const ReflectionCard = ({ number, title, body, className }) => (
  <div className={`guidely-reflection-card-group ${className}`}>
    <span className="guidely-reflection-number">{number}</span>
    <div className="guidely-reflection-card">
      <h3 className="guidely-reflection-card-title">{title}</h3>
      <p className="guidely-reflection-card-body">{body}</p>
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
        className={`guidely-meta-value${valueCentered ? " guidely-meta-value-centered" : ""}`}
      >
        {value}
      </span>
    </div>
  </div>
);

const GuidelyCaseStudy = () => {
  const nextCaseStudy = caseStudies.find((cs) => cs.slug === 'thermal');

  return (
    <div className="guidely-page">
      <div className="guidely-topbar">
        <div className="guidely-topbar-nav">
          <Link to="/case-studies/markettrack" className="guidely-back">
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

          <Link to="/case-studies/thermal" className="guidely-next">
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
        <span className="guidely-id">CS-02</span>
      </div>

      <div className="guidely-body">
        <section className="guidely-hero">
          <img src={guidelyLogo} alt="Guidely" className="guidely-hero-logo" />

          <div className="guidely-hero-title">
            <span className="guidely-hero-eyebrow">UI/UX case study</span>
            <h1 className="guidely-hero-heading">
              A campus companion for Nile University students; Mobile design
              &amp; development.
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
            icon={
              <TeamIcon className="guidely-meta-icon guidely-meta-icon-team" />
            }
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
                can&apos;t do is tell you there&apos;s a drama festival tonight,
                help a first-year find the Student Centre, or show you which
                clubs are even worth joining. The result was a fractured student
                experience. Events lived on notice boards and WhatsApp groups.
                Clubs had no real presence. New students spent weeks feeling
                lost and disconnected, not because they weren&apos;t interested
                in campus life, but because there was no single place to look.
              </p>
            </div>

            <img
              src={section1Illustration}
              alt=""
              className="guidely-section-1-image"
              aria-hidden="true"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-2">
            <img
              src={section2MockupImg}
              alt="Guidely app splash screen on an iPhone mockup"
              className="guidely-section-2-mockup"
              loading="lazy"
            />

            <div className="guidely-section-2-text">
              <h2 className="guidely-section-2-title">
                ./Reframing The Problem
              </h2>
              <p className="guidely-section-2-body-1">
                The brief started broad: improve non-academic student life. The
                easy move would&apos;ve been to design a super-app with social
                feeds, messaging, peer networking. We didn&apos;t. After
                reviewing 40 comparable university apps and systems, we found a
                consistent pattern: apps that tried to do everything ended up
                doing nothing particularly well. Students weren&apos;t
                disengaged because they lacked features. They were disengaged
                because the information was scattered.
                <br />
                Our reframe:{" "}
                <span className="guidely-reframe-highlight">
                  This is a centralisation problem, not a features problem.
                </span>
                <br />
                The question became:
              </p>

              <div className="guidely-quote-block">
                <img
                  src={quoteBlockImg}
                  alt="How might we bring campus events, clubs, and orientation into one place, without building another social media distraction?"
                  className="guidely-quote-block-bg"
                  loading="lazy"
                />
              </div>

              <p className="guidely-section-2-body-2">
                We narrowed down the scope. Real-time GPS navigation, peer
                messaging, and social feeds were all ruled out. Not because
                they&apos;re bad ideas, but because they weren&apos;t the job.
              </p>
            </div>
          </section>

          <section className="guidely-section-3">
            <h2 className="guidely-section-3-title">./Research</h2>

            <ResearchCard
              number="01"
              className="guidely-research-1"
              icon={<GpsIcon className="guidely-research-icon" />}
              title="GPS navigation creates more problems than it solves"
              body="Systems like UUM Navigate relied on continuous location tracking, which drained battery and broke down indoors. We replaced real-time navigation with a static campus map, simpler, faster, and genuinely usable day-to-day."
            />

            <ResearchCard
              number="02"
              className="guidely-research-2"
              icon={<CalendarIcon className="guidely-research-icon" />}
              title="Event platforms fail without personalisation"
              body="Existing systems like CEMS centralised events but showed everyone the same feed. Students still didn't know which events were relevant to them. This pushed interest-based filtering to the top of our feature list."
            />

            <ResearchCard
              number="03"
              className="guidely-research-3"
              icon={<MegaphoneIcon className="guidely-research-icon" />}
              title="Students need information to come to them"
              body="A usability study on the UniKL Link app found high task completion but low return visits because notifications were weak. Bookmarking and push notifications became non-negotiables."
            />

            <ResearchCard
              number="04"
              className="guidely-research-4"
              icon={<MoveDownIcon className="guidely-research-icon" />}
              title="Cross-platform wasn't optional"
              body="Several comparable apps were Android-only, immediately excluding part of their own campus. React Native with Expo let us build once for both iOS and Android."
            />
          </section>

          <section className="guidely-section-3-2">
            <h2 className="guidely-section-3-2-title">./Design Decisions</h2>

            <span className="guidely-branding-label">Branding - 01</span>
            <p className="guidely-branding-body">
              Colors: We used Nile University&apos;s official colors, green and
              blue, as the base of the visual system. This choice was
              deliberate: students already link those colors to the institution.
              Using that palette made Guidely feel like it was part of Nile
              University instead of a separate tool added to it. Secondary
              Colors : Used mainly for text, active and inactive modes.
            </p>

            <p className="guidely-typography-body">
              Typography: Guidely&apos;s type system uses Kumbh Sans. This
              typeface was chosen for its rounded, approachable letterforms,
              making it suitable for a student-facing app. Inter is used
              carefully within form elements, such as input fields and primary
              buttons because of its neutral, highly legible letterforms.
            </p>

            <div className="guidely-swatch-group">
              <ColorSwatch
                className="guidely-swatch-blue"
                segments={[
                  "#274193",
                  "#5065A7",
                  "#7989BA",
                  "#A3ADCE",
                  "#CCD1E1",
                ]}
                name="Dark Blue"
                hex="#274193"
              />
              <ColorSwatch
                className="guidely-swatch-green"
                segments={[
                  "#75B946",
                  "#8FC569",
                  "#A8D18C",
                  "#C2DDAF",
                  "#DBE9D2",
                ]}
                name="Lemon Green"
                hex="#75B946"
              />
              <ColorSwatch
                className="guidely-swatch-grey"
                segments={[
                  "#A6A4A4",
                  "#B6B4B4",
                  "#C6C4C4",
                  "#D5D4D4",
                  "#E5E5E5",
                ]}
                name="Grey"
                hex="#A6A4A4"
              />
              <ColorSwatch
                className="guidely-swatch-black"
                segments={[
                  "#000000",
                  "#313131",
                  "#626262",
                  "#939393",
                  "#C4C4C4",
                ]}
                name="Black"
                hex="#000000"
              />
            </div>

            <img
              src={typographyChartImg}
              alt="Typography scale showing Kumbh Sans and Inter at 32, 24, 20, 16, 14, and 11px, in Semi Bold, Medium, and Regular weights"
              className="guidely-type-chart-img"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-3-3">
            <h2 className="guidely-section-3-3-title">Personalization - 02</h2>

            <p className="guidely-personalization-body-1">
              The home screen displays the student&apos;s name and the current
              date. This small detail was a deliberate choice. Most campus apps
              act like notice boards, sharing the same information with
              everyone. We wanted Guidely to feel like it was made just for the
              person using the phone. Showing a name and the date was an easy
              way to communicate that this app knows who you are and it is here
              for you today.
            </p>

            <p className="guidely-personalization-body-2">
              The interest-based recommendation engine was driven by the same
              philosophy. During onboarding, students choose their areas of
              interest.
            </p>

            <p className="guidely-personalization-body-3">
              Instead of a flat chronological dump, the event feed organizes
              material into three sections: Featured, Clubs You Follow, and
              Recommended For You. A student who chose &quot;tech&quot; and
              &quot;arts&quot; should not have to sift through sporting events
              to identify what is important to them.
            </p>

            <img
              src={homeWelcomeImg}
              alt="Home screen welcoming the student"
              className="guidely-personalization-frame"
              loading="lazy"
            />

            <img
              src={mockup1Img}
              alt="Phone mockup"
              className="guidely-personalization-mockup guidely-personalization-mockup-1"
              loading="lazy"
            />
            <img
              src={interestsSelectionImg}
              alt="Getting Started interest selection screen"
              className="guidely-personalization-mockup guidely-personalization-mockup-2"
              loading="lazy"
            />
            <img
              src={eventFeedImg}
              alt="Event feed screen with Featured and Clubs You Follow sections"
              className="guidely-personalization-mockup guidely-personalization-mockup-3"
              loading="lazy"
            />

            <img
              src={personalizationArrow2}
              alt=""
              className="guidely-personalization-arrow-2"
              aria-hidden="true"
              loading="lazy"
            />
            <img
              src={personalizationArrow1}
              alt=""
              className="guidely-personalization-arrow-1"
              aria-hidden="true"
              loading="lazy"
            />
            <img
              src={arrowFeatured}
              alt=""
              className="guidely-arrow-featured"
              aria-hidden="true"
              loading="lazy"
            />
            <img
              src={arrowClubs}
              alt=""
              className="guidely-arrow-clubs"
              aria-hidden="true"
              loading="lazy"
            />
            <img
              src={arrowRecommended}
              alt=""
              className="guidely-arrow-recommended"
              aria-hidden="true"
              loading="lazy"
            />

            <img
              src={recommendedFeedImg}
              alt="Event feed screen with the Recommended For You section"
              className="guidely-personalization-frame-2"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-3-4">
            <h2 className="guidely-section-3-4-title">
              Guest vs Student Access - 03
            </h2>

            <p className="guidely-access-body">
              We designed two different access levels. Guests, including
              visitors, prospective students, and parents, can browse events,
              explore clubs, access the campus map, and take the virtual tour
              without needing an account. However, when a guest tries to use an
              interactive feature, like bookmarking an event, following a club,
              or setting a reminder, they see a screen that explains what
              they&apos;re missing. This screen offers them a choice: sign in as
              a student or go back. They&apos;re not blocked without an
              explanation; they&apos;re invited. This distinction was important
              because the people most likely to explore Guidely without a
              student ID are also the ones who might be deciding whether to
              attend Nile University. Blocking them at the door would have
              created a negative first impression.
            </p>

            <img
              src={guestChoiceImg}
              alt="Guest vs student login choice screen"
              className="guidely-access-mockup guidely-access-mockup-1"
              loading="lazy"
            />
            <img
              src={accessLockedImg}
              alt="Locked content screen prompting student login"
              className="guidely-access-mockup guidely-access-mockup-2"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-3-5">
            <h2 className="guidely-section-3-5-title">The Virtual Tour - 04</h2>

            <img
              src={tourGuideImg}
              alt="Tour Guide screen listing School Blocks, Student Centre, and Hostels"
              className="guidely-tour-mockup"
              loading="lazy"
            />

            <p className="guidely-tour-body-1">
              The virtual tour caters to those unable to physically attend,
              dividing the campus into four sections: School Blocks, Student
              Center, Hostels, and Outdoor View, each showcased through photo
              slideshows. Research into augmented reality and 3D models revealed
              high resource demands and prolonged production times, leading to a
              decision to modify the scope due to timing constraints.
            </p>

            <p className="guidely-tour-body-2">
              The slideshow was that call, and it was the correct one. Because
              the people who most benefit from this feature are not current
              students navigating campus. They&apos;re prospective students who
              can&apos;t afford to travel out for an open day, or first-years
              who want to get a feel for the campus before arriving. For that
              purpose, high-quality photographs in a tidy slideshow outperform a
              sluggish 3D model.
            </p>

            <div className="guidely-tour-card guidely-tour-card-1">
              <img
                src={tourCard1Img}
                alt="Welcome To Campus virtual tour slide"
                className="guidely-tour-card-img"
                loading="lazy"
              />
            </div>
            <img
              src={tourCard2Img}
              alt="Swipe To Explore virtual tour slide"
              className="guidely-tour-card guidely-tour-card-2"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-3-6">
            <h2 className="guidely-section-3-6-title">
              The Four-Card Home Screen - 05
            </h2>

            <p className="guidely-fourcard-body">
              We chose to design the homescreen as a 2x2 grid of large image
              cards: Discover Events, Discover Clubs, Campus Map, and Virtual
              Tour. Each card is backed by a descriptive photos. The first
              wireframes in our design process had a bottom nav bar, but during
              review we realised that an icon-based navigation assumes the
              student already knows how the app works, while cards present the
              content before they&apos;ve even tapped. This means a brand new
              user knows &quot;Discover Clubs&quot; shows actual busy campus
              events just from looking at it.
            </p>

            <img
              src={fourcardMockupImg}
              alt="Home screen with a 2x2 grid of image cards"
              className="guidely-fourcard-mockup"
              loading="lazy"
            />

            <img
              src={fourcardVectorImg}
              alt=""
              className="guidely-fourcard-vector"
              aria-hidden="true"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-3-7">
            <h2 className="guidely-section-3-7-title">
              Events Auto Expire - 06
            </h2>

            <p className="guidely-expire-body">
              Events are removed from the main feed once their dates have
              passed. They do not completely vanish; instead, they are moved to
              a Past Events section on each club&apos;s profile page. Two
              reasons. First, displaying expired events clutters the feed and
              irritates students who click on something only to discover it has
              already occurred. Second, past occurrences demonstrate that clubs
              are still active. A club with a visible history of events is more
              credible to a student contemplating whether to join it than one
              that looks to be empty.
            </p>

            <img
              src={eventFormImg}
              alt="Event creation form with name, location, description, date, time, and category fields"
              className="guidely-expire-form"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-4">
            <h2 className="guidely-section-4-title">./Scope Management</h2>

            <p className="guidely-section-4-body">
              We made strategic compromises throughout the project, not due to a
              lack of desire, but due to good time management. The most notable
              item we deleted was interactive campus navigation with real-time
              GPS. It would have been the most technically difficult thing to
              develop correctly, and a poor construction would have harmed the
              rest of the program. The virtual tour was our solution to that
              gap, achieving the same essential purpose (helping students grasp
              the campus) without the technical overhead. Knowing what to cut
              and why was as important as any other design decision we made.
            </p>

            <img
              src={iconSearchImg}
              alt=""
              className="guidely-section-4-icon"
              aria-hidden="true"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-5">
            <h2 className="guidely-section-5-title">./Testing</h2>

            <p className="guidely-section-5-body">
              We executed 17 functional test cases across all main user flows,
              including login, guest access, interest selection, event
              bookmarking, club following, organiser event production, and
              notification delivery, and they all passed. Beyond functionality,
              we evaluated usability, responsiveness across device sizes, and
              security measures such as login and role-based access. No big
              concerns arose. One thing we discovered late was that the event
              creation form lacked a category selection, preventing newly
              created events from feeding into the recommendation engine. Fixed
              before to submission.
            </p>

            <img
              src={iconComputerCheckImg}
              alt=""
              className="guidely-section-5-icon"
              aria-hidden="true"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-6">
            <h2 className="guidely-section-6-title">./Outcome</h2>

            <p className="guidely-section-6-body">
              Guidely was submitted and approved as our final year project at
              Nile University&apos;s Faculty of Computing in June 2025, signed
              off by our supervisor and external examiner. All 17 test cases
              passed. Students who tested the app during development were able
              to complete every major task: finding events, following clubs,
              exploring the virtual tour, receiving notifications, without
              instruction. The honest summary from our own conclusion:
            </p>

            <div className="guidely-quote-block guidely-quote-block-2">
              <img
                src={quoteMarkImg}
                alt=""
                className="guidely-quote-mark guidely-quote-mark-open"
                aria-hidden="true"
                loading="lazy"
              />
              <p className="guidely-quote-text">
                The project might not have everything we first imagined, but
                what we did build already makes a real difference.
              </p>
              <img
                src={quoteMarkImg}
                alt=""
                className="guidely-quote-mark guidely-quote-mark-close"
                aria-hidden="true"
                loading="lazy"
              />
            </div>

            <img
              src={iconBubbleChatImg}
              alt=""
              className="guidely-section-6-icon"
              aria-hidden="true"
              loading="lazy"
            />
          </section>

          <section className="guidely-section-7">
            <h2 className="guidely-section-7-title">./Reflection</h2>
            <h3 className="guidely-reflection-subtitle">
              What I&apos;d do differently
            </h3>

            <div className="guidely-reflection-groups">
              <ReflectionCard
                number="01"
                className="guidely-reflection-1"
                title="The onboarding experience needed more thought"
                body="The recommendation engine is powered straight from the interest selection screen after signup. However, it was intended as a form to be completed rather than an experience that demonstrated what users were receiving in return. If a student misses it or picks carelessly, their feed becomes less useful from the start. I'd rework that screen to give them an early glimpse of what the personalized feed will look like depending on their choices - make the value visible before they touch next."
              />

              <ReflectionCard
                number="02"
                className="guidely-reflection-2"
                title="I'd test the gate screen with real guests"
                body="The screen which prevents guest users and encourages them to log in was intended to be inclusive and welcoming, not obstructive. However, we tested with people who understood the situation. I would like to test it with someone coming in completely cold, a prospective student on their phone checking us out and make sure they get what we want from the message."
              />

              <ReflectionCard
                number="03"
                className="guidely-reflection-3"
                title="Club discovery is too flat"
                body="Clubs page is just a list with a search. That functions, yes, but places the onus on the user to figure out what they're looking for. I'd experiment with a category-browsing approach - let them select what interests they have and browse the club listings within those interests. Especially for a first-year who has no frame of reference of what clubs are available, just a list of club names is completely meaningless."
              />

              <ReflectionCard
                number="04"
                className="guidely-reflection-4"
                title="I'd push the personalisation further"
                body="Welcome messages and an interest-based feed are great starting point. The app currently pulls the same campus map and virtual tour for everybody. Imagine being able to pop-up things like 'Buildings relevant to your department' for new computer science students or display relevant clubs in your faculty when you open the app. The personalization that we engineered was legit – we can go further."
              />
            </div>
          </section>

          <section className="guidely-section-8">
            <img
              src={wireframesGalleryImg}
              alt="Guidely wireframes gallery"
              className="guidely-wireframes-img"
              loading="lazy"
            />
          </section>
        </div>
      </div>

      <Link
        to={`/case-studies/${nextCaseStudy.slug}`}
        className="guidely-next-case"
      >
        <span className="guidely-next-label">See Next Case Study</span>
        <div className="guidely-next-card">
          <img
            src={nextCaseStudy.image}
            alt={`${nextCaseStudy.id} preview`}
            className="guidely-next-image"
            loading="lazy"
          />
          <span className="guidely-next-title">{nextCaseStudy.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default GuidelyCaseStudy;
