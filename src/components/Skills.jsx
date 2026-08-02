import React, { useEffect, useRef } from 'react';
import './Skills.css';
import graphicUiux from '../assets/graphic-uiux.svg';
import graphicWireframe from '../assets/graphic-wireframe.svg';
import graphicResearch from '../assets/graphic-research.svg';
import graphicWebdev from '../assets/graphic-webdev.svg';
import iconFigma from '../assets/icon-figma.svg';
import iconClaude from '../assets/icon-claude.svg';
import iconAdobe from '../assets/icon-adobe.svg';
import iconFramer from '../assets/icon-framer.svg';
import workflowArrow from '../assets/workflow-arrow.svg';

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

const toolIcons = {
  Figma: iconFigma,
  Claude: iconClaude,
  Adobe: iconAdobe,
  Framer: iconFramer,
};

const ToolBadge = ({ label }) => (
  <div className="tool-badge">
    <img
      src={toolIcons[label]}
      alt=""
      className={`tool-icon tool-icon-${label.toLowerCase()}`}
      aria-hidden="true"
    />
    <span className="tool-label">{label}</span>
  </div>
);

const useRevealOnScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        node.classList.toggle('sk-revealed', entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const Skills = () => {
  const pillRef = useRevealOnScroll();
  const row1Ref = useRevealOnScroll();
  const row2Ref = useRevealOnScroll();
  const toolsRef = useRevealOnScroll();

  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading-pill sk-reveal" ref={pillRef}>
        <HeadingBorder className="skills-heading-pill-border" />
        <span>./Skills</span>
      </div>

      <div className="skills-row-1 sk-reveal" ref={row1Ref}>
        <div className="skill-card-uiux">
          <img
            src={graphicUiux}
            alt=""
            className="skill-graphic skill-graphic-uiux"
          />
          <div className="skill-card-text skill-card-text-uiux">
            <h3>Ui/Ux Design.</h3>
            <p>Mobile And Web Design</p>
          </div>
        </div>
        <div className="skill-card-wireframe">
          <img
            src={graphicWireframe}
            alt=""
            className="skill-graphic skill-graphic-wireframe"
          />
          <div className="skill-card-text skill-card-text-wireframe">
            <h3>Wireframe &amp; Prototyping</h3>
            <p>Scalable Prototypes For Web And Mobile</p>
          </div>
        </div>
        <div className="skills-accent-bar-1" />
      </div>

      <div className="skills-row-2 sk-reveal" ref={row2Ref}>
        <div className="skills-accent-bar-2" />
        <div className="skill-card-research">
          <img
            src={graphicResearch}
            alt=""
            className="skill-graphic skill-graphic-research"
          />
          <div className="skill-card-text skill-card-text-research">
            <h3>Ux Research.</h3>
            <p>Deep Research</p>
          </div>
        </div>
        <div className="skill-card-webdev">
          <img
            src={graphicWebdev}
            alt=""
            className="skill-graphic skill-graphic-webdev"
          />
          <div className="skill-card-text skill-card-text-webdev">
            <h3>Web Development &amp; Automation</h3>
            <p>Live Functional Websites &amp; Automated Workflows</p>
          </div>
        </div>
      </div>

      <div className="tools-section sk-reveal" ref={toolsRef}>
        <div className="tools-heading">
          <span>./Tools In My Workflow</span>
          <img
            src={workflowArrow}
            alt=""
            className="tools-workflow-arrow"
            aria-hidden="true"
          />
        </div>

        <div className="tools-row tools-row-1">
          <ToolBadge label="Figma" />
          <ToolBadge label="Claude" />
          <ToolBadge label="Adobe" />
          <ToolBadge label="Framer" />
        </div>
        <div className="tools-row tools-row-2">
          <ToolBadge label="Framer" />
          <ToolBadge label="Adobe" />
          <ToolBadge label="Claude" />
          <ToolBadge label="Figma" />
        </div>

        <div className="tools-accent-bar" />
      </div>
    </section>
  );
};

export default Skills;
