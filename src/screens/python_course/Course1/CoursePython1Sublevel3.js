import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../../components/OutputDisplay/OutputDisplay';
import Header from "../../../components/Header/Header";
import Preview from '../../../components/Preview/Preview';
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories1Sublevel3 from "../user_stories/Course1/UserStories1Sublevel3";
const correctAnswer = 'public class Egg {\n' +
    'private String color;\n' +
    'private int hatchingDays;\n' +
    'private double weight;\n' +
    'private double temperature;\n' +
    'private double hatchTemperature;\n' +
    '}'
const CoursePython1Sublevel3 = () => {
    const [output, setOutput] = useState('');
    const navigate = useNavigate();
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/',  { state: { isEvolving: true } });
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/1/3', {
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
                if (response.data.validations) {
                    setValidations(response.data.validations);
                }
                throw Error(response.data.error)
            }

            if (response.data.validations) {
                setValidations(response.data.validations);
            }

            if (response.data.validations.length === 6) {
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
            <Instructions instructions={"3. Definir  la clase 'Egg'. Debe tener los atributos color, hatchingDays, weight, temperature, hatchTemperature."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Egg" correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview className="egg"
                         previewImageUrl={`url("/assets/eggs/${userProfile.profile.avatar === 'caterpillar' ? 'egg-terrestrial' : userProfile.profile.avatar === 'axolotl' ? 'egg-aquatic' : 'egg-aerial'}.png")`}/>
                <UserStories1Sublevel3 validations={validations}/>
            </div>
        </div>
    );
};

export default CoursePython1Sublevel3;
