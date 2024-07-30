// src/components/CodeEditor.js
import React, { useState } from 'react';

const CodeEditor = ({ onSubmit }) => {
    const [fatherCode, setFatherCode] = useState('');
    const [mainCode, setMainCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(fatherCode, mainCode);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Father.java</h2>
            <textarea
                value={fatherCode}
                onChange={(e) => setFatherCode(e.target.value)}
                placeholder="Write your Father.java code here..."
                rows="10"
                cols="50"
            ></textarea>
            <h2>Main.java</h2>
            <textarea
                value={mainCode}
                onChange={(e) => setMainCode(e.target.value)}
                placeholder="Write your Main.java code here..."
                rows="10"
                cols="50"
            ></textarea>
            <button type="submit">Compile and Run</button>
        </form>
    );
};

export default CodeEditor;
