import React from 'react';
import './NandImplementation.css';

const NandImplementation = () => {
  return (
    <div className="nand-implementation-page">
      <h1>NAND Gate Implementation</h1>
      <p>Learn how to implement basic and exclusive gates using NAND gates.</p>
      <div className="implementation-details">
        <h2>AND Gate using NAND</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/AND_from_NAND.svg/1024px-AND_from_NAND.svg.png" alt="AND using NAND" />
        <p className="logic-expression">Logic Expression: (A NAND A) NAND (B NAND B) = A ∧ B</p>
        
        <h2>OR Gate using NAND</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/OR_from_NAND.svg/1024px-OR_from_NAND.svg.png" alt="OR using NAND" />
        <p className="logic-expression">Logic Expression: (A NAND A) NAND (B NAND B) = A ∨ B</p>
        
        <h2>NOT Gate using NAND</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NOT_from_NAND.svg/1024px-NOT_from_NAND.svg.png" alt="NOT using NAND" />
        <p className="logic-expression">Logic Expression: A NAND A = ¬A</p>
        
        <h2>XOR Gate using NAND</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/XOR_from_NAND.svg/1024px-XOR_from_NAND.svg.png" alt="XOR using NAND" />
        <p className="logic-expression">Logic Expression: (A NAND B) NAND ((A NAND (A NAND B)) NAND (B NAND (A NAND B))) = A ⊕ B</p>

        <h2>NOR Gate using NAND</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/NOR_from_NAND.svg/1024px-NOR_from_NAND.svg.png" alt="NOR using NAND" />
        <p className="logic-expression">Logic Expression: ((A NAND A) NAND (B NAND B)) NAND ((A NAND A) NAND (B NAND B)) = ¬(A ∨ B)</p>
      </div>
    </div>
  );
};

export default NandImplementation;