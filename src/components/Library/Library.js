import React, {useMemo, useState} from 'react';
import './Library.css';
import Course from './Course1/Course';
import {useLevel} from "../utils/UserProvider";
import {useNavigate, useParams} from "react-router-dom";

const Library = () => {
    const { courseNumber } = useParams();
    const [showOverlay, setShowOverlay] = useState(!!courseNumber);
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(courseNumber??null);
    const {userLevels, setUserLevels} = useLevel();
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setSelectedCourseIndex(index);
        setShowOverlay(true);
    };

    const onClose = () => {
        navigate(-1);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTotalSlides = (levelIndex) => {
        if (levelIndex === null) return 0;
        return userLevels[levelIndex].subLevels ? userLevels[levelIndex].subLevels.reduce((subTotal, subLevel) => {
            return subTotal + subLevel.slides.length;
        }, 0) : 0;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getCompletedSlides = (levelIndex) => {
        if (levelIndex === null) return 0;
        return userLevels[levelIndex].subLevels ? userLevels[levelIndex].subLevels.reduce((subTotal, subLevel) => {
            return subTotal + subLevel.slides.filter(slide => slide.completed).length;
        }, 0) : 0;
    };

    const totalSlides = useMemo(() => getTotalSlides(selectedCourseIndex), [getTotalSlides, selectedCourseIndex]);
    const completedSlides = useMemo(() => getCompletedSlides(selectedCourseIndex), [getCompletedSlides, selectedCourseIndex]);

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