import React from 'react';
import './Instructions.css';
const Instructions = () => {
    return (
        <div className="instructions">
            <div className='instructions-container'>
            <div className='instructions-opener'><div className='instructions-orb'></div></div>
            <div className='instructions-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='instructions-closer'><div className='instructions-orb'></div></div>
            </div>
        </div>
    );
};

export default Instructions;
