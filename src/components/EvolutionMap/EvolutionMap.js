import React from 'react';
import './EvolutionMap.css';

const EvolutionMap = ({ onClose }) => {
  return (
    <div className='evolutionMap-popup bg'>
      <div className='evolutionMap-content'>
        <button onClick={onClose} className='close-btn-evolutionmap'></button>
      </div>
    </div>
  );
};

export default EvolutionMap;
