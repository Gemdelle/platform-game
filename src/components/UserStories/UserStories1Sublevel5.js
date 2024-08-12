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
    }
];

const UserStories1Sublevel5 = ({validations}) => {
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

export default UserStories1Sublevel5;
