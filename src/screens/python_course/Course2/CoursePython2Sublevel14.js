import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
    'acido_clorhidrico_formula = "HCl"\n' +
    'acido_clorhidrico_estado = "líquido"\n' +
    'acido_clorhidrico_ph = "1"\n' +
    '\n' +
    'print(f"El compuesto {acido_clorhidrico_nombre} tiene la fórmula {acido_clorhidrico_formula}, es un {acido_clorhidrico_estado} y su pH es {acido_clorhidrico_ph}.")\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Imprimir correctamente los datos del ácido clorhídrico. Incluir el punto final.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython2Sublevel14 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/2/15');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/2/14', {
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
            <Instructions instructions={"❧ 1.5 Impresión formateada "}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='acido_clorhidrico_nombre = "Ácido clorhídrico"
acido_clorhidrico_formula = "HCl"
acido_clorhidrico_estado = "líquido"
acido_clorhidrico_ph = "1"

# print("El compuesto acido_clorhidrico_nombre tiene la fórmula acido_clorhidrico_formula, es un acido_clorhidrico_estado y su pH es acido_clorhidrico_ph.")
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

export default CoursePython2Sublevel14;
