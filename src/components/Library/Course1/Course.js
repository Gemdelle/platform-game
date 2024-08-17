import React, { useState } from 'react';
import '../Library.css';
import Slides from "./Slides";


const Course = ({ onClose, title, subLevels, levelIndex, updateSlideCompletion, totalSlides, completedSlides, levels }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);

  const handleButtonClick = (classComponent) => {
    setCurrentClass(classComponent);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setCurrentClass(null);
  };

  return (
      <div className='library-popup'>
        <div className='library-container'>
          <button onClick={onClose} className='close-btn-library'></button>
          <h2 className='library-h2'>Library</h2>
          <div className='library-content'>
            <h3 className='library-h3'>{title}</h3>
            <div className='index-content'>
              {subLevels.map((subLevel, subIndex) => (
                  <button key={"index-content-" + subIndex} className='btn-library' onClick={() => handleButtonClick(
                      <Slides
                          onClose={handleCloseOverlay}
                          subLevel={levels[levelIndex].subLevels[subIndex]}
                          levelIndex={levelIndex}
                          subLevelIndex={subIndex}
                          updateSlideCompletion={updateSlideCompletion}
                          totalSlides={totalSlides}
                          completedSlides={completedSlides}
                      />
                  )}>{subLevel.title}</button>
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

export default Course;



