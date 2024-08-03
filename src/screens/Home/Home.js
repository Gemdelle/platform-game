import React, {useState} from 'react';

import './Home.css';
import Header from "../../components/Header/Header";
import Course from "../../components/Course/Course";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from 'firebase/auth';
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserProfile } = useUser();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const result = await  signInWithEmailAndPassword(auth, email, password);
            debugger
            const response = await axios.get('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/profile', {
                headers: {
                    'Authorization': `Bearer ${result.user.uid}`
                }
            });

            setUserProfile(response.data);
            console.log("Login successful");
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        debugger
        const idToken = await result.user.getIdToken()

        const response = await axios.get('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/profile', {
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        });

        setUserProfile(response.data);
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (user) {
        return (
            <div className="App">
                <Header/>
                <div className='header-space'></div>
                <Course
                    name={"COURSE 1"}
                    description={{
                        message: "The course -name- us about -description. Once finished, you will know how to:",
                        itemCount: 4
                    }}
                    levels={25}
                    navigationUrl={'/course/1/'}
                />

                <Course
                    name={"COURSE 2"}
                    description={{
                        message: "The course -name- us about -description. Once finished, you will know how to:",
                        itemCount: 4
                    }}
                    levels={13}
                    navigationUrl={'/course/2/'}
                />
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

export default Home;
