import React, {useState, useEffect} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import Header from "../../components/Header/Header";
import UserStories1Sublevel1 from '../../components/UserStories/UserStories1Sublevel1';
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './Course1Sublevels.css';

const Course1Sublevel1 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course/1/2');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/1', {
                class_code: classCode
            }, {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            if (response.data.error) {
                if (response.data.invalidations){
                    setInvalidations(response.data.invalidations)
                }
                throw Error(response.data.error)
            }

            if (response.data.validations) {
                setValidations(response.data.validations);
            }

            if (response.data.validations.length === 1) {
                setShouldProceed(true);
            }
            setUserProfile(response.data.userProfile);
            localStorage.setItem('userProfile', JSON.stringify(response.data.userProfile));
        } catch (error) {
            setOutput('An error occurred while compiling and running the code.');
        }
    };

    return (
        <div className="course-level-1 flex">
            <div className="moving-course-sky"></div>
            <Instructions/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Egg"/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview className="egg"
                         previewImageUrl={`url("/assets/eggs/${userProfile.profile.avatar === 'caterpillar' ? 'egg-terrestrial' : userProfile.profile.avatar === 'axolotl' ? 'egg-aquatic' : 'egg-aerial'}.png")`}/>
                <UserStories1Sublevel1 validations={validations}/>
            </div>
        </div>
    );
};

export default Course1Sublevel1;
