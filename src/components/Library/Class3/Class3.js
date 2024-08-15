import React, { useState } from 'react';
import './Class3.css';
import Class3Sub1 from './Class3Sub1/Class3Sub1';
import Class3Sub2 from './Class3Sub2/Class3Sub2';
import Class3Sub3 from './Class3Sub3/Class3Sub3';
import Class3Sub4 from './Class3Sub4/Class3Sub4';
import Class3Sub5 from './Class3Sub5/Class3Sub5';
import Class3Sub6 from './Class3Sub6/Class3Sub6';
import Class3Sub7 from './Class3Sub7/Class3Sub7';

const Class3 = ({ onClose }) => {
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
    <div className='class3-popup bg'>
      <div className='class3-container'>
        <button onClick={onClose} className='close-btn-class3'></button>
        <h2 className='class3-h2'>Library</h2>
        <div className='class3-content'>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class3Sub1 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class3Sub2 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class3Sub3 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class3Sub4 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class3Sub5 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class3Sub6 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class3Sub7 onClose={handleCloseOverlay} />)} className='btn-class31'>1. ATRIBUTOS</button>
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

export default Class3;
