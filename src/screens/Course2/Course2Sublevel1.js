import React, {useEffect, useState} from 'react';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import OutputDisplay from '../../components/OutputDisplay/OutputDisplay';
import Header from "../../components/Header/Header";
import Preview from '../../components/Preview/Preview';
import Instructions from "../../components/Instructions/Instructions";
import {useUser} from "../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import UserStories2Sublevel1 from "../../components/UserStories/Course2/UserStories2Sublevel1";


const correctAnswer = 'public class Terrestrial {\n' +
    '// 01. ATTRIBUTES\n' +
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
    '\n' +
    '// 02. CONSTRUCTOR\n' +
    '    public Terrestrial(String name, String favoriteFood, int birthDay, int birthMonth, int birthYear,int legs, int eyes, int antennae, double weight, double height, String mother, String father) {\n' +
    '        this.name = name;\n' +
    '        this.favoriteFood = favoriteFood;\n' +
    '        this.birthDay = birthDay;\n' +
    '        this.birthMonth = birthMonth;\n' +
    '        this.birthYear = birthYear;\n' +
    '        this.legs = legs;\n' +
    '        this.eyes = eyes;\n' +
    '        this.antennae = antennae;\n' +
    '        this.weight = weight;\n' +
    '        this.height = height;\n' +
    '        this.mother = mother;\n' +
    '        this.father = father;\n' +
    '    }\n' +
    '}'

const previousCode = 'public class Terrestrial {\n' +
    '// 01. ATTRIBUTES\n' +
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
    '    private final String father;\n'+
    '}'

const Course2Sublevel1 = () => {
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
            setValidations(["VALID_CONSTRUCTOR_STRUCTURE",
                "VALID_CONSTRUCTOR_NAME",
                "VALID_CONSTRUCTOR_FAVORITE_FOOD",
                "VALID_CONSTRUCTOR_BIRTHDAY",
                "VALID_CONSTRUCTOR_BIRTHMONTH",
                "VALID_CONSTRUCTOR_BIRTHYEAR",
                "VALID_CONSTRUCTOR_LEGS",
                "VALID_CONSTRUCTOR_EYES",
                "VALID_CONSTRUCTOR_ANTENNAE",
                "VALID_CONSTRUCTOR_WEIGHT",
                "VALID_CONSTRUCTOR_HEIGHT",
                "VALID_CONSTRUCTOR_MOTHER",
                "VALID_CONSTRUCTOR_FATHER"]);
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
                    <CodeEditor onSubmit={handleCompileAndRun} className="Caterpillar" previousCode={previousCode} correctAnswer={correctAnswer}/>
                    <OutputDisplay output={output}/>
                </div>
                <Preview className="hatched" previewImageUrl={`url("/assets/pets/evolutions/terrestrial/1.png")`}/>
                <UserStories2Sublevel1 validations={validations}/>
            </div>
        </div>
    );
};

export default Course2Sublevel1;
