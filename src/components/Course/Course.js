import React from 'react';
import './Course.css';
import {useNavigate} from "react-router-dom";

const Course = ({name, description: {message, itemCount}, levels = 1, navigationUrl, course}) => {
    let itemsRange = Array.from({length: itemCount}, (_, index) => index + 1);
    let levelsRange = Array.from({length: levels}, (_, index) => index + 1);

    const navigate = useNavigate();

    const navigateToCourse = (courseSublevel) => {
        navigate(`${navigationUrl}${courseSublevel}`);
    };
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
                    <span>{message}</span>
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
                    {levelsRange.map((number) => {
                        return (<div
                            className={`level flex bg ${course.completed_sublevels && course.completed_sublevels.find((sublevelNumber) => {
                                return number === sublevelNumber
                            }) !== undefined ? 'completed' : ''}`} onClick={() => {
                            navigateToCourse(number)
                        }}><span>{number}</span></div>);
                    })}
                </div>
            </div>
        </div>
    );
};


export default Course;
