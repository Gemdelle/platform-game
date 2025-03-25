import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";

const correctAnswer = '“””\n' +
    'Theodore Gray es un químico, escritor y divulgador científico conocido por su pasión por la tabla periódica. Es cofundador de Wolfram Research y autor de libros como The Elements, donde presenta la química de forma visual e interactiva.\n' +
    '“””\n' +
    '\n' +
    'quote = "Los elementos son los átomos de la tabla periódica, pero la química es la sinfonía de sus combinaciones." # Theodore Gray\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Comentar la información del autor en formato multilínea y el nombre del autor después de la frase en la misma línea.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython1Sublevel6 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/1/7');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/1/6', {
                class_code: classCode
            }, {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            if (response.data.error) {
                if (response.data.invalidations){
                    setInvalidations(response.data.invalidations)
                }
                throw Error(response.data.error)
            }

            if (response.data.validations) {
                setValidations(response.data.validations);
            }

            if (response.data.validations.length === 1) {
                setShouldProceed(true);
            }
            setUserProfile(response.data.userProfile);
            localStorage.setItem('userProfile', JSON.stringify(response.data.userProfile));
        } catch (error) {
            setOutput('An error occurred while compiling and running the code.');
        }
    };

    return (
        <div className="course-level-1 flex">
            <div className="moving-course-sky"></div>
            <Instructions instructions={"Comentar la información del autor en formato multilínea y el nombre del autor después de la frase en la misma línea."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="0.2 Comentarios multilínea “”” “””"
                        correctAnswer={correctAnswer}
                        previousCode='Theodore Gray es un químico, escritor y divulgador científico conocido por su pasión por la tabla periódica. Es cofundador de Wolfram Research y autor de libros como The Elements, donde presenta la química de forma visual e interactiva.

quote = "Los elementos son los átomos de la tabla periódica, pero la química es la sinfonía de sus combinaciones." - Theodore Gray
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

export default CoursePython1Sublevel6;
