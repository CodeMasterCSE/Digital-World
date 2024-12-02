import React from 'react';
import { Link } from 'react-router-dom';
import './SimulationsPage.css';

const SimulationsPage = ({ isDarkMode }) => {
  const simulations = [
    {
      id: 'logic-gates',
      title: 'Logic Gate Simulator',
      description: 'Experiment with different logic gates and create digital circuits.',
      icon: 'fa-microchip',
      link: '/simulations/logic-gates'
    },
    {
      id: 'number-systems',
      title: 'Number System Converter',
      description: 'Convert numbers between different number systems: Binary, Decimal, Hexadecimal, and Octal.',
      icon: 'fa-calculator',
      link: '/simulations/number-systems'
    }
  ];

  return (
    <div className={`simulations-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="simulations-header">
        <h1>Interactive Simulations</h1>
        <p>Explore and experiment with digital electronics concepts</p>
      </div>

      <div className="simulations-grid">
        {simulations.map(simulation => (
          <Link to={simulation.link} key={simulation.id} className="simulation-card">
            <div className="simulation-icon">
              <i className={`fas ${simulation.icon}`}></i>
            </div>
            <h2>{simulation.title}</h2>
            <p>{simulation.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimulationsPage; 