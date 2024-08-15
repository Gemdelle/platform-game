import React, { useState } from 'react';
import './Library.css';
import Class1 from './Class1/Class1';
import Class2 from './Class2/Class2';
import Class3 from './Class3/Class3';
import Class4 from './Class4/Class4';
import Class5 from './Class5/Class5';
import Class6 from './Class6/Class6';


const Library = ({ onClose }) => {
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
    <div className='library-popup'>
      <div className='library-container'>
        <button onClick={onClose} className='close-btn-library'></button>
        <h2 className='library-h2'>Library</h2>
        <div className='library-content'>
          <h3 className='library-h3'>Teoría Cursos</h3>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class1 onClose={handleCloseOverlay} />)} className='btn-library'>1. ATRIBUTOS</button>
            <button onClick={() => handleButtonClick(<Class2 onClose={handleCloseOverlay} />)} className='btn-library'>2. CONSTRUCTOR</button>
            <button onClick={() => handleButtonClick(<Class3 onClose={handleCloseOverlay} />)} className='btn-library'>3. INSTANCIACIÓN</button>
            <button onClick={() => handleButtonClick(<Class4 onClose={handleCloseOverlay} />)} className='btn-library'>4. SETTERS & GETTERS</button>
            <button onClick={() => handleButtonClick(<Class5 onClose={handleCloseOverlay} />)} className='btn-library'>5. MÉTODOS</button>
            <button onClick={() => handleButtonClick(<Class6 onClose={handleCloseOverlay} />)} className='btn-library'>6. ATRIBUTOS AVANZADOS</button>
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

export default Library;
