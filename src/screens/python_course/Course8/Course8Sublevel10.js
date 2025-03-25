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
    'pH: 4\n' +
    'pH menor a 7: Agua ácida\n' +
    'pH igual a 7: Agua neutra\n' +
    'pH mayor a 7: Agua alcalina\n' +
    '"""\n' +
    '\n' +
    'pH = 4\n' +
    '\n' +
    'if pH < 7:\n' +
    '    mensaje = "El agua es ácida."\n' +
    'if pH == 7:\n' +
    '    mensaje = "El agua es neutra."\n' +
    'if pH > 7:\n' +
    '    mensaje = "El agua es alcalina."\n' +
    '\n' +
    'print(f"El pH del agua es: {pH}. {mensaje}")\n'

const user_stories = [
    {
        action: "DELETE",
        description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course8Sublevel10 = () => {
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
                navigate('/course-python/8/11');
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
            if (result === "El pH del agua es: 4. El agua es ácida.") {
                const idToken = userProfile.id
                const response = await axios.post('http://localhost:3001/validate/course-python/8/10', {
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
            <Instructions instructions={"Utilizando el operador >=, verificar si el pH es mayor o igual a 7."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="7.4 if/else - Mayor/menor o igual que (>=)"
                        correctAnswer={correctAnswer}
                        previousCode='"""
pH: 4
pH menor a 7: Agua ácida
pH igual a 7: Agua neutra
pH mayor a 7: Agua alcalina
"""

pH = 4.5

if pH < 7+3:
    mensaje = "El agua es ácida."
if pH == 7:
    mensaje = "El agua es neutra."
if pH > 7:
    mensaje = "El agua es alcalina."

#print(f"El pH del agua es: {pH}. {mensaje}")
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

export default Course8Sublevel10;
