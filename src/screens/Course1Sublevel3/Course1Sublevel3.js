import React, {useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import './Course1Sublevel3.css';
import Header from "../../components/Header/Header";
import UserStories from '../../components/UserStories/UserStories';
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Course1Sublevel3 = () => {
    const [output, setOutput] = useState('');
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/3', {
                class_code: classCode
            },{
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });
            if (response.data.error) {
                throw Error(response.data.error)
            }
            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));
            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            setOutput('An error occurred while compiling and running the code.');
        }
    };

    return (
        <div className="App">
            <Instructions/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Pterodactyl"/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview previewImageUrl={`url("/assets/pets/pterodactyl-1.gif")`}/>
                <UserStories/>
            </div>
        </div>
    );
};

export default Course1Sublevel3;
