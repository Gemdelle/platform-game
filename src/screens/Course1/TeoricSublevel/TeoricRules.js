import React from 'react';
import './TeoricRules.css';

const TeoricRules = ({ onClose, handleGoNext }) => {
  return (
    <div className='teoric-rules-popup bg'>
      <div className='teoric-rules-content'>
        <button onClick={onClose} className='close-btn-teoric-rules'></button>
        <div className='teoric-rules-text'>
          <h2>Rules</h2>
          <p>Juga el jueguito</p>
        </div>
        
        <div className='teoric-rules-submit flex'>
          <button type='submit' className='submit-btn bg' onClick={handleGoNext}>NEXT</button></div>
      </div>
    </div>
  );
};

export default TeoricRules;
