import React from 'react';
import './UserStories.css';

const user_stories = [
    "The class name should be Aerial",
    "All of the attributes should be private",
    "Aerial should have a String attribute <name>",
    "Aerial should have a double attribute <weight>",
    "Aerial should have a double attribute <height>",
    "Aerial should have an int attribute <birthDay>",
    "Aerial should have an int attribute <birthMonth>",
    "Aerial should have an int attribute <birthYear>",
    "Aerial should have an int attribute <legs>",
    "Aerial should have an int attribute <arms>",
    "Aerial should have an int attribute <eyes>",
    "Aerial should have an int attribute <wings>",
    "Aerial should have an int attribute <tails>"
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
