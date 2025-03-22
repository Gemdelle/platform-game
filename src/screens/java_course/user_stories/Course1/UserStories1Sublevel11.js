import React from 'react';
import '../../../../components/UserStories/UserStories.css';

const user_stories = [
  "The class name should be Ohrant",
  "Ohrant should have a String attribute <flavour>",
  "Ohrant should have a String attribute <period>",
  "Ohrant should have a String attribute <soilType>",
  "Ohrant should have a double attribute <size>",
  "Ohrant should have a double attribute <weight>",
  "Ohrant should have a boolean attribute <seeds>",
  "Ohrant should have a boolean attribute <skin>",
  "Ohrant should have a static int attribute <instances>",
  "Ohrant should have a boolean attribute <regeneration>",
  "Ohrant should have a double attribute <vibraniumConcentration>",
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
