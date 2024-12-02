import React from 'react';
import './NumberSystemsPage.css';

const NumberSystemsPage = ({ isDarkMode }) => {
    const numberSystems = [
        {
            id: 'binary',
            title: 'Binary (Base-2)',
            description: 'The binary number system uses only two digits: 0 and 1. It is fundamental to digital electronics and computer systems.',
            examples: ['Binary: 1010 = Decimal: 10', 'Binary: 1100 = Decimal: 12']
        },
        {
            id: 'decimal',
            title: 'Decimal (Base-10)',
            description: 'The decimal number system is our standard number system with ten digits (0-9). It\'s the most commonly used system in everyday life.',
            examples: ['Decimal: 42', 'Decimal: 255']
        },
        {
            id: 'octal',
            title: 'Octal (Base-8)',
            description: 'The octal number system uses eight digits (0-7). While less common today, it\'s still used in some computing contexts.',
            examples: ['Octal: 52 = Decimal: 42', 'Octal: 377 = Decimal: 255']
        },
        {
            id: 'hexadecimal',
            title: 'Hexadecimal (Base-16)',
            description: 'The hexadecimal system uses 16 digits (0-9 and A-F). It\'s commonly used in programming and digital systems for more compact number representation.',
            examples: ['Hex: 2A = Decimal: 42', 'Hex: FF = Decimal: 255']
        }
    ];

    return (
        <div className={`number-systems-page ${isDarkMode ? 'dark' : ''}`}>
            <div className="number-systems-header">
                <h1>Number Systems</h1>
                <p>Understanding different number systems is crucial in digital electronics and computer science</p>
            </div>

            <div className="number-systems-grid">
                {numberSystems.map(system => (
                    <div key={system.id} className="number-system-card">
                        <h2>{system.title}</h2>
                        <p className="description">{system.description}</p>
                        <div className="examples">
                            <h3>Examples:</h3>
                            <ul>
                                {system.examples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumberSystemsPage; 