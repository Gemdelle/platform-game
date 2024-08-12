import React from 'react';
import './UserStories.css';

const user_stories = [
  "The class name should be Nyagar",
  "Nyagar should have a String attribute <flavour>",
  "Nyagar should have a String attribute <period>",
  "Nyagar should have a String attribute <soilType>",
  "Nyagar should have a double attribute <size>",
  "Nyagar should have a double attribute <weight>",
  "Nyagar should have a boolean attribute <seeds>",
  "Nyagar should have a boolean attribute <skin>",
  "Nyagar should have a static int attribute <instances>",
  "Nyagar should have an int attribute <spikes>",
  "Nyagar should have an int attribute <petals>",
  "Nyagar should have a boolean attribute <regeneration>",
  "Nyagar should have a double attribute <vibraniumConcentration>",
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
