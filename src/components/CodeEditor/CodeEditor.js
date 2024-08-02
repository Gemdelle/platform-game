// src/components/CodeEditor.js
import React, { useState } from 'react';
import './CodeEditor.css';
const CodeEditor = ({ onSubmit }) => {
    const [fatherCode, setFatherCode] = useState('');
    const [mainCode, setMainCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(fatherCode, mainCode);
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='code-area bg'>

            <div className='arrows'>
                <div className='arrow arr-2'></div>
                <div className='arrow arr-1'></div>
            </div>
            <div className='title'>Father.java</div>
            <textarea
                value={fatherCode}
                onChange={(e) => setFatherCode(e.target.value)}
                placeholder="Write your Father.java code here..."
                rows="10"
                cols="50"
                className='bg'
            ></textarea>
            <button type="submit" className='compile-button'>Compile & Run</button>
            </div>
            
            {/* <h2>Main.java</h2>
            <textarea
                value={mainCode}
                onChange={(e) => setMainCode(e.target.value)}
                placeholder="Write your Main.java code here..."
                rows="10"
                cols="50"
                className='bg'
            ></textarea> */}
            
        </form>
    );
};

export default CodeEditor;
