import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'acido_sulfurico_nombre = "Ácido sulfúrico"\n' +
    'acido_sulfurico_formula = "H₂SO₄"\n' +
    'acido_sulfurico_estado = "líquido"\n' +
    'acido_sulfurico_ph = "0.3"\n' +
    'acido_sulfurico_usos = "Se utiliza en la fabricación de fertilizantes, detergentes y en el refinado de petróleo."\n' +
    '\n' +
    'print(f\'acido_sulfurico_nombre = "{acido_sulfurico_nombre}"\\nacido_sulfurico_formula = "{acido_sulfurico_formula}"\\nacido_sulfurico_estado = "{acido_sulfurico_estado}"\\nacido_sulfurico_ph = "{acido_sulfurico_ph}"\\nacido_sulfurico_usos = "{acido_sulfurico_usos}"\')\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Imprimir todos los datos de las variables de manera tal que queden exactamente igual al contenido de las triples comillas.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython2Sublevel18 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/1');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/2/18', {
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
            <Instructions instructions={"Imprimir todos los datos de las variables de manera tal que queden exactamente igual al contenido de las triples comillas."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="1.6 Impresión formateada y salto de línea"
                        correctAnswer={correctAnswer}
                        previousCode='“””
acido_sulfurico_nombre = "Ácido sulfúrico"
acido_sulfurico_formula = "H₂SO₄"
acido_sulfurico_estado = "líquido"
acido_sulfurico_ph = "0.3"
acido_sulfurico_usos = "Se utiliza en la fabricación de fertilizantes, detergentes y en el refinado de petróleo."
“””
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

export default CoursePython2Sublevel18;
