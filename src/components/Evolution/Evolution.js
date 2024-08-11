import React from 'react';
import './Evolution.css';


const Evolution = ({ onClose }) => {
  return (
    <div className='evolution-popup bg'>
      <p className='evolution-text'>Event</p>
      <button onClick={onClose} className='close-btn-calendar'></button>
      <div className="evolution">
        <div className="pet-evolution"></div>
        <span>Your Pet is Evolving</span>
      </div>
    </div>
  );
};

export default Evolution;
