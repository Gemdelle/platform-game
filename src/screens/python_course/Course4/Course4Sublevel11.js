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
    '1. 75.35 L de Nitrógeno\n' +
    '2. 14.24 L Oxígeno\n' +
    '3. 53.29 L Vanadio\n' +
    '4. 199.2 L Berilio\n' +
    '“””\n' +
    'nitrogeno_volumen = 75.35\n' +
    'oxigeno_volumen = 14.24 \n' +
    'vanadio_volumen = 53.9\n' +
    'berilio_volumen = 199.2\n' +
    '\n' +
    'nitrogeno_volumen = str(nitrogeno_volumen)\n' +
    'oxigeno_volumen = str(oxigeno_volumen)\n' +
    'vanadio_volumen = str(vanadio_volumen)\n' +
    'berilio_volumen = str(berilio_volumen)\n' +
    '\n' +
    'print(f”RECETA\\n1. {nitrogeno_volumen} L de Nitrógeno\\n2. {oxigeno_volumen} L de Oxígeno\\n3. {vanadio_volumen} L de Vanadio\\n 4. {berilio_volumen} L de Berilio”)\n'
const user_stories = [
    {
        action: "ADD",
        description: "A la receta se le agregan 2 elementos más, Vanadio y Berilio. Agregarlos a la receta. Imprimir los datos nuevamente.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel11 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/12');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/11', {
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
1. 75.35 L de Nitrógeno
2. 14.24 L Oxígeno
3. 53.29 L Vanadio
4. 199.2 L Berilio
“””
nitrogeno_volumen = 75.35
oxigeno_volumen = 14.24

nitrogeno_volumen = str(nitrogeno_volumen)
oxigeno_volumen = str(oxigeno_volumen)

print(f”RECETA\n1. {nitrogeno_volumen} L de Nitrógeno\n2. {oxigeno_volumen} L de Oxígeno”)
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

export default Course4Sublevel11;
