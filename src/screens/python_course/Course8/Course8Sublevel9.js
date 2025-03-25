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
    'Temperatura actual: 140°C\n' +
    'El agua alcanzó su máxima densidad. / El agua todavía no alcanzó su máxima densidad. # imprimir el mensaje correspondiente\n' +
    '"""\n' +
    '\n' +
    'temperatura_actual = 140\n' +
    'temperatura_densidad_maxima = 4\n' +
    '\n' +
    'if temperatura_actual > temperatura_densidad_maxima:\n' +
    '  print(f"Temperatura: {temperatura_actual}.\\nEl agua alcanzó su máxima densidad.")\n' +
    'else:\n' +
    '  print(f"Temperatura: {temperatura_densidad_maxima}.\\nEl agua todavía no alcanzó su máxima densidad.")\n'

const user_stories = [
    {
        action: "DELETE",
        description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course8Sublevel9 = () => {
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
                navigate('/course-python/8/10');
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
            if (result === "Temperatura: 140.\nEl agua alcanzó su máxima densidad.") {
                const idToken = userProfile.id
                const response = await axios.post('http://localhost:3001/validate/course-python/8/9', {
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
            <Instructions instructions={"Determinar nuevamente si la densidad es máxima según la temperatura. La densidad máxima es a 4°C. Declarar las variables necesarias. Definir la impresión para que quede exactamente el mismo formato que el texto comentado."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="7.3 if/else - Mayor que (>)"
                        correctAnswer={correctAnswer}
                        previousCode='"""
Temperatura actual: 140°C
El agua alcanzó su máxima densidad. / El agua todavía no alcanzó su máxima densidad. # imprimir el mensaje correspondiente
"""

if temperatura_densidad_maxima temperatura_actual:
  print()
  print()
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

export default Course8Sublevel9;
