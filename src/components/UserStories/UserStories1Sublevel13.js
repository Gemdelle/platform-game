import React from 'react';
import './UserStories.css';

const user_stories = [
  "The class name should be Beetlesweet",
  "Beetlesweet should have a String attribute <type> (cookie, candy, gummy)",
  "Beetlesweet should have a String attribute <colorant>",
  "Beetlesweet should have a String attribute <size> (small, medium, large)",
  "Beetlesweet should have an int attribute <sweetness> (% 1-100)",
  "Beetlesweet should have an int attribute <sourness> (% 1-100)",
  "Beetlesweet should have an int attribute <duration> (seconds)",
  "Beetlesweet should have an int attribute <baking>",
  "Beetlesweet should have a boolean attribute <hard>",
  "Beetlesweet should have a static int attribute <cookingMinutes>",
  "Beetlesweet should have a static int attribute <instances>",
  "Beetlesweet should have an int attribute <beetles>",
  "Beetlesweet should have an int attribute <honeyTeaspoons>",
  "Beetlesweet should have a double attribute <sugarGrams>",
  "Beetlesweet should have an int attribute <foodColoringDrops>",
  "Beetlesweet should have an int attribute <gelatinPackets>",
  "Beetlesweet should have a double attribute <lemonJuiceMilliliters>",
  "Beetlesweet should have a double attribute <waterMilliliters>",
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