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
    'Z(K) es 25 - 6.\n' +
    'Z(Si) es 6 + 8.\n' +
    '“””\n' +
    '\n' +
    'potasio_simbolo = “R”\n' +
    'potasio_numero_atomico = 17\n' +
    'potasio_simbolo = “K”\n' +
    'potasio_numero_atomico = 19\n' +
    '\n' +
    'silicio_simbolo = “So”\n' +
    'silicio_numero_atomico = 15\n' +
    'silicio_simbolo = “Si”\n' +
    'silicio_numero_atomico = 14\n' +
    '\n' +
    'print(f”Z({potasio_simbolo}) es {potasio_numero_atomico}.\\nZ ({silicio_simbolo}) es {silicio_numero_atomico}.”)\n'
const user_stories = [
    {
        action: "ADD",
        description: "Sobreescribir los valores de los números atómicos erróneos. Imprimir los valores.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel17 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/18');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/17', {
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
            <Instructions instructions={"❧ 2.6 Sobreescribir variables de tipo int"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="2.6 Sobreescribir variables de tipo int"
                        correctAnswer={correctAnswer}
                        previousCode='“””
Z(K) es 25 - 6.
Z(Si) es 6 + 8.
“””

potasio_simbolo = R
potasio_numero_atomico = 17

silicio_simbolo = So
silicio_numero_atomico = 15

# print(“Z() es .\n Z() es .”)
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

export default Course3Sublevel17;
