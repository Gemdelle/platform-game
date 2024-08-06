import React from 'react';
import './Friends.css';

const Friends = ({ onClose }) => {
  return (
    <div className='friends-popup bg'>
      <div className='friends-content'>
        <button onClick={onClose} className='close-btn-friends'></button>
      </div>
    </div>
  );
};

export default Friends;
