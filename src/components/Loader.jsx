import React from 'react';
import figmaIcon from '../assets/figma-icon.svg';
import paintDrop from '../assets/paint-drop.svg';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay" aria-hidden="true">
      <div className="top-bar top-bar-left" />
      <div className="top-bar top-bar-right" />

      <img src={paintDrop} alt="" className="loader-paint-drop" />

      <img src={figmaIcon} alt="" className="loader-figma-icon" />
    </div>
  );
};

export default Loader;
