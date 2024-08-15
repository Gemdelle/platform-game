import React, { useState } from 'react';
import './Class5.css';
import Class5Sub1 from './Class5Sub1/Class5Sub1';
import Class5Sub2 from './Class5Sub2/Class5Sub2';
import Class5Sub3 from './Class5Sub3/Class5Sub3';
import Class5Sub4 from './Class5Sub4/Class5Sub4';
import Class5Sub5 from './Class5Sub5/Class5Sub5';
import Class5Sub6 from './Class5Sub6/Class5Sub6';
import Class5Sub7 from './Class5Sub7/Class5Sub7';

const Class5 = ({ onClose }) => {
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
    <div className='class5-popup bg'>
      <div className='class5-container'>
        <button onClick={onClose} className='close-btn-class5'></button>
        <h2 className='class5-h2'>Library</h2>
        <div className='class5-content'>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class5Sub1 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class5Sub2 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class5Sub3 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class5Sub4 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class5Sub5 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class5Sub6 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class5Sub7 onClose={handleCloseOverlay} />)} className='btn-class51'>1. ATRIBUTOS</button>
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

export default Class5;
