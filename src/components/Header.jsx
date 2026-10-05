import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { observeNavigation } from "../behaviors/nav";
const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
    return observeNavigation(header.current);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!header.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);
  const HomeLink = ({ id, children, ...props }) => location.pathname === '/' ? <a href={`#${id}`} {...props}>{children}</a> : <Link to={`/#${id}`} {...props}>{children}</Link>;
  const links = (
    <>
      <HomeLink id="case-studies" className="nav-link">
        Work
      </HomeLink>
      <HomeLink id="about" className="nav-link">
        About
      </HomeLink>
      <HomeLink id="skills" className="nav-link">
        Skills
      </HomeLink>
      <HomeLink id="contact" className="btn-contact">
        Contact <span aria-hidden="true">↗</span>
      </HomeLink>
    </>
  );
  return (
    <header className="header" ref={header}>
      <div className="header-container">
        <Link to="/" className="logo" aria-label="Valentina, home">
          VALENTINA<span>.</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main navigation">
          {links}
        </nav>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <nav
          id="mobile-navigation"
          className="nav-mobile"
          aria-label="Mobile navigation"
          hidden={!open}
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false);
          }}
        >
          {links}
        </nav>
      </div>
    </header>
  );
};
export default Header;

