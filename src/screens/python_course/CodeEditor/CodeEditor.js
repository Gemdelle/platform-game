// src/components/CodeEditor.js
import React, {useState} from 'react';
import './CodeEditor.css';
import {useUser} from "../../../components/utils/UserProvider";

const CodeEditor = ({className, onSubmit, previousCode, correctAnswer, placeholder=`Write your ${className}.java code here...`}) => {
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
            <div className='code-area bg python-course'>

                <div className='arrows'>
                    <div className='arrow arr-left clickable'></div>
                    <div className='arrow arr-right clickable'></div>
                </div>
                <div className='title'>{className}.java</div>
                <textarea
                    value={classCode}
                    onChange={(e) => setClassCode(e.target.value)}
                    placeholder={placeholder}
                    rows="10"
                    cols="50"
                    className='bg'
                ></textarea>
                <button type="submit" className='compile-button clickable'><span>Compile</span> <span>&</span> <span>Run</span>
                </button>
                {cheatActivated ? (<div className='compile-button cheat' onClick={executeCheat}><span>Cheat</span></div>) : null}
            </div>
        </form>
    );
};

export default CodeEditor;
