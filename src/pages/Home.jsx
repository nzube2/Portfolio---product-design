import React, { useEffect, useRef } from 'react';
import { observeReveals } from '../behaviors/scroll-reveal';
import Hero from '../components/Hero';
import CaseStudy from '../components/CaseStudy';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import MoreOfMyWorks from '../components/MoreOfMyWorks';
import Contact from '../components/Contact';

const Home = () => {
  const root = useRef(null);
  useEffect(() => observeReveals(root.current), []);
  return (
    <div className="home" ref={root}>
      <Hero />
      <CaseStudy />
      <div className="stack-about-experience">
        <About />
      </div>
      <Skills />
      <Experience />
      <MoreOfMyWorks />
      <Contact />
    </div>
  );
};

export default Home;
