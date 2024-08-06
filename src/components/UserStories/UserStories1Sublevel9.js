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
