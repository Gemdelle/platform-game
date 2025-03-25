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
    'Cantidad de elementos: …\n' +
    'Cantidad de metaloides: …\n' +
    'Cantidad de no metaloides: …\n' +
    'Z(Si) es 14.\n' +
    'Z(Cl) es 17.\n' +
    'Z(K) es 19.\n' +
    '“””\n' +
    '\n' +
    'silicio_es_metaloide = True\n' +
    'cloro_es_metaloide = False\n' +
    'potasio_es_metaloide = False\n' +
    '\n' +
    'cantidad_elementos = 6\n' +
    'cantidad_elementos_no_metaloides = 1\n' +
    'cantidad_elementos_metaloides = 3\n' +
    'cantidad_elementos = 3\n' +
    'cantidad_elementos_no_metaloides = 2\n' +
    'cantidad_elementos_metaloides = 1\n' +
    '\n' +
    'silicio_simbolo = Si\n' +
    'silicio_numero_atomico = 14\n' +
    'potasio_simbolo = K\n' +
    'potasio_numero_atomico = 18\n' +
    'potasio_numero_atomico = 19\n' +
    'cloro_simbolo = Cl\n' +
    'cloro_numero_atomico = 17\n' +
    '\n' +
    '# print(f”Cantidad de elementos: {cantidad_elementos}\\nCantidad de metaloides: {cantidad_elementos_metaloides}\\n Cantidad de no metaloides: {cantidad_elementos_no_metaloides}\\nZ(silicio_simbolo) es {silicio_numero_atomico}.\\nZ(cloro_simbolo) es {cloro_numero_atomico}.\\nZ(potasio_simbolo) es {potasio_numero_atomico}.”)\n'
const user_stories = [
    {
        action: "EDIT",
        description: "Sobreescribir los valores de las variables según la información del comentario. Completar los valores desconocidos … en la impresión. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course3Sublevel18 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/1');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/3/18', {
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
            <Instructions instructions={"❧ 2.6 Sobreescribir variables de tipo int"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="2.6 Sobreescribir variables de tipo int"
                        correctAnswer={correctAnswer}
                        previousCode='“””
Cantidad de elementos: …
Cantidad de metaloides: …
Cantidad de no metaloides: …
Z(Si) es 14.
Z(Cl) es 17.
Z(K) es 19.
“””

silicio_es_metaloide = “True”
cloro_es_metaloide = “False”
potasio_es_metaloide = “False”

cantidad_elementos = 6
cantidad_elementos_no_metaloides = 1
cantidad_elementos_metaloides = 3

silicio_simbolo = Si
silicio_numero_atomico = 14
potasio_simbolo = K
potasio_numero_atomico = 18
cloro_simbolo = Cl
cloro_numero_atomico = 17

# print(f”Cantidad de elementos: \nCantidad de metaloides: \n Cantidad de no metaloides: \n”)
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

export default Course3Sublevel18;
