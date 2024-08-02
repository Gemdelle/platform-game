import React from 'react';
import './Support.css';
import '../popup.css';

const Support = ({ onClose }) => {
  return (
    <div className='support popup bg'>
      <div className='support-content'>
        <button onClick={onClose} className='close-btn'></button>
        <div className='support-text'>
          <h2>Support</h2>
          <p>Your Support content goes here.</p>
        </div>
        <div className='support-text-area flex'>
        <textarea className='support-message' placeholder='Write your comment...'></textarea>
        </div>
        
        <div className='support-submit flex'>
          <button type='submit' className='submit-btn bg'>SUBMIT</button></div>
      </div>
    </div>
  );
};

export default Support;
