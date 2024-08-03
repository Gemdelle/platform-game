import React from 'react';
import './Course.css';
import {useNavigate} from "react-router-dom";
const Course = ({name, description:{ message, itemCount }, levels = 1, navigationUrl}) => {
    let itemsRange = Array.from({ length: itemCount }, (_, index) => index + 1);
    let levelsRange = Array.from({ length: levels }, (_, index) => index + 1);

    const navigate = useNavigate();

    const navigateToCourse = (courseSublevel) => {
        navigate(`${navigationUrl}${courseSublevel}`);
    };
    return (
        <div className='course' id='course-1'>
            <h1>{name}</h1>
            <div className='course-description'>
                <span>{message}</span>
                <ul>
                    {itemsRange.map((number, index) => {
                        return (<div key={`${name}-${index}`}><div className='heart-bullet bg'></div><li>Item {number}</li></div>);
                    })}
                </ul>
            </div>
            <div className='levels'>
                {levelsRange.map((number) => {
                    return (<div className='level flex bg' onClick={()=>{navigateToCourse(number)}}><span>{number}</span></div>);
                })}
            </div>
        </div>
    );
};

export default Course;
