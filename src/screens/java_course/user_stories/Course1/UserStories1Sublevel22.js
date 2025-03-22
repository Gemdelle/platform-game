import React from 'react';
import '../../../../components/UserStories/UserStories.css';

const user_stories = [
    {
        description: "The class name should be Terrestrial",
        validation: "VALID_CLASS_STRUCTURE"
    },
    {
        description: "Terrestrial should have a new final String attribute mother",
        validation: "VALID_ATTRIBUTE_MOTHER"
    },
    {
        description: "Terrestrial should have a new final String attribute father",
        validation: "VALID_ATTRIBUTE_FATHER"
    },
    {
        description: "Terrestrial should have a final int attribute birthDay",
        validation: "VALID_ATTRIBUTE_BIRTHDAY"
    },
    {
        description: "Terrestrial should have a final int attribute birthMonth",
        validation: "VALID_ATTRIBUTE_BIRTHMONTH"
    },
    {
        description: "Terrestrial should have a final int attribute birthYear",
        validation: "VALID_ATTRIBUTE_BIRTHYEAR"
    },
    {
        description: "All of the attributes should be private",
        validation: "VALID_ATTRIBUTES_PRIVATE"
    }
];



const UserStories1Sublevel22 = ({validations}) => {
  return (
      <div className='user-stories'>
          <div className='bar'>
              <div className='stories-bar-interior' style={{ height: `${(validations.length / user_stories.length) * 84}%` }}></div>
          </div>
          <div className='score flex'>{validations.length} / {user_stories.length}</div>
          <ul>
              <div className='stories-container'>
                  {user_stories.map(({description: user_story, validation}) => {
                      return (<div>
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

export default UserStories1Sublevel22;
