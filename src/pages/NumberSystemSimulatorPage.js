import React, { useState } from 'react';
import './NumberSystemSimulatorPage.css';

const NumberSystemSimulatorPage = ({ isDarkMode }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputBase, setInputBase] = useState('10');
  const [error, setError] = useState('');

  const isValidNumber = (num, base) => {
    const validChars = {
      '2': /^[0-1]*$/,
      '8': /^[0-7]*$/,
      '10': /^[0-9]*$/,
      '16': /^[0-9A-Fa-f]*$/
    };
    return validChars[base].test(num);
  };

  const convertNumber = (num, fromBase) => {
    if (!num) return { binary: '', decimal: '', octal: '', hexadecimal: '' };
    
    try {
      const decimal = parseInt(num, parseInt(fromBase));
      return {
        binary: decimal.toString(2),
        decimal: decimal.toString(10),
        octal: decimal.toString(8),
        hexadecimal: decimal.toString(16).toUpperCase()
      };
    } catch (e) {
      return { binary: '', decimal: '', octal: '', hexadecimal: '' };
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || isValidNumber(value, inputBase)) {
      setInputValue(value);
      setError('');
    } else {
      setError(`Invalid ${inputBase === '2' ? 'binary' : 
                        inputBase === '8' ? 'octal' : 
                        inputBase === '16' ? 'hexadecimal' : 
                        'decimal'} number`);
    }
  };

  const conversions = convertNumber(inputValue, inputBase);

  return (
    <div className={`number-system-simulator ${isDarkMode ? 'dark' : ''}`}>
      <div className="simulator-header">
        <h1>Number System Converter</h1>
        <p>Convert between different number systems</p>
      </div>

      <div className="converter-container">
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="number-input">Enter Number:</label>
            <input
              id="number-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a number"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="base-select">Input Base:</label>
            <select
              id="base-select"
              value={inputBase}
              onChange={(e) => {
                setInputBase(e.target.value);
                setInputValue('');
                setError('');
              }}
            >
              <option value="2">Binary (Base-2)</option>
              <option value="8">Octal (Base-8)</option>
              <option value="10">Decimal (Base-10)</option>
              <option value="16">Hexadecimal (Base-16)</option>
            </select>
          </div>

          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="results-section">
          <div className="result-card">
            <h3>Binary (Base-2)</h3>
            <p>{conversions.binary || '0'}</p>
          </div>
          <div className="result-card">
            <h3>Octal (Base-8)</h3>
            <p>{conversions.octal || '0'}</p>
          </div>
          <div className="result-card">
            <h3>Decimal (Base-10)</h3>
            <p>{conversions.decimal || '0'}</p>
          </div>
          <div className="result-card">
            <h3>Hexadecimal (Base-16)</h3>
            <p>{conversions.hexadecimal || '0'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSystemSimulatorPage; 