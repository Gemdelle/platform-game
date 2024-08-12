import React from 'react';
import './UserStories.css';

const user_stories = [
    {
        description: "The class name should be Beetlesweet",
        validation: "VALID_CLASS_STRUCTURE"
    },
    {
        description: "Beetlesweet should have a String attribute type (cookie, candy, gummy)",
        validation: "VALID_ATTRIBUTE_TYPE"
    },
    {
        description: "Beetlesweet should have an int attribute sweetness (% 1-100)",
        validation: "VALID_ATTRIBUTE_SWEETNESS"
    },
    {
        description: "Beetlesweet should have an int attribute duration (seconds)",
        validation: "VALID_ATTRIBUTE_DURATION"
    },
    {
        description: "Beetlesweet should have an int attribute baking",
        validation: "VALID_ATTRIBUTE_BAKING"
    },
    {
        description: "Beetlesweet should have a boolean attribute hard",
        validation: "VALID_ATTRIBUTE_HARD"
    },
    {
        description: "Beetlesweet should have a static int attribute cookingMinutes",
        validation: "VALID_ATTRIBUTE_COOKING_MINUTES"
    },
    {
        description: "Beetlesweet should have a static int attribute count",
        validation: "VALID_ATTRIBUTE_COUNT"
    },
    {
        description: "Beetlesweet should have an int attribute beetles",
        validation: "VALID_ATTRIBUTE_BEETLES"
    },
    {
        description: "Beetlesweet should have an int attribute honeyTeaspoons",
        validation: "VALID_ATTRIBUTE_HONEY_TEASPOONS"
    },
    {
        description: "Beetlesweet should have an int attribute gelatinBoxes",
        validation: "VALID_ATTRIBUTE_HONEY_GELATIN_BOXES"
    },
    {
        description: "All of the attributes should be private",
        validation: "VALID_ATTRIBUTES_PRIVATE"
    }
];

const UserStories1Sublevel16 = ({validations}) => {
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

export default UserStories1Sublevel16;
