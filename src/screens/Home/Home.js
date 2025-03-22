import React, {useEffect, useState} from 'react';

import './Home.css';
import './LogIn.css';
import Header from "../../components/Header/Header";
import Course from "../../components/Course/Course";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {useLevel, useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import Evolution from "../../components/Evolution/Evolution";

const Home = () => {
    const navigationParams = useLocation();
    const [, loading] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showEvolution, setShowEvolution] = useState(navigationParams.state && navigationParams.state.isEvolving);
    const {userProfile, setUserProfile} = useUser();
    const {userLevels} = useLevel()
    const navigate = useNavigate();
    const [theoricalLevels, setTheoricalLevels] = useState(userLevels);


    useEffect(() => {
        const storedUserProfile = localStorage.getItem('userProfile');
        if (storedUserProfile) {
            setUserProfile(JSON.parse(storedUserProfile));
        }
    }, [setUserProfile]);

    useEffect(() => {
        setTheoricalLevels(prev => userLevels)
    }, [userLevels]);

    const handleCloseEvolution = () => {
        setShowEvolution(false);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await result.user.getIdToken()
            const response = await axios.get('http://localhost:3001/profile', {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));

            if (response.data.profile.avatar === 'default_avatar') {
                navigate('/course/1/1')
            }
            navigate('/course/1/1')
            console.log("Login successful");
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken()

        const response = await axios.get('http://localhost:3001/profile', {
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        });

        setUserProfile(response.data);
        localStorage.setItem('userProfile', JSON.stringify(response.data));
        if (response.data.profile.avatar === 'default_avatar') {
            navigate('/course-selection')
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (userProfile && userProfile.profile.current_course) {
        const isAquatic = userProfile.profile.avatar === 'axolotl';
        const isTerrestrial = userProfile.profile.avatar === 'caterpillar';
        const hasHatched = userProfile.profile.level > 1;
        let hatchedBackgroundImage = `url("/assets/pets/evolutions/${isAquatic ? 'aquatic' : isTerrestrial ? 'terrestrial' : 'aerial'}/${userProfile.profile.level - 1}.png")`;
        let eggBackgroundImage = `url("/assets/eggs/${isAquatic ? 'egg-aquatic' : isTerrestrial ? 'egg-terrestrial' : 'egg-aerial'}.png")`;
        let backgroundImage = hasHatched ? hatchedBackgroundImage : eggBackgroundImage
        return (
            <div className="App">
                <Header>
                    {/* <div className='index'>
                       <div className='index-option'>1</div>
                       <div className='index-option'>2</div>
                       <div className='index-option'>3</div>
                       <div className='index-option'>4</div>
                       <div className='index-option'>5</div>
                       <div className='index-option'>6</div>
                    </div> */}
                </Header>

                <div className='header-space'></div>
                {userProfile.profile.current_course === "java" ? userProfile.progress.courses.map((course, index) => {

                    return (
                        <Course
                            key={`course-${index}`}
                            course={course}
                            navigationUrl={`/course/${index + 1}/`}
                            courseNumber={index + 1}
                            theoricalLevel = {theoricalLevels[index]}
                        />
                    )
                }) : userProfile.progress.courses_python.map((course, index) => {

                    return (
                        <Course
                            key={`course-${index}`}
                            course={course}
                            navigationUrl={`/course-python/${index + 1}/`}
                            courseNumber={index + 1}
                            theoricalLevel = {theoricalLevels[index]}
                        />
                    )
                })

                }
                <div className={`pet-static ${hasHatched ? 'home-hatched' : 'home-egg'}`} id="petStatic"
                     style={{backgroundImage: backgroundImage}}></div>
                {showEvolution ? <Evolution onClose={handleCloseEvolution}/> : null}
            </div>
        );
    }
    return (
        <div className="App">
            <div className='log-in-container'>
                <div className='log-in-options'>
                    <form className='log-in-form' onSubmit={handleLogin}>
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
                        <button type="submit" className="clickable">Sign In</button>
                    </form>
                    <button className='sign-in-google clickable' onClick={signInWithGoogle}>Gmail</button>
                </div>
                <div className='pet-frog'></div>
            </div>
        </div>
    );

};

export default Home;
