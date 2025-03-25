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
    'Cantidad de sustancia de Bromo: 2 mol\n' +
    'Cantidad de sustancia de Neón: 3 mol\n' +
    'Cantidad de sustancia de Hierro: 4 mol\n' +
    '“””\n' +
    '\n' +
    'unidad_de_medida = “mol”\n' +
    'bromo_cantidad_sustancia = “2”  # mol\n' +
    'neon_cantidad_sustancia = “3”  # mol\n' +
    'hierro_cantidad_sustancia = “4”  # mol\n' +
    '\n' +
    'bromo_cantidad_sustancia = int(bromo_cantidad_sustancia)  # mol\n' +
    'neon_cantidad_sustancia = int(neon_cantidad_sustancia)  # mol\n' +
    'hierro_cantidad_sustancia = int(hierro_cantidad_sustancia)   # mol\n' +
    '\n' +
    '# print(f”Cantidad de sustancia de bromo: {bromo_cantidad_sustancia} {unidad_de_medida}\\nCantidad de sustancia de bromo: {neon_cantidad_sustancia} {unidad_de_medida}\\nCantidad de sustancia de hierro: {hierro_cantidad_sustancia} {unidad_de_medida}”)\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Definir nuevas variables para convertir los datos a enteros.  Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel3 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/4');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/3', {
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
            <Instructions instructions={"Definir nuevas variables para convertir los datos a enteros.  Definir la impresión para que quede exactamente el mismo formato que el texto comentado."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="3.1. str a int"
                        correctAnswer={correctAnswer}
                        previousCode='“””
Cantidad de sustancia de Bromo: 2 mol
Cantidad de sustancia de Neón: 3 mol
Cantidad de sustancia de Hierro: 4 mol
“””

unidad_de_medida = “mol”
bromo_cantidad_sustancia = “2”
neon_cantidad_sustancia = “3”
hierro_cantidad_sustancia = “4”

# print(f”Cantidad de sustancia de bromo: \n”)
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

export default Course4Sublevel3;
