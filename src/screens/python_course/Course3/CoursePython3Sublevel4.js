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
    'hidrogeno_numero_atomico = 1\n' +
    'calcio_simbolo = "Ca"\n' +
    'calcio_numero_atomico = 20\n' +
    '\n' +
    'print(f”Z(H): {hidrogeno_numero_atomico\\nZ(Ca): {calcio_numero_atomico}}.”)\n'
const user_stories = [
    {
        action: "DELETE",
        description: "Corregir los números atómicos de los elementos; el Calcio tiene un valor 20 veces mayor que el Hidrógeno. Deben ser números enteros. Imprimir los números atómicos de ambos elementos, separados por una línea en blanco.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython3Sublevel4 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/5');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/4', {
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
            <Instructions instructions={"Corregir los números atómicos de los elementos; el Calcio tiene un valor 20 veces mayor que el Hidrógeno. Deben ser números enteros. Imprimir los números atómicos de ambos elementos, separados por una línea en blanco"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="2.2 Variable de tipo int"
                        correctAnswer={correctAnswer}
                        previousCode='hidrogeno_simbolo = "H"
hidrogeno_numero_atomico = “10”
calcio_simbolo = "Ca"
calcio_numero_atomico = “200”

# print(f”Z(H): {hidrogeno_numero_atomico}”)
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

export default CoursePython3Sublevel4;
