import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../../components/OutputDisplay/OutputDisplay';
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'aluminio_simbolo = “Al”\n' +
    'aluminio_numero_atomico = 13 \n' +
    'aluminio_peso_atomico = 26.9875\n' +
    '\n' +
    'azufre_simbolo = "S"\n' +
    'azufre_numero_atomico = 16\n' +
    'azufre_peso_atomico = 32.0668\n' +
    '\n' +
    'print(f”Peso atómico ({aluminio_simbolo}): {aluminio_peso_atomico}\\nPeso atómico ({azufre_simbolo}): {azufre_peso_atomico}.”)\n'
const user_stories = [
    {
        action: "DELETE",
        description: "Corregir el peso atómico de los elementos para que quede representado con 2 decimales. Imprimir los valores.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel7 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/8');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/7', {
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
            <Instructions instructions={"❧ 2.3 Variable de tipo float"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='aluminio_simbolo = “Al”
aluminio_numero_atomico = 13
aluminio_peso_atomico = “26.9875”

azufre_simbolo = "S"
azufre_numero_atomico = 16
azufre_peso_atomico = “32.0668”

# print(f”Peso atómico ({aluminio_simbolo}):\n”)
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

export default Course3Sublevel7;
