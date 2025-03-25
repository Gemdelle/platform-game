import React, {useEffect, useState} from 'react';
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";


const correctAnswer = 'cobre_masa = 63.546  # g/mol\n' +
    'cobre_volumen = 8.9  # L (volumen molar estimado)\n' +
    'cobre_cantidad_sustancia = 5  # mol\n' +
    '\n' +
    'cobre_masa = float(cobre_masa)  # g/mol\n' +
    'cobre_volumen =float(cobre_volumen)  # L (volumen molar estimado)\n' +
    'cobre_cantidad_sustancia = int(cobre_cantidad_sustancia)  # mol\n' +
    '\n' +
    '# print(f”Masa Cobre: {cobre_masa} g/mol\\nVolumen Cobre: {cobre_volumen} L\\nCantidad sustancia Cobre: {cobre_cantidad_sustancia} mol”)\n'
const user_stories = [
    {
        action: "DELETE",
        description: "El registro del cobre se realizó de manera incorrecta, ya que los datos están en formato caracter. Se intentó realizar la transformación de tipo, pero no salió muy bien. Corregir la transformación de tipo.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const Course4Sublevel4 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/4/5');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/4/4', {
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
            <Instructions instructions={"❧ 3.2 str a float"}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        className="Egg"
                        correctAnswer={correctAnswer}
                        previousCode='cobre_masa = “63.546”  # g/mol
cobre_volumen = “8.9”  # L (volumen molar estimado)
cobre_cantidad_sustancia = “5”  # mol

cobre_masa = (float(int(float(cobre_masa)))  # g/mol
cobre_volumen = int(float(cobre_volumen))  # L (volumen molar estimado)
cobre_cantidad_sustancia = int(cobre_cantidad_sustancia)  # mol

# print(f”Masa Cobre: {cobre_masa} g/mol\nVolumen Cobre: {cobre_volumen}\nCantidad sustancia Cobre: {cobre_cantidad_sustancia}”)
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

export default Course4Sublevel4;
