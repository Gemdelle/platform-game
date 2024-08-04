import React from 'react';
import './Library.css';

const Library = ({ onClose }) => {
  return (
    <div className='library-popup bg'>
      <div className='library-content'>
        <button onClick={onClose} className='close-btn-library'></button>
        {/* Add your FAQ content here */}
        <h2>Frequently Asked Questions</h2>
        <p>Your FAQ content goes here.</p>
      </div>
    </div>
  );
};

export default Library;
