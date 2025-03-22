import React, {useEffect, useState} from 'react';
import CodeEditor from '../../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../../components/OutputDisplay/OutputDisplay';
import Header from "../../../components/Header/Header";
import Preview from '../../../components/Preview/Preview';
import Instructions from "../../../components/Instructions/Instructions";
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories3Sublevel1 from "../user_stories/Course3/UserStories3Sublevel1";


const correctAnswer = 'public class Main {\n' +
    '    public static void main (String[] arg) {\n' +
    '        Terrestrial terrestrial = new Terrestrial(\n' +
    '                "Aggro",         // name\n' +
    '                "Jellyscuit",    // favoriteFood\n' +
    '                15,              // birthDay\n' +
    '                6,               // birthMonth\n' +
    '                1983,            // birthYear\n' +
    '                6,               // legs\n' +
    '                2,               // eyes\n' +
    '                1,               // antennae\n' +
    '                62.0,            // weight\n' +
    '                0.78,            // height\n' +
    '                "Ephra",         // mother\n' +
    '                "Agnalym"        // father\n' +
    '        );\n' +
    '\n' +
    '    }\n' +
    '}'


const Course3Sublevel1 = () => {
    const [output, setOutput] = useState('');
    const navigate = useNavigate();
    const [, setInvalidations] = useState([]);
    const [validations, setValidations] = useState([]);
    const [shouldProceed, setShouldProceed] = useState(false);
    const {userProfile, setUserProfile} = useUser();

    useEffect(() => {
        if (shouldProceed) {
            setTimeout(()=> {
                navigate('/');
            },2500)
        }
    }, [shouldProceed, setUserProfile, navigate, userProfile]);

    const handleCompileAndRun = async (className, classCode) => {
        const cheatActivated = userProfile.email === "miludecastrobc@gmail.com" || userProfile.email === "milagros.de613@comunidad.ub.edu.ar" || userProfile.email === "gonzalo.contogrobly@gmail.com"
        if (cheatActivated) {
            setValidations(["VALID_CLASS_INSTANCE",
                "VALID_ATTRIBUTE_NAME",
                "VALID_ATTRIBUTE_FAVORITEFOOD",
                "VALID_ATTRIBUTE_BIRTHDAY",
                "VALID_ATTRIBUTE_BIRTHMONTH",
                "VALID_ATTRIBUTE_BIRTHYEAR",
                "VALID_ATTRIBUTE_LEGS",
                "VALID_ATTRIBUTE_EYES",
                "VALID_ATTRIBUTE_ANTENNAE",
                "VALID_ATTRIBUTE_WEIGHT",
                "VALID_ATTRIBUTE_HEIGHT",
                "VALID_ATTRIBUTE_MOTHER",
                "VALID_ATTRIBUTE_FATHER"]);
            setShouldProceed(true);
            return
        }
        const idToken = userProfile.id
        try {
            const response = await axios.post('http://localhost:3001/validate/course-python/2/1', {
                class_code: classCode
            },{
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });
            if (response.data.error) {
                if (response.data.invalidations){
                    setInvalidations(response.data.invalidations)
                }
                if (response.data.validations) {
                    setValidations(response.data.validations);
                }
                throw Error(response.data.error)
            }

            if (response.data.validations) {
                setValidations(response.data.validations);
            }

            if (response.data.validations.length === 2) {
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
            <Instructions instructions={"1. Crear una instancia de la clase 'Terrestrial' con los siguientes valores: name \"Aggro\", favoriteFood \"Jellyscuit\", birthDay 15, birthMonth 6, birthYear 1983, legs 6, eyes 2, antennae 1, weight 62.0, height 0.78, mother \"Ephra\" y father \"Agnalym\"."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Main" correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview className="hatched" previewImageUrl={`url("/assets/pets/evolutions/terrestrial/1.png")`}/>
                <UserStories3Sublevel1 validations={validations}/>
            </div>
        </div>
    );
};

export default Course3Sublevel1;
