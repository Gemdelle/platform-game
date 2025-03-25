import React from 'react';
import './UserStories.css';

const UserStoriesSublevel = ({validations, user_stories}) => {
    return (
        <div className='user-stories'>
            <div className='bar'>
                <div className='stories-bar-interior' style={{ height: `${(validations.length / user_stories.length) * 84}%` }}></div>
            </div>
            <div className='score flex'>{validations.length} / {user_stories.length}</div>
            <ul>
                <div className='stories-container'>
                    {user_stories.map(({description: user_story, validation}) => {
                        return (<div className='a-user-story'>
                            <div
                                className={`heart-bullet bg ${validations.includes(validation) ? 'alive' : 'dead'}`}></div>
                            <li>{user_story}</li>
                        </div>)
                    })}
                </div>
            </ul>
        </div>
    );
};

export default UserStoriesSublevel;
