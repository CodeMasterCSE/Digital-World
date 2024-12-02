import React, { useState } from 'react';
import './LogicGateSimulator.css';

const LogicGateSimulator = ({ gateType }) => {
  const [inputA, setInputA] = useState(false);
  const [inputB, setInputB] = useState(false);

  const calculateOutput = () => {
    switch (gateType) {
      case 'and':
        return inputA && inputB;
      case 'or':
        return inputA || inputB;
      case 'not':
        return !inputA;
      case 'nand':
        return !(inputA && inputB);
      case 'nor':
        return !(inputA || inputB);
      case 'xor':
        return inputA !== inputB;
      default:
        return false;
    }
  };

  return (
    <div className="simulator">
      <div className="simulator-container">
        <div className="inputs-section">
          <div className="input-group">
            <label>Input A</label>
            <div className="input-control">
              <div className={`switch ${inputA ? 'on' : 'off'}`} onClick={() => setInputA(!inputA)}>
                <div className="switch-handle"></div>
              </div>
              <div className={`led ${inputA ? 'on' : 'off'}`}></div>
            </div>
          </div>
          
          {gateType !== 'not' && (
            <div className="input-group">
              <label>Input B</label>
              <div className="input-control">
                <div className={`switch ${inputB ? 'on' : 'off'}`} onClick={() => setInputB(!inputB)}>
                  <div className="switch-handle"></div>
                </div>
                <div className={`led ${inputB ? 'on' : 'off'}`}></div>
              </div>
            </div>
          )}
        </div>

        <div className="gate-display">
          <div className="wires-container">
            <div className={`wire input-wire ${inputA ? 'active' : ''}`}></div>
            {gateType !== 'not' && (
              <div className={`wire input-wire ${inputB ? 'active' : ''}`}></div>
            )}
          </div>
          <div className="gate-symbol">
            {gateType.toUpperCase()}
          </div>
          <div className={`wire output-wire ${calculateOutput() ? 'active' : ''}`}></div>
        </div>

        <div className="output-section">
          <div className="output-group">
            <label>Output</label>
            <div className="output-display">
              <div className={`led ${calculateOutput() ? 'on' : 'off'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogicGateSimulator; 