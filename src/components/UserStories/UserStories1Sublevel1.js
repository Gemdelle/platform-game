import React from 'react';
import './UserStories.css';

const user_stories = [
      "The class name should be Terrestrial"
  ];

const UserStories1Sublevel1 = () => {
    return (
        <div className='user-stories'>
            <div className='bar'><div className='stories-bar-interior'></div></div>
            <div className='score flex'>0 / {user_stories.length}</div>
            <ul>
                <div className='stories-container'>
                {user_stories.map((user_story)=>{ return (<div><div className='heart-bullet bg'></div><li>{user_story}</li></div>)})}
                </div>
            </ul>
        </div>
    );
};

export default UserStories1Sublevel1;
