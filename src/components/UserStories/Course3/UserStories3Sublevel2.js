import React from 'react';
import '../UserStories.css';

const user_stories = [
    {
        description: "Instantiate Beetlesweet caramelos_dulces",
        validation: "VALID_CLASS_INSTANTIATE"
    },
    {
        description: "Instantiate Beetlesweet caramelos_neutros",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET"
    },
    {
        description: "Instantiate Beetlesweet caramelos_acidos",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_ACID"
    },
    {
        description: "All Beetlesweet objects must have duration set to 30",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_DURATION"
    },
    {
        description: "All Beetlesweet objects must have baking set to 5",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_BAKING"
    },
    {
        description: "All Beetlesweet objects must have cooked set to true",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_COOKED"
    },
    {
        description: "All Beetlesweet objects must have beetles set to 20",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_BEETLES"
    },
    {
        description: "All Beetlesweet objects must have gelatinBoxes set to 5",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_GELATINBOXES"
    },
    {
        description: "Beetlesweet caramelos_dulces must have sweetness set to 100",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_SWEETNESS"
    },
    {
        description: "Beetlesweet caramelos_dulces must have honeyTeaspoons set to 20",
        validation: "VALID_CLASS_INSTANTIATE_BEETLESWEET_HONEYTEASPOONS"
    },
    {
        description: "Beetlesweet caramelos_neutros must have sweetness set to 50",
        validation: "VALID_CLASS_INSTANTIATE_NEUTRAL_BEETLESWEET_SWEETNESS"
    },
    {
        description: "Beetlesweet caramelos_neutros must have honeyTeaspoons set to 10",
        validation: "VALID_CLASS_INSTANTIATE_NEUTRAL_BEETLESWEET_HONEYTEASPOONS"
    },
    {
        description: "Beetlesweet caramelos_acidos must have sweetness set to 0",
        validation: "VALID_CLASS_INSTANTIATE_ACID_BEETLESWEET_SWEETNESS"
    },
    {
        description: "Beetlesweet caramelos_acidos must have honeyTeaspoons set to 1",
        validation: "VALID_CLASS_INSTANTIATE_ACID_BEETLESWEET_HONEYTEASPOONS"
    }
];

const UserStories3Sublevel2 = ({validations}) => {
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

export default UserStories3Sublevel2;
