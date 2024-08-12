import React from 'react';
import './UserStories.css';

const user_stories = [
  "The class name should be Beef",
  "Beef should have a double attribute <size>",
  "Beef should have a double attribute <weight>",
  "Beef should have a boolean attribute <ripe>",
  "Beef should have a boolean attribute <bone>",
  "Beef should have a double attribute <thickness>",
  "All of the attributes should be private"
];

const UserStories = () => {
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

export default UserStories;
