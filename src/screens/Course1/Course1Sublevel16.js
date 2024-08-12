import React, {useEffect, useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import Header from "../../components/Header/Header";
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories1Sublevel16 from "../../components/UserStories/UserStories1Sublevel16";


const correctAnswer = 'public class Beetlesweet{\n' +
    '    private String type;\n' +
    '    private int sweetness;\n' +
    '    private int duration;\n' +
    '    private int baking;\n' +
    '    private boolean hard;\n' +
    '    private static int cookingMinutes; \n' +
    '    private static int count;\n' +
    '    private int beetles;\n' +
    '    private int honeyTeaspoons;\n' +
    '    private int gelatinBoxes;\n' +
    '}'


const Course1Sublevel16 = () => {
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
            setValidations(["VALID_CLASS_STRUCTURE",
                "VALID_ATTRIBUTE_TYPE",
                "VALID_ATTRIBUTE_SWEETNESS",
                "VALID_ATTRIBUTE_DURATION",
                "VALID_ATTRIBUTE_BAKING",
                "VALID_ATTRIBUTE_HARD",
                "VALID_ATTRIBUTE_COOKING_MINUTES",
                "VALID_ATTRIBUTE_COUNT",
                "VALID_ATTRIBUTE_BEETLES",
                "VALID_ATTRIBUTE_HONEY_TEASPOONS",
                "VALID_ATTRIBUTE_HONEY_GELATIN_BOXES",
                "VALID_ATTRIBUTES_PRIVATE"]);
            setShouldProceed(true);
            return
        }
        const idToken = userProfile.id
        try {
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/16', {
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
            <Instructions instructions={"16. Definir la clase 'Beetlesweet'. Debe tener los atributos type, sweetness, duration, baking, hard, cookingMinutes, count, beetles, honeyTeaSpoons, gelatinBoxes."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Beetlesweet" correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview previewImageUrl={`url("/assets/previews/beetlesweet.png")`}/>
                <UserStories1Sublevel16 validations={validations}/>
            </div>
        </div>
    );
};

export default Course1Sublevel16;
