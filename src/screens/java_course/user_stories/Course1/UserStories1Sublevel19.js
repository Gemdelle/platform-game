import React from 'react';
import '../../../../components/UserStories/UserStories.css';

const user_stories = [
  "The class name should be Ajestyn",
  "Ajestyn should have a String attribute <name>",
  "Ajestyn should have a double attribute <weight>",
  "Ajestyn should have a double attribute <height>",
  "Ajestyn should have an int attribute <birthDay>",
  "Ajestyn should have an int attribute <birthMonth>",
  "Ajestyn should have an int attribute <birthYear>",
  "Ajestyn should have an int attribute <legs>",
  "Ajestyn should have an int attribute <eyes>",
  "Ajestyn should have an int attribute <antennae>",
  "Ajestyn should have a String attribute <favoriteFood>",
  "Ajestyn should have a List<String> attribute <friends>",
  "Ajestyn should have a List<String> attribute <food>",
  "Ajestyn should have a List<String> attribute <toys>",
  "Ajestyn should have an int attribute <happiness>",
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
