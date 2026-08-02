import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import caseStudies from '../data/caseStudies';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((cs) => cs.slug === slug);

  if (index === -1) {
    return <Navigate to="/" replace />;
  }

  const current = caseStudies[index];
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];

  return (
    <div className="csd-page">
      <div className="csd-container">
        <Link to="/#case-studies" className="csd-back">
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

        <span className="csd-id">{current.id}</span>
        <h1 className="csd-title">{current.title}</h1>

        <div className="csd-image-frame">
          {current.image ? (
            <img
              src={current.image}
              alt={`${current.id} preview`}
              className="csd-image"
            />
          ) : (
            <span>Case study image placeholder</span>
          )}
        </div>

        <div className="csd-text-block">
          <span className="csd-label">Brief</span>
          <p>{current.brief}</p>
        </div>

        <div className="csd-text-block">
          <span className="csd-label">What I Did</span>
          <p>{current.whatIDid}</p>
        </div>

        <div className="csd-nav">
          {prev ? (
            <Link to={`/case-studies/${prev.slug}`} className="csd-nav-link">
              ← {prev.id}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/case-studies/${next.slug}`} className="csd-nav-link">
              {next.id} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
