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
    'La Trimetilamina tiene un total de <total_atomos> átomos.\n' +
    '"""\n' +
    '\n' +
    'atomos_nitrogeno = 1\n' +
    'atomos_carbono =  atomos_nitrogeno * 3\n' +
    'átomos_hidrógeno = atomos_carbono * 3\n' +
    '\n' +
    'total_atomos = atomos_nitrogeno  + atomos_carbono + átomos_hidrógeno\n' +
    '\n' +
    'print(f"La Trimetilamina tiene un total de {total_atomos} átomos.")\n'

const user_stories = [
    {
        action: "EDIT",
        description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course6Sublevel15 = () => {
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
                navigate('/');
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
            if (result === "La Trimetilamina tiene un total de 13 átomos.") {
                const idToken = userProfile.id
                const response = await axios.post('http://localhost:3001/validate/course-python/6/15', {
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
            <Instructions instructions={"Sabiendo la siguiente información de la Trimetilamina, calcular la cantidad de átomos de cada elemento y la cantidad total: la cantidad de átomos de Carbono corresponde al triple de átomos de Nitrógeno, y la cantidad de átomos de Hidrógeno corresponde al triple de átomos de Carbono."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="❧ 5.5 Multiplicación con variables (*)"
                        correctAnswer={correctAnswer}
                        previousCode='"""
La Trimetilamina tiene un total de <total_atomos> átomos.
"""

atomos_nitrogeno = 1
atomos_carbono =
atomos_hidrogeno =
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

export default Course6Sublevel15;
