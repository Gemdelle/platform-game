import React, { useState } from 'react';
import './Header.css';
const Header = () => {
    return (
        <header>
            <div className='header-container'>

                <div className='menu-options'>
                    <div id='courses'>Courses</div>
                    <div id='library'>Library</div>
                    <div id='friends'>Friends (coming soon)</div>
                    <div id='calendar'>Calendar</div>
                    <div id='faq'>FAQ</div>
                    <div id='support'>Support</div>
                </div>

                <div className='hud flex'>
                    <div className='level-bar'></div>
                    <div className='data flex'>
                        <div className='pp flex'>profile picture</div>
                        <div className='heart bg flex'><span id='level'>1</span></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
