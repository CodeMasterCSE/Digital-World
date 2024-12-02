import React, { useState } from 'react';
import LogicGateSimulator from '../components/LogicGateSimulator/LogicGateSimulator';
import './LogicGateSimulatorPage.css';

const gates = [
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

const LogicGateSimulatorPage = ({ isDarkMode }) => {
  const [selectedGate, setSelectedGate] = useState(gates[0]);

  return (
    <div className={`simulator-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="page-header">
        <h1>Logic Gate Simulator</h1>
        <p>Experiment with different types of logic gates</p>
      </div>

      <div className="simulator-container">
        <div className="gate-selector">
          {gates.map(gate => (
            <button
              key={gate.id}
              className={`gate-button ${selectedGate.id === gate.id ? 'active' : ''}`}
              onClick={() => setSelectedGate(gate)}
            >
              {gate.name}
            </button>
          ))}
        </div>

        <div className="simulator-content">
          <LogicGateSimulator gateType={selectedGate.id} />
        </div>
      </div>
    </div>
  );
};

export default LogicGateSimulatorPage; 