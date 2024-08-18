import React from 'react';
import './UserStories.css';

const user_stories = [
    {
        description: "The class name should be Egg",
        validation: "VALID_CLASS_STRUCTURE"
    },
    {
        description: "Egg should have a String attribute color",
        validation: "VALID_ATTRIBUTE_COLOR"
    },
    {
        description: "Egg should have a int attribute hatchingDays",
        validation: "VALID_ATTRIBUTE_HATCHING_DAYS"
    },
    {
        description: "Egg should have a double attribute weight",
        validation: "VALID_ATTRIBUTE_WEIGHT"
    },
    {
        description: "Egg should have a double attribute temperature",
        validation: "VALID_ATTRIBUTE_TEMPERATURE"
    },
    {
        description: "Egg should have a double attribute hatchTemperature",
        validation: "VALID_ATTRIBUTE_HATCH_TEMPERATURE"
    }
  ];

const UserStories1Sublevel3 = ({validations}) => {
    return (
        <div className='user-stories'>
            <div className='bar'>
                <div className='stories-bar-interior' style={{ height: `${(validations.length / user_stories.length) * 84}%` }}></div>
            </div>
            <div className='score flex'>{validations.length} / {user_stories.length}</div>
            <ul>
                <div className='stories-container'>
                    {user_stories.map(({description: user_story, validation}) => {
                        return (<div className='a-user-story'> 
                            <div
                                className={`heart-bullet bg ${validations.includes(validation) ? 'alive' : 'dead'}`}></div>
                            <li>{user_story}</li>
                        </div>)
                    })}
                </div>
            </ul>
        </div>
    );
};

export default UserStories1Sublevel3;
