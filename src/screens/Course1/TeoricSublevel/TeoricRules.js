import React from 'react';
import './TeoricRules.css';

const TeoricRules = ({ onClose, handleGoNext }) => {
  return (
    <div className='teoric-rules-popup bg'>
      <div className='teoric-rules-content'>
        <button onClick={onClose} className='close-btn-teoric-rules'></button>
        
        <div className='start-score-container'>
          <div className='score-heart'><span>14 / 15</span></div>
          <span className='previous-score-txt'>Puntuación máxima</span>
        </div>
        <div className='start-rules'>
          <ul className='questionnaire-rules'>
            <li><div className='rule-1'></div><span className='rule-text'>Contestar 15 preguntas para ganar oro (rango oro)</span></li>
            <li><div className='rule-2'></div><span className='rule-text'>Contestar 12 preguntas para aprobar (rango plata)</span></li>
            <li><div className='rule-3'></div><span className='rule-text'>No hay límite de intentos</span></li>
            <li><div className='rule-4'></div><span className='rule-text'>Terminar antes de que la mascota llegue a la comida</span></li>
          </ul>
        </div>
        <div className='start-pet'>
        <div className='smoke'></div>
          <div className='pet'></div>
        </div>
        
        <div className='teoric-rules-submit flex'>
          <button type='submit' className='submit-btn bg' onClick={handleGoNext}>START</button></div>
      </div>
    </div>
  );
};

export default TeoricRules;
