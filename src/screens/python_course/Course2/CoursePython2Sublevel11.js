import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
    'dioxido_carbono_formula = "CO2"\n' +
    'dioxido_carbono_estado = "gas"\n' +
    'dioxido_carbono_concentracion_atmosferica = "0.04%"\n' +
    '\n' +
    'print("El " + dioxido_carbono_nombre + " tiene la fórmula " + dioxido_carbono_formula + “.”)\n' +
    'print("Es un " + dioxido_carbono_estado + " que se encuentra en la atmósfera con una concentración de " + dioxido_carbono_concentracion_atmosferica + “.”’)\n'
const user_stories = [
    {
        action: "ADD",
        description: "Agregar las variables correspondientes en cada print y un punto al final de cada frase.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython2Sublevel11 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/2/12');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/2/11', {
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
            <Instructions instructions={"❧ 1.4. Imprimir concatenación de variables con +"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='dioxido_carbono_nombre = "Dióxido de carbono"
dioxido_carbono_formula = "CO2"
dioxido_carbono_estado = "gas"
dioxido_carbono_concentracion_atmosferica = "0.04%"

print("El " + dioxido_carbono_nombre + " tiene la fórmula " + dioxido_carbono_formula)
print("Es un " + <> + " que se encuentra en la atmósfera con una concentración de " +<>)
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

export default CoursePython2Sublevel11;
