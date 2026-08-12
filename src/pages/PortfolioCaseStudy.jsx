import React from 'react';
import { Link } from 'react-router-dom';
import {
  WorkIcon,
  ToolsIcon,
  HourglassIcon,
  PersonIcon,
  TeamIcon,
} from '../components/MetaIcons';
import './PortfolioCaseStudy.css';

const MetaItem = ({ icon, className, label, value }) => (
  <div className={`portfolio-meta-item ${className}`}>
    {icon}
    <div className="portfolio-meta-text">
      <span className="portfolio-meta-label">{label}</span>
      <span className="portfolio-meta-value">{value}</span>
    </div>
  </div>
);

const Section = ({ accent, title, children }) => (
  <section className={`portfolio-section portfolio-section-accent-${accent}`}>
    <span className="portfolio-section-line" aria-hidden="true" />
    <h3 className="portfolio-section-title">{title}</h3>
    <div className="portfolio-section-body">{children}</div>
  </section>
);

const PortfolioCaseStudy = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-topbar">
        <div className="portfolio-topbar-nav">
          <Link to="/case-studies/thermal" className="portfolio-back">
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
        </div>
        <span className="portfolio-id">CS-03</span>
      </div>

      <div className="portfolio-body">
        <section className="portfolio-hero">
          <span className="portfolio-hero-eyebrow">UI/UX case study</span>
          <h1 className="portfolio-hero-heading">
            My Portfolio As A Case Study- Designing For The Readers Attention
          </h1>
          <button type="button" className="portfolio-hero-btn">
            Read Case Study
          </button>
        </section>

        <div className="portfolio-meta-card">
          <MetaItem
            icon={<WorkIcon className="portfolio-meta-icon" />}
            className="portfolio-meta-item-1"
            label="Project Type"
            value="Portfolio"
          />
          <MetaItem
            icon={<PersonIcon className="portfolio-meta-icon" />}
            className="portfolio-meta-item-2"
            label="My Role"
            value="Designer, Developer"
          />
          <MetaItem
            icon={<TeamIcon className="portfolio-meta-icon portfolio-meta-icon-team" />}
            className="portfolio-meta-item-3"
            label="Team"
            value="Solo"
          />
          <MetaItem
            icon={<HourglassIcon className="portfolio-meta-icon" />}
            className="portfolio-meta-item-4"
            label="Timeline"
            value="Ongoing"
          />
          <MetaItem
            icon={<ToolsIcon className="portfolio-meta-icon" />}
            className="portfolio-meta-item-5"
            label="Tools"
            value="Figma, Adobe"
          />
        </div>

        <Section accent="left" title="./Introduction">
          <p>
            A portfolio isn&apos;t really a gallery. It&apos;s more like a
            pitch that has about thirty seconds to convince someone before
            they scroll past and forget you existed. With that, rather than
            just designing a website to display some work, i wanted the
            portfolio itself to BE the project, just like id design based
            around a clients brief. Being able to design something to engage
            them, with no work yet loading, just design choices, would be
            good evidence
          </p>
        </Section>

        <Section accent="right" title="./Storyteling With Visuals">
          <p>
            You can see this most clearly in the About section, the
            illustration of a girl stepping onto a mountain sits right where
            I&apos;m talking about foundation. It&apos;s not decoration,
            it&apos;s the same idea said twice, once in the image and once in
            the words. Same thing happens in the hero. The floating mockups
            start with Figma, then move into actual designs – the tool
            first, then what it becomes. That order wasn&apos;t random.
            It&apos;s the story of how I actually work, shown before I&apos;ve
            said a single word about it.
          </p>
        </Section>

        <Section accent="left" title="./Colour and visuals for a cinematic feel">
          <p>
            You can see this most clearly in the About section, the
            illustration of a girl stepping onto a mountain sits right where
            I&apos;m talking about foundation. It&apos;s not decoration,
            it&apos;s the same idea said twice, once in the image and once in
            the words. Same thing happens in the hero. The floating mockups
            start with Figma, then move into actual designs – the tool
            first, then what it becomes. That order wasn&apos;t random.
            It&apos;s the story of how I actually work, shown before I&apos;ve
            said a single word about it.
          </p>
        </Section>

        <Section accent="right" title=",/Visual hierarchy">
          <p>
            When you look at an image on screen, it captures attention more
            readily than text does, so I added micro visuals along with all
            text elements on the page. Prior to anyone even starting to
            consume a block of text, it gives some kind of context using an
            image, icon or a visual representation of the content on hand -
            you&apos;re essentially reading an endorsement of what you
            already see.
          </p>
        </Section>

        <Section accent="left" title="./Never leaving someone without a next step">
          <p>
            Every section has somewhere to go next. &quot;View Case
            Studies&quot; and &quot;View Resume&quot; sit right in the hero.
            &quot;Read more&quot; and &quot;See next&quot; live on the case
            study cards. The contact button stays visible in the nav the
            entire time you scroll. And the page closes by circling all the
            way back to a direct email link. At no point should someone have
            to go hunting for what to do next – there&apos;s always something
            offered.
          </p>
        </Section>

        <Section accent="right" title="./Where this leaves things">
          <p>
            This portfolio is not done and the goal is not for it to feel
            done- -it&apos;s live in the same way that any real product
            evolves after meeting real users. That being said, everything on
            this page was thoughtfully decided, even the parts that
            I&apos;m still refining. If this case study did its job, of some
            what I just described already worked on you before you got here.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default PortfolioCaseStudy;
