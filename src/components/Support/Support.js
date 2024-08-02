import React from 'react';
import './Support.css';
import '../popup.css';

const Support = ({ onClose }) => {
  return (
    <div className='support popup'>
      <div className='support-content'>
        <button onClick={onClose} className='close-btn'>Close</button>
        <h2>Support</h2>
        <p>Your Support content goes here.</p>
      </div>
    </div>
  );
};

export default Support;
