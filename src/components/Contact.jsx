import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer id="contact" className="cinema-contact">
      <div className="contact-box">
        <motion.span 
          className="section-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          03 // LET'S TALK
        </motion.span>

        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          HAVE AN IDEA OR <span>PROJECT?</span>
        </motion.h2>

        <p className="contact-desc">
          Main freelance projects, collaboration aur software development opportunities ke liye hamesha open hoon.
        </p>

        <motion.a 
          href="mailto:ariflon3@yahoo.com" 
          className="contact-action-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SAY HELLO ↗
        </motion.a>

        <div className="contact-footer-bottom">
          <p>© 2026 Aarif Lone. Made with Love</p>
        </div>
      </div>

      <style>{`
        .cinema-contact {
          padding: 8rem 4rem 3rem 4rem;
          background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
          text-align: center;
        }

        .contact-box {
          max-width: 750px;
          margin: 0 auto;
        }

        .contact-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          color: #f3f0e6;
          margin: 1rem 0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .contact-title span {
          color: #eab308;
        }

        .contact-desc {
          color: #a8a29e;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .contact-action-btn {
          display: inline-block;
          background: #eab308;
          color: #080705;
          padding: 1rem 2.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 0.85rem;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(234, 179, 8, 0.35);
          transition: all 0.3s;
        }

        .contact-action-btn:hover {
          background: #ca8a04;
        }

        .contact-footer-bottom {
          margin-top: 5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 2rem;
          color: #78716c;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
      `}</style>
    </footer>
  );
};

export default Contact;