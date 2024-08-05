import React from 'react';
import './UserStories.css';

const user_stories = [
    [
      "The class name should be Terrestrial",
      "All of the attributes should be private",
      "Terrestrial should have a String attribute <name>",
      "Terrestrial should have a double attribute <weight>",
      "Terrestrial should have a double attribute <height>",
      "Terrestrial should have an int attribute <birthDay>",
      "Terrestrial should have an int attribute <birthMonth>",
      "Terrestrial should have an int attribute <birthYear>",
      "Terrestrial should have an int attribute <legs>",
      "Terrestrial should have an int attribute <eyes>",
      "Terrestrial should have an int attribute <antennae>"
    ],
    [
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
    ],
    [
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
    ]
  ];
  


const UserStories = () => {
    return (
        <div className='user-stories'>
            <div className='bar'></div>
            <div className='score flex'>9/15</div>
            <ul>
                <div className='stories-container'>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][0]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][1]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][2]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][3]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][4]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][5]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][6]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][7]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][8]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][9]}</li>
                    <div className='heart-bullet bg'></div><li>{user_stories[0][10]}</li>
                </div>
            </ul>
        </div>
    );
};

export default UserStories;
