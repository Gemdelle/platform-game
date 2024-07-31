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

{/* HEADER */}
            <header>
                <div className='header-container'>
                    
                        <div className='menu-options'>
                            <div id='courses'>Courses</div>
                            <div id='library'>Library</div>
                            <div id='friends'>Friends (coming soon)</div>
                            <div id='calendar'>Calendar</div>
                            <div id='faq'>FAQ</div>
                            <div id='support'>Support</div>
                        </div>
                    
                    <div className='hud flex'>
                        <div className='level-bar'></div>
                        <div className='data flex'>
                            <div className='pp flex'>profile picture</div>
                            <div className='heart bg flex'><span id='level'>1</span></div>
                        </div>
                    </div>
                </div>
            </header>



            <div className='container flex'>
            <div className='code-container flex-c'>
                <CodeEditor onSubmit={handleCompileAndRun} />
                <OutputDisplay output={output} />
            </div>
            <div className='img-output'></div>
            <div className='user-stories'></div>
            </div>
            
        </div>
    );
};

export default CourseLevel1;
