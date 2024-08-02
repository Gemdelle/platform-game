import React from 'react';
import './FAQ.css';
import '../popup.css';

const FAQ = ({ onClose }) => {
  return (
    <div className='faq popup bg'>
      <div className='faq-content'>
        <button onClick={onClose} className='close-btn'></button>
        {/* Add your FAQ content here */}
        <h2>Frequently Asked Questions</h2>
        <p>Your FAQ content goes here.</p>
      </div>
    </div>
  );
};

export default FAQ;
