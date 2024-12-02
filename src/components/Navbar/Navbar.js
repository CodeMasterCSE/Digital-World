import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-brand">
        <Link to="/" className="logo" onClick={handleNavClick}>
          <i className="fas fa-microchip"></i>
          <span>Digital World</span>
        </Link>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={handleNavClick}>
          <i className="fas fa-home"></i> Home
        </Link>
        
        <Link to="/resources" className="nav-link" onClick={handleNavClick}>
          <i className="fas fa-book"></i> Resources
        </Link>

        <Link to="/simulations" className="nav-link" onClick={handleNavClick}>
          <i className="fas fa-laptop-code"></i> Simulations
        </Link>

        <Link to="/quizzes" className="nav-link" onClick={handleNavClick}>
          <i className="fas fa-question-circle"></i> Quizzes
        </Link>
      </div>

      <div className="nav-right">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 