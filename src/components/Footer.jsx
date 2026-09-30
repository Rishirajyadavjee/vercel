import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@rishi.design',
      url: 'https://instagram.com',
      className: 'instagram',
      aria: 'Visit Instagram profile',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      handle: 'rishirrajyadav',
      url: 'https://github.com',
      className: 'github',
      aria: 'Visit GitHub profile',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      handle: '@rishi_design',
      url: 'https://twitter.com',
      className: 'twitter',
      aria: 'Visit Twitter profile',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: 'rishirajyadav',
      url: 'https://linkedin.com',
      className: 'linkedin',
      aria: 'Visit LinkedIn profile',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Column 1: Brand & Availability Status */}
          <div className="footer-brand-col">
            <Link to="/" className="logo" onClick={scrollToTop}>
              <span className="logo-dot"></span>
              Portfolio
            </Link>
            <p className="footer-tagline">
              Crafting iconic brand identities, high-converting digital products, and intelligent Webflow & React applications.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot-green"></span>
              <span>Available for Q4/Q1 Projects</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li className="footer-link-item"><a href="/#about">About & Workflow</a></li>
              <li className="footer-link-item"><Link to="/projects">Projects Showcase</Link></li>
              <li className="footer-link-item"><a href="/#palette">Design System</a></li>
              <li className="footer-link-item"><a href="/#contact">Get in Touch</a></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Expertise</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="/#about">Brand Strategy</a></li>
              <li className="footer-link-item"><a href="/#about">Packaging & Hardware</a></li>
              <li className="footer-link-item"><a href="/#about">AI Workspace UI/UX</a></li>
              <li className="footer-link-item"><a href="/#about">React & Webflow Dev</a></li>
              <li className="footer-link-item"><a href="/#about">Creative Direction</a></li>
            </ul>
          </div>

          {/* Column 4: Social Accounts with Symbols & Custom Hover Colors */}
          <div className="footer-social-section">
            <h4 className="footer-col-title">Connect With Me</h4>
            <p className="footer-tagline" style={{ fontSize: '0.88rem' }}>
              Follow along for daily visual design breakdowns, code snippets, and behind-the-scenes content.
            </p>

            <div className="social-links-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card-link ${social.className}`}
                  aria-label={social.aria}
                  title={`${social.name} - ${social.handle}`}
                >
                  <span className="social-icon-wrapper">
                    {social.svg}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Portfolio. All rights reserved. Built with <Heart size={14} style={{ display: 'inline', color: '#ff5c28', margin: '0 2px' }} fill="#ff5c28" /> & React.
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
