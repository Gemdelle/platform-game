import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'estroncio_cantidad_sustancia = 4  # mol\n' +
    'niquel_cantidad_sustancia = 1  # mol\n' +
    'paladio_cantidad_sustancia = 3  # mol\n' +
    '\n' +
    'estroncio_cantidad_sustancia = str(estroncio_cantidad_sustancia)  # mol\n' +
    'niquel_cantidad_sustancia = str(niquel_cantidad_sustancia)  # mol\n' +
    'paladio_cantidad_sustancia = str(paladio_cantidad_sustancia)  # mol\n' +
    '\n' +
    '# print(“CANTIDAD DE SUSTANCIA\\nEstroncio: {estroncio_cantidad_sustancia}\\nNíquel: {niquel_cantidad_sustancia}\\n Paladio: {paladio_cantidad_sustancia} ”)\n'
const user_stories = [
    {
        action: "DELETE",
        description: "Se registra la cantidad de sustancia de cada elemento encontrada encontrada en una fábrica. Los registros van a guardarse en un libro. Corregir el tipo de dato de las variables para que sean caracteres.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel7 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/8');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/7', {
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
            <Instructions instructions={"❧ 3.3 int a str"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='estroncio_cantidad_sustancia = 4  # mol
niquel_cantidad_sustancia = 1  # mol
paladio_cantidad_sustancia = 3  # mol

estroncio_cantidad_sustancia = int(str(estroncio_cantidad_sustancia))  # mol
niquel_cantidad_sustancia = int(str(niquel_cantidad_sustancia))  # mol
paladio_cantidad_sustancia = int(str(paladio_cantidad_sustancia))  # mol

# print(“CANTIDAD DE SUSTANCIA\nEstroncio: {estroncio_cantidad_sustancia}\nNíquel: {niquel_cantidad_sustancia}\n Paladio: {paladio_cantidad_sustancia} ”)
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

export default Course4Sublevel7;
