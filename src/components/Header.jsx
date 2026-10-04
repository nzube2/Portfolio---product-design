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
  const links = (
    <>
      <a href="/#case-studies" className="nav-link">
        Work
      </a>
      <a href="/#about" className="nav-link">
        About
      </a>
      <a href="/#skills" className="nav-link">
        Skills
      </a>
      <a href="/#contact" className="btn-contact">
        Contact <span aria-hidden="true">↗</span>
      </a>
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
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
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
