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
    'H: False\n' +
    'As: True\n' +
    'Ca: False\n' +
    'S: True\n' +
    '“””\n' +
    '\n' +
    'hidrogeno_simbolo = "H"\n' +
    'arsenico_simbolo = "As"\n' +
    'calcio_simbolo = "Ca"\n' +
    'azufre_simbolo = “S”\n' +
    '\n' +
    'hidrogeno_es_metaloide = False\n' +
    'arsenico_es_metaloide = True\n' +
    'calcio_es_metaloide = False\n' +
    'azufre_es_metaloide = True\n' +
    '\n' +
    '# print(f"{hidrogeno_simbolo}: {hidrogeno_es_metaloide}\\n{arsenico_simbolo}: {arsenico_es_metaloide}\\n{calcio_simbolo}: {calcio_es_metaloide}\\n{azufre_simbolo}: {azufre_es_metaloide}")\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Declarar las variables de cada elemento y definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel12 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/13');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/12', {
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
            <Instructions instructions={"❧ 2.4 Variable de tipo boolean"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
H: False
As: True
Ca: False
S: True
“””

hidrogeno_simbolo = H
arsenico_simbolo = As
calcio_simbolo = Ca
azufre_simbolo = S

hidrogeno_es_metaloide =

# print()
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

export default Course3Sublevel12;
