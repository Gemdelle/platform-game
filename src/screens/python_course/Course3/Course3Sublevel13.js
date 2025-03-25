import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'silicio_nombre = "Silicio"\n' +
    'oxigeno_simbolo = "O"\n' +
    'silicio_simbolo = "K"\n' +
    'silicio_simbolo = "Si"\n' +
    'Oxígeno_nombre = “Oxígeno”\n' +
    '\n' +
    'print(f“{hidrogeno_nombre}: {hidrogeno_simbolo}\\n{aluminio_nombre}: {aluminio_simbolo}”)\n'
const user_stories = [
    {
        action: "DELETE",
        description: "Eliminar las variables necesarias para que la asignación de valores sea correcta. La asignación incorrecta que no afecta el resultado no debe ser eliminada.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel13 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/14');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/13', {
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
                        previousCode='silicio_nombre = "Silicio"
oxigeno_simbolo = "O"
oxigeno_simbolo = "Cl"
silicio_simbolo = "K"
silicio_simbolo = "Si"
Oxígeno_nombre = “Oxígeno”
silicio_nombre = "Cloro"

print(f“{hidrogeno_nombre}: {hidrogeno_simbolo}\n{aluminio_nombre}: {aluminio_simbolo}”)
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

export default Course3Sublevel13;
