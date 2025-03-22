import React, {useCallback, useEffect, useRef, useState} from 'react';
import './Teoric2Sublevel.css';
import {useUser} from "../../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TeoricRules from "../../Course1/TeoricSublevel/TeoricRules";
import TeoricResults from "../../Course1/TeoricSublevel/TeoricResults";

const audioSrc = "/assets/sounds/wrong-answer.mp3";

const QUESTIONS_DATA = [
    {
        questionText: '¿Qué afirmación es falsa sobre el método constructor?',
        answerOptions: [
            {answerText: 'Java no provee un constructor por defecto con lista de parámetros', isCorrect: false, isSelected: false},
            {
                answerText: 'En un constructor se puede usar la referencia this',
                isCorrect: false, isSelected: false
            },
            {
                answerText: 'Un constructor debe tener la instrucción return',
                isCorrect: true, isSelected: false
            },
            {
                answerText: 'Un constructor puede tener cuerpo vacío',
                isCorrect: false, isSelected: false
            },
        ],
    },
    {
        questionText: '¿Qué afirmación es verdadera sobre el método constructor?',
        answerOptions: [
            {answerText: 'Debe tener una lista con, al menos, un parámetro', isCorrect: false, isSelected: false},
            {answerText: 'Puede tener cualquier cantidad de parámetros', isCorrect: true, isSelected: false},
            {answerText: 'Toda clase debe tener, por lo menos, un constructor parametrizado', isCorrect: false, isSelected: false},
            {answerText: 'No se pueden crear objetos de otro tipo dentro del constructor', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál es el comportamiento del método constructor cuando tiene un tipo de retorno?',
        answerOptions: [
            {answerText: 'Da un error en tiempo de ejecución', isCorrect: false, isSelected: false},
            {answerText: 'Da un warning en tiempo de compilación', isCorrect: true, isSelected: false},
            {answerText: 'Compila y ejecuta correctamente', isCorrect: false, isSelected: false},
            {answerText: 'Sólo puede retornar un tipo String', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué es un constructor?',
        answerOptions: [
            {answerText: 'Es un objeto', isCorrect: false, isSelected: false},
            {answerText: 'Es un bloque de código recursivo', isCorrect: false, isSelected: false},
            {answerText: 'Es un bloque de código para inicializar los atributos del objeto', isCorrect: true, isSelected: false},
            {answerText: 'Todas las anteriores', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál es el valor de retorno de un constructor?',
        answerOptions: [
            {answerText: '1', isCorrect: false, isSelected: false},
            {answerText: 'null', isCorrect: false, isSelected: false},
            {answerText: 'void', isCorrect: false, isSelected: false},
            {answerText: 'Instancia', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Debe tener el constructor un modificador de acceso?',
        answerOptions: [
            {answerText: 'Sí', isCorrect: false, isSelected: false},
            {answerText: 'No', isCorrect: true, isSelected: false},
            {answerText: 'Solo si hay un atributo de cada tipo de dato', isCorrect: false, isSelected: false},
            {answerText: 'Solo si se hereda de otra clase', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Se pueden sobrecargar los constructores?',
        answerOptions: [
            {answerText: 'No', isCorrect: false, isSelected: false},
            {answerText: 'Solo si no se usa "this"', isCorrect: false, isSelected: false},
            {answerText: 'Solo si la clase es final', isCorrect: false, isSelected: false},
            {answerText: 'Sí', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Para qué es usado un constructor por defecto?',
        answerOptions: [
            {answerText: 'Para invocar métodos por defecto', isCorrect: false, isSelected: false},
            {answerText: 'Para referenciar objetos por defecto', isCorrect: false, isSelected: false},
            {answerText: 'Para inicializar el estado del objeto con valores por defecto', isCorrect: true, isSelected: false},
            {answerText: 'Ninguna de las anteriores', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué es lo que sucede si no se define el método constructor en una clase?',
        answerOptions: [
            {answerText: 'La clase no compila', isCorrect: false, isSelected: false},
            {answerText: 'La clase no se puede instanciar', isCorrect: true, isSelected: false},
            {answerText: 'Java automáticamente crea un constructor por defecto sin parámetros', isCorrect: false, isSelected: false},
            {answerText: 'Ninguna de las anteriores', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué afirmación sobre la sobrecarga de constructor es cierta?',
        answerOptions: [
            {answerText: 'Constructores con diferentes listas de parámetros no pueden tener el mismo nombre', isCorrect: false, isSelected: false},
            {answerText: 'Puede hacerse la sobrecarga de constructores con mismo nombre y diferentes listas de parámetros', isCorrect: true, isSelected: false},
            {answerText: 'No se permite la sobrecarga de constructores', isCorrect: false, isSelected: false},
            {answerText: 'Constructores con la misma lista de parámetros pueden tener diferentes nombres', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué tipos de datos deben inicializarse de manera obligatoria?',
        answerOptions: [
            {answerText: 'Ninguna de las anteriores', isCorrect: true, isSelected: false},
            {answerText: 'Objeto', isCorrect: false, isSelected: false},
            {answerText: 'Array', isCorrect: false, isSelected: false},
            {answerText: 'int', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué sucede si un atributo no es inicializado en un constructor?',
        answerOptions: [
            {answerText: 'El código no compilará si un atributo no es inicializado.', isCorrect: false, isSelected: false},
            {answerText: 'El atributo lanzará una excepción en tiempo de ejecución.', isCorrect: false, isSelected: false},
            {answerText: 'El valor del atributo será indefinido y podría causar errores inesperados.', isCorrect: false, isSelected: false},
            {answerText: 'El atributo tendrá un valor predeterminado según su tipo (0 para tipos primitivos, null para objetos).', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál es el formato correcto para definir el constructor?',
        answerOptions: [
            {answerText: 'public Pet(int eyes, name) { /* cuerpo */ }', isCorrect: false, isSelected: false},
            {answerText: 'Pet(int eyes, String name) { /* cuerpo */ }', isCorrect: false, isSelected: false},
            {answerText: 'public Pet(eyes: int, name: String) { /* cuerpo */ }', isCorrect: false, isSelected: false},
            {answerText: 'public Pet(int eyes, String name) { /* cuerpo */ }', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál es el formato correcto para inicializar un atributo?',
        answerOptions: [
            {answerText: 'tail = this.tail;', isCorrect: false, isSelected: false},
            {answerText: 'this.tail = tail;', isCorrect: true, isSelected: false},
            {answerText: 'tail = tail;', isCorrect: false, isSelected: false},
            {answerText: 'this.this.tail = tail;', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Qué significa ‘this’ en Java?',
        answerOptions: [
            {answerText: 'Es una palabra clave que se usa para declarar variables locales.', isCorrect: false, isSelected: false},
            {answerText: 'Se refiere a una clase estática en Java.', isCorrect: false, isSelected: false},
            {answerText: 'Es un tipo de dato especial utilizado para inicializar atributos.', isCorrect: false, isSelected: false},
            {answerText: 'Se refiere a la instancia actual del objeto en la que se está ejecutando el código.', isCorrect: true, isSelected: false},
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

const Teoric2Sublevel = () => {
    const {userProfile, setUserProfile} = useUser();
    const navigate = useNavigate();
    const [hasStarted, setHasStarted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerState, setAnswerState] = useState(null);
    const [timeLeft, setTimeLeft] = useState(180);
    const audioRef = useRef(new Audio(audioSrc));
    const [questionsToAnswer, setQuestionsToAnswer] = useState(shuffle([...QUESTIONS_DATA]));
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [score, setScore] = React.useState(0);

    const handleFinish = useCallback(async (newScore) => {
        try {
            const idToken = userProfile.id;
            const response = await axios.post('http://localhost:3001/validate/course-python/2/theoretical', {
                theoretical: {
                    score: {
                        current: newScore,
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
    }, [userProfile.id, questionsToAnswer.length, setUserProfile]);

    useEffect(() => {
        if (hasStarted && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            handleFinish(score);
            setShowScore(true);
        }
    }, [timeLeft, hasStarted, handleFinish, score]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const goHome = () => {
        navigate('/');
    }

    const handleGoNext = () => {
        setHasStarted(true)
    }


    const handleAnswerButtonClick = (answerOption) => {
        setSelectedAnswer(answerOption);
    };

    const handleAnswer = () => {
        if (!selectedAnswer || answerState === "WRONG" || answerState === "RIGHT" )
            return
        if (selectedAnswer.isCorrect) {
            setScore(score + 1);
            setAnswerState("RIGHT")

        } else {
            setAnswerState("WRONG")
            playAudio()
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsToAnswer.length) {
            setTimeout(()=> {
                setSelectedAnswer(null);
                setAnswerState(null)
                setCurrentQuestion(nextQuestion);
            }, 1000)

        } else {
            handleFinish(score + 1);
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

    let bestScore = userProfile.progress.courses[0].theoretical.score.current;
    let total = userProfile.progress.courses[0].theoretical.score.total;
    let grade = userProfile.progress.courses[0].theoretical.grade;

    const isAquatic = userProfile.profile.avatar === 'axolotl';
    const isTerrestrial = userProfile.profile.avatar === 'caterpillar';
    const hasHatched = userProfile.profile.level > 1;
    let hatchedBackgroundImage = `url("/assets/pets/evolutions/${isAquatic ? 'aquatic' : isTerrestrial ? 'terrestrial' : 'aerial'}/${userProfile.profile.level-1}.png")`;
    let eggBackgroundImage = `url("/assets/eggs/${isAquatic ? 'egg-aquatic' : isTerrestrial ? 'egg-terrestrial' : 'egg-aerial'}.png")`;
    let backgroundImage = hasHatched ? hatchedBackgroundImage : eggBackgroundImage

    return (
        <div className='teoric-sublevel-container'>
            <div className="moving-sky"></div>
            {!hasStarted ? (
                <TeoricRules onClose={goHome} handleGoNext={handleGoNext} bestScore={bestScore} total={total} grade={grade}/>
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
                                 style={{ backgroundImage: backgroundImage }}
                            ></div>
                        </div>
                        <div className='answers-container'>
                            <div className='level-title'>{userProfile.progress.courses[1].name}</div>
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
                                            <button className={`button-teoric clickable ${selectedAnswer && selectedAnswer === answerOption && answerState !== "WRONG" ? "selected" : selectedAnswer && selectedAnswer === answerOption && answerState === "WRONG" ? "wrong-answer" : ""}`}
                                                    onClick={() => handleAnswerButtonClick(answerOption)}>
                                                <span className='text-answer'>{answerOption.answerText}</span>
                                            </button>
                                            <div className='question-opener end'></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='next-btn clickable' onClick={handleAnswer}>NEXT</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Teoric2Sublevel;