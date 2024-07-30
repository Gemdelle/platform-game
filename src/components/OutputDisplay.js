// src/components/OutputDisplay.js
import React from 'react';

const OutputDisplay = ({ output }) => {
    return (
        <div>
            <h2>Output:</h2>
            <pre>{output}</pre>
        </div>
    );
};

export default OutputDisplay;
