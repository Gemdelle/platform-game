import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'magnesio_nombre = “Potasio“\n' +
    'magnesio_simbolo = “K“\n' +
    'magnesio_nombre = “Magnesio“\n' +
    'magnesio_simbolo = “Mg“\n' +
    '\n' +
    'potasio_nombre = “Magnesio“\n' +
    'potasio_simbolo = “Mg“\n' +
    'potasio_nombre = “Potasio“\n' +
    'potasio_simbolo = “K“\n' +
    '\n' +
    '# print(f”{magnesio_nombre}: {magnesio_simbolo}\\n{potasio_nombre}: {potasio_simbolo}”)\n'
const user_stories = [
    {
        action: "ADD",
        description: "Los nombres y símbolos de los elementos están alternados. Sobreescribir los valores declarando nuevas variables e imprimir los valores.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel14 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/15');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/14', {
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
            <Instructions instructions={"❧ 2.5 Sobreescribir variables de tipo string"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='magnesio_nombre = Potasio
magnesio_simbolo = K

potasio_nombre = Magnesio
potasio_simbolo = Mg

# print(f”{magnesio_nombre}: {magnesio_simbolo}\n”)
'
                        placeholder="Escriba el codigo aqui"
                    />
                </div>
                <OutputDisplay output={output} user_stories={user_stories}/>
                <UserStoriesSublevel validations={validations} user_stories={user_stories}/>
            </div>
        </div>
    );
};

export default Course3Sublevel14;
