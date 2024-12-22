import React from 'react';
import './NorImplementation.css';

const NorImplementation = () => {
  return (
    <div className="nor-implementation-page">
      <h1>NOR Gate Implementation</h1>
      <p>Learn how to implement basic and exclusive gates using NOR gates.</p>
      <div className="implementation-details">
        <h2>AND Gate using NOR</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/AND_using_NOR.svg/1024px-AND_using_NOR.svg.png" alt="AND using NOR" />
        <p className="logic-expression">Logic Expression: (A NOR A) NOR (B NOR B) = A ∧ B</p>
        
        <h2>OR Gate using NOR</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/OR_using_NOR.svg/1024px-OR_using_NOR.svg.png" alt="OR using NOR" />
        <p className="logic-expression">Logic Expression: (A NOR B) NOR (A NOR B) = A ∨ B</p>
        
        <h2>NOT Gate using NOR</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/NOT_from_NOR.svg/1024px-NOT_from_NOR.svg.png" alt="NOT using NOR" />
        <p className="logic-expression">Logic Expression: A NOR A = ¬A</p>
        
        <h2>XOR Gate using NOR</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/XOR_from_NOR_2.svg/1024px-XOR_from_NOR_2.svg.png" alt="XOR using NOR" />
        <p className="logic-expression">Logic Expression: ((A NOR B) NOR A) NOR ((A NOR B) NOR B) = A ⊕ B</p>

        <h2>NAND Gate using NOR</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NAND_from_NOR.svg/1024px-NAND_from_NOR.svg.png" alt="NAND using NOR" />
        <p className="logic-expression">Logic Expression: ((A NOR A) NOR (B NOR B)) NOR ((A NOR A) NOR (B NOR B)) = ¬(A ∧ B)</p>
      </div>
    </div>
  );
};

export default NorImplementation;