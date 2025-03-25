import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseSelection.css';
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";


const CourseSelection = () => {
    const navigate = useNavigate();
    const { userProfile, setUserProfile } = useUser();
    const handleAvatarSelect = async (e, selectedCourse) => {
        e.preventDefault();
        try {
            const idToken = userProfile.id
            const response = await axios.post('http://localhost:3001/profile/current-course', {current_course: selectedCourse},{
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));

            setTimeout(() => {
                navigate('/avatar-selection');
            }, 500);
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };

    return (
        <div className="avatar-selection-screen">
            <div className='avatar-moving-background'></div>
            <h1>Select Your Course</h1>
            <div className="avatar-list">
                <div
                    className={`avatar-item clickable pet-bg`}
                    onClick={(e) => handleAvatarSelect(e, "python")}
                ><div className="python-pet"></div><span>Python</span></div>
                <div
                    className={`avatar-item clickable pet-bg`}
                    onClick={(e) => handleAvatarSelect(e, "java")}
                ><div className="java-pet"></div><span>Java</span></div>
            </div>
        </div>
    );
};

export default CourseSelection;