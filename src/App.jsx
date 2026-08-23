import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import './App.css';

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
const CaseStudyTemplate = lazy(() => import('./pages/CaseStudyTemplate'));

function App() {
  return (
    <div className="app">
      <Loader />
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div className="route-fallback" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies/guidely" element={<GuidelyCaseStudy />} />
          <Route path="/case-studies/thermal" element={<ThermalCaseStudy />} />
          <Route path="/case-studies/:slug" element={<CaseStudyTemplate />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
