import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? 'dark' : ''}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/simulations">Simulations</Link></li>
            <li><Link to="/quizzes">Quizzes</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Digital Electronics Learning Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 