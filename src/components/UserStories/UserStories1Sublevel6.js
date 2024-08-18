import React from 'react';
import './UserStories.css';

const user_stories = [
    {
        description: "The class name should be Terrestrial",
        validation: "VALID_CLASS_STRUCTURE"
    },
    {
        description: "Terrestrial should have a String attribute name",
        validation: "VALID_ATTRIBUTE_NAME"
    },
    {
        description: "Terrestrial should have a String attribute favoriteFood",
        validation: "VALID_ATTRIBUTE_FAVORITE_FOOD"
    },
    {
        description: "Terrestrial should have a int attribute birthDay",
        validation: "VALID_ATTRIBUTE_BIRTH_DAY"
    },
    {
        description: "Terrestrial should have a int attribute birthMonth",
        validation: "VALID_ATTRIBUTE_BIRTH_MONTH"
    },
    {
        description: "Terrestrial should have a int attribute birthYear",
        validation: "VALID_ATTRIBUTE_BIRTH_YEAR"
    },
    {
        description: "Terrestrial should have a int attribute legs",
        validation: "VALID_ATTRIBUTE_LEGS"
    },
    {
        description: "Terrestrial should have a int attribute eyes",
        validation: "VALID_ATTRIBUTE_EYES"
    },
    {
        description: "Terrestrial should have a int attribute antennae",
        validation: "VALID_ATTRIBUTE_ANTENNAE"
    },
    {
        description: "Terrestrial should have a double attribute weight",
        validation: "VALID_ATTRIBUTE_WEIGHT"
    },
    {
        description: "Terrestrial should have a double attribute height",
        validation: "VALID_ATTRIBUTE_HEIGHT"
    }
];

const UserStories1Sublevel6 = ({validations}) => {
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

export default UserStories1Sublevel6;
