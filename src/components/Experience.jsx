import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: '2025 - PRESENT',
      role: 'Founder & Full Stack Builder',
      company: 'ResumeFrnd.pro',
      description: 'End-to-end web platform develop ki jo instant client-side ATS-friendly resumes generate karti hai without server dependency. UI architecture aur conversion flow optimize kiya.'
    },
    {
      period: '2025 - 2026',
      role: 'Mobile Application Developer',
      company: 'DocLite (Indus Appstore / Android)',
      description: 'Flutter par production-ready document scanner utility develop aur release ki. On-device local OCR processing integrate ki taaki privacy aur fast text extraction deliver ho sake.'
    },
    {
      period: '2024 - PRESENT',
      role: 'Independent Software & Web Developer',
      company: 'Freelance & Open Initiatives',
      description: 'Browser-based utilities, client-side photo processing engines aur custom web experiences develop kiye using modern JavaScript, React aur Python.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <motion.span 
          className="section-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          04 // TIMELINE
        </motion.span>
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WORK & <span>EXPERIENCE</span>
        </motion.h2>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .experience-section {
          padding: 6rem 4rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .timeline-container {
          margin-top: 3rem;
          position: relative;
          padding-left: 2rem;
          border-left: 1px solid rgba(234, 179, 8, 0.25);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: calc(-2rem - 6px);
          top: 4px;
          width: 11px;
          height: 11px;
          background: #eab308;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(234, 179, 8, 0.8);
        }

        .timeline-period {
          font-family: monospace;
          color: #eab308;
          font-size: 0.8rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.4rem;
        }

        .timeline-role {
          font-family: 'Anton', sans-serif;
          font-size: 1.8rem;
          color: #ffffff;
          letter-spacing: 1px;
          margin-bottom: 0.2rem;
        }

        .timeline-company {
          color: #a8a29e;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .timeline-desc {
          color: #78716c;
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 750px;
        }
      `}</style>
    </section>
  );
};

export default Experience;