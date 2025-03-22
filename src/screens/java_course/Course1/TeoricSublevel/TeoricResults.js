import React from 'react';
import './TeoricResults.css';

const TeoricResults = ({ onClose, handleGoNext, score, questionsToAnswer }) => {
  return (
    <div className='teoric-rules-popup bg'>
      <div className='teoric-rules-content'>
        <button onClick={onClose} className='close-btn-teoric-rules clickable'></button>
        <div className='teoric-rules-text'>
          <h2>Results</h2>
          <p>You scored {score} out of {questionsToAnswer.length}</p>
        </div>
        
        <div className='teoric-rules-submit flex'>
          <button type='submit' className='submit-btn bg clickable' onClick={handleGoNext}>EXIT</button></div>
        <div className='teoric-rules-submit flex'>
          <button type='submit' className='submit-btn bg clickable' onClick={handleGoNext}>RESTART</button></div>
      </div>
    </div>
  );
};

export default TeoricResults;
