import React, { useState, useEffect } from 'react';
import FAQ from "../../components/FAQ/FAQ";
import './Header.css';

const Header = () => {
    const [showOptions, setShowOptions] = useState(true);
    const [animating, setAnimating] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem('showOptions');
        if (savedState !== null) {
            setShowOptions(JSON.parse(savedState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('showOptions', showOptions);
    }, [showOptions]);

    const handleLogoClick = () => {
        if (showOptions) {
            setAnimating(true);
            setTimeout(() => {
                setShowOptions(false);
                setAnimating(false);
            }, 500); // Duration should match the animation duration
        } else {
            setShowOptions(true);
        }
    };


    const handleFAQClick = () => {
        setShowFAQ(true);
    };

    const handleCloseFAQ = () => {
        setShowFAQ(false);
    };


    // const handleFAQClick = () => {
    //     setShowFAQ(true);
    // };

    // const handleCloseFAQ = () => {
    //     setShowFAQ(false);
    // };

    return (
        <header>
            <div className='header-container'>
                <div className='menu'>
                    <div className='logo' onClick={handleLogoClick}></div>
                    {showOptions && (
                        <div className={`options ${animating ? 'hidden' : ''}`}>
                            <div id='courses'>Courses</div>
                            <div id='library'>Library</div>
                            <div id='friends'>Friends (coming soon)</div>
                            <div id='calendar'>Calendar</div>
                            <div id='faq' onClick={handleFAQClick}>FAQ</div>
                            <div id='support'>Support</div>
                        </div>
                    )}
                </div>

                <div className='flex-e hud'>
                    <div className='level-bar'></div>
                    <div className='data flex-s'>
                        <div className='pp flex'>profile picture</div>
                        <div className='heart bg flex'><span id='level'>1</span></div>
                    </div>
                </div>
            </div>

            {showFAQ && <FAQ onClose={handleCloseFAQ} />}
        </header>
    );
};

export default Header;
