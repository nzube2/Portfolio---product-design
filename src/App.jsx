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
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const GuidelyCaseStudy = lazy(() => import('./pages/GuidelyCaseStudy'));
const ThermalCaseStudy = lazy(() => import('./pages/ThermalCaseStudy'));
const PortfolioCaseStudy = lazy(() => import('./pages/PortfolioCaseStudy'));

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
          <Route path="/case-studies/portfolio" element={<PortfolioCaseStudy />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
