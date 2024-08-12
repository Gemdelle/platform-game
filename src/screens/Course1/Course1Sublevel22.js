import React, {useEffect, useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import Header from "../../components/Header/Header";
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories1Sublevel22 from "../../components/UserStories/UserStories1Sublevel22";

const correctAnswer = 'public class Terrestrial {\n' +
    '    private final String name;\n' +
    '    private String favoriteFood;\n' +
    '    private final int birthDay;\n' +
    '    private final int birthMonth;\n' +
    '    private final int birthYear;\n' +
    '    private final int legs;\n' +
    '    private final int eyes;\n' +
    '    private final int antennae;\n' +
    '    private double weight;\n' +
    '    private double height;\n' +
    '    private final String mother;\n' +
    '    private final String father;\n' +
    '}'
const previousCode = 'public class Terrestrial {\n' +
    '    private String name;\n' +
    '    private String favoriteFood;\n' +
    '    private int birthDay;\n' +
    '    private int birthMonth;\n' +
    '    private int birthYear;\n' +
    '    private int legs;\n' +
    '    private int eyes;\n' +
    '    private int antennae;\n' +
    '    private double weight;\n' +
    '    private double height;\n' +
    '}'
const Course1Sublevel22 = () => {
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
                "VALID_ATTRIBUTE_MOTHER",
                "VALID_ATTRIBUTE_FATHER",
                "VALID_ATTRIBUTE_BIRTHDAY",
                "VALID_ATTRIBUTE_BIRTHMONTH",
                "VALID_ATTRIBUTE_BIRTHYEAR",
                "VALID_ATTRIBUTES_PRIVATE"]);
            setShouldProceed(true);
            return
        }
        const idToken = userProfile.id
        try {
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/22', {
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
            <Instructions instructions={"22. Editar la clase ''Terrestrial'. Modificar los atributos name, birthDay, birthMonth y birthYear para que sean atributos finales. Agregar los atributos finales mother y father."}/>
            <Header/>
            <div className='container flex'>
                <div className='code-container flex-c'>
                    <CodeEditor onSubmit={handleCompileAndRun} className="Caterpillar" previousCode={previousCode} correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview className="hatched" previewImageUrl={`url("/assets/pets/evolutions/terrestrial/1.png")`}/>
                <UserStories1Sublevel22 validations={validations}/>
            </div>
        </div>
    );
};

export default Course1Sublevel22;
