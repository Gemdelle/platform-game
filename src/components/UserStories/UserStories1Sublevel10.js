import React from 'react';
import './UserStories.css';

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
      <div className='bar'></div>
      <div className='score flex'>9/15</div>
      <ul>
        <div className='stories-container'>
        {user_stories.map((user_story)=>{ return (<div><div className='heart-bullet bg'></div><li>{user_story}</li></div>)})}
        </div>
      </ul>
    </div>
  );
};

export default UserStories;
