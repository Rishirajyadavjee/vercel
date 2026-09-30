import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Circle, Layers, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import jacketImg from '/assets/jacket.jpg';
import headphonesImg from '/assets/headphones.jpg';
import cosmeticsImg from '/assets/cosmetics.jpg';
import portraitImg from '/assets/portrait.jpg';

export default function HomePage({ onSelectProject }) {
  const location = useLocation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    challenge: '',
    revenue: '',
    age: '',
    spend: '',
    ads: ''
  });

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const el = document.getElementById(location.state.targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-main">
            <div className="hero-left">
              <p className="hero-subtitle">Hey, I'm a</p>
              <h1 className="hero-title">
                Creative<br />Director
              </h1>
            </div>
            <div className="hero-right">
              <h2 className="hero-quote">Great design should feel invisible.</h2>
              <p className="hero-desc">From logo to language, I build brands that connect and convert.</p>
            </div>
          </div>

          <div className="hero-categories">
            <div className="category-item">
              <span className="cat-num">#01</span>
              <span className="cat-label">Brand Strategy</span>
            </div>
            <div className="category-item">
              <span className="cat-num">#02</span>
              <span className="cat-label">Brand Identity Design</span>
            </div>
            <div className="category-item">
              <span className="cat-num">#03</span>
              <span className="cat-label">Packaging Design</span>
            </div>
            <div className="category-item">
              <span className="cat-num">#04</span>
              <span className="cat-label">Creative Direction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="brands-section">
        <div className="brands-container">
          <p className="brands-title">Trusted by Brands I've Helped Shape</p>
          <div className="brands-list">
            <div className="brand-item">
              <Circle size={18} />
              <span>Supa Blox</span>
            </div>
            <div className="brand-item">
              <Layers size={18} />
              <span>Hype Blox</span>
            </div>
            <div className="brand-item">
              <Compass size={18} />
              <span>Frame Blox</span>
            </div>
            <div className="brand-item">
              <Circle size={18} fill="currentColor" />
              <span>Ultra Blox</span>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Designs Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <div className="about-left">
              <span className="section-tag">Behind the Designs</span>
              <h2 className="about-title">Shaping Experiences That Make Life Simpler</h2>
            </div>
            <div className="about-right">
              <p className="about-text">
                I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
              </p>
              <div className="about-cta">
                <span className="cta-subtext">
                  Let's Build Something<br />Meaningful Together
                </span>
                <a href="#contact" className="btn-pill btn-pill-orange">
                  <span>Get in touch</span>
                  <div className="btn-icon btn-icon-white">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Cards Grid */}
          <div id="projects" className="portfolio-grid">
            <div
              className="portfolio-card"
              onClick={() =>
                onSelectProject({
                  title: 'Outerwear Design',
                  tags: ['Brand Strategy', 'Apparel'],
                  desc: 'End-to-end brand strategy and apparel identity.',
                  longDesc: 'Complete outerwear apparel positioning, material identity cards, and e-commerce launch imagery for luxury urban fashion.',
                  img: jacketImg,
                  year: '2026',
                  client: 'Vanguard Outerwear'
                })
              }
            >
              <div className="card-image-wrapper">
                <img src={jacketImg} alt="Brand Apparel Outerwear" loading="lazy" />
              </div>
              <div className="card-overlay">
                <span className="card-category">Brand Strategy</span>
                <h3 className="card-title">Outerwear Design</h3>
              </div>
            </div>

            <div
              className="portfolio-card"
              onClick={() =>
                onSelectProject({
                  title: 'Acoustics Series',
                  tags: ['Packaging Design', 'Hardware'],
                  desc: 'Industrial product packaging for flagship audio hardware.',
                  longDesc: 'Minimalist tactile packaging design and unboxing experience crafted for high-fidelity audio equipment.',
                  img: headphonesImg,
                  year: '2025',
                  client: 'Acoustics Audio'
                })
              }
            >
              <div className="card-image-wrapper">
                <img src={headphonesImg} alt="Audio Headphones Design" loading="lazy" />
              </div>
              <div className="card-overlay">
                <span className="card-category">Packaging Design</span>
                <h3 className="card-title">Acoustics Series</h3>
              </div>
            </div>

            <div
              className="portfolio-card"
              onClick={() =>
                onSelectProject({
                  title: 'Minimal Bottle',
                  tags: ['Creative Direction', 'Cosmetics'],
                  desc: 'Luxury skincare packaging and brand positioning.',
                  longDesc: 'Bespoke frosted glass dropper bottle packaging design with minimalist typography and tactile matte boxes.',
                  img: cosmeticsImg,
                  year: '2025',
                  client: 'Nuit Cosmetics'
                })
              }
            >
              <div className="card-image-wrapper">
                <img src={cosmeticsImg} alt="Cosmetic Dropper Bottle Design" loading="lazy" />
              </div>
              <div className="card-overlay">
                <span className="card-category">Creative Direction</span>
                <h3 className="card-title">Minimal Bottle</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Plan Section */}
      <section id="workflow" className="workflow-section">
        <div className="workflow-container">
          <div className="workflow-header">
            <div className="workflow-left">
              <span className="section-tag-pill">● WORKFLOW PLAN</span>
              <h2 className="workflow-title">
                A focused <em>two-week</em> design sprint from idea to visual concept.
              </h2>
            </div>
            <div className="workflow-right">
              <p className="workflow-desc">
                This concept was developed as a focused two-week design sprint — from product positioning and visual research to landing page structure, interface mockups and final presentation. The process combined AI-assisted exploration with hands-on art direction, layout design and visual refinement.
              </p>
            </div>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-nodes">
              <div className="timeline-node">
                <span className="node-icon">🔍</span>
                <span className="node-text">Research & references</span>
                <span className="node-duration">1 day</span>
              </div>
              <div className="timeline-node">
                <span className="node-icon">🎯</span>
                <span className="node-text">Product positioning</span>
                <span className="node-duration">1 day</span>
              </div>
              <div className="timeline-node">
                <span className="node-icon">📑</span>
                <span className="node-text">Landing page structure</span>
                <span className="node-duration">1 day</span>
              </div>
              <div className="timeline-node">
                <span className="node-icon">🎨</span>
                <span className="node-text">Visual direction</span>
                <span className="node-duration">2 days</span>
              </div>
              <div className="timeline-node">
                <span className="node-icon">⚡</span>
                <span className="node-text">AI concept exploration</span>
                <span className="node-duration">2 days</span>
              </div>
              <div className="timeline-node">
                <span className="node-icon">💻</span>
                <span className="node-text">UI design</span>
                <span className="node-duration">3 days</span>
              </div>
            </div>
          </div>

          <div className="workflow-footer">
            <p className="workflow-footer-note">
              <span className="dot-accent">●</span> A structured two-week workflow helped turn an AI SaaS idea into a polished landing page concept with a clear narrative, premium visual language and detailed interface presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section id="palette" className="palette-section">
        <div className="palette-container">
          <div className="palette-header">
            <span className="section-tag-pill">● COLOR PALETTE</span>
            <h2 className="palette-title">
              The palette supports focus, premium feel and the idea of an intelligent AI-powered workspace.
            </h2>
          </div>

          <div className="palette-showcase">
            <div className="color-cards-grid">
              <div className="color-card">
                <div className="color-card-header">
                  <div className="color-dot dot-white"></div>
                  <span className="color-card-title">Soft White</span>
                </div>
                <p className="color-card-desc">Used for text and contrast, keeping the interface clean, readable and balanced.</p>
                <div className="color-card-specs">
                  <div className="spec-row">
                    <span className="spec-label">HEX</span>
                    <span className="spec-val">#F3F4F6</span>
                    <span className="spec-pct">100%</span>
                  </div>
                </div>
              </div>

              <div className="color-card">
                <div className="color-card-header">
                  <div className="color-dot dot-dark"></div>
                  <span className="color-card-title">Deep Background</span>
                </div>
                <p className="color-card-desc">Used as the main base color to create depth, dark tone & premium SaaS atmosphere.</p>
                <div className="color-card-specs">
                  <div className="spec-row">
                    <span className="spec-label">HEX</span>
                    <span className="spec-val">#0C0D12</span>
                    <span className="spec-pct">100%</span>
                  </div>
                </div>
              </div>

              <div className="color-card">
                <div className="color-card-header">
                  <div className="color-dot dot-accent-dark"></div>
                  <span className="color-card-title">Dark Accent</span>
                </div>
                <p className="color-card-desc">Used for cards, panels and UI surfaces to support subtle structural contrast.</p>
                <div className="color-card-specs">
                  <div className="spec-row">
                    <span className="spec-label">HEX</span>
                    <span className="spec-val">#171923</span>
                    <span className="spec-pct">100%</span>
                  </div>
                </div>
              </div>

              <div className="color-card">
                <div className="color-card-header">
                  <div className="color-dot dot-orange"></div>
                  <span className="color-card-title">Vibrant Orange</span>
                </div>
                <p className="color-card-desc">Used for active CTA highlights, badges, and focal interactive elements.</p>
                <div className="color-card-specs">
                  <div className="spec-row">
                    <span className="spec-label">HEX</span>
                    <span className="spec-val">#FF5C28</span>
                    <span className="spec-pct">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">AS OF TODAY</span>
              <div className="stat-number">65%</div>
              <p className="stat-desc">
                Projected market growth & conversion rate increase for digital products by 2035
              </p>
            </div>

            <div className="stat-card">
              <span className="stat-label">ACCORDING TO INDUSTRY DATA</span>
              <div className="stat-number">$30<span class="stat-unit">Billion</span></div>
              <p className="stat-desc">
                Expected total valuation & revenue generated across partner brands by 2030
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="studio-section">
        <div className="studio-container">
          <div className="studio-wrapper">
            <div className="studio-bg-title">
              <span className="title-line line-1">GLOBAL</span>
              <span className="title-line line-2">STUDIO</span>
            </div>

            <div className="studio-center-card">
              <div className="card-badge badge-top">
                <span className="plus-sign">+</span> Branding
              </div>

              <div className="center-image-frame">
                <img src={portraitImg} alt="Creative Director Studio Portrait" loading="lazy" />
              </div>

              <div className="card-badge badge-bottom">
                <span className="plus-sign">+</span> UI UX Design
              </div>
            </div>

            <div className="studio-info-block">
              <span className="since-tag">SINCE 2014</span>
              <p className="studio-desc">
                Folioblox is a Webflow & product design agency building scalable websites for modern brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Growth Section */}
      <section id="contact" className="growth-section">
        <div className="growth-container">
          <div className="growth-header">
            <div className="growth-title-wrapper">
              <h2 className="growth-title">
                <span className="title-top">READY TO</span>
                <span className="title-bottom">
                  <span className="title-highlight">GROW</span>
                  <span className="title-sub">& SCALE YOUR COMPANY?</span>
                </span>
              </h2>
            </div>
            <div className="lets-talk-badge">
              <span className="badge-title">LET'S TALK</span>
              <p className="badge-desc">Discover how we help brands scale & convert.</p>
            </div>
          </div>

          {formSubmitted ? (
            <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <CheckCircle2 size={48} color="#22c55e" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>Application Submitted!</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Thank you for reaching out. We will review your business scaling form and reply within 24 hours.</p>
            </div>
          ) : (
            <form className="growth-form" onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="name">YOUR NAME*</label>
                    <input type="text" id="name" placeholder="John Maddison" required value={formData.name} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">YOUR EMAIL*</label>
                    <input type="email" id="email" placeholder="johnmaddison@gmail.com" required value={formData.email} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="challenge">WHAT'S YOUR BIGGEST CHALLENGE IN SCALING RIGHT NOW?</label>
                    <select id="challenge" value={formData.challenge} onChange={handleInputChange}>
                      <option value="" disabled>What to scale on</option>
                      <option value="brand-identity">Brand Identity & Positioning</option>
                      <option value="conversion">Conversion Rate Optimization</option>
                      <option value="design-system">Design System & UI/UX</option>
                      <option value="scaling">Scaling Paid Channels</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="revenue">WHAT'S YOUR ESTIMATED ANNUAL REVENUE?</label>
                    <select id="revenue" value={formData.revenue} onChange={handleInputChange}>
                      <option value="" disabled>0-100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m+">$5M+</option>
                    </select>
                  </div>
                </div>

                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="phone">YOUR NUMBER*</label>
                    <input type="tel" id="phone" placeholder="+1 048 123 4567" required value={formData.phone} onChange={handleInputChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="age">HOW LONG HAVE YOU BEEN IN BUSINESS?</label>
                    <select id="age" value={formData.age} onChange={handleInputChange}>
                      <option value="" disabled>0-1 year</option>
                      <option value="1-3">1 - 3 years</option>
                      <option value="3-5">3 - 5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="spend">HOW MUCH DO YOU SPEND ON MARKETING EACH MONTH?</label>
                    <select id="spend" value={formData.spend} onChange={handleInputChange}>
                      <option value="" disabled>Who to scale on</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-20k">$5,000 - $20,000</option>
                      <option value="20k-50k">$20,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="ads">ARE YOU RUNNING PAID ADS RIGHT NOW?</label>
                    <select id="ads" value={formData.ads} onChange={handleInputChange}>
                      <option value="" disabled>No</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="planning">Planning to start</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-pill btn-pill-orange btn-submit">
                  <span>Submit Application</span>
                  <div className="btn-icon btn-icon-white">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
