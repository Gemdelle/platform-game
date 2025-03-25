import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";
import axios from "axios";

const correctAnswer = '"""\n' +
    'Temperatura  actual: -2.3°C\n' +
    '"""\n' +
    '\n' +
    'temperatura_actual = -2.3\n' +
    '\n' +
    'if temperatura_actual < 0:  \n' +
    '    mensaje = "La temperatura está por debajo de 0°C. Está congelando."\n' +
    'else:\n' +
    '    mensaje = "La temperatura está por encima de 0°C. No está congelando."\n' +
    '\n' +
    'print(f"La temperatura ingresada es {temperatura_actual}°C.\\n{mensaje}")\n'
const user_stories = [
    {
        action: "DELETE",
        description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course8Sublevel4 = () => {
    const [output, setOutput] = useState('');
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const [pyodide, setPyodide] = useState(null);
    const {userProfile, setUserProfile} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const initPyodide = async () => {
            const pyodideInstance = await import("https://cdn.jsdelivr.net/pyodide/v0.24.0/full/pyodide.mjs")
                .then((pyodide) => pyodide.loadPyodide());
            setPyodide(pyodideInstance);
        };
        initPyodide();
    }, []);

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(() => {
                navigate('/course-python/8/5');
            }, 2500);
        }
    }, [navigate, shouldProceed]);

    const handleCompileAndRun = async (className, classCode) => {

        try {
            let result = await pyodide.runPythonAsync(`
import sys
from io import StringIO

output = StringIO()
sys.stdout = output

${classCode}

sys.stdout = sys.__stdout__
output.getvalue()
        `);

            result = result.trim();

            setOutput(result);
            if (result === "La temperatura ingresada es -2.3°C.\nLa temperatura está por debajo de 0°C. Está congelando.") {
                const idToken = userProfile.id
                const response = await axios.post('http://localhost:3001/validate/course-python/8/4', {
                    class_code: classCode
                }, {
                    headers: {
                        'Authorization': `Bearer ${idToken}`
                    }
                });

                if (response.data.error) {
                    throw Error(response.data.error)
                }

                setUserProfile(response.data.userProfile);
                localStorage.setItem('userProfile', JSON.stringify(response.data.userProfile));
                setValidations(["VALID_VARIABLE_DECLARATION"]);
                setShouldProceed(true);
            } else {
                setValidations([]);
            }

        } catch (error) {
            setOutput(`Error al ejecutar el código: ${error.message}`);
        }
    };

    return (
        <div className="course-level-1 flex">
            <div className="moving-course-sky"></div>
            <Instructions instructions={"Sabiendo que el punto de fusión del agua es 0°C, determinar el estado del agua. Corregir las variables necesarias."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="7.2 if/else - Menor que (<)"
                        correctAnswer={correctAnswer}
                        previousCode='"""
Temperatura  actual: -2.3°C
"""

temperatura_actual = -22.3

if temperatura < 10:
    mensaje = "La temperatura está por debajo de 0°C. Está congelando."
else:
    mensaje = "La temperatura está por encima de 0°C. No está congelando."

# print(f"La temperatura ingresada es {temperatura_actual}°C.\n{mensaje}")
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

export default Course8Sublevel4;
