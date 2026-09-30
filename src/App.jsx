import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanvasScrollBg from './components/CanvasScrollBg';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app-main-layout">
      {/* Scroll Canvas Background Animation */}
      <CanvasScrollBg />

      {/* Content Layer */}
      <div className="content-wrapper">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage onSelectProject={(p) => setSelectedProject(p)} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage onSelectProject={(p) => setSelectedProject(p)} />}
            />
          </Routes>
        </main>

        {/* Enhanced Footer with Social Media Links */}
        <Footer />
      </div>

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
