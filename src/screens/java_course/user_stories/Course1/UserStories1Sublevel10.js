import React from 'react';
import '../../../../components/UserStories/UserStories.css';

const user_stories = [
  "The class name should be Vesprout",
  "Vesprout should have a String attribute <flavour>",
  "Vesprout should have a String attribute <period>",
  "Vesprout should have a String attribute <soilType>",
  "Vesprout should have a double attribute <size>",
  "Vesprout should have a double attribute <weight>",
  "Vesprout should have a boolean attribute <seeds>",
  "Vesprout should have a boolean attribute <skin>",
  "Vesprout should have a static int attribute <instances>",
  "Vesprout should have an int attribute <lumpiness>",
  "Vesprout should have a double attribute <seedRadius>",
  "Vesprout should have a double attribute <hardness>",
  "Vesprout should have a double attribute <hectoplasmaConcentration>",
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
