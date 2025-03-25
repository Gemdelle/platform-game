import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = '“””\n' +
    'elemento 1: “Oxígeno” (O)\n' +
    'elemento 2: “Silicio” (Si)\n' +
    'elemento 3: “Magnesio” (Mg)\n' +
    '“””\n' +
    '\n' +
    'oxigeno_nombre = "Oxígeno"\n' +
    'oxigeno_simbolo = "O"\n' +
    '\n' +
    'silicio_nombre = "Silicio"\n' +
    'silicio_simbolo = "Si"\n' +
    'oxigeno_simbolo = "Cl"\n' +
    '\n' +
    'magnesio_nombre = "Magnesio"\n' +
    'oxigeno_nombre =  "Potasio"\n' +
    'magnesio_simbolo = "Mg"\n' +
    'magnesio_nombre = "Cloro"\n' +
    '\n' +
    'oxigeno_simbolo = "O"\n' +
    'oxigeno_nombre = "Oxígeno"\n' +
    'magnesio_nombre = "Magnesio"\n' +
    '\n' +
    'print(f\'elemento 1: "{oxigeno_nombre}" ({oxigeno_simbolo})\\n elemento 2: "{silicio_nombre}" ({silicio_simbolo})\\n\'\'elemento 3: "{magnesio_nombre}" ({magnesio_simbolo})\')\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Sobreescribir las los valores que sean necesarios declarando nuevas variables. Definir la impresión para que quede exactamente el mismo formato que el texto comentado",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel15 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/16');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/15', {
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
                        title="2.5 Sobreescribir variables de tipo string"
                        correctAnswer={correctAnswer}
                        previousCode='“””
elemento 1: “Oxígeno” (O)
elemento 2: “Silicio” (Si)
elemento 3: “Magnesio” (Mg)
“””

oxigeno_nombre = "Oxígeno"
oxigeno_simbolo = "O"

silicio_nombre = "Silicio"
silicio_simbolo = "Si"
oxigeno_simbolo = "Cl"

magnesio_nombre = "Magnesio"
oxigeno_nombre =  "Potasio"
magnesio_simbolo = "Mg"
magnesio_nombre = "Cloro"
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

export default Course3Sublevel15;
