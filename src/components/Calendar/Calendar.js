import React from 'react';
import './Calendar.css';

const days = ["M", "T", "W", "T", "F", "S", "S"];
const exercises = [
  1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.10,
  11.11, 12.12, 13.13, 14.14, 15.15, 16.16, 17.17, 18.18, 19.19, 20.20,
  21.21, 22.22, 23.23, 24.24, 25.25, 26.26, 27.27, 28.28, 29.29, 30.30,
  31.31, 32.32, 33.33, 34.34, 35.35
];

let dates = [];
for (let i = 1; i <= 35; i++) {
  dates.push(i);
}

const Calendar = ({ onClose }) => {
  return (
    <div className='calendar-popup bg'>
      <p className='calendar-text'>Calendar</p>
      <p className='month-text'>Mes</p>
      <button onClick={onClose} className='close-btn-calendar'></button>
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
              <div className="exercise"><span>{exercises[index].toFixed(1)}</span></div>
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
