import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`hero-section ${isDarkMode ? 'dark' : ''}`}>
      <div className="hero-background">
        <div className="circuit-pattern"></div>
      </div>
      <div className="hero-content">
        <h1>Welcome to Digital World</h1>
        <p>Learn, Explore, and Master Digital Electronics.</p>
        <div className="hero-buttons">
          <button 
            className="hero-btn primary" 
            onClick={() => navigate('/resources')}
          >
            <i className="fas fa-book-open"></i>
            Start Learning
          </button>
          <button 
            className="hero-btn secondary" 
            onClick={() => navigate('/simulations')}
          >
            <i className="fas fa-laptop-code"></i>
            Try Simulations
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 