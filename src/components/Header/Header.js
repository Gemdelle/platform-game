import React, {useState, useEffect} from 'react';
import {getAuth, signOut} from "firebase/auth";
import './Header.css';
import FAQ from "../../components/FAQ/FAQ";
import Support from '../Support/Support';
import Calendar from '../Calendar/Calendar';
import {auth} from "../../firebase";
import {useUser} from "../utils/UserProvider";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [showOptions, setShowOptions] = useState(true);
    const [animating, setAnimating] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const [showSupport, setShowSupport] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const { userProfile, setUserProfile } = useUser();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut(auth);
        localStorage.removeItem('userProfile');
        setUserProfile(null);
        navigate('/');
    };

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

    // MENU BUTTONS

    const handleFAQClick = () => {
        setShowFAQ(true);
    };

    const handleCloseFAQ = () => {
        setShowFAQ(false);
    };


    const handleSupportClick = () => {
        setShowSupport(true);
    };

    const handleCloseSupport = () => {
        setShowSupport(false);
    };

    const handleCalendarClick = () => {
        setShowCalendar(true);
    };

    const handleCloseCalendar = () => {
        setShowCalendar(false);
    };

    return (
        <header>
            <div className='header-container'>
                <div className='menu'>
                    <button onClick={handleSignOut}>Logout</button>
                    <div className='logo' onClick={handleLogoClick}></div>
                    {showOptions && (
                        <div className={`options ${animating ? 'hidden' : ''}`}>
                            <div id='courses'>Courses</div>
                            <div id='library'>Library</div>
                            <div id='friends'>Friends (coming soon)</div>
                            <div id='calendar' onClick={handleCalendarClick}>Calendar</div>
                            <div id='faq' onClick={handleFAQClick}>FAQ</div>
                            <div id='support' onClick={handleSupportClick}>Support</div>
                        </div>
                    )}
                </div>
                <div className='flex-e hud'>
                    <div className='level-bar bg'></div>
                    <div className='data flex-s'>
                        <div className='pp-container flex'>
                            <div className='pp bg' style={{backgroundImage:`url("/assets/pets/${userProfile.profile.avatar}-${userProfile.profile.level}-profile.gif")`}}></div>
                        </div>
                        <div className='heart bg flex'><span id='level'>{userProfile.profile.level}</span></div>
                    </div>
                </div>
            </div>

            {showFAQ && <FAQ onClose={handleCloseFAQ}/>}
            {showSupport && <Support onClose={handleCloseSupport}/>}
            {showCalendar && <Calendar onClose={handleCloseCalendar}/>}
        </header>
    );
};

export default Header;
