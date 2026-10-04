import Image from "./Image.jsx";
import React from "react";
import { Link } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import guidelyPreview from "../assets/guidely-fourcard-mockup.webp";
import thermalPreview from "../assets/thermal-result-screen-1.webp";
const summaries = {
  markettrack: {
    name: "MarketTrack",
    outcome:
      "From paper records to a working inventory, sales, and expense system—now in active use at Ifythel.",
    role: "Product design · System architecture",
    tags: ["Shipped product", "Business tools"],
  },
  guidely: {
    name: "Guidely",
    outcome:
      "Campus life, recommendations, and an offline-friendly virtual tour in one student experience.",
    role: "UI/UX lead · Mobile design & development",
    tags: ["Student experience", "Mobile app"],
  },
  thermal: {
    name: "Thermal",
    outcome:
      "An end-to-end music discovery concept that translates energy and emotion into a unified experience.",
    role: "Product design · End-to-end experience",
    tags: ["Music discovery", "Web app concept"],
  },
};
const CaseStudy = () => (
  <section
    className="case-studies-section section-container"
    id="case-studies"
    aria-labelledby="work-heading"
  >
    <div className="section-heading">
      <div>
        <p className="eyebrow">./Selected work</p>
        <h2 id="work-heading">Systems made tangible.</h2>
      </div>
      <p>
        Real problems. Thoughtful decisions.
        <br />A closer look at the work.
      </p>
    </div>
    <div className="project-list">
      {caseStudies.slice(0, 3).map((project, i) => {
        const summary = summaries[project.slug];
        return (
          <article className="project-card" data-reveal key={project.slug}>
            <Link
              to={`/case-studies/${project.slug}`}
              className={`project-media project-media-${project.slug}`}
              aria-label={`Read ${summary.name} case study`}
            >
              <Image
                src={
                  project.slug === "markettrack"
                    ? "/images/markettrack-preview-960.webp"
                    : project.slug === "guidely"
                      ? guidelyPreview
                      : thermalPreview
                }
                alt={`${summary.name} interface preview`}
                srcSet={
                  i === 0
                    ? "/images/markettrack-preview-480.webp 480w, /images/markettrack-preview-960.webp 960w, /images/markettrack-preview-1440.webp 1440w"
                    : undefined
                }
                sizes={i === 0 ? "(max-width: 768px) 90vw, 44vw" : undefined}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
              />
            </Link>
            <div className="project-content">
              <p className="eyebrow">
                0{i + 1} / {summary.role}
              </p>
              <h3>
                <Link to={`/case-studies/${project.slug}`}>{summary.name}</Link>
              </h3>
              <p className="project-outcome">{summary.outcome}</p>
              <ul className="project-tags" aria-label="Project categories">
                {summary.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <details className="project-details">
                <summary>Project context & contribution</summary>
                <h4>{project.title}</h4>
                <p>{project.brief}</p>
                <p>{project.whatIDid}</p>
              </details>
              <Link
                to={`/case-studies/${project.slug}`}
                className="project-link"
              >
                Explore case study <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
    <Link className="all-work-link" to="/case-studies/portfolio">
      Also: the thinking behind this portfolio{" "}
      <span aria-hidden="true">↗</span>
    </Link>
    <details className="portfolio-context">
      <summary>Portfolio project context</summary>
      <h3>{caseStudies[3].title}</h3>
      <p>{caseStudies[3].brief}</p>
      <p>{caseStudies[3].whatIDid}</p>
    </details>
  </section>
);
export default CaseStudy;
