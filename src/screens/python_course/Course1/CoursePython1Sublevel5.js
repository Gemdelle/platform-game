import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from "../OutputDisplay/OutputDisplay";
import Header from "../../../components/Header/Header";
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStoriesSublevel from "../user_stories/UserStoriesSublevel";

const correctAnswer = '“””\n' +
    'Glenn T. Seaborg (1912-1999) fue un químico estadounidense que descubrió varios elementos transuránicos, incluido el plutonio El elemento seaborgio (Sg) fue nombrado en su honor.\n' +
    '“””\n' +
    '“””\n' +
    'quote1 = "La alquimia fue la predecesora de la química moderna." # Carl Jung\n' +
    '“””\n' +
    'quote2 = "Cada elemento tiene su propia identidad." # Glenn T. Seaborg\n' +
    '“””\n' +
    'quote3 = "La ciencia y la paz triunfarán sobre la ignorancia y la guerra." # Louis Pasteur\n' +
    '“””\n'
const user_stories = [
    {
        action: "ADD",
        description: "Comentar las quotes que no corresponden al autor del comentario.",
        validation: "VALID_VARIABLE_DECLARATION"
    }
];

const CoursePython1Sublevel5 = () => {
    const [output, setOutput] = useState('');
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const navigate = useNavigate();
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/course-python/1/6');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/1/5', {
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
            <Instructions instructions={"Comentar las quotes que no corresponden al autor del comentario."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor
                        onSubmit={handleCompileAndRun}
                        title="0.2 Comentarios multilínea “”” “””"
                        correctAnswer={correctAnswer}
                        previousCode='“””
Glenn T. Seaborg (1912-1999) fue un químico estadounidense que descubrió varios elementos transuránicos, incluido el plutonio El elemento seaborgio (Sg) fue nombrado en su honor.
“””
quote1 = "La alquimia fue la predecesora de la química moderna." # Carl Jung
quote2 = "Cada elemento tiene su propia identidad." # Glenn T. Seaborg
quote3 = "La ciencia y la paz triunfarán sobre la ignorancia y la guerra." # Louis Pasteur
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

export default CoursePython1Sublevel5;
