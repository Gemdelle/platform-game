import React, { useState } from 'react';
import './Library.css';
import Course from './Course1/Course';
import temas_1_0 from './Course1/data/1-0-Temas';
import temas_1_1 from './Course1/data/1-1-DatosPrimitivosYNoPrimitivos';
import temas_1_2 from './Course1/data/1-2-Diferencias';
import temas_1_3 from './Course1/data/1-3-Metodos';
import temas_2_0 from './Course1/data/2-0-Temas';
import temas_2_1 from './Course1/data/2-1-LenguajeTipadoVsNoTipado';
import temas_2_2 from './Course1/data/2-2-Sintaxis';
import temas_2_3 from './Course1/data/2-3-VentajasYDesventajas';
import temas_3_0 from './Course1/data/3-0-Temas';
import temas_3_1 from './Course1/data/3-1-Clases';
import temas_3_2 from './Course1/data/3-2-Objetos';
import temas_3_3 from './Course1/data/3-3-AtributosStatic';
import temas_3_4 from './Course1/data/3-4-AtributosFinal';
import temas_3_5 from './Course1/data/3-5-DefinicionDeClases';
import temas_3_6 from './Course1/data/3-6-DefinicionDeAtirbutos';

const levels = [
  {
    title: "1. TIPOS DE DATOS", 
    subLevels: [
      temas_1_0,
      temas_1_1,
      temas_1_2,
      temas_1_3
    ]
  },
  {
    title: "2. JAVA VS. PYTHON",
    subLevels: [
      temas_2_0,
      temas_2_1,
      temas_2_2,
      temas_2_3
    ]
  },
  {
    title: "3. CLASES Y ATRIBUTOS",
    subLevels: [
      temas_3_0,
      temas_3_1,
      temas_3_2,
      temas_3_3,
      temas_3_4,
      temas_3_5,
      temas_3_6
    ]
  },
  {
    title: "4. CONSTRUCTOR"
  },
  {
    title: "5. INSTANCIACIÓN"
  },
  {
    title: "6. SETTERS & GETTERS"
  },
  {
    title: "7. MÉTODOS"
  },
  {
    title: "8. ATRIBUTOS AVANZADOS"
  }
]

const Library = ({ onClose }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);
  const [currentLevels, setCurrentLevels] = useState([...levels]);

  const handleButtonClick = (classComponent) => {
    setCurrentClass(classComponent);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setCurrentClass(null);
  };

  const updateSlideCompletion = (levelIndex, subLevelIndex, slideIndex) => {
    const updatedLevels = [...currentLevels];
    updatedLevels[levelIndex].subLevels[subLevelIndex].slides[slideIndex].completed = true;
    setCurrentLevels(updatedLevels);
  };

  const getTotalSlides = () => {
    return currentLevels.reduce((total, level) => {
      return total + (level.subLevels ? level.subLevels.reduce((subTotal, subLevel) => {
        return subTotal + subLevel.slides.length;
      }, 0) : 0);
    }, 0);
  };

  const getCompletedSlides = () => {
    return currentLevels.reduce((total, level) => {
      return total + (level.subLevels ? level.subLevels.reduce((subTotal, subLevel) => {
        return subTotal + subLevel.slides.filter(slide => slide.completed).length;
      }, 0) : 0);
    }, 0);
  };

  const totalSlides = getTotalSlides();
  const completedSlides = getCompletedSlides();

  return (
      <div className='library-popup'>
        <div className='library-container'>
          <button onClick={onClose} className='close-btn-library'></button>
          <h2 className='library-h2'>Library</h2>
          <div className='library-content'>
            <h3 className='library-h3'>Teoría Cursos</h3>
            <div className='index-content'>
              {currentLevels.map((level, index) => (
                  <button key={"index-content-" + index} className='btn-library' onClick={() => handleButtonClick(
                      <Course
                          onClose={handleCloseOverlay}
                          title={level.title}
                          subLevels={level.subLevels}
                          levelIndex={index}
                          updateSlideCompletion={updateSlideCompletion}
                          totalSlides={totalSlides}
                          completedSlides={completedSlides}
                          levels={currentLevels}
                      />
                  )}>{level.title}</button>
              ))}
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


