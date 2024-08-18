import React, { useState } from 'react';
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
import ActivityButton from "../ActivityButton/ActivityButton";

const Header = ({ children }) => {
    const [showOptions, setShowOptions] = useState(false);
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
        navigate('/');
    };
    const hasHatched = userProfile.profile.level > 1;
    let hatchedBackgroundImage = `url("/assets/pets/profile/${userProfile.profile.avatar}-${userProfile.profile.level-1}-profile.png")`;
    let eggBackgroundImage = `url("/assets/eggs/${userProfile.profile.avatar === 'axolotl' ? 'egg-aquatic' : userProfile.profile.avatar === 'caterpillar' ? 'egg-terrestrial' : 'egg-aerial'}.png")`;
    let backgroundImage = hasHatched ? hatchedBackgroundImage : eggBackgroundImage
    return (
        <header>
            <div className='header-container'>
                <div className={`menu ${showOptions ? 'showing-options' : ''}`}>
                    <div className='logo-container clickable'>
                        <div className={`logo ${userProfile.profile.avatar === 'axolotl' ? 'aquatic' : userProfile.profile.avatar === 'caterpillar' ? 'terrestrial' : 'aerial'}`} onClick={handleLogoClick}></div></div>
                    {showOptions && (
                        <div className={`options ${animating ? 'hidden' : ''}`}>
                            <div className='menu-option clickable' id='courses' onClick={handleCoursesClick}>Courses</div>
                            <div className='menu-option clickable' id='library' onClick={handleLibraryClick}>Library</div>
                            <div className='menu-option clickable' id='evolutionMap' onClick={handleEvolutionMapClick}>Evolution Map</div>
                            <div className='menu-option clickable' id='friends' onClick={handleFriendsClick}>Friends (coming soon)</div>
                            <div className='menu-option clickable' id='calendar' onClick={handleCalendarClick}>Calendar</div>
                            <div className='menu-option clickable' id='faq' onClick={handleFAQClick}>FAQ</div>
                            <div className='menu-option clickable' id='support' onClick={handleSupportClick}>Support</div>
                            <button className='log-out-btn clickable' onClick={handleSignOut}>Logout</button>
                        </div>

                    )}
                    <ActivityButton/>
                </div>
            </div>
            <div className='currency'></div>
            <div className='flex-e hud'>
                <div className='level-bar bg'>
                    <div className='level-bar-progress'>{`${userProfile.profile.current_xp} / ${userProfile.profile.total_xp}`}</div>
                    <div
                        className='bar-interior-horizontal'
                        style={{
                            width: `${(userProfile.profile.current_xp / userProfile.profile.total_xp) * 100}%`,
                            '--initial-width': `${(userProfile.profile.current_xp / userProfile.profile.total_xp) * 100}%`,
                            animation: 'expandContract 1s ease-in-out infinite'
                        }}
                    ></div>
                </div>
                <div className='data flex-s'>
                    <div className='pp-container flex'>
                        <div className={`pp bg ${hasHatched ? 'header-hatched' : 'header-egg'}`} style={{ backgroundImage: backgroundImage }}></div>
                    </div>
                    <div className='heart bg flex'><span id='level'>{userProfile.profile.level}</span></div>
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
