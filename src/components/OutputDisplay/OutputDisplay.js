// src/components/OutputDisplay.js
import React from 'react';
import './OutputDisplay.css';
const OutputDisplay = ({ output }) => {
    return (
        <div className='output flex'>
            <pre>{output}</pre>
        </div>
    );
};

export default OutputDisplay;
