import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stack = [
    'React.js & Next.js',
    'Flutter & Dart',
    'JavaScript (ES6+) / TypeScript',
    'Node.js & REST APIs',
    'Tailwind CSS & Framer Motion',
    'Python & Automation Utilities'
  ];

  return (
    <section id="about" className="about-cinema">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02 // PROFILE</span>
          <h2 className="section-heading">ABOUT <span>ME</span></h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I focus on designing & developing high-performance web interfaces and cross-platform mobile apps. Clean architecture and modern aesthetics remain my priority.
            </p>
            <p>
              Currently, I am building and scaling live digital products like <strong>ResumeFrnd.pro</strong> and utility-driven mobile applications like<strong>DocLite</strong>             </p>
            
            <div className="stack-container">
              <span className="stack-title">CORE TECHNOLOGIES:</span>
              <ul className="stack-list">
                {stack.map((item, index) => (
                  <li key={index}>▹ {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="about-stat-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="stat-card">
              <h3>2+</h3>
              <p>Active Flagship Products Deployed</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Focus on Modern UI, Fluid Motion & Performance</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-cinema {
          padding: 6rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 3.5rem;
          align-items: center;
          margin-top: 2rem;
        }

        .about-bio p {
          color: #a8a29e;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.4rem;
        }

        .about-bio strong {
          color: #eab308;
        }

        .stack-container {
          margin-top: 2rem;
        }

        .stack-title {
          font-family: monospace;
          color: #eab308;
          font-size: 0.8rem;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 1rem;
        }

        .stack-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.8rem;
          list-style: none;
          padding: 0;
        }

        .stack-list li {
          color: #e5e5e5;
          font-family: monospace;
          font-size: 0.9rem;
        }

        .about-stat-box {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          background: rgba(18, 16, 12, 0.6);
          border: 1px solid rgba(234, 179, 8, 0.15);
          border-radius: 8px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .stat-card h3 {
          font-family: 'Anton', sans-serif;
          font-size: 3rem;
          color: #eab308;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-card p {
          color: #8a8880;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;