import React from 'react';
import '../UserStories.css';

const user_stories = [
    {
        description: "Create an instance of Terrestrial.",
        validation: "VALID_CLASS_INSTANCE"
    },
    {
        description: "The instance should have the String attribute name set to 'Aggro'.",
        validation: "VALID_ATTRIBUTE_NAME"
    },
    {
        description: "The instance should have the String attribute favoriteFood set to 'Jellyscuit'.",
        validation: "VALID_ATTRIBUTE_FAVORITEFOOD"
    },
    {
        description: "The instance should have the int attribute birthDay set to 15.",
        validation: "VALID_ATTRIBUTE_BIRTHDAY"
    },
    {
        description: "The instance should have the int attribute birthMonth set to 6.",
        validation: "VALID_ATTRIBUTE_BIRTHMONTH"
    },
    {
        description: "The instance should have the int attribute birthYear set to 1983.",
        validation: "VALID_ATTRIBUTE_BIRTHYEAR"
    },
    {
        description: "The instance should have the int attribute legs set to 6.",
        validation: "VALID_ATTRIBUTE_LEGS"
    },
    {
        description: "The instance should have the int attribute eyes set to 2.",
        validation: "VALID_ATTRIBUTE_EYES"
    },
    {
        description: "The instance should have the int attribute antennae set to 1.",
        validation: "VALID_ATTRIBUTE_ANTENNAE"
    },
    {
        description: "The instance should have the double attribute weight set to 62.",
        validation: "VALID_ATTRIBUTE_WEIGHT"
    },
    {
        description: "The instance should have the double attribute height set to 0.78.",
        validation: "VALID_ATTRIBUTE_HEIGHT"
    },
    {
        description: "The instance should have the String attribute mother set to 'Ephra'.",
        validation: "VALID_ATTRIBUTE_MOTHER"
    },
    {
        description: "The instance should have the String attribute father set to 'Agnalym'.",
        validation: "VALID_ATTRIBUTE_FATHER"
    }
];



const UserStories3Sublevel1 = ({validations}) => {
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

export default UserStories3Sublevel1;
