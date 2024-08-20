import React, { useState } from 'react';
import './Course.css';
import { useNavigate } from "react-router-dom";

const Course = ({
    navigationUrl,
    course: {
        description,
        goals,
        completed_sub_levels,
        name,
        total: levels,
        theoretical: { grade, score: { current, total } }
    },
    courseNumber,
    theoricalLevel
}) => {
    let levelsRange = Array.from({ length: levels }, (_, index) => index + 1);

    const navigate = useNavigate();
    const navigateToCourse = (courseSublevel) => {
        navigate(`${navigationUrl}${courseSublevel}`);
    };

    const navigateToTheoretical = () => {
        navigate(`${navigationUrl}theoretical`);
    };

    const navigateToTheory = ()=> {
        navigate(`/library/${courseNumber-1}`);
    }

    function createLevelHearts() {
        return levelsRange.map((number) => {
            let isCompleted = completed_sub_levels && completed_sub_levels.find((sublevelNumber) => {
                return number === sublevelNumber
            }) !== undefined;
            let nextAvailableSubLevel = completed_sub_levels.length + 1;
            let className = `level flex bg ${grade !== "NONE" ? isCompleted ? 'completed clickable' : nextAvailableSubLevel === number ? 'default clickable' : 'disabled' : 'disabled'}`;
            return (<div
                className={className}
                onClick={() => {
                    if (isCompleted || nextAvailableSubLevel === number) {
                        navigateToCourse(number)
                    }
                }}><span>{number}</span></div>);
        });
    }

    function countTotalSlides() {
        if(!theoricalLevel)
            return
        return theoricalLevel.subLevels.reduce((subTotal, subLevel) => {
            return subTotal + (subLevel.slides ? subLevel.slides.length : 0);
        }, 0);
    }

    function countCompletedSlides() {
        if(!theoricalLevel)
            return
        return theoricalLevel.subLevels.reduce((subTotal, subLevel) => {
            return subTotal + (subLevel.slides ? subLevel.slides.filter(slide => slide.completed).length : 0);
        }, 0);
    }

    return (
        <div className='course' id='course-1'>
            <div className='course-container flex-c'>
                <div className='corners'>
                    <div className='corner-1'></div>
                    <div className='corner-2'></div>
                    <div className='corner-3'></div>
                    <div className='corner-4'></div>
                </div>
                <div className='course-description-container'>
                    <h1>{name}</h1>
                    <div className='course-progress-bar'>
                        <div className='course-bar-interior'
                            style={{ height: `${(completed_sub_levels ? completed_sub_levels.length : 0 / levelsRange.length) * 100}%` }}></div>
                    </div>
                    <div className='course-description'>
                        <span>{description}</span>
                        {goals.map((goal, index) => {
                            return (<ul key={`goal-${index}`}>
                                <div className='heart-bullet bg'></div>
                                <li>{goal.description}</li>
                            </ul>);
                        })}

                        <div className='user-progress-container'>
                            <div className='frog-reader'></div>
                            <div className='book clickable' onClick={navigateToTheory}></div>
                            <div className='progress'>{countCompletedSlides()} / {countTotalSlides()}</div>
                        </div>
                    </div>

                </div>
                <div className='levels'>
                    <div
                        className={`level flex bg ${grade === "SILVER" ? 'silver clickable' : grade === "GOLD" ? 'gold clickable' : (courseNumber === 1 || courseNumber === 2) ? 'default clickable' : 'disabled'}`}
                        onClick={() => {
                            navigateToTheoretical()
                        }}><span>{current}</span></div>
                    {createLevelHearts()}
                </div>
            </div>
        </div>
    );
};


export default Course;
