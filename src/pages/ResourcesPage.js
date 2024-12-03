import React from 'react';
import { Link } from 'react-router-dom';
import './ResourcesPage.css';

const ResourcesPage = ({ isDarkMode }) => {
  const resources = [
    {
      id: 'logic-gates',
      title: 'Logic Gates',
      description: 'Learn about different types of logic gates: AND, OR, NOT, NAND, NOR, XOR, and XNOR gates.',
      icon: 'fa-microchip',
      link: '/resources/logic-gates'
    }
  ];

  return (
    <div className={`resources-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="resources-header">
        <h1>Learning Resources</h1>
        <p>Explore our comprehensive digital electronics learning materials</p>
      </div>

      <div className="resources-grid">
        {resources.map(resource => (
          <Link to={resource.link} key={resource.id} className="resource-card">
            <div className="resource-icon">
              <i className={`fas ${resource.icon}`}></i>
            </div>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage; 