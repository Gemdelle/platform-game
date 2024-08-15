import React, { useState } from 'react';
import './Class1.css';
import Class1Sub1 from './Class1Sub1/Class1Sub1';
import Class1Sub2 from './Class1Sub2/Class1Sub2';
import Class1Sub3 from './Class1Sub3/Class1Sub3';
import Class1Sub4 from './Class1Sub4/Class1Sub4';
import Class1Sub5 from './Class1Sub5/Class1Sub5';
import Class1Sub6 from './Class1Sub6/Class1Sub6';
import Class1Sub7 from './Class1Sub7/Class1Sub7';

const Class1 = ({ onClose }) => {
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
    <div className='class1-popup bg'>
      <div className='class1-container'>
        <button onClick={onClose} className='close-btn-class1'></button>
        <h2 className='class1-h2'>Library</h2>
        <div className='class1-content'>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class1Sub1 onClose={handleCloseOverlay} />)} className='btn-class11'>Conceptos clase</button>
            <button onClick={() => handleButtonClick(<Class1Sub2 onClose={handleCloseOverlay} />)} className='btn-class11'>Conceptos atributos primitivos</button>
            <button onClick={() => handleButtonClick(<Class1Sub3 onClose={handleCloseOverlay} />)} className='btn-class11'>Conceptos atributos estáticos</button>
            <button onClick={() => handleButtonClick(<Class1Sub4 onClose={handleCloseOverlay} />)} className='btn-class11'>Conceptos atributos finales</button>
            <button onClick={() => handleButtonClick(<Class1Sub5 onClose={handleCloseOverlay} />)} className='btn-class11'>Conceptos instancia</button>
            <button onClick={() => handleButtonClick(<Class1Sub6 onClose={handleCloseOverlay} />)} className='btn-class11'>Crear una clase</button>
            <button onClick={() => handleButtonClick(<Class1Sub7 onClose={handleCloseOverlay} />)} className='btn-class11'>Definir atributos</button>
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

export default Class1;
