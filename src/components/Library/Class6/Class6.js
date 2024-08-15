import React, { useState } from 'react';
import './Class6.css';
import Class6Sub1 from './Class6Sub1/Class6Sub1';
import Class6Sub2 from './Class6Sub2/Class6Sub2';
import Class6Sub3 from './Class6Sub3/Class6Sub3';
import Class6Sub4 from './Class6Sub4/Class6Sub4';
import Class6Sub5 from './Class6Sub5/Class6Sub5';
import Class6Sub6 from './Class6Sub6/Class6Sub6';
import Class6Sub7 from './Class6Sub7/Class6Sub7';

const Class6 = ({ onClose }) => {
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
    <div className='class6-popup bg'>
      <div className='class6-container'>
        <button onClick={onClose} className='close-btn-class6'></button>
        <h2 className='class6-h2'>Library</h2>
        <div className='class6-content'>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class6Sub1 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class6Sub2 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class6Sub3 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class6Sub4 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class6Sub5 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class6Sub6 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class6Sub7 onClose={handleCloseOverlay} />)} className='btn-class61'>1. ATRIBUTOS</button>
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

export default Class6;
