import React, { useState } from 'react';
import './Library.css';
import Course from './Course1/Course';
import conceptosPrimitivos from "./Course1/data/ConceptosPrimitivos";
import conceptosClase from "./Course1/data/ConceptosClase";

const levels = [
  {
    title: "1. ATRIBUTOS",
    subLevels: [
      conceptosPrimitivos,
      conceptosClase
    ]
  },
  {
    title: "2. CONSTRUCTOR"
  },
  {
    title: "3. INSTANCIACIÓN"
  },
  {
    title: "4. SETTERS & GETTERS"
  },
  {
    title: "5. MÉTODOS"
  },
  {
    title: "6. ATRIBUTOS AVANZADOS"
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


