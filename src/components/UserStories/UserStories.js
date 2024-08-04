import React from 'react';
import './UserStories.css';

const user_stories = [
    [
        "The class name should be Caterpillar",
        "All attributes should be private",
        "Caterpillar should have a String attribute <name>",
        "Caterpillar should have a double attribute <weight>",
        "Caterpillar should have a double attribute <height>",
        "Caterpillar should have an int attribute <birthDay>",
        "Caterpillar should have an int attribute <birthMonth>",
        "Caterpillar should have an int attribute <birthYear>",
        "Caterpillar should have an int attribute <legs>",
        "Caterpillar should have an int attribute <eyes>",
        "Caterpillar should have an int attribute <antennae>"
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
