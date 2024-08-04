import React, {useEffect, useState} from 'react';

import './Home.css';
import Header from "../../components/Header/Header";
import Course from "../../components/Course/Course";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from 'firebase/auth';
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [, loading] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userProfile, setUserProfile } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserProfile = localStorage.getItem('userProfile');
        if (storedUserProfile) {
            setUserProfile(JSON.parse(storedUserProfile));
        }
    }, [setUserProfile]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await  signInWithEmailAndPassword(auth, email, password);
            const idToken = await result.user.getIdToken()
            const response = await axios.get('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/profile', {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));

            if (response.data.profile.avatar === 'default_avatar') {
                navigate('/avatar-selection')
            }

            console.log("Login successful");
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken()

        const response = await axios.get('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/profile', {
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        });

        setUserProfile(response.data);
        localStorage.setItem('userProfile', JSON.stringify(response.data));
        if (response.data.profile.avatar === 'default_avatar') {
            navigate('/avatar-selection')
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (userProfile) {
        return (
            <div className="App">
                <Header/>
                <div className='header-space'></div>
                {userProfile.progress.courses.map((course, index) => {
                    return (
                        <Course
                            key={`course-${index}`}
                            course={course}
                            name={course.name}
                            description={{
                                message: course.description,
                                itemCount: course.item_count
                            }}
                            levels={course.total}
                            navigationUrl={`/course/${index+1}/`}
                        />
                    )
                })}
            </div>
        );
    }
    return (
        <div className="App">
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={signInWithGoogle}>Sign In with Google</button>

        </div>
    );

};

document.getElementById('showImageButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    if (imageContainer.classList.contains('hidden')) {
        imageContainer.classList.remove('hidden');
    } else {
        imageContainer.classList.add('hidden');
    }
});


export default Home;
