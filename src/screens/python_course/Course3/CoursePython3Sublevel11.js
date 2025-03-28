import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'hidrogeno_simbolo = "H" # str\n' +
    'hidrogeno_es_metaloide = False  # boolean\n' +
    '\n' +
    'azufre_simbolo = "S"\n' +
    'azufre_es_metaloide = True \n' +
    '\n' +
    '# print(f”El Hidrógeno ({hidrogeno_simbolo}) es un metal: {hidrogeno_es_metaloide}\\nEl Azufre ({S}) es un metal: {azufre_es_metaloide}”)\n'
const user_stories = [
    {
        action: "ADD",
        description: "El Hidrógeno es un no metal, mientras que el Azufre es un metal. Declarar las mismas variables para el Azufre e imprimir los valores de ambos elementos.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython3Sublevel11 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/3/12');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/11', {
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
            <Instructions instructions={"El Hidrógeno es un no metal, mientras que el Azufre es un metal. Declarar las mismas variables para el Azufre e imprimir los valores de ambos elementos."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="2.4 Variable de tipo boolean"
                        correctAnswer={correctAnswer}
                        previousCode='hidrogeno_simbolo = "H" # str
hidrogeno_es_metaloide = False  # boolean

# print(f”El Hidrógeno ({hidrogeno_simbolo}) es un metal: {hidrogeno_es_metaloide}\n”)
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

export default CoursePython3Sublevel11;
