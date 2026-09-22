import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="aura-hero">
      {/* Google Fonts Direct Import */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;700&family=Reenie+Beanie&display=swap" />

      {/* Ambient Lighting & Glow */}
      <div className="spotlight"></div>
      <div className="ambient-glow"></div>

      <div className="hero-grid">
        {/* Left Column */}
        <div className="hero-left">
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            I BUILD <br />
            <span>DIGITAL</span> <br />
            EXPERIENCES
          </motion.h1>

          <p className="hero-roles">
            FULL STACK DEVELOPER &nbsp;•&nbsp; APP DEVELOPER &nbsp;•&nbsp; UI/UX
          </p>

          <p className="hero-tagline">
            I turn bold ideas into seamless digital experiences.<br />
            Where frontend meets powerful design and clean code.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="action-btn primary-action">
              EXPLORE MY WORK ↗
            </a>
            <a 
  href="/Resume.pdf" 
  download="Aarif_Resume.pdf" 
  target="_blank" 
  rel="noreferrer" 
  className="action-btn secondary-action"
>
  DOWNLOAD RESUME ↗
</a>
          </div>
        </div>

        {/* Center Character Cutout */}
        <div className="hero-center">
          <motion.div 
            className="character-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/model.png" 
              alt="Aarif Lone" 
              className="character-img"
            />
          </motion.div>
        </div>

        {/* Right Details */}
        <div className="hero-right">
          <div className="signature-box">
            <p className="craft-quote">
              CODE IS MY CRAFT.<br />
              IMPACT IS MY GOAL.
            </p>
            <div className="signature-text">Aarif</div>
          </div>

          <div className="badge-circle">
            <span>2026</span>
            <p>PORTFOLIO</p>
          </div>
        </div>
      </div>

      {/* Hero Embedded Styles */}
      <style>{`
        .aura-hero {
          position: relative;
          min-height: calc(100vh - 80px);
          background-color: #080705;
          display: flex;
          align-items: center;
          padding: 0 4rem;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .spotlight {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(234, 179, 8, 0.28) 0%, rgba(234, 179, 8, 0.05) 50%, transparent 75%);
          filter: blur(75px);
          z-index: 1;
          pointer-events: none;
        }

        .ambient-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 140px;
          background: linear-gradient(to top, #080705 30%, transparent 100%);
          z-index: 8;
          pointer-events: none;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 0.8fr;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 5;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          z-index: 9;
        }

        .hero-headline {
          font-family: 'Anton', sans-serif !important;
          font-size: clamp(3.2rem, 5.5vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: 1.5px;
          color: #f3f0e6;
          text-transform: uppercase;
          margin: 0;
        }

        .hero-headline span {
          color: #eab308;
          text-shadow: 0 0 35px rgba(234, 179, 8, 0.5);
        }

        .hero-roles {
          margin-top: 1.4rem;
          font-size: 0.75rem;
          letter-spacing: 2px;
          color: #a8a29e;
          font-weight: 600;
        }

        .hero-tagline {
          margin-top: 1rem;
          color: #8a8880;
          font-size: 0.92rem;
          line-height: 1.6;
          max-width: 440px;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          margin-top: 2rem;
        }

        .action-btn {
          padding: 0.85rem 1.6rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .primary-action {
          background: #eab308;
          color: #080705;
        }

        .primary-action:hover {
          background: #ca8a04;
          transform: translateY(-2px);
        }

        .secondary-action {
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #f3f0e6;
          background: rgba(255, 255, 255, 0.03);
        }

        .secondary-action:hover {
          border-color: #eab308;
          color: #eab308;
        }

        .hero-center {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 100%;
          position: relative;
          z-index: 6;
        }

        .character-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .character-img {
          height: 62vh;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.95));
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          height: 50vh;
          padding-right: 1rem;
          z-index: 9;
        }

        .craft-quote {
          font-size: 0.72rem;
          letter-spacing: 2px;
          color: #8a8880;
          line-height: 1.7;
          text-align: right;
          font-weight: 500;
        }

        .signature-text {
          font-family: 'Reenie Beanie', cursive !important;
          font-size: 3.5rem;
          color: #eab308;
          text-align: right;
          margin-top: -0.3rem;
          transform: rotate(-6deg);
        }

        .badge-circle {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          border: 1px dashed rgba(234, 179, 8, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(234, 179, 8, 0.04);
        }

        .badge-circle span {
          font-weight: 800;
          font-size: 1.15rem;
          color: #eab308;
          line-height: 1;
        }

        .badge-circle p {
          font-size: 0.6rem;
          letter-spacing: 1.5px;
          color: #8a8880;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
  .aura-hero {
    height: auto;
    min-height: auto;
    padding: 3rem 1.5rem 4rem 1.5rem;
    overflow: visible;
  }

  .spotlight {
    width: 300px;
    height: 300px;
    top: 50%;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }

  .hero-left {
    align-items: center;
  }

  .hero-headline {
    font-size: 2.8rem;
    line-height: 1;
  }

  .hero-roles {
    font-size: 0.7rem;
    letter-spacing: 1px;
    margin-top: 1rem;
  }

  .hero-tagline {
    font-size: 0.85rem;
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .action-btn {
    width: 100%;
    text-align: center;
  }

  .hero-center {
    width: 100%;
    order: 2;
  }

  .character-img {
    height: 45vh;
    max-height: 360px;
  }

  .hero-right {
    height: auto;
    align-items: center;
    padding-right: 0;
    order: 3;
    gap: 1.5rem;
  }

  .craft-quote {
    text-align: center;
  }

  .signature-text {
    text-align: center;
    transform: none;
    font-size: 3rem;
  }
}
      `}</style>
    </section>
  );
};

export default Hero;