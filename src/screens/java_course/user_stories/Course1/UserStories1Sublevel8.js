import React from 'react';
import '../../../../components/UserStories/UserStories.css';

const user_stories = [
  "The class name should be Steak",
  "Steak should have a double attribute <size>",
  "Steak should have a double attribute <weight>",
  "Steak should have a boolean attribute <ripe>",
  "Steak should have a boolean attribute <bone>",
  "Steak should have a double attribute <nerve>",
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
