import React from 'react';
import './Calendar.css';
import '../popup.css';

const Calendar = ({ onClose }) => {
  return (
    <div className='calendar popup'>
      <div className='calendar-content'>
        <button onClick={onClose} className='close-btn'>Close</button>
        {/* Add your FAQ content here */}
        <h2>Calendar</h2>
        <p>Your Calendar content goes here.</p>
      </div>

    <div className="centered-background">
    <div className="grid">
        {[...Array(5)].map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
                {[...Array(7)].map((_, colIndex) => (
                    <div className="square" key={colIndex}></div>
                ))}
            </div>
        ))}
    </div>
</div>
    </div>
  );
};

export default Calendar;

