import React, {useEffect, useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import Header from "../../components/Header/Header";
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories1Sublevel4 from "../../components/UserStories/UserStories1Sublevel4";

const correctAnswer = 'public class Terrestrial {\n' +
    '}'
const Course1Sublevel4 = () => {
    const [output, setOutput] = useState('');
    const navigate = useNavigate();
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course/1/5');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);


    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/4', {
                class_code: classCode
            },{
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
            <Instructions instructions={"4. Definir la clase 'Terrestrial'."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Caterpillar" correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview className="hatched" previewImageUrl={`url("/assets/pets/caterpillar/caterpillar-1.png")`}/>
                <UserStories1Sublevel4 validations={validations}/>
            </div>
        </div>
    );
};

export default Course1Sublevel4;
