import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudyDetail from './pages/CaseStudyDetail';
import GuidelyCaseStudy from './pages/GuidelyCaseStudy';
import ThermalCaseStudy from './pages/ThermalCaseStudy';
import PortfolioCaseStudy from './pages/PortfolioCaseStudy';
import './App.css';

function App() {
  return (
    <div className="app">
      <Loader />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/guidely" element={<GuidelyCaseStudy />} />
        <Route path="/case-studies/thermal" element={<ThermalCaseStudy />} />
        <Route path="/case-studies/portfolio" element={<PortfolioCaseStudy />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      </Routes>
    </div>
  );
}

export default App;
