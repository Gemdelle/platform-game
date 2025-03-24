import React, {useCallback, useEffect, useRef, useState} from 'react';
import './Teoric3Sublevel.css';
import {useUser} from "../../../../components/utils/UserProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TeoricRules from "../../Course1/TeoricSublevel/TeoricRules";
import TeoricResults from "../../Course1/TeoricSublevel/TeoricResults";

const audioSrc = "/assets/sounds/wrong-answer.mp3";

const QUESTIONS_DATA = [
    {
        questionText: '¿Qué es una variable?',
        answerOptions: [
            {answerText: 'Una palabra reservada ', isCorrect: false, isSelected: false},
            {
                answerText: 'Un tipo de dato',
                isCorrect: false, isSelected: false
            },
            {
                answerText: 'Una locación de memoria para almacenar datos',
                isCorrect: true, isSelected: false
            },
            {
                answerText: 'Una función',
                isCorrect: false, isSelected: false
            },
        ],
    },
    {
        questionText: '¿Cómo se declara una variable x?',
        answerOptions: [
            {answerText: 'x = variable', isCorrect: false, isSelected: false},
            {answerText: 'x = dato', isCorrect: true, isSelected: false},
            {answerText: 'var x', isCorrect: false, isSelected: false},
            {answerText: 'declare x', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cómo asignarías un valor flotante a una variable llamada elixir que representa el precio de un componente?',
        answerOptions: [
            {answerText: 'elixir = "45.8"', isCorrect: false, isSelected: false},
            {answerText: 'elixir = 45.8', isCorrect: true, isSelected: false},
            {answerText: 'elixir = 45', isCorrect: false, isSelected: false},
            {answerText: 'elixir = float("45.8")', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál de las siguientes opciones asigna el valor booleano True a la variable mutado',
        answerOptions: [
            {answerText: 'mutado = 1', isCorrect: false, isSelected: false},
            {answerText: 'mutado = "True"', isCorrect: false, isSelected: false},
            {answerText: 'mutado = True', isCorrect: true, isSelected: false},
            {answerText: 'mutado = no', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'Si se tiene la variable piedra = "Oro", ¿cómo se cambiaría el valor de piedra a "Plata"?',
        answerOptions: [
            {answerText: 'piedra = [Plata]', isCorrect: false, isSelected: false},
            {answerText: 'piedra = plata', isCorrect: false, isSelected: false},
            {answerText: 'piedra = Plata', isCorrect: false, isSelected: false},
            {answerText: 'piedra = "Plata"', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Se tiene alquimia = “4.5”, ¿qué se debe escribir debajo para convertir a la variable en un valor entero?',
        answerOptions: [
            {answerText: 'alquimia = 4.2', isCorrect: false, isSelected: false},
            {answerText: 'alquimia = int(alquimia)', isCorrect: true, isSelected: false},
            {answerText: 'alquimia = "4"', isCorrect: false, isSelected: false},
            {answerText: 'alquimia = round(4.5) ', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cómo se convertiría un número flotante pH a su forma de texto (string)?',
        answerOptions: [
            {answerText: 'float(4.5)', isCorrect: false, isSelected: false},
            {answerText: 'float("4.5")"', isCorrect: false, isSelected: false},
            {answerText: '4.5', isCorrect: false, isSelected: false},
            {answerText: 'str(4.5)', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Cómo se le asigna a la variable piedra el valor True?',
        answerOptions: [
            {answerText: 'piedra = "True"', isCorrect: false, isSelected: false},
            {answerText: 'piedra = "talse"', isCorrect: false, isSelected: false},
            {answerText: 'piedra = True', isCorrect: true, isSelected: false},
            {answerText: 'piedra = true', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cómo se le asigna un valor de tipo entero a la variable ingredientes con el número 6?',
        answerOptions: [
            {answerText: 'ingredientes = "6"', isCorrect: false, isSelected: false},
            {answerText: 'ingredientes = 6', isCorrect: true, isSelected: false},
            {answerText: 'ingredientes = float(6)', isCorrect: false, isSelected: false},
            {answerText: 'ingredientes = int(6)', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: 'Si temperatura = 27.5, ¿cómo se convierte en texto y se lo asigna a la variable grados?',
        answerOptions: [
            {answerText: 'grados = str(Temperatura)', isCorrect: false, isSelected: false},
            {answerText: 'grados = str(temperatura)', isCorrect: true, isSelected: false},
            {answerText: 'grados = temperatura.char', isCorrect: false, isSelected: false},
            {answerText: 'grados = string(temperatura)', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cómo se le asigna el valor booleano False a la variable misterio?',
        answerOptions: [
            {answerText: 'misterio = False', isCorrect: true, isSelected: false},
            {answerText: 'misterio = "False"', isCorrect: false, isSelected: false},
            {answerText: 'misterio = 0', isCorrect: false, isSelected: false},
            {answerText: 'misterio = false', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál es la diferencia entre una variable de tipo int y una de tipo float?',
        answerOptions: [
            {answerText: 'No hay diferencia entre ellos', isCorrect: false, isSelected: false},
            {answerText: 'float es más eficiente que int', isCorrect: false, isSelected: false},
            {answerText: 'int es solo para cadenas de texto', isCorrect: false, isSelected: false},
            {answerText: 'int almacena números enteros y float almacena decimales', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: 'Si se tiene la variable nombre = "Alquimista", ¿cómo se cambiaría su valor a "Sabio"?',
        answerOptions: [
            {answerText: 'nombre.rep("Alquimista", "Sabio")', isCorrect: false, isSelected: false},
            {answerText: 'nombre == "Sabio"', isCorrect: false, isSelected: false},
            {answerText: 'nombre = Sabio', isCorrect: false, isSelected: false},
            {answerText: 'nombre = "Sabio"', isCorrect: true, isSelected: false},
        ],
    },
    {
        questionText: '¿Cómo se declararía una variable temperatura de tipo flotante?',
        answerOptions: [
            {answerText: 'float temperatura = 25.6;', isCorrect: false, isSelected: false},
            {answerText: 'temperatura = 25.6', isCorrect: true, isSelected: false},
            {answerText: 'var temperatura = 25.6', isCorrect: false, isSelected: false},
            {answerText: 'temperatura = float(25.6)', isCorrect: false, isSelected: false},
        ],
    },
    {
        questionText: '¿Cuál es la diferencia entre una variable de tipo booleano y una de tipo int?',
        answerOptions: [
            {answerText: 'No hay diferencia entre ellos', isCorrect: false, isSelected: false},
            {answerText: 'boolean solo puede almacenar un valor por vez, mientras que int puede almacenar múltiples valores', isCorrect: false, isSelected: false},
            {answerText: 'boolean puede almacenar números enteros, mientras que int solo puede ser verdadero o falso', isCorrect: false, isSelected: false},
            {answerText: 'boolean solo puede almacenar valores true o false, mientras que int almacena números enteros', isCorrect: true, isSelected: false},
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

const Teoric3Sublevel = () => {
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
            const response = await axios.post('http://localhost:3001/validate/course-python/3/theoretical', {
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

export default Teoric3Sublevel;