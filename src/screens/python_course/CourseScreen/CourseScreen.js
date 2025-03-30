import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";
import axios from "axios";

const CourseScreen = ({
    nextLevelRoute,
    validationUrl,
    instructions,
    codeEditorSetup: {title, previousCode, correctAnswer},
    userStories,
    isValidResult
}) => {
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
                navigate(nextLevelRoute);
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

            if (isValidResult(result)) {
                const idToken = userProfile.id
                const response = await axios.post(validationUrl, {
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
            const errorMessage = error.message.split("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^").pop().trim();
            setOutput(errorMessage);
        }
    };

    return (
        <div className="course-level-1 flex">
            <div className="moving-course-sky"></div>
            <Instructions instructions={instructions}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title={title}
                        correctAnswer={correctAnswer}
                        previousCode={previousCode}
                        placeholder="Escriba el codigo aqui"
                    />
                </div>
                <OutputDisplay output={output} user_stories={userStories}/>
                <UserStoriesSublevel validations={validations} user_stories={userStories}/>
            </div>
        </div>
    );
};

export default CourseScreen;
