import React, {useState} from 'react';
import './Course.css';
import {useNavigate} from "react-router-dom";

const Course = ({
                    navigationUrl,
                    course: {
                        description,
                        goals,
                        completed_sublevels,
                        name,
                        total: levels,
                        theoretical: {grade, score: {current, total}}
                    },
                    courseNumber
                }) => {

    let levelsRange = Array.from({length: levels}, (_, index) => index + 1);
    const [availableSubLevels] = useState({
        1: [1, 2, 3, 4, 5, 6, 16, 22],
        2: [1],
        3: [1,2]
    });

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
            let className2 = `level flex bg ${(availableSubLevels[courseNumber] && availableSubLevels[courseNumber].includes(number)) ? 'default' : 'disabled'}`;

            let className = `level flex bg ${grade !== "NONE" ? isCompleted ? 'completed' : (availableSubLevels[courseNumber] && availableSubLevels[courseNumber].includes(number)) ? 'default' : 'disabled' : 'disabled'}`;
            return (<div
                className={courseNumber <= 1 ? className : className2}
                onClick={() => {
                    if (availableSubLevels[courseNumber].includes(number)) {
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
                    <div className='course-progress-bar'>
                        <div className='course-bar-interior'
                             style={{height: `${(completed_sublevels ? completed_sublevels.length : 0 / levelsRange.length) * 100}%`}}></div>
                    </div>
                    <div className='course-description'>
                        <span>{description}</span>
                        {goals.map((goal, index) => {
                            return (<ul key={`goal-${index}`}>
                                <div className='heart-bullet bg'></div>
                                <li>{goal.description}</li>
                            </ul>);
                        })}
                    </div>
                </div>
                <div className='levels'>
                    <div
                        className={`level flex bg ${grade === "SILVER" ? 'silver' : grade === "GOLD" ? 'gold' : courseNumber === 1 ? 'default' : 'disabled'}`}
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
