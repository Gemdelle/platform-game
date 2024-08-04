// src/components/CodeEditor.js
import React, { useState } from 'react';
import './CodeEditor.css';
const CodeEditor = ({ className, onSubmit }) => {
    const [classCode, setClassCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(className, classCode);
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='code-area bg'>

            <div className='arrows'>
                <div className='arrow arr-2'></div>
                <div className='arrow arr-1'></div>
            </div>
            <div className='title'>{className}.java</div>
            <textarea
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                placeholder={`Write your ${className}.java code here...`}
                rows="10"
                cols="50"
                className='bg'
            ></textarea>
            <button type="submit" className='compile-button'>Compile & Run</button>
            </div>
        </form>
    );
};

export default CodeEditor;
