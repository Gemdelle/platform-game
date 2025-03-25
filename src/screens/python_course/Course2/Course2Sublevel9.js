import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'metano_nombre = "Metano"\n' +
    'metano_formula = "CH4"\n' +
    'metano_estado = "gas"\n' +
    'metano_punto_fusion = "-161.5°C"\n' +
    'metano_punto_ebullicion = "-161.5°C"\n' +
    'metano_origen = "Se encuentra en los yacimientos de gas natural."\n' +
    '\n' +
    'print("El nombre del compuesto a describir es", metano_nombre, ".")\n' +
    'print("Su fórmula química es", metano_formula, ".")\n' +
    'print("Se encuentra en estado", metano_estado, ".")\n' +
    'print("Su punto de fusión es", metano_punto_fusion, ".")\n' +
    'print("Su punto de ebullición es", metano_punto_ebullicion, ".")\n' +
    'print(metano_origen)\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Habilitar las variables y el print y agregar un nuevo print por cada variable. Todas las impresiones deben tener un punto final.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course2Sublevel9 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/2/10');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/2/9', {
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
            <Instructions instructions={"❧ 1.3 Imprimir concatenación de texto y variables con ,"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
metano_nombre = "Metano"
metano_formula = "CH4"
metano_estado = "gas"
metano_punto_fusion = "-161.5°C"
metano_punto_ebullicion = "-161.5°C"
metano_origen = "Se encuentra en los yacimientos de gas natural."
“””

# print(“El nombre del compuesto a describir es”, metano_nombre, “.”)
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

export default Course2Sublevel9;
