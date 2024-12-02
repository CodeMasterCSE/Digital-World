import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LogicGateSimulator from '../../components/LogicGateSimulator/LogicGateSimulator';
import './LogicGateDetail.css';

const gateData = {
  'and': {
    name: 'AND Gate',
    description: 'The AND gate outputs 1 only when all inputs are 1. It performs logical multiplication.',
    expression: 'Y = A • B',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/6/64/AND_ANSI.svg',
    truthTable: [
      { inputs: ['0', '0'], output: '0' },
      { inputs: ['0', '1'], output: '0' },
      { inputs: ['1', '0'], output: '0' },
      { inputs: ['1', '1'], output: '1' }
    ]
  },
  'or': {
    name: 'OR Gate',
    description: 'The OR gate outputs 1 when at least one input is 1. It performs logical addition.',
    expression: 'Y = A + B',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/OR_ANSI.svg',
    truthTable: [
      { inputs: ['0', '0'], output: '0' },
      { inputs: ['0', '1'], output: '1' },
      { inputs: ['1', '0'], output: '1' },
      { inputs: ['1', '1'], output: '1' }
    ]
  },
  'not': {
    name: 'NOT Gate',
    description: 'The NOT gate inverts the input. It performs logical negation.',
    expression: 'Y = A̅',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/NOT_ANSI.svg',
    truthTable: [
      { inputs: ['0'], output: '1' },
      { inputs: ['1'], output: '0' }
    ]
  },
  'nand': {
    name: 'NAND Gate',
    description: 'The NAND gate is a universal gate combining AND and NOT operations.',
    expression: 'Y = (A • B)̅',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/NAND_ANSI.svg',
    truthTable: [
      { inputs: ['0', '0'], output: '1' },
      { inputs: ['0', '1'], output: '1' },
      { inputs: ['1', '0'], output: '1' },
      { inputs: ['1', '1'], output: '0' }
    ]
  },
  'nor': {
    name: 'NOR Gate',
    description: 'The NOR gate is a universal gate combining OR and NOT operations.',
    expression: 'Y = (A + B)̅',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/NOR_ANSI.svg',
    truthTable: [
      { inputs: ['0', '0'], output: '1' },
      { inputs: ['0', '1'], output: '0' },
      { inputs: ['1', '0'], output: '0' },
      { inputs: ['1', '1'], output: '0' }
    ]
  },
  'xor': {
    name: 'XOR Gate',
    description: 'The XOR gate outputs 1 when inputs are different.',
    expression: 'Y = A ⊕ B',
    symbol: 'https://upload.wikimedia.org/wikipedia/commons/0/01/XOR_ANSI.svg',
    truthTable: [
      { inputs: ['0', '0'], output: '0' },
      { inputs: ['0', '1'], output: '1' },
      { inputs: ['1', '0'], output: '1' },
      { inputs: ['1', '1'], output: '0' }
    ]
  }
};

const LogicGateDetail = ({ isDarkMode }) => {
  const { gateType } = useParams();
  const gate = gateData[gateType];

  if (!gate) {
    return (
      <div className="error-container">
        <h1>Gate not found</h1>
        <Link to="/resources/logic-gates">Back to Logic Gates</Link>
      </div>
    );
  }

  return (
    <div className={`gate-detail-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="back-link">
        <Link to="/resources/logic-gates">
          <i className="fas fa-arrow-left"></i> Back to Logic Gates
        </Link>
      </div>

      <div className="gate-header">
        <h1>{gate.name}</h1>
        <div className="gate-symbol">
          <img src={gate.symbol} alt={`${gate.name} symbol`} />
        </div>
      </div>

      <div className="gate-content">
        <section className="description-section">
          <h2>Description</h2>
          <p>{gate.description}</p>
        </section>

        <section className="expression-section">
          <h2>Logic Expression</h2>
          <div className="expression-box">
            {gate.expression}
          </div>
        </section>

        <section className="truth-table-section">
          <h2>Truth Table</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  {gate.truthTable[0].inputs.length > 1 && <th>A</th>}
                  {gate.truthTable[0].inputs.length > 1 && <th>B</th>}
                  {gate.truthTable[0].inputs.length === 1 && <th>Input</th>}
                  <th>Output</th>
                </tr>
              </thead>
              <tbody>
                {gate.truthTable.map((row, index) => (
                  <tr key={index}>
                    {row.inputs.map((input, i) => (
                      <td key={i}>{input}</td>
                    ))}
                    <td>{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="simulator-section">
          <h2>Interactive Simulator</h2>
          <LogicGateSimulator gateType={gateType} />
        </section>
      </div>
    </div>
  );
};

export default LogicGateDetail; 