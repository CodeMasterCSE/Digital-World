import React from 'react';
import { Link } from 'react-router-dom';
import './LogicGatesPage.css';

const gatesData = [
  {
    id: 'and',
    name: 'AND Gate',
  },
  {
    id: 'or',
    name: 'OR Gate',
  },
  {
    id: 'not',
    name: 'NOT Gate',
  },
  {
    id: 'nand',
    name: 'NAND Gate',
  },
  {
    id: 'nor',
    name: 'NOR Gate',
  },
  {
    id: 'xor',
    name: 'XOR Gate',
  }
];

const LogicGatesPage = ({ isDarkMode }) => {
  return (
    <div className={`logic-gates-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="page-header">
        <h1>Logic Gates</h1>
        <p>Learn about different types of logic gates and their operations</p>
      </div>

      <div className="gates-grid">
        {gatesData.map(gate => (
          <Link 
            to={`/resources/logic-gates/${gate.id}`} 
            key={gate.id} 
            className="gate-card"
          >
            <h2>{gate.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogicGatesPage;