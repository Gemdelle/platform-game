import React from 'react';
import './UserStories.css';

const user_stories = [
    "The class name should be Aquatic",
    "All of the attributes should be private",
    "Aquatic should have a String attribute <name>",
    "Aquatic should have a double attribute <weight>",
    "Aquatic should have a double attribute <height>",
    "Aquatic should have an int attribute <birthDay>",
    "Aquatic should have an int attribute <birthMonth>",
    "Aquatic should have an int attribute <birthYear>",
    "Aquatic should have an int attribute <legs>",
    "Aquatic should have an int attribute <eyes>",
    "Aquatic should have an int attribute <fins>",
    "Aquatic should have an int attribute <tails>"
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
