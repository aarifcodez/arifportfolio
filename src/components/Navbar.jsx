import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="cinema-nav">
        <div className="nav-brand">AARIF.</div>
        
        <ul className="cinema-links">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

        <a href="#contact" className="talk-btn">
          LET'S TALK ↗
        </a>
      </nav>

      <style>{`
        .cinema-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 4rem;
          background: #080705;
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-brand {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #ffffff;
          font-family: sans-serif;
        }

        .cinema-links {
          display: flex;
          gap: 2.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cinema-links a {
          text-decoration: none;
          color: #8a8880;
          font-size: 0.82rem;
          letter-spacing: 2px;
          font-weight: 600;
          font-family: sans-serif;
          transition: color 0.3s;
        }

        .cinema-links a:hover {
          color: #f59e0b;
        }

        .talk-btn {
          border: 1px solid rgba(245, 158, 11, 0.4);
          padding: 0.6rem 1.4rem;
          border-radius: 50px;
          text-decoration: none;
          color: #f3f0e6;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          font-weight: 700;
          font-family: sans-serif;
          background: rgba(245, 158, 11, 0.08);
          transition: all 0.3s ease;
        }

        .talk-btn:hover {
          background: #f59e0b;
          color: #080705;
        }
      `}</style>
    </>
  );
};

export default Navbar;