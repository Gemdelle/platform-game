import React, { useState } from 'react';
import './Class2.css';
import Class2Sub1 from './Class2Sub1/Class2Sub1';
import Class2Sub2 from './Class2Sub2/Class2Sub2';
import Class2Sub3 from './Class2Sub3/Class2Sub3';
import Class2Sub4 from './Class2Sub4/Class2Sub4';
import Class2Sub5 from './Class2Sub5/Class2Sub5';
import Class2Sub6 from './Class2Sub6/Class2Sub6';
import Class2Sub7 from './Class2Sub7/Class2Sub7';

const Class2 = ({ onClose }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentClass, setCurrentClass] = useState(null); // Estado para mostrar clases específicas

  const handleButtonClick = (classComponent) => {
    setCurrentClass(classComponent);
    setShowOverlay(true); // Muestra overlay
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setCurrentClass(null); // Cierra el componente actual
  };

  return (
    <div className='class2-popup bg'>
      <div className='class2-container'>
        <button onClick={onClose} className='close-btn-class2'></button>
        <h2 className='class2-h2'>Library</h2>
        <div className='class2-content'>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class2Sub1 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2Sub2 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2Sub3 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2Sub4 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2Sub5 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2Sub6 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2Sub7 onClose={handleCloseOverlay} />)} className='btn-class21'>1. ATRIBUTOS</button>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className='center-overlay' onClick={handleCloseOverlay}></div>
      )}
      {currentClass}
    </div>
  );
};

export default Class2;
