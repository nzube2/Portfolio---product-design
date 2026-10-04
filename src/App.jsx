import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { updateMetadata } from './behaviors/metadata';
import { observeMotionPreference } from './behaviors/motion-preference';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Code-split per case-study route: each one's JS/CSS (and the images/videos
// it imports) only downloads when that route is actually visited, instead
// of shipping with every page load including the homepage.
// Guidely and Thermal have bespoke, hand-built layouts (unique image
// galleries/mockup sections) so they keep their own page components.
// CaseStudyTemplate is the generic "CMS" path: it looks up any other slug
// in src/data/caseStudyContent.js and renders it through one shared layout,
// so adding a new case study there needs no route/component changes here.
const GuidelyCaseStudy = lazy(() => import('./pages/GuidelyCaseStudy'));
const ThermalCaseStudy = lazy(() => import('./pages/ThermalCaseStudy'));
const MarketTrackCaseStudy = lazy(() => import('./pages/MarketTrackCaseStudy'));
const CaseStudyTemplate = lazy(() => import('./pages/CaseStudyTemplate'));

function App() {
  const location = useLocation();
  useEffect(() => updateMetadata(location.pathname), [location.pathname]);
  useEffect(() => observeMotionPreference(document.getElementById('main-content')), []);
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <ScrollToTop />
      <main id="main-content" tabIndex="-1"><Suspense fallback={<div className="route-fallback" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies/markettrack" element={<MarketTrackCaseStudy />} />
          <Route path="/case-studies/guidely" element={<GuidelyCaseStudy />} />
          <Route path="/case-studies/thermal" element={<ThermalCaseStudy />} />
          <Route path="/case-studies/:slug" element={<CaseStudyTemplate />} />
        </Routes>
      </Suspense></main>
    </div>
  );
}

export default App;

