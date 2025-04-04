import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AvatarSelection.css';
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";

const avatars = [
    { id: 1, src: '/assets/eggs/egg-terrestrial.png', alt: 'Caterpillar', name: 'caterpillar' },
    { id: 2, src: '/assets/eggs/egg-aquatic.png', alt: 'Axolotl', name: 'axolotl' },
    { id: 3, src: '/assets/eggs/egg-aerial.png', alt: 'Pterodactyl', name: 'pterodactyl' },
];

const AvatarSelection = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const navigate = useNavigate();
    const { userProfile, setUserProfile } = useUser();
    const handleAvatarSelect = async (e, avatar) => {
        e.preventDefault();
        try {
            setSelectedAvatar(avatar);
            const idToken = userProfile.id
            const response = await axios.put('http://localhost:3001/select-pet', {pet_selected: avatar.name},{
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));

            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };

    return (
        <div className="avatar-selection-screen">
            <div className='avatar-moving-background'></div>
            <h1>Hatch your egg</h1>
            <div className="avatar-list">
                {avatars.map((avatar) => (
                    <div
                        key={avatar.id}
                        className={`avatar-item clickable ${selectedAvatar === avatar ? 'selected' : ''}`}
                        onClick={(e) => handleAvatarSelect(e, avatar)}
                    >
                        <img src={avatar.src} alt={avatar.alt} />
                        <div className='avatar-orb-container'><div className={`avatar-orb ${avatar.name === 'axolotl' ? 'aquatic' : avatar.name === 'caterpillar' ? 'terrestrial' : 'aerial'}`}></div></div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default AvatarSelection;