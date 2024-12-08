import React from 'react';
import { Link } from 'react-router-dom';
import './LogicGatesPage.css';

const gateCategories = [
  {
    id: 'basic',
    title: 'Basic Gates',
    description: 'Fundamental building blocks of digital circuits',
    gates: [
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
      }
    ]
  },
  {
    id: 'universal',
    title: 'Universal Gates',
    description: 'Gates that can be used to implement any Boolean function',
    gates: [
      {
        id: 'nand',
        name: 'NAND Gate',
      },
      {
        id: 'nor',
        name: 'NOR Gate',
      }
    ]
  },
  {
    id: 'exclusive',
    title: 'Exclusive Gates',
    description: 'Gates that perform exclusive operations',
    gates: [
      {
        id: 'xor',
        name: 'XOR Gate',
      }
    ]
  }
];

const LogicGatesPage = ({ isDarkMode }) => {
  return (
    <div className={`logic-gates-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="page-header">
        <h1>Logic Gates</h1>
        <p>Learn about different types of logic gates and their operations</p>
      </div>

      {gateCategories.map(category => (
        <div key={category.id} className="gate-category">
          <div className="category-header">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
          
          <div className="gates-grid">
            {category.gates.map(gate => (
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
      ))}
    </div>
  );
};

export default LogicGatesPage;