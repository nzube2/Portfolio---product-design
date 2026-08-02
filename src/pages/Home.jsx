import React from 'react';
import Hero from '../components/Hero';
import CaseStudy from '../components/CaseStudy';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import MoreOfMyWorks from '../components/MoreOfMyWorks';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="hero-reveal">
      <Hero />
      <CaseStudy />
      <Skills />
      <div className="stack-about-experience">
        <About />
        <Experience />
      </div>
      <MoreOfMyWorks />
      <Contact />
    </div>
  );
};

export default Home;
