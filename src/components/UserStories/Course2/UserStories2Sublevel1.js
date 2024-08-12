import React from 'react';
import '../UserStories.css';

const user_stories = [
    {
        description: "The class should have a constructor that initializes all variables.",
        validation: "VALID_CONSTRUCTOR_STRUCTURE"
    },
    {
        description: "The constructor should initialize the String attribute name",
        validation: "VALID_CONSTRUCTOR_NAME"
    },
    {
        description: "The constructor should initialize the String attribute favoriteFood",
        validation: "VALID_CONSTRUCTOR_FAVORITE_FOOD"
    },
    {
        description: "The constructor should initialize the int attribute birthDay",
        validation: "VALID_CONSTRUCTOR_BIRTHDAY"
    },
    {
        description: "The constructor should initialize the int attribute birthMonth",
        validation: "VALID_CONSTRUCTOR_BIRTHMONTH"
    },
    {
        description: "The constructor should initialize the int attribute birthYear",
        validation: "VALID_CONSTRUCTOR_BIRTHYEAR"
    },
    {
        description: "The constructor should initialize the int attribute legs",
        validation: "VALID_CONSTRUCTOR_LEGS"
    },
    {
        description: "The constructor should initialize the int attribute eyes",
        validation: "VALID_CONSTRUCTOR_EYES"
    },
    {
        description: "The constructor should initialize the int attribute antennae",
        validation: "VALID_CONSTRUCTOR_ANTENNAE"
    },
    {
        description: "The constructor should initialize the double attribute weight",
        validation: "VALID_CONSTRUCTOR_WEIGHT"
    },
    {
        description: "The constructor should initialize the double attribute height",
        validation: "VALID_CONSTRUCTOR_HEIGHT"
    },
    {
        description: "The constructor should initialize the String attribute mother",
        validation: "VALID_CONSTRUCTOR_MOTHER"
    },
    {
        description: "The constructor should initialize the String attribute father",
        validation: "VALID_CONSTRUCTOR_FATHER"
    }
];


const UserStories2Sublevel1 = ({validations}) => {
  return (
      <div className='user-stories'>
          <div className='bar'>
              <div className='stories-bar-interior' style={{ height: `${(validations.length / user_stories.length) * 84}%` }}></div>
          </div>
          <div className='score flex'>{validations.length} / {user_stories.length}</div>
          <ul>
              <div className='stories-container'>
                  {user_stories.map(({description: user_story, validation}) => {
                      return (<div>
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

export default UserStories2Sublevel1;
