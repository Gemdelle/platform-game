import React, { useState } from 'react';
import './Library.css';

const Library = ({ onClose }) => {
  const images = [
    '/assets/giph1.png',
    '/assets/giph2.png',
    '/assets/giph3.png', 
    '/assets/giph4.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de imagen inicial

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    ); // Cambia a la imagen anterior
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    ); // Cambia a la imagen siguiente
  };

  return (
    <div className='library-popup bg'>
      <div className='library-content'>
        <button onClick={onClose} className='close-btn-library'></button>
        <h2 className='library-h2'>Library</h2>
        <p className='library-description-p'>Public Class</p>
      </div>
      <div className='giph' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      </div>
      <div className='arrows-library'>
        <div className='arrow-left-library' onClick={handleLeftClick}></div>
        <div className='arrow-left-library arrow-right-library' onClick={handleRightClick}></div>
      </div>
    </div>
  );
};

export default Library;
