import React from 'react';
import './UserStories.css';

const user_stories = [
      "The class name should be Terrestrial",
      "Terrestrial should have a String attribute <name>",
      "Terrestrial should have a double attribute <weight>",
      "Terrestrial should have a double attribute <height>",
      "Terrestrial should have an int attribute <birthDay>",
      "Terrestrial should have an int attribute <birthMonth>",
      "Terrestrial should have an int attribute <birthYear>",
      "Terrestrial should have an int attribute <legs>",
      "Terrestrial should have an int attribute <eyes>",
      "Terrestrial should have an int attribute <antennae>",
      "All of the attributes should be private",
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
