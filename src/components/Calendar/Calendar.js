import React from 'react';
import './Calendar.css';

const Calendar = ({ onClose }) => {
  return (
    <div className='calendar-popup bg'>
      <div className='calendar-description'>
        <button onClick={onClose} className='close-btn'></button>
        <h2>Calendar</h2>
        <p>Your Calendar content goes here.</p>
      </div>
      <div className='week-days'></div>
      <div className="calendar">
        <div className="grid">
          {[...Array(5)].map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {[...Array(7)].map((_, colIndex) => (
                <div className="day" key={colIndex}></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='arrows-calendar'>
        <div className='arrow-calendar arr-2-calendar'></div>
        <div className='arrow-calendar arr-1-calendar'></div>
      </div>
    </div>
  );
};

export default Calendar;

