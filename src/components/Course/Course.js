import React from 'react';
import './Course.css';
import {useNavigate} from "react-router-dom";

const Course = ({
                    navigationUrl,
                    course: {
                        description,
                        item_count:itemCount,
                        completed_sublevels,
                        name,
                        total: levels,
                        current: currentCourseLevel,
                        theoretical: {grade, score: {current, total}}
                    }
                }) => {
    let itemsRange = Array.from({length: itemCount}, (_, index) => index + 1);
    let levelsRange = Array.from({length: levels}, (_, index) => index + 1);

    const navigate = useNavigate();
    const navigateToCourse = (courseSublevel) => {
        navigate(`${navigationUrl}${courseSublevel}`);
    };

    const navigateToTheoretical = () => {
        navigate(`${navigationUrl}theoretical`);
    };

    function createLevelHearts() {
        return levelsRange.map((number) => {
            let isCompleted = completed_sublevels && completed_sublevels.find((sublevelNumber) => {
                return number === sublevelNumber
            }) !== undefined;
            let className = `level flex bg ${grade !== "NONE" ? isCompleted ? 'completed' : currentCourseLevel === number ? 'default' : 'disabled' : 'disabled'}`;
            return (<div
                className={className}
                onClick={() => {
                    if(className.includes("default")){
                        navigateToCourse(number)
                    }
                }}><span>{number}</span></div>);
        });
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
                    <div className='course-description'>
                        <span>{description}</span>
                        <ul>
                            {itemsRange.map((number, index) => {
                                return (<div key={`${name}-${index}`}>
                                    <div className='heart-bullet bg'></div>
                                    <li>Item {number}</li>
                                </div>);
                            })}
                        </ul>
                        <div className='course-progress-bar'>
                            <div className='course-bar-interior'></div>
                        </div>

                    </div>
                </div>
                <div className='levels'>
                    <div
                        className={`level flex bg ${grade === "SILVER" ? 'silver' : grade === "GOLD" ? 'gold' : 'default'}`}
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
