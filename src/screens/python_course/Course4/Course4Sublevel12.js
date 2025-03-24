import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../../components/OutputDisplay/OutputDisplay';
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = '“””\n' +
    'RECETA\n' +
    'Elementos utilizados: Yodo, Litio, Zinc\n' +
    '1. 22.75 L de Yodo\n' +
    '2. 13.54 L de Litio\n' +
    '3. 45.88 L de Zinc\n' +
    '\n' +
    'TOTAL: 82.17 L\n' +
    '“””\n' +
    '\n' +
    'yodo_volumen = 22.75\n' +
    'litio_volumen = 13.54\n' +
    'zinc_volumen = 45.88\n' +
    '\n' +
    'yodo_volumen = str(yodo_volumen)\n' +
    'litio_volumen = str(litio_volumen)\n' +
    'zinc_volumen = str(zinc_volumen)\n' +
    '\n' +
    'total_volumen = 82.17 # escribir la suma final\n' +
    '\n' +
    'frase = “Elementos utilizados: Yodo, Litio, Zinc”\n' +
    '\n' +
    'print(f"RECETA\\n{frase}\\n1. {yodo_volumen} L de Yodo\\n2. {litio_volumen} L de Litio\\n3. {zinc_volumen} L de Zinc\\nTOTAL: {total_volumen} L")\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Escribir una nueva receta. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel12 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/5/13');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/12', {
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
            <Instructions instructions={"❧ 3.4 float a str"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
RECETA
Elementos utilizados: Yodo, Litio, Zinc
1. 22.75 L de Yodo
2. 13.54 L de Litio
3. 45.88 L de Zinc

TOTAL: 82.17 L
“””

yodo_volumen = 35.32
yodo_volumen = yodo_volumen

total_volumen = yodo_volumen + litio_volumen + zinc_volumen # escribir el resultado final

frase = Elementos utilizados:
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

export default Course4Sublevel12;
