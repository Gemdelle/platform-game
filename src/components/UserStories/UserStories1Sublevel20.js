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
