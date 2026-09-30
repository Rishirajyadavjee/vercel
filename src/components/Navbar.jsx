import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { targetId: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-dot"></span>
          Portfolio
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive && location.hash === '' ? 'nav-link active' : 'nav-link')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </NavLink>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Projects
          </NavLink>
        </nav>

        <a
          href="#contact"
          className="btn-pill btn-pill-white"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          <span>Get in touch</span>
          <div className="btn-icon btn-icon-orange">
            <ArrowRight size={14} strokeWidth={2.5} />
          </div>
        </a>
      </div>
    </header>
  );
}
