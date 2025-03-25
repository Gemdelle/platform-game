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
    'Z(Ca): …\n' +
    '\n' +
    'Z(Al): …\n' +
    '\n' +
    'Z(As): …\n' +
    '“””\n' +
    '\n' +
    'calcio_simbolo = “Ca”\n' +
    'calcio_numero_atomico = 20 \n' +
    'aluminio_simbolo = “Al”\n' +
    'aluminio_numero_atomico = 13\n' +
    'arsenico_simbolo = “As”\n' +
    'arsenico_numero_atomico = 33\n' +
    '\n' +
    '# print(f”Z({calcio_simbolo}): {calcio_numero_atomico\\n\\nZ({aluminio_simbolo}): {aluminio_numero_atomico}.\\n\\nZ({arsenico_simbolo}): {arsenico_numero_atomico}.”)\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Corregir el número atómico de los elementos, que están invertidos. Declarar las mismas variables para el Arsénico (Z(As) corresponde a la suma de Z(Ca) y Z(Al), escribir el número sin realizar cuentas). Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel6 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/7');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/6', {
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
            <Instructions instructions={"❧ 2.2 Variable de tipo int"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='“””
Z(Ca): …

Z(Al): …

Z(As): …
“””

# calcio_simbolo = Ca
# calcio_numero_atomico = “13”
# aluminio_simbolo = Al
# aluminio_numero_atomico = “20”

# print(f””)
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

export default Course3Sublevel6;
