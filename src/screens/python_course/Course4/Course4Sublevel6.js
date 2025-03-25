import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'helio_masa = “4.0026”  # g/mol\n' +
    'helio_volumen = “22.4”  # L (volumen molar a condiciones estándar)\n' +
    'helio_cantidad_sustancia = “1”  # mol\n' +
    '\n' +
    'helio_masa = float(4.0026)  # g/mol\n' +
    'helio_volumen = float(22.4)  # L (volumen molar a condiciones estándar)\n' +
    'helio_cantidad_sustancia = int(1)  # mol\n' +
    '\n' +
    'unidad_masa = “g/mol”\n' +
    'unidad_volumen = “L” \n' +
    'unidad_sustancia = “mol”\n' +
    '\n' +
    'print(f“Masa Helio: {helio_masa} {unidad_masa}\\nVolumen Helio: {helio_volumen} {unidad_volumen}\\n{helio_sustancia} {unidad_sustancia}”)\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Los registros anteriores se hicieron muy mal, entonces para este analisis se dejaron los datos originales. Convertir los datos a valor real. Declarar las variables con las unidades correspondientes. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel6 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/7');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/6', {
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
            <Instructions instructions={"❧ 3.2 str a float"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
Masa Helio: 4.0026 g/mol
Volumen Helio: 22.4 L
Cantidad sustancia Helio: 1 mol
“””

helio_masa = “4.0026”  # g/mol
helio_volumen = “22.4”  # L (volumen molar a condiciones estándar)
helio_cantidad_sustancia = “1”  # mol

unidad_masa = “g/mol”
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

export default Course4Sublevel6;
