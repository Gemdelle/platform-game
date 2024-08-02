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
    </div>
  );
};

export default Calendar;
