import React from 'react';
import './UserStories.css';

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