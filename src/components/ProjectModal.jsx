import React from 'react';
import { X, ExternalLink, Tag, Calendar } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        <img src={project.img} alt={project.title} className="modal-image" />
        <div className="modal-body">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>{project.title}</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>
            {project.longDesc || project.desc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '16px 0', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-orange)', display: 'block', marginBottom: '4px' }}>CLIENT / INDUSTRY</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>{project.client || 'Global Tech Partner'}</span>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-orange)', display: 'block', marginBottom: '4px' }}>YEAR</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>{project.year || '2026'}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
            <a href="#contact" onClick={onClose} className="btn-pill btn-pill-orange">
              <span>Request Case Study Deck</span>
              <div className="btn-icon btn-icon-white">
                <ExternalLink size={14} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
