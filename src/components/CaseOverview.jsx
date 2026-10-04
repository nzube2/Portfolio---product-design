import React from "react";
import caseStudies from "../data/caseStudies";
const outcomes = {
  markettrack:
    "Shipped and in active use at Ifythel: inventory, sales, and expenses are visible in one system.",
  guidely:
    "Designed a consolidated campus experience with interest-based recommendations and an offline-friendly virtual tour.",
  thermal:
    "Designed the complete concept journey, from mood input to AI analysis and music results.",
  portfolio:
    "Designed and developed a working portfolio with its own case study.",
};
export default function CaseOverview({ slug }) {
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return null;
  return (
    <aside
      id="project-overview"
      className="case-overview"
      aria-label="Project summary"
    >
      <div>
        <p className="eyebrow">The problem</p>
        <p>{project.brief}</p>
      </div>
      <div>
        <p className="eyebrow">
          {slug === "markettrack" ? "Shipped outcome" : "Design outcome"}
        </p>
        <p className="case-outcome">{outcomes[slug]}</p>
      </div>
    </aside>
  );
}
