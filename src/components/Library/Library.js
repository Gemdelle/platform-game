import React, { useState } from 'react';
import './Library.css';
import Course from './Course1/Course';

const levels = [
  {
    title: "1. ATRIBUTOS",
    subLevels: [
      {
        title: "Conceptos atributos primitivos",
        slides: [
          {
            subtitle: "Datos primitivos vs. no primitivos",
            texts: [
                <div>En Java se utilizan tipos de datos primitivos y no primitivos. Las diferencias más importantes son cuatro.</div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>
            ]
          }
        ],

      }
    ]
  }
]

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
            {levels.map((level, index)=> (
                <button key={"index-content-"+index} className='btn-library' onClick={() => handleButtonClick(<Course onClose={handleCloseOverlay} title={level.title} subLevels={level.subLevels} />)}>{level.title}</button>
            ))}

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
