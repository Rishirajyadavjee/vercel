import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import jacketImg from '/assets/jacket.jpg';
import headphonesImg from '/assets/headphones.jpg';
import cosmeticsImg from '/assets/cosmetics.jpg';
import dashboardImg from '/assets/dashboard.jpg';
import fashionImg from '/assets/fashion.jpg';
import portraitImg from '/assets/portrait.jpg';

export default function ProjectsPage({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const allProjects = [
    {
      id: 1,
      title: 'Outerwear Brand System',
      category: 'Brand Strategy',
      tags: ['Brand Strategy', 'Apparel'],
      desc: 'End-to-end brand identity & apparel packaging strategy for premium urban fashion.',
      longDesc: 'Detailed outerwear design system covering eco-conscious material sourcing, hangtag typography, woven label specs, and e-commerce launch visual guidelines.',
      img: jacketImg,
      year: '2026',
      client: 'Vanguard Fashion'
    },
    {
      id: 2,
      title: 'Acoustic Wireless Series',
      category: 'Packaging',
      tags: ['Packaging', 'Hardware'],
      desc: 'Industrial product packaging & interaction design for flagship audio hardware.',
      longDesc: 'Unboxing experience for noise-canceling wireless headphones with molded pulp inserts, gold foil embellishments, and quick-start mobile pairing manual design.',
      img: headphonesImg,
      year: '2025',
      client: 'Acoustics Audio'
    },
    {
      id: 3,
      title: 'Nuit Restorative Serum',
      category: 'Brand Strategy',
      tags: ['Creative Direction', 'Cosmetics'],
      desc: 'Luxury skincare bottle packaging, tactile material selection, and brand positioning.',
      longDesc: 'Frosted obsidian glass dropper bottle design with minimalist typography, tactile outer boxes, and social media campaign creative direction.',
      img: cosmeticsImg,
      year: '2025',
      client: 'Nuit Laboratories'
    },
    {
      id: 4,
      title: 'Nexus AI Workspace',
      category: 'AI Interfaces',
      tags: ['AI Interfaces', 'SaaS Design'],
      desc: 'Intelligent dark-mode web application for next-gen machine learning workflow ops.',
      longDesc: 'Data dashboard UI/UX designed for complex LLM monitoring, GPU cluster metrics visualizer, real-time code output terminal, and multi-tenant workspace routing.',
      img: dashboardImg,
      year: '2026',
      client: 'Nexus Intelligence'
    },
    {
      id: 5,
      title: 'Nocturne Luxury Fragrance',
      category: 'Packaging',
      tags: ['E-Commerce', 'Branding'],
      desc: 'High-end editorial e-commerce platform & bespoke digital visual identity system.',
      longDesc: 'Editorial digital experience for niche unisex perfumes featuring custom webGL bottle rotators, note breakdown interactive pyramids, and seamless Shopify Checkout.',
      img: fashionImg,
      year: '2025',
      client: 'Nocturne Parfum'
    },
    {
      id: 6,
      title: 'Global Studio Identity',
      category: 'UI UX Design',
      tags: ['UI UX Design', 'Webflow'],
      desc: 'Scalable design systems & interactive Webflow web experience for creative agency.',
      longDesc: 'Comprehensive design system token library, component guidelines, dynamic CMS portfolio engine, and Webflow implementation with 60fps canvas scroll animation.',
      img: portraitImg,
      year: '2024',
      client: 'Folioblox Studio'
    }
  ];

  const categories = ['All', 'Brand Strategy', 'Packaging', 'AI Interfaces', 'UI UX Design'];

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <div className="projects-page">
      {/* Page Hero */}
      <section className="projects-hero-section">
        <div className="projects-hero-container">
          <span className="section-tag-pill">● SELECTED WORKS</span>
          <h1 className="projects-hero-title">
            Crafting Iconic Digital Products & Brand Experiences
          </h1>
          <p className="projects-hero-subtext">
            Explore our portfolio of brand identity, packaging design, Webflow development, and AI-driven interfaces built for industry-leading brands worldwide.
          </p>

          {/* Filter Bar */}
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Showcase */}
      <section className="projects-grid-section">
        <div className="projects-grid-container">
          <div className="projects-main-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-showcase-card">
                <div className="project-img-box">
                  <img src={project.img} alt={project.title} loading="lazy" />
                  <span className="project-year-badge">{project.year}</span>
                </div>
                <div className="project-info-content">
                  <div className="project-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-card-heading">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>
                  <button
                    className="project-link-btn"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="process-section" style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="workflow-container">
          <div className="workflow-header" style={{ display: 'block', textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag-pill">● OUR METHODOLOGY</span>
            <h2 className="workflow-title" style={{ maxWidth: '800px', margin: '12px auto' }}>
              How We Turn Bold Ideas Into High-Converting Digital Assets
            </h2>
          </div>

          <div className="color-cards-grid">
            <div className="color-card">
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-orange)' }}>01</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Research & Discovery</h3>
              <p className="color-card-desc">Deep market benchmarking, visual audits, and positioning to define target brand identity.</p>
            </div>

            <div className="color-card">
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-orange)' }}>02</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Brand Architecture</h3>
              <p className="color-card-desc">Crafting typography, design tokens, color systems, and core messaging framework.</p>
            </div>

            <div className="color-card">
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-orange)' }}>03</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Interactive Prototyping</h3>
              <p className="color-card-desc">High-fidelity UI design, motion modeling, and responsive component library creation.</p>
            </div>

            <div className="color-card">
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-orange)' }}>04</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Engineering & Launch</h3>
              <p className="color-card-desc">Clean React code, Webflow CMS setup, performance optimization, and global deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Impact Section */}
      <section style={{ padding: '100px 0', background: 'rgba(12,13,18,0.8)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="workflow-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag-pill">● CLIENT IMPACT & REVIEWS</span>
            <h2 className="workflow-title" style={{ maxWidth: '800px', margin: '12px auto' }}>
              Trusted by Founders & Product Leaders Worldwide
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '60px' }}>
            <div className="stat-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>98%</div>
              <div style={{ color: 'var(--accent-orange)', fontWeight: 700, marginTop: '8px' }}>Client Satisfaction Rate</div>
            </div>
            <div className="stat-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>$50M+</div>
              <div style={{ color: 'var(--accent-orange)', fontWeight: 700, marginTop: '8px' }}>Client Revenue Growth</div>
            </div>
            <div className="stat-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>14+</div>
              <div style={{ color: 'var(--accent-orange)', fontWeight: 700, marginTop: '8px' }}>International Design Awards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
