import React, { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import './Header.css';
import FAQ from "../../components/FAQ/FAQ";
import Support from '../Support/Support';
import Calendar from '../Calendar/Calendar';
import Library from '../Library/Library';
import Friends from '../Friends/Friends';
import EvolutionMap from '../EvolutionMap/EvolutionMap';
import { auth } from "../../firebase";
import { useUser } from "../utils/UserProvider";
import { useNavigate } from "react-router-dom";

const Header = ({children}) => {
    const [showOptions, setShowOptions] = useState(true);
    const [animating, setAnimating] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const [showSupport, setShowSupport] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showLibrary, setShowLibrary] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const [showEvolutionMap, setShowEvolutionMap] = useState(false);
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

    // Handling clicks for menu items
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

    const handleLibraryClick = () => {
        setShowLibrary(true);
    };

    const handleCloseLibrary = () => {
        setShowLibrary(false);
    };

    const handleFriendsClick = () => {
        setShowFriends(true);
    };

    const handleCloseFriends = () => {
        setShowFriends(false);
    };

    const handleEvolutionMapClick = () => {
        setShowEvolutionMap(true);
    };

    const handleCloseEvolutionMap = () => {
        setShowEvolutionMap(false);
    };

    const handleCoursesClick = () => {
        navigate('/'); // Ruta a la que quieres redirigir
    };

    return (
        <header>
            <div className='header-container'>
                <div className='menu'>
                    <button onClick={handleSignOut}>Logout</button>
                    <div className='logo' onClick={handleLogoClick}></div>
                    {showOptions && (
                        <div className={`options ${animating ? 'hidden' : ''}`}>
                            <div id='courses' onClick={handleCoursesClick}>Courses</div>
                            <div id='library' onClick={handleLibraryClick}>Library</div>
                            <div id='evolutionMap' onClick={handleEvolutionMapClick}>Evolution Map</div>
                            <div id='friends' onClick={handleFriendsClick}>Friends (coming soon)</div>
                            <div id='calendar' onClick={handleCalendarClick}>Calendar</div>
                            <div id='faq' onClick={handleFAQClick}>FAQ</div>
                            <div id='support' onClick={handleSupportClick}>Support</div>

                        </div>
                    )}
                </div>
                <div className='currency'></div>
                <div className='flex-e hud'>
                    <div className='level-bar bg'>
                        <div className='bar-interior-horizontal' style={{ width: `${(userProfile.profile.current_xp / userProfile.profile.total_xp) * 100}%` }}></div>
                    </div>
                    <div className='data flex-s'>
                        <div className='pp-container flex'>
                            <div className='pp bg' style={{ backgroundImage: `url("/assets/pets/${userProfile.profile.avatar}-${userProfile.profile.level}-profile.gif")` }}></div>
                        </div>
                        <div className='heart bg flex'><span id='level'>{userProfile.profile.level}</span></div>
                    </div>
                </div>
            </div>

            {showFAQ && <FAQ onClose={handleCloseFAQ} />}
            {showSupport && <Support onClose={handleCloseSupport} />}
            {showCalendar && <Calendar onClose={handleCloseCalendar} />}
            {showLibrary && <Library onClose={handleCloseLibrary} />}
            {showFriends && <Friends onClose={handleCloseFriends} />}
            {showEvolutionMap && <EvolutionMap onClose={handleCloseEvolutionMap} />}
            {children}
        </header>
    );
};

export default Header;
