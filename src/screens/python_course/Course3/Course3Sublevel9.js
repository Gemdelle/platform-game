import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'hidrogeno_simbolo = "H"\n' +
    'arsenico_simbolo = "As"\n' +
    'calcio_simbolo = "Ca"\n' +
    'aluminio_simbolo = "Al"\n' +
    'azufre_simbolo = "S"\n' +
    '\n' +
    'hidrogeno_peso_atomico = 1.008\n' +
    'arsenico_peso_atomico = 74.922\n' +
    'calcio_peso_atomico = 40.078\n' +
    'aluminio_peso_atomico = 26.982\n' +
    'azufre_peso_atomico = 32.065\n' +
    '\n' +
    'print(f"Peso atómico ({hidrogeno_simbolo}): {hidrogeno_peso_atomico}\\nPeso atómico ({arsenico_simbolo}): {arsenico_peso_atomico}\\n Peso atómico ({calcio_simbolo}): {calcio_peso_atomico}\\nPeso atómico ({aluminio_simbolo}): {aluminio_peso_atomico}\\nPeso atómico ({azufre_simbolo}): {azufre_peso_atomico}")\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Declarar las variables para los pesos atómicos de cada elemento y definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel9 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/10');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/9', {
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
            <Instructions instructions={"❧ 2.3 Variable de tipo float"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='"""
Peso atómico (H): 1.008
Peso atómico (As): 74.922
Peso atómico (Ca): 40.078
Peso atómico (Al): 26.982
Peso atómico (S): 32.065
"""

hidrogeno_simbolo = "H"
arsenico_simbolo = "As"
calcio_simbolo = "Ca"
aluminio_simbolo = "Al"
azufre_simbolo = "S"

# print()
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

export default Course3Sublevel9;
