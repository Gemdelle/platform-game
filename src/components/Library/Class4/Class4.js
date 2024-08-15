import React, { useState } from 'react';
import './Class4.css';
import Class4Sub1 from './Class4Sub1/Class4Sub1';
import Class4Sub2 from './Class4Sub2/Class4Sub2';
import Class4Sub3 from './Class4Sub3/Class4Sub3';
import Class4Sub4 from './Class4Sub4/Class4Sub4';
import Class4Sub5 from './Class4Sub5/Class4Sub5';
import Class4Sub6 from './Class4Sub6/Class4Sub6';
import Class4Sub7 from './Class4Sub7/Class4Sub7';

const Class4 = ({ onClose }) => {
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
    <div className='class4-popup bg'>
      <div className='class4-container'>
        <button onClick={onClose} className='close-btn-class4'></button>
        <h2 className='class4-h2'>Library</h2>
        <div className='class4-content'>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class4Sub1 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class4Sub2 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class4Sub3 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class4Sub4 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class4Sub5 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class4Sub6 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class4Sub7 onClose={handleCloseOverlay} />)} className='btn-class41'>1. ATRIBUTOS</button>
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

export default Class4;
