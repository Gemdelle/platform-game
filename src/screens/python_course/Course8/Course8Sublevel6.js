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
    'Temperatura actual: 372K\n' +
    'El agua se está evaporando. / El agua no se está evaporando. # imprimir el mensaje correspondiente\n' +
    '"""\n' +
    '\n' +
    'temperatura_actual = 372\n' +
    'temperatura_fusion = 373\n' +
    '\n' +
    'if  temperatura_actual < temperatura_fusion:  \n' +
    '   print("El agua no se está evaporando.")\n' +
    'else:\n' +
    '   print("El agua se está evaporando.")\n'

const user_stories = [
    {
        action: "DELETE",
        description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course8Sublevel6 = () => {
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
                navigate('/course-python/8/7');
            }, 2500);
        }
    }, [shouldProceed]);

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
            if (result === "El agua no se está evaporando.") {
                const idToken = userProfile.id
                const response = await axios.post('http://localhost:3001/validate/course-python/8/6', {
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
            <Instructions instructions={"Sabiendo que el agua alcanza el punto de ebullición a 373K, determinar el estado del agua. Definir la impresión para que quede exactamente el mismo formato que el texto comentado."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="7.2 if/else - Menor que (<)"
                        correctAnswer={correctAnswer}
                        previousCode='"""
Temperatura actual: 372K
El agua se está evaporando. / El agua no se está evaporando. # imprimir el mensaje correspondiente
"""

if :
   pass
else:
   pass

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

export default Course8Sublevel6;
