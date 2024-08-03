import React, { useState } from 'react';
import './Preview.css';
import {useUser} from "../utils/UserProvider";
const Preview = () => {
    const { userProfile, setUserProfile } = useUser();

    return (
        <div className='preview bg' style={{backgroundImage:`url("/assets/pets/${userProfile.profile.avatar}-${userProfile.profile.level}.gif")`}}>

        </div>
    );
};

export default Preview;
