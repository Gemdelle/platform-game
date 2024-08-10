import React from 'react';
import './UserStories.css';

const user_stories = [
      "The class name should be Terrestrial",
      "Terrestrial should have a String attribute <name>",
      "The attribute <name> should be private"
  ];

const UserStories = () => {
    return (
        <div className='user-stories'>
            <div className='bar'><div className='user-bar-interior'></div></div>
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
