import React, { useState } from 'react';
import '../Library.css';
import './Models.css';

const Course1 = ({ onClose }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentClass, setCurrentClass] = useState(null); // Estado para mostrar clases específicas
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de las imágenes

  // New access
  const images = [
    '/assets/giph1.png',
    '/assets/giph2.png',
    '/assets/giph3.png',
    '/assets/giph4.png'
  ];

  const handleButtonClick = (classComponent) => {
    setCurrentClass(classComponent);
    setShowOverlay(true); // Muestra overlay
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setCurrentClass(null); // Cierra el componente actual
  };

  // Función para manejar el clic en la flecha izquierda
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  // Función para manejar el clic en la flecha derecha
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const cardClass = currentIndex === 0 ? 'card-green' : (currentIndex === 0 ? 'index' : 'card');

  return (
    <div className='library-popup'>
      <div className='library-container'>
        <button onClick={onClose} className='close-btn'></button>
        <div className='card-header'>
          <h2 className='class1-h2'>Library</h2>
          <div className='library-index'>{currentIndex + 1}</div>
        </div>
        <div className='card-content'>
          <div className={cardClass}>
            {/* Aquí puedes agregar contenido específico de la tarjeta */}
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className='center-overlay' onClick={handleCloseOverlay}></div>
      )}
      {currentClass}

      <div className='library-arrows'>
        <div className='arrow-left' onClick={handleLeftClick}></div>
        <div className='arrow-right' onClick={handleRightClick}></div>
      </div>
    </div>
  );
};

export default Course1;
