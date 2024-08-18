import React from "react";

const temas_3_0 = {
    title: "Temas",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué vamos a estudiar?",
            texts: [
                <div>En este curso, el objetivo es:</div>,
                <ol>
                    <li><b>Entender</b> el concepto de clase e instancia (sólo es importante el concepto, en el curso Instancias se va a aprender a crear objetos).</li>
                    <li>Aprender a definir una clase.</li>
                    <li>Aprender a definir atributos de una clase.</li>
                </ol>,
            ],
            previews: [
                <div className="flex-col">
                    <div className="frog-txt-container">
                        <div className="frog-happy-invert"></div>,
                        <div>clase</div>
                    </div>
                    <div className="frog-txt-container">
                        <div className="frog-happy-grey"></div>,
                        <div>clase + atributos</div>
                    </div>
                    <div className="frog-txt-container">
                        <div className="frog-happy"></div>,
                        <div>instancia</div>
                    </div>
                </div>
            ]
        }
    ]
}

export default temas_3_0