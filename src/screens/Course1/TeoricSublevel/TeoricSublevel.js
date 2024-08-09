import React, {useEffect, useRef, useState} from 'react';
import './TeoricSublevel.css';
import {useUser} from "../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TeoricRules from "./TeoricRules";
import TeoricResults from "./TeoricResults";

const audioSrc = "/assets/sounds/wrong-answer.mp3";

const QUESTIONS_DATA = [
    {
        questionText: 'Una clase puede definirse como...',
        answerOptions: [
            {answerText: 'Un contenedor de datos.', isCorrect: false, isSelected: false},
            {
                answerText: 'Una colección de variables y funciones que trabajan juntas bajo un nombre común.',
                isCorrect: false, isSelected: false
            },
            {
                answerText: 'Una plantilla que define las características y el comportamiento de las instancias.',
                isCorrect: true, isSelected: false
            },
            {
                answerText: 'Una función que devuelve una instancia de un objeto con propiedades específicas. ',
                isCorrect: false, isSelected: false
            },
        ],
    },
    {
        questionText: 'La instanciación de una clase crea un...',
        answerOptions: [
            {answerText: 'Fantasma en el sistema.', isCorrect: false, isSelected: false},
            {answerText: 'Objeto nuevo.', isCorrect: true, isSelected: false},
            {answerText: 'Clon de un objeto.', isCorrect: false, isSelected: false},
            {answerText: 'Archivo de texto.', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'La instanciación de una clase se hace en...',
        answerOptions: [
            {answerText: 'Cada clase nueva que se crea de manera automática.', isCorrect: false, isSelected: false},
            {answerText: 'El programa principal.', isCorrect: true, isSelected: false},
            {answerText: 'Cualquier lado.', isCorrect: false, isSelected: false},
            {answerText: 'La clase del nombre más largo.', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'Seleccionar la opción correcta para crear una clase.',
        answerOptions: [
            {answerText: 'public class bug', isCorrect: false, isSelected: false},
            {answerText: 'Public class Bug', isCorrect: false, isSelected: false},
            {answerText: 'public class Bug', isCorrect: true, isSelected: false},
            {answerText: 'public Class Bug', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'Un atributo puede definirse como...',
        answerOptions: [
            {answerText: 'Una variable que tiene que estar en todas las clases.', isCorrect: false, isSelected: false},
            {answerText: 'Una variable que no se puede repetir en otra clase.', isCorrect: false, isSelected: false},
            {answerText: 'Una constante global.', isCorrect: false, isSelected: false},
            {answerText: 'Una variable que pertenece a una clase o a un objeto.', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: 'Los atributos pueden ser de cualquier tipo excepto...',
        answerOptions: [
            {answerText: 'int', isCorrect: false, isSelected: false},
            {answerText: 'Ninguna de las anteriores', isCorrect: true, isSelected: false},
            {answerText: 'boolean', isCorrect: false, isSelected: false},
            {answerText: 'String', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'Los atributos sirven',
        answerOptions: [
            {answerText: 'Determinar las propiedades o características de un objeto', isCorrect: false, isSelected: false},
            {answerText: 'Determinar qué tanto nos gusta una clase', isCorrect: false, isSelected: false},
            {answerText: 'Determinar cuántas veces se puede crear un objeto', isCorrect: false, isSelected: false},
            {answerText: 'Determinar las propiedades o características de un objeto', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: 'El límite para la cantidad de atributos en una clase corresponde a',
        answerOptions: [
            {answerText: '10 de cada tipo', isCorrect: false, isSelected: false},
            {answerText: '25', isCorrect: false, isSelected: false},
            {answerText: 'No hay límite', isCorrect: true, isSelected: false},
            {answerText: '12', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'El formato para declarar un atributo corresponde a',
        answerOptions: [
            {answerText: 'tipoDato nombreVariable nivelAcceso;', isCorrect: false, isSelected: false},
            {answerText: 'nivelAcceso tipoDato nombreVariable;', isCorrect: true, isSelected: false},
            {answerText: 'nivelAcceso nombreVariable tipoDato;', isCorrect: false, isSelected: false},
            {answerText: 'nombreVariable nivelAcceso tipoDato;', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál de los siguientes tipos de datos es válido para un atributo en Java?',
        answerOptions: [
            {answerText: 'var', isCorrect: false, isSelected: false},
            {answerText: 'int', isCorrect: true, isSelected: false},
            {answerText: 'object', isCorrect: false, isSelected: false},
            {answerText: 'func', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué palabra clave se utiliza para definir un atributo que pertenezca a la clase en lugar de a una instancia específica?',
        answerOptions: [
            {answerText: 'static', isCorrect: true, isSelected: false},
            {answerText: 'const', isCorrect: false, isSelected: false},
            {answerText: 'final', isCorrect: false, isSelected: false},
            {answerText: 'public', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'El valor almacenado en una variable de tipo "static"...',
        answerOptions: [
            {answerText: 'Es único y no puede ser modificado', isCorrect: false, isSelected: false},
            {answerText: 'Tiene que ser redefinido cada vez que se instancia un objeto', isCorrect: false, isSelected: false},
            {answerText: 'Varía según el ID del objeto', isCorrect: false, isSelected: false},
            {answerText: 'Es el mismo para todos los objetos instanciados de una misma clase', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué palabra clave se utiliza para que un atributo no pueda ser modificado después de su inicialización?',
        answerOptions: [
            {answerText: 'public', isCorrect: false, isSelected: false},
            {answerText: 'const', isCorrect: false, isSelected: false},
            {answerText: 'static', isCorrect: false, isSelected: false},
            {answerText: 'final', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál de las siguientes declaraciones de atributos es válida en Java?',
        answerOptions: [
            {answerText: 'private int 2 numero;', isCorrect: false, isSelected: false},
            {answerText: 'private double salario;', isCorrect: true, isSelected: false},
            {answerText: 'private boolean activo!;', isCorrect: false, isSelected: false},
            {answerText: 'private String "nombre";', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál de los siguientes tipos de datos no es válido para un atributo en Java?',
        answerOptions: [
            {answerText: 'int', isCorrect: false, isSelected: false},
            {answerText: 'Ninguno de los anteriores', isCorrect: false, isSelected: false},
            {answerText: 'double', isCorrect: false, isSelected: false},
            {answerText: 'void', isCorrect: true, isSelected: false},
        ],
    },
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const TeoricSublevel = () => {
    const {userProfile, setUserProfile} = useUser();
    const navigate = useNavigate();
    const [hasStarted, setHasStarted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerState, setAnswerState] = useState(null);
    const [timeLeft, setTimeLeft] = useState(180);
    const audioRef = useRef(new Audio(audioSrc));
    const [questionsToAnswer, setQuestionsToAnswer] = useState(shuffle([...QUESTIONS_DATA]));

    useEffect(() => {
        if (hasStarted && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            handleFinish();
            setShowScore(true);
        }
    }, [timeLeft, hasStarted]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleFinish = async () => {
        try {
            const idToken = userProfile.id
            const response = await axios.post('https://quiet-badlands-42095-c0012ddb8417.herokuapp.com/validate/course/1/theoretical', {
                theoretical: {
                    score: {
                        current: score,
                        total: questionsToAnswer.length
                    }
                }
            }, {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });

            setUserProfile(response.data);
            localStorage.setItem('userProfile', JSON.stringify(response.data));
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
    };

    const goHome = () => {
        navigate('/');
    }

    const handleGoNext = () => {
        setHasStarted(true)
    }

    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [showScore, setShowScore] = React.useState(false);

    const [score, setScore] = React.useState(0);

    const handleAnswerButtonClick = (answerOption) => {
        setSelectedAnswer(answerOption);
    };

    const increment = () => {
        setScore(score + 1);
    }
    const decrement = () => {
        if (score - 1 < 0)
            return
        setScore(score - 1);
    }

    const handleAnswer = () => {
        if (!selectedAnswer || answerState === "WRONG" || answerState === "RIGHT" )
            return

        if (selectedAnswer.isCorrect) {
            setScore(score + 1);
            setAnswerState("RIGHT")
            setTimeout(()=> {
                setSelectedAnswer(null);
                setAnswerState(null)
            }, 1000)
        } else {
            setAnswerState("WRONG")
            playAudio()
            setTimeout(()=> {
                setSelectedAnswer(null);
                setAnswerState(null)
            }, 1000)
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsToAnswer.length) {
            setTimeout(()=> {
                setCurrentQuestion(nextQuestion);
            }, 1000)

        } else {
            handleFinish();
            setShowScore(true);
        }
    };

    const restart = () => {
        setSelectedAnswer(null);
        setAnswerState(null);
        setTimeLeft(180);
        setCurrentQuestion(0);
        setScore(0);
        setQuestionsToAnswer(shuffle([...QUESTIONS_DATA]));
        setShowScore(false);
    }

    const playAudio = () => {
        audioRef.current.play();
    };

    return (
        <div className='teoric-sublevel-container'>
            <div className="moving-sky"></div>
            {!hasStarted ? (
                <TeoricRules onClose={goHome} handleGoNext={handleGoNext} />
            ) : showScore ? (
                <TeoricResults onClose={goHome} handleGoNext={restart} score={score} questionsToAnswer={questionsToAnswer}/>
            ) : (
                <>
                    <div className="question-container">
                        <div className='question-section'>
                            <div className='question-count question-progress'>
                                <span className='current-question-number'>
                                    <span className='number'>{currentQuestion + 1}</span>/{questionsToAnswer.length}
                                </span>
                            </div>
                            <div className='question-text'>{questionsToAnswer[currentQuestion].questionText}</div>
                        </div>
                        <div className='timer'>{formatTime(timeLeft)}</div>
                    </div>
                    <div className='content-container'>
                        <div className='timer-container'>
                            <div className='food'></div>
                            <div className='steam'></div>
                            <div className="pet-companion"
                                 style={{ backgroundImage: `url("/assets/pets/${userProfile.profile.avatar}-${userProfile.profile.level}.gif")` }}
                            ></div>
                        </div>
                        <div className='answers-container'>
                            <div className='level-title'>{userProfile.progress.courses[0].name}</div>
                            <div className='score-bar'>
                                <div className={`gold-heart ${score === 15 ? 'won-gold' : ''}`}></div>
                                <div className={`silver-heart ${score >= 12 ? 'won-silver' : ''}`}></div>
                                <div className='bar-interior' style={{ height: `${(score / 15) * 81}%` }}></div>
                                <div className='correct-answers'>{score}</div>
                            </div>
                            <div className='answer-section'>
                                {questionsToAnswer[currentQuestion].answerOptions.map((answerOption) => (
                                    <div className='answer-and-bullet'>
                                        <div className={`${selectedAnswer && selectedAnswer === answerOption && answerState === "RIGHT" ? 'bullet-heart-alive' : 'bullet-heart-dead'}`}></div>
                                        <div className="veins"></div>
                                        <div className='question-design'>
                                            <button className={`button-teoric ${selectedAnswer && selectedAnswer === answerOption && answerState !== "WRONG" ? "selected" : selectedAnswer && selectedAnswer === answerOption && answerState === "WRONG" ? "wrong-answer" : ""}`}
                                                    onClick={() => handleAnswerButtonClick(answerOption)}>
                                                <span className='text-answer'>{answerOption.answerText}</span>
                                            </button>
                                            <div className='question-opener end'></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='next-btn' onClick={handleAnswer}>NEXT</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default TeoricSublevel;