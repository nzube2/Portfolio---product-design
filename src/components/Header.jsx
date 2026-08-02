import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span>VALENTINA.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <a href="/#case-studies" className="nav-link">
            Case Studies
          </a>
          <a href="/#skills" className="nav-link">
            Skills
          </a>
          <a href="/#about" className="nav-link">
            About
          </a>
          <a href="/#contact" className="btn-contact">
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="12"
            viewBox="0 0 24 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="24" y2="1" stroke="#F3EEE8" strokeWidth="2" />
            <line y1="11" x2="24" y2="11" stroke="#F3EEE8" strokeWidth="2" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <a href="/#case-studies" className="nav-link">
              Case Studies
            </a>
            <a href="/#skills" className="nav-link">
              Skills
            </a>
            <a href="/#about" className="nav-link">
              About
            </a>
            <a href="/#contact" className="btn-contact">
              Contact Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
