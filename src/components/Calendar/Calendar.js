import React from 'react';
import './Calendar.css';

const Calendar = ({ onClose }) => {
  return (
    <div className='calendar-popup bg'>
      <button onClick={onClose} className='close-btn'></button>
      <div className="calendar">
      <div className='week-days'></div>
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

