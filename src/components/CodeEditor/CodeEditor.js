// src/components/CodeEditor.js
import React, {useState} from 'react';
import './CodeEditor.css';
import {useUser} from "../utils/UserProvider";

const CodeEditor = ({className, onSubmit, previousCode, correctAnswer}) => {
    const [classCode, setClassCode] = useState(previousCode || '');
    const {userProfile} = useUser();
    const cheatActivated = userProfile.email === "miludecastrobc@gmail.com" || userProfile.email === "milagros.de613@comunidad.ub.edu.ar" || userProfile.email === "gonzalo.contogrobly@gmail.com"
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(className, classCode);
    };

    const executeCheat = () => {
        setClassCode(correctAnswer);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='code-area bg'>

                <div className='arrows'>
                    <div className='arrow arr-left'></div>
                    <div className='arrow arr-right'></div>
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
                <button type="submit" className='compile-button'><span>Compile</span> <span>&</span> <span>Run</span>
                </button>
                {cheatActivated ? (<div className='compile-button cheat' onClick={executeCheat}><span>Cheat</span></div>) : null}
            </div>
        </form>
    );
};

export default CodeEditor;
