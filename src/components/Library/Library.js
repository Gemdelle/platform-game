import React, {useEffect, useMemo, useState} from 'react';
import './Library.css';
import Course from './Course1/Course';
import {useLevel} from "../utils/UserProvider";

const Library = ({onClose}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
    const {userLevels, setUserLevels} = useLevel();

    const handleButtonClick = (index) => {
        setSelectedCourseIndex(index);
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
        setSelectedCourseIndex(null);
    };

    const updateSlideCompletion = (levelIndex, subLevelIndex, slideIndex) => {
        const updatedLevels = [...userLevels];
        updatedLevels[levelIndex].subLevels[subLevelIndex].slides[slideIndex].completed = !updatedLevels[levelIndex].subLevels[subLevelIndex].slides[slideIndex].completed;
        setUserLevels(updatedLevels);
    };

    const getTotalSlides = (levelIndex) => {
        if (levelIndex === null) return 0;
        return userLevels[levelIndex].subLevels ? userLevels[levelIndex].subLevels.reduce((subTotal, subLevel) => {
            return subTotal + subLevel.slides.length;
        }, 0) : 0;
    };

    const getCompletedSlides = (levelIndex) => {
        if (levelIndex === null) return 0;
        return userLevels[levelIndex].subLevels ? userLevels[levelIndex].subLevels.reduce((subTotal, subLevel) => {
            return subTotal + subLevel.slides.filter(slide => slide.completed).length;
        }, 0) : 0;
    };

    const totalSlides = useMemo(() => getTotalSlides(selectedCourseIndex), [selectedCourseIndex, userLevels]);
    const completedSlides = useMemo(() => getCompletedSlides(selectedCourseIndex), [selectedCourseIndex, userLevels]);

    return (
        <div className='library-popup'>
            <div className='library-container'>
                <button onClick={onClose} className='close-btn-library'></button>
                <h2 className='library-h2'>Library</h2>
                <div className='library-content'>
                    <h3 className='library-h3'>Teoría Cursos</h3>
                    <div className='index-content'>
                        {userLevels.map((level, index) => (
                            <button
                                key={"index-content-" + index}
                                className='btn-library'
                                onClick={() => handleButtonClick(index)}
                            >{level.title}</button>
                        ))}
                    </div>
                </div>
            </div>
            {showOverlay && (
                <div className='center-overlay' onClick={handleCloseOverlay}></div>
            )}
            {showOverlay && selectedCourseIndex !== null && (
                <Course
                    onClose={handleCloseOverlay}
                    title={userLevels[selectedCourseIndex].title}
                    subLevels={userLevels[selectedCourseIndex].subLevels}
                    levelIndex={selectedCourseIndex}
                    updateSlideCompletion={updateSlideCompletion}
                    totalSlides={totalSlides}
                    completedSlides={completedSlides}
                    levels={userLevels}
                />
            )}
        </div>
    );
};

export default Library;