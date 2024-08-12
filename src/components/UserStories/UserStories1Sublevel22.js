import React from 'react';
import './UserStories.css';

const user_stories = [
  "The class name should be Undyum",
  "Undyum should have a String attribute <name>",
  "Undyum should have a String attribute <mood>",
  "Undyum should have a double attribute <weight>",
  "Undyum should have a double attribute <height>",
  "Undyum should have an int attribute <birthDay>",
  "Undyum should have an int attribute <birthMonth>",
  "Undyum should have an int attribute <birthYear>",
  "Undyum should have an int attribute <legs>",
  "Undyum should have an int attribute <eyes>",
  "Undyum should have an int attribute <antennae>",
  "Undyum should have a List<String> attribute <food>",
  "Undyum should have a List<String> attribute <toys>",
  "Undyum should have an int attribute <happiness>",
  "All of the attributes should be private"
];

const UserStories1Sublevel22 = ({validations}) => {
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

export default UserStories1Sublevel22;
