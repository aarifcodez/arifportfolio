import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'ResumeFrnd',
      tagline: 'Professional AI-Powered Resume Builder',
      description: 'Ek clean aur modern web application jo users ko structured, ATS-friendly aur aesthetically refined resumes effortlessly create karne mein help karta hai.',
      tech: ['React.js', 'Vite', 'Tailwind/CSS', 'Client-side PDF Engine'],
      liveUrl: 'https://resumefrnd.pro',
      status: 'Live & Active'
    },
    {
      title: 'DocLite',
      tagline: 'Mobile Scanner, OCR & PDF Utility',
      description: 'Flutter par bani fast aur lightweight document scanner app jisme on-device high-accuracy OCR text extraction aur optimized PDF generation integrated hai.',
      tech: ['Flutter', 'Dart', 'OCR Engine', 'PDF Generation', 'Image Filter'],
      liveUrl: '#',
      status: 'Published App'
    }
  ];

  return (
    <section id="projects" className="cinema-section">
      <div className="section-header">
        <motion.span 
          className="section-number"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          01 // PORTFOLIO
        </motion.span>
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          FEATURED <span>PROJECTS</span>
        </motion.h2>
      </div>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            className="cinema-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="card-top">
              <span className="project-badge">{proj.status}</span>
              <a 
                href={proj.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="live-link"
              >
                VISIT LIVE ↗
              </a>
            </div>

            <h3 className="project-title">{proj.title}</h3>
            <p className="project-tagline">{proj.tagline}</p>
            <p className="project-desc">{proj.description}</p>

            <ul className="tech-tags">
              {proj.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <style>{`
        .cinema-section {
          padding: 7rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .section-header {
          margin-bottom: 3.5rem;
        }

        .section-number {
          font-family: monospace;
          color: #eab308;
          font-size: 0.85rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-heading {
          font-family: 'Anton', sans-serif;
          font-size: clamp(2.5rem, 4.5vw, 3.8rem);
          letter-spacing: 1.5px;
          color: #f3f0e6;
          text-transform: uppercase;
        }

        .section-heading span {
          color: #eab308;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2.5rem;
        }

        .cinema-card {
          background: rgba(18, 16, 12, 0.7);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(234, 179, 8, 0.18);
          border-radius: 8px;
          padding: 2.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cinema-card:hover {
          border-color: rgba(234, 179, 8, 0.6);
          box-shadow: 0 25px 50px rgba(234, 179, 8, 0.12);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .project-badge {
          font-size: 0.7rem;
          letter-spacing: 1.5px;
          font-family: monospace;
          color: #eab308;
          background: rgba(234, 179, 8, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          border: 1px solid rgba(234, 179, 8, 0.3);
        }

        .live-link {
          color: #f3f0e6;
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          transition: color 0.25s;
        }

        .live-link:hover {
          color: #eab308;
        }

        .project-title {
          font-family: 'Anton', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 1px;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }

        .project-tagline {
          color: #eab308;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          letter-spacing: 0.5px;
        }

        .project-desc {
          color: #a8a29e;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tech-tags li {
          font-family: monospace;
          font-size: 0.75rem;
          color: #d6d3d1;
          background: rgba(255, 255, 255, 0.04);
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
};

export default Projects;