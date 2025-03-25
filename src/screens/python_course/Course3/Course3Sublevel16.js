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
    'El número atómico de (O) es 8.\n' +
    'El número atómico de (Mg) es 12.\n' +
    'El número atómico de (Cl) es 17.\n' +
    '“””\n' +
    '\n' +
    'oxigeno_simbolo = "O"\n' +
    'magnesio_simbolo = "Mg"\n' +
    'cloro_simbolo = "Cl"\n' +
    '\n' +
    'oxigeno_numero_atomico = 8\n' +
    'magnesio_numero_atomico = 12\n' +
    'cloro_numero_atomico = 17\n' +
    'oxigeno_numero_atomico = 8\n' +
    '\n' +
    'print(f"El número atómico de ({oxigeno_simbolo}) es {oxigeno_numero_atomico}.\\nEl número atómico de ({magnesio_simbolo}) es {magnesio_numero_atomico}.\\nEl número atómico de ({cloro_simbolo}) es {cloro_numero_atomico}.")\n'
const user_stories = [
    {
        action: "DELETE",
        description: "Eliminar únicamente las asignaciones que hacen que el resultado sea erróneo.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel16 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/17');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/16', {
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
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
El número atómico de (O) es 8.
El número atómico de (Mg) es 12.
El número atómico de (Cl) es 17.
“””

oxigeno_simbolo = "O"
magnesio_simbolo = "Mg"
cloro_simbolo = "Cl"

oxigeno_numero_atomico = 5
magnesio_numero_atomico = 12
cloro_numero_atomico = 17
oxigeno_numero_atomico = 8
magnesio_numero_atomico = 16
oxigeno_numero_atomico = 5

# print(f"El número atómico de ({oxigeno_simbolo}) es {oxigeno_numero_atomico}.\nEl número atómico de ({magnesio_simbolo}) es {magnesio_numero_atomico}.\nEl número atómico de ({cloro_simbolo}) es {cloro_numero_atomico}.")
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

export default Course3Sublevel16;
