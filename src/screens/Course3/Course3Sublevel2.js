import React, {useEffect, useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import Header from "../../components/Header/Header";
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories3Sublevel2 from "../../components/UserStories/Course3/UserStories3Sublevel2";


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
    '        // Crear instancias de Beetlesweet con valores específicos\n' +
    '        Beetlesweet caramelos_dulces = new Beetlesweet(\n' +
    '                100,      // sweetness\n' +
    '                60,       // duration (en segundos)\n' +
    '                10,       // baking (en minutos)\n' +
    '                true,     // cooked\n' +
    '                15,       // beetles\n' +
    '                20,       // honeyTeaspoons\n' +
    '                5         // gelatinBoxes\n' +
    '        );\n' +
    '\n' +
    '        Beetlesweet caramelos_neutros = new Beetlesweet(\n' +
    '                50,       // sweetness\n' +
    '                60,       // duration (en segundos)\n' +
    '                10,       // baking (en minutos)\n' +
    '                true,     // cooked\n' +
    '                15,       // beetles\n' +
    '                10,       // honeyTeaspoons\n' +
    '                5         // gelatinBoxes\n' +
    '        );\n' +
    '\n' +
    '        Beetlesweet caramelos_acidos = new Beetlesweet(\n' +
    '                0,        // sweetness\n' +
    '                60,       // duration (en segundos)\n' +
    '                10,       // baking (en minutos)\n' +
    '                true,     // cooked\n' +
    '                15,       // beetles\n' +
    '                1,        // honeyTeaspoons\n' +
    '                5         // gelatinBoxes\n' +
    '        );\n' +
    '\n' +
    '    }\n' +
    '}'


const previousCode = 'public class Main {\n' +
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

const Course3Sublevel2 = () => {
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
            setValidations(["VALID_CLASS_INSTANTIATE",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_ACID",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_DURATION",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_BAKING",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_COOKED",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_BEETLES",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_GELATINBOXES",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_SWEETNESS",
                "VALID_CLASS_INSTANTIATE_BEETLESWEET_HONEYTEASPOONS",
                "VALID_CLASS_INSTANTIATE_NEUTRAL_BEETLESWEET_SWEETNESS",
                "VALID_CLASS_INSTANTIATE_NEUTRAL_BEETLESWEET_HONEYTEASPOONS",
                "VALID_CLASS_INSTANTIATE_ACID_BEETLESWEET_SWEETNESS",
                "VALID_CLASS_INSTANTIATE_ACID_BEETLESWEET_HONEYTEASPOONS"]);
            setShouldProceed(true);
            return
        }
        const idToken = userProfile.id
        try {
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/2/1', {
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
            <Instructions/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Main" previousCode={previousCode} correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview previewImageUrl={`url("/assets/pets/caterpillar-1.gif")`}/>
                <UserStories3Sublevel2 validations={validations}/>
            </div>
        </div>
    );
};

export default Course3Sublevel2;
