import React from 'react';
import './Instructions.css';
import {useUser} from "../utils/UserProvider";
const Instructions = () => {
    const {userProfile} = useUser();
    const isAquatic = userProfile.profile.avatar === 'axolotl';
    const isTerrestrial = userProfile.profile.avatar === 'caterpillar';
    return (
        <div className="instructions">
            <div className='instructions-container'>
            <div className='instructions-opener'><div className={`instructions-orb ${isAquatic ? 'aquatic' : isTerrestrial ? 'terrestrial' : 'aerial'}`}></div></div>
            <div className='instructions-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='instructions-closer'><div className={`instructions-orb ${isAquatic ? 'aquatic' : isTerrestrial ? 'terrestrial' : 'aerial'}`}></div></div>
            </div>
        </div>
    );
};

export default Instructions;
