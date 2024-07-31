// src/App.js
import React, { useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay';
import './CourseLevel1.css';

const CourseLevel1 = () => {
    const [output, setOutput] = useState('');

    const handleCompileAndRun = async (fatherCode, mainCode) => {
        try {
            const response = await fetch('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com:3000/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fatherCode, mainCode }),
            });
            const result = await response.json();
            setOutput(result.output);
        } catch (error) {
            setOutput('An error occurred while compiling and running the code.');
        }
    };

    return (
        <div className="App">
            <h1>Online Java Compiler</h1>
            <CodeEditor onSubmit={handleCompileAndRun} />
            <OutputDisplay output={output} />
        </div>
    );
};

export default CourseLevel1;
