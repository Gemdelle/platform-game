import React from 'react';
import './UserStories.css';

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
