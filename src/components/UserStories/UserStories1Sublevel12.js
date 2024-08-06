import React from 'react';
import './UserStories.css';

const user_stories = [
  "The class name should be Jellyscuit",
  "Jellyscuit should have a String attribute <type> (cookie, candy, gummy)",
  "Jellyscuit should have a String attribute <colorant>",
  "Jellyscuit should have a String attribute <size> (small, medium, large)",
  "Jellyscuit should have an int attribute <sweetness> (% 1-100)",
  "Jellyscuit should have an int attribute <sourness> (% 1-100)",
  "Jellyscuit should have an int attribute <duration> (seconds)",
  "Jellyscuit should have an int attribute <baking>",
  "Jellyscuit should have a boolean attribute <hard>",
  "Jellyscuit should have a static int attribute <cookingMinutes>",
  "Jellyscuit should have a static int attribute <instances>",
  "Jellyscuit should have a String attribute <model> (common, feline)",
  "Jellyscuit should have a String attribute <flavour>",
  "Jellyscuit should have an int attribute <eggs>",
  "Jellyscuit should have an int attribute <chips>",
  "Jellyscuit should have an int attribute <bakingSodaTeaspoons>",
  "Jellyscuit should have an int attribute <milkTeaspoons>",
  "Jellyscuit should have a double attribute <flourGrams>",
  "Jellyscuit should have a double attribute <butterGrams>",
  "Jellyscuit should have a double attribute <sugarGrams>",
  "Jellyscuit should have a boolean attribute <vanillaExtract>",
  "Jellyscuit should have a boolean attribute <chocolateExtract>",
  "All of the attributes should be private"
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
