// src/components/OutputDisplay.js
import React from 'react';
import './OutputDisplay.css';
const OutputDisplay = ({ output, user_stories }) => {
    const slots = Array.from({ length: 8 }, (_, i) => `bug-slot-${i + 1}`);

    const shuffledSlots = [...slots].sort(() => Math.random() - 0.5);
    const shuffledStories = [...user_stories].sort(() => Math.random() - 0.5);

    const storyMapping = {};
    shuffledStories.forEach((story, index) => {
        if (shuffledSlots[index]) {
            storyMapping[shuffledSlots[index]] = story.action.toLowerCase();
        }
    });

    return (
        <div className='output flex'>
            {slots.map((slot) => (
                <div key={slot} className={slot}>
                    {storyMapping[slot] ? <div className={storyMapping[slot]}/> : null}
                </div>
            ))}
            <pre>{output}</pre>
        </div>
    );
};


export default OutputDisplay;
