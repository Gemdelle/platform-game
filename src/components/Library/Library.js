import React, { useState } from 'react';
import './Library.css';
import Course1 from './Course1/Course-1';


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
            <button className='btn-library' onClick={() => handleButtonClick(<Course1 onClose={handleCloseOverlay} />)}>1. ATRIBUTOS</button>
            <button className='btn-library'>2. CONSTRUCTOR</button>
            <button className='btn-library'>3. INSTANCIACIÓN</button>
            <button className='btn-library'>4. SETTERS & GETTERS</button>
            <button className='btn-library'>5. MÉTODOS</button>
            <button className='btn-library'>6. ATRIBUTOS AVANZADOS</button>
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
