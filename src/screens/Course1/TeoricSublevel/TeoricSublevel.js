import React from 'react';
import './TeoricSublevel.css';
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TeoricSublevel = ({backgroundImage}) => {
    const {userProfile, setUserProfile} = useUser();
    const navigate = useNavigate();
    const initialQuestions = [
        {
            questionText: 'Una clase puede definirse como...',
            answerOptions: [
                {answerText: 'Un contenedor de datos.', isCorrect: false},
                {
                    answerText: 'Una colección de variables y funciones que trabajan juntas bajo un nombre común.',
                    isCorrect: false
                },
                {
                    answerText: 'Una plantilla que define las características y el comportamiento de las instancias.',
                    isCorrect: true
                },
                {
                    answerText: 'Una función que devuelve una instancia de un objeto con propiedades específicas. ',
                    isCorrect: false
                },
            ],
        },
        {
            questionText: 'La instanciación de una clase crea un...',
            answerOptions: [
                {answerText: 'Fantasma en el sistema.', isCorrect: false},
                {answerText: 'Objeto nuevo.', isCorrect: true},
                {answerText: 'Clon de un objeto.', isCorrect: false},
                {answerText: 'Archivo de texto.', isCorrect: false},
            ],
        },
        {
            questionText: 'La instanciación de una clase se hace en...',
            answerOptions: [
                {answerText: 'Cada clase nueva que se crea de manera automática.', isCorrect: true},
                {answerText: 'El programa principal.', isCorrect: false},
                {answerText: 'Cualquier lado.', isCorrect: false},
                {answerText: 'La clase del nombre más largo.', isCorrect: false},
            ],
        },
        {
            questionText: 'Seleccionar la opción correcta para crear una clase.',
            answerOptions: [
                {answerText: 'public class bug', isCorrect: false},
                {answerText: 'Public class Bug', isCorrect: false},
                {answerText: 'public class Bug', isCorrect: true},
                {answerText: 'public Class Bug', isCorrect: false},
            ],
        },
        {
            questionText: 'Un atributo puede definirse como...',
            answerOptions: [
                {answerText: 'Una variable que tiene que estar en todas las clases.', isCorrect: false},
                {answerText: 'Una variable que no se puede repetir en otra clase.', isCorrect: false},
                {answerText: 'Una constante global.', isCorrect: false},
                {answerText: 'Una variable que pertenece a una clase o a un objeto.', isCorrect: true},
            ],
        },
        {
            questionText: 'Los atributos pueden ser de cualquier tipo excepto...',
            answerOptions: [
                {answerText: 'int', isCorrect: false},
                {answerText: 'Ninguna de las anteriores', isCorrect: true},
                {answerText: 'boolean', isCorrect: false},
                {answerText: 'String', isCorrect: false},
            ],
        },
        {
            questionText: 'Los atributos sirven',
            answerOptions: [
                {answerText: 'Determinar las propiedades o características de un objeto', isCorrect: false},
                {answerText: 'Determinar qué tanto nos gusta una clase', isCorrect: false},
                {answerText: 'Determinar cuántas veces se puede crear un objeto', isCorrect: false},
                {answerText: 'Determinar las propiedades o características de un objeto', isCorrect: true},
            ],
        },
        {
            questionText: 'El límite para la cantidad de atributos en una clase corresponde a',
            answerOptions: [
                {answerText: '10 de cada tipo', isCorrect: false},
                {answerText: '25', isCorrect: false},
                {answerText: 'No hay límite', isCorrect: true},
                {answerText: '12', isCorrect: false},
            ],
        },
        {
            questionText: 'El formato para declarar un atributo corresponde a',
            answerOptions: [
                {answerText: 'tipoDato nombreVariable nivelAcceso;', isCorrect: false},
                {answerText: 'nivelAcceso tipoDato nombreVariable;', isCorrect: true},
                {answerText: 'nivelAcceso nombreVariable tipoDato;', isCorrect: false},
                {answerText: 'nombreVariable nivelAcceso tipoDato;', isCorrect: false},
            ],
        },
        {
            questionText: '¿Cuál de los siguientes tipos de datos es válido para un atributo en Java?',
            answerOptions: [
                {answerText: 'var', isCorrect: false},
                {answerText: 'int', isCorrect: true},
                {answerText: 'object', isCorrect: false},
                {answerText: 'func', isCorrect: false},
            ],
        },
        {
            questionText: '¿Qué palabra clave se utiliza para definir un atributo que pertenezca a la clase en lugar de a una instancia específica?',
            answerOptions: [
                {answerText: 'static', isCorrect: true},
                {answerText: 'const', isCorrect: false},
                {answerText: 'final', isCorrect: false},
                {answerText: 'public', isCorrect: false},
            ],
        },
        {
            questionText: 'El valor almacenado en una variable de tipo "static"...',
            answerOptions: [
                {answerText: 'Es único y no puede ser modificado', isCorrect: false},
                {answerText: 'Tiene que ser redefinido cada vez que se instancia un objeto', isCorrect: false},
                {answerText: 'Varía según el ID del objeto', isCorrect: false},
                {answerText: 'Es el mismo para todos los objetos instanciados de una misma clase', isCorrect: true},
            ],
        },
        {
            questionText: '¿Qué palabra clave se utiliza para que un atributo no pueda ser modificado después de su inicialización?',
            answerOptions: [
                {answerText: 'public', isCorrect: false},
                {answerText: 'const', isCorrect: false},
                {answerText: 'static', isCorrect: false},
                {answerText: 'final', isCorrect: true},
            ],
        },
        {
            questionText: '¿Cuál de las siguientes declaraciones de atributos es válida en Java?',
            answerOptions: [
                {answerText: 'private int 2 numero;', isCorrect: false},
                {answerText: 'private double salario;', isCorrect: true},
                {answerText: 'private boolean activo!;', isCorrect: false},
                {answerText: 'private String "nombre";', isCorrect: false},
            ],
        },
        {
            questionText: '¿Cuál de los siguientes tipos de datos no es válido para un atributo en Java?',
            answerOptions: [
                {answerText: 'int', isCorrect: false},
                {answerText: 'Ninguno de los anteriores', isCorrect: false},
                {answerText: 'double', isCorrect: false},
                {answerText: 'void', isCorrect: true},
            ],
        },
    ];

    const handleFinish = async () => {
        try {
            const idToken = userProfile.id
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/theoretical', {
                theoretical: {
                    score: {
                        current: score,
                        total: questions.length
                    }
                }
            }, {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));

            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const questions = shuffle(initialQuestions);

    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [showScore, setShowScore] = React.useState(false);

    const [score, setScore] = React.useState(0);
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            handleFinish();
            setShowScore(true);
        }
    };

    return (
        <div className='teoric-sublevel-container'>
            <div className="moving-sky"></div>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                <div className="question-container">

                    <div className='question-section'>
                        <div className='question-count question-progress'>
                            <span className='current-question-number'><span
                                className='number'>{currentQuestion + 1}</span>/{questions.length}</span>
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                </div>
            )}
            <div className='content-container'>
                <div className='timer-container'>
                    <div className='food'></div>
                    <div className='steam'></div>
                    <div className="pet-companion"
                         style={{backgroundImage: `url("/assets/pets/${userProfile.profile.avatar}-${userProfile.profile.level}.gif")`}}></div>
                </div>
                <div className='answers-container'>
                    <div className='level-title'>LEVEL TITLE</div>
                    <div className='score-bar'>
                        <div className='gold-heart'></div>
                        <div className='silver-heart'></div>
                        <div className='bar-interior'></div>
                        <div className='correct-answers'>N</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <div className='answer-and-bullet'>
                                <div className='bullet-heart'></div>
                                <div className='question-design'>
                                    <div className=''></div>
                                    <button className="button-teoric"
                                            onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}><span className='text-answer'>{answerOption.answerText}</span></button>
                                    <div className='question-opener end'></div>
                                </div>
                            </div>))}
                    </div>
                    <div className='next-btn'>NEXT</div>
                </div>
            </div>
        </div>
    );
}

export default TeoricSublevel;