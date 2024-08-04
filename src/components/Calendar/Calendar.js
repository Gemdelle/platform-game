import React from 'react';
import './Calendar.css';

const days = ["M","T","W","T","F","S","S"];
const exercises = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11.0, 12.1, 13.2, 14.3, 15.4, 16.5, 17.6, 18.7, 19.8, 20.9, 22.0, 23.1, 24.2, 25.3, 26.4, 27.5, 28.6, 29.7, 30.8, 31.9, 33.0, 34.1,35.35]

let dates = [];
for (let i = 1; i <= 35; i++) {
  dates.push(i);
}


const Calendar = ({ onClose }) => {
  return (
    <div className='calendar-popup bg'>
      <button onClick={onClose} className='close-btn'></button>
      <div className="calendar">
        <div className='week-days'>
          {days.map((day, index) => (
            <div className="day-container" key={index}>{day}</div>
          ))}
        </div>
        <div className="grid">
          {dates.map((date, index) => (
            <div className="day" key={index}>
              <div className="date"><span>{date}</span></div>
              <div className="exercise"><span>{exercises}</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className='arrows-calendar'>
        <div className='arrow-calendar'></div>
        <div className='arrow-calendar arr-2-calendar'></div>
      </div>
    </div>
  );
};

export default Calendar;
