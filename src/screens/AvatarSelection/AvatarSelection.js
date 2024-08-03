import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AvatarSelection.css';
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";

const avatars = [
    { id: 1, src: '/assets/pets/caterpillar-1.gif', alt: 'Caterpillar', name: 'caterpillar' },
    { id: 2, src: '/assets/pets/axolotl-1.gif', alt: 'Axolotl', name: 'axolotl' },
    { id: 3, src: '/assets/pets/pterodactyl-3.gif', alt: 'Pterodactyl', name: 'pterodactyl' },
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
            const response = await axios.put('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/select-pet', {pet_selected: avatar.name},{
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
            <h1>Select Your Pet</h1>
            <div className="avatar-list">
                {avatars.map((avatar) => (
                    <div
                        key={avatar.id}
                        className={`avatar-item ${selectedAvatar === avatar ? 'selected' : ''}`}
                        onClick={(e) => handleAvatarSelect(e, avatar)}
                    >
                        <img src={avatar.src} alt={avatar.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvatarSelection;