import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'FRONTEND ENGINEERING',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive UI/UX', 'Framer Motion']
    },
    {
      category: 'MOBILE & CROSS-PLATFORM',
      skills: ['Flutter', 'Dart', 'Mobile Camera APIs', 'On-Device OCR', 'PDF Generation Engines', 'State Management']
    },
    {
      category: 'DEV TOOLS & ARCHITECTURE',
      skills: ['Git & GitHub', 'Python Automation', 'Vite & Build Tools', 'RESTful APIs', 'WordPress Development', 'Client-Side Canvas']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <motion.span 
          className="section-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          03 // ARSENAL
        </motion.span>
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          TECHNICAL <span>SKILLS</span>
        </motion.h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx} 
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
          >
            <h3 className="category-title">{cat.category}</h3>
            <ul className="skill-pills">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skills-section {
          padding: 6rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .skill-card {
          background: rgba(18, 16, 12, 0.65);
          border: 1px solid rgba(234, 179, 8, 0.15);
          border-radius: 8px;
          padding: 2.2rem;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          border-color: rgba(234, 179, 8, 0.5);
          box-shadow: 0 15px 35px rgba(234, 179, 8, 0.08);
        }

        .category-title {
          font-family: monospace;
          color: #eab308;
          font-size: 0.95rem;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.8rem;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skill-pills li {
          color: #f3f0e6;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.4rem 0.85rem;
          border-radius: 4px;
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Skills;