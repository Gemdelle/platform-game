import React, {useEffect, useState} from 'react';
import '../Library.css';
import './Models.css';

const Slides = ({ onClose, subLevel: { title, slides }, levelIndex, subLevelIndex, updateSlideCompletion, totalSlides, completedSlides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handleCompleteClick = () => {
        updateSlideCompletion(levelIndex, subLevelIndex, currentIndex);
    };

    return (
        <div className='library-popup'>
            <div className='library-container'>
                <button onClick={onClose} className='close-btn-library'></button>
                <div className='progress-container'>
                    <div className='progress-and-button'>
                        <div
                            className={`button ${slides[currentIndex].completed ? 'completed' : ''}`}
                            onClick={handleCompleteClick}
                        >
                        </div>
                        <div className='progress'>
                            <span className='correct'>{completedSlides}</span>
                            <span className='total'>{totalSlides}</span>
                        </div>
                    </div>
                </div>
                <div className='card-header'>
                    <div className='library-index'>{currentIndex + 1}</div>
                </div>
                <div className='card-content'>
                    <div>
                        <div>{title}</div>
                        <div>{slides[currentIndex].subtitle}</div>
                        {slides[currentIndex].texts}
                    </div>
                    <div>
                        {slides[currentIndex].previews}
                    </div>
                </div>
            </div>
            <div className='library-arrows'>
                {currentIndex !== 0 ? <div className='arrow-left' onClick={handleLeftClick}></div> : null}
                {currentIndex !== slides.length - 1 ?
                    <div className='arrow-right' onClick={handleRightClick}></div> : null}
            </div>
        </div>
    );
};

export default Slides;
