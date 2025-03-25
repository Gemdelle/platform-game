import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = '“””\n' +
    'APARICIÓN POR DÍA\n' +
    'Lunes: \n' +
    'Martes:\n' +
    'Miércoles:\n' +
    'Jueves:\n' +
    'Viernes: \n' +
    '“””\n' +
    '\n' +
    'cantidad_lunes = 8  \n' +
    'cantidad_martes = 17  \n' +
    'cantidad_miércoles = 15  \n' +
    'cantidad_jueves = 20  \n' +
    'cantidad_viernes = 15 \n' +
    '\n' +
    'cantidad_lunes = str(cantidad_lunes)\n' +
    'cantidad_martes = str(cantidad_martes)\n' +
    'cantidad_miércoles = str(cantidad_miercoles)\n' +
    'cantidad_jueves = str(cantidad_jueves)\n' +
    'cantidad_viernes = str(cantidad_viernes)\n' +
    '\n' +
    '# print(“APARICIÓN POR DÍA\\nLunes: {cantidad_lunes}\\nMartes: {cantidad_martes}\\nMiércoles: {cantidad_miércoles}\\nJueves: \\nViernes: {cantidad_viernes}”)\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Como la mayor cantidad de apariciones corresponde al Níquel, se quiere especificar la cantidad por día. Definir las variables correspondientes. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel9 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/10');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/9', {
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
            <Instructions instructions={"❧ 3.3 int a str"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
APARICIÓN POR DÍA
Lunes:
Martes:
Miércoles:
Jueves:
Viernes:
“””

cantidad_lunes = 8
cantidad_martes = 17
cantidad_miércoles = 15
cantidad_jueves = 20
cantidad_viernes = 15

# print(“APARICIÓN POR DÍA\nLunes: \nMartes: \nMiércoles: \nJueves: \nViernes: ”)
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

export default Course4Sublevel9;
