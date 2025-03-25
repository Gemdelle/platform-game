import React from "react";

const temas_2_2 = {
    title: "Sintaxis",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué es un cierre de línea?",
            texts: [ /* Diapositiva 41 */
                <div>
                    Antes de declarar variables, es necesario conocer el cierre de línea.
                    <br></br><br></br>
                    A diferencia de Python, en Java necesitamos cerrar la línea con “;”.
                    <br></br><br></br>
                    Si no se incluye, el programa no va a compilar y va a mostrar un error.
                </div>
            ],

            previews: [
                <div className="flex-col">
                    <div className="python-col">
                        <div className="python-img"></div>
                        <div className="python-desc">
                            <i>línea de código
                            <br></br>
                            línea de código
                            <br></br><br></br>
                            línea de código
                            </i>
                        </div>
                    </div>,
                    <div className="java-col">
                        <div className="java-img"></div>
                        <div className="java-desc">
                            línea de código;
                            <br></br>
                            línea de código;
                            <br></br><br></br>
                            línea de código;
                        </div>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo se declaran variables en Java?",
            texts: [ /* Diapositiva 42 */
                <div>El formato para declarar atributos en java corresponde a</div>,
                <div style={{ color: "#404047", font: "Courier" }} >tipoDato nombreVarible = dato;</div>
            ],

            previews: [
                <div className="flex-col">
                    <div className="python-col">
                        <div className="python-img"></div>
                        <div className="python-desc">
                            edad = 33
                            <br></br>
                            color = “verde”
                            <br></br>
                            programaPython = True
                            <br></br>
                            peso = 42.7
                        </div>
                    </div>,
                    <div className="java-col">
                        <div className="java-img"></div>
                        <div className="java-desc">
                            int edad = 11;
                            <br></br>
                            String color = “amarillo”;
                            <br></br>
                            programaJava = true;
                            <br></br>
                            float peso = 153,7;
                        </div>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "Comentarios",
            texts: [ /* Diapositiva 43 */
                <div>
                    Al igual que en Python, en Java existen los comentarios por línea y multilínea.
                    <br></br><br></br>
                    Estos comentarios, al igual que Python, son ignorados por el compilador de Java durante su compilación y ejecución.
                </div>
            ],

            previews: [
                <div className="flex-col">
                    <div className="python-col">
                        <div className="python-img"></div>
                        <div className="python-desc">
                            #No me gusta Java
                            <br></br><br></br>
                            ‘’’Python es más
                            <br></br>
                            amigable que
                            <br></br>
                            Java’’’
                        </div>
                    </div>,
                    <div className="java-col">
                        <div className="java-img"></div>
                        <div className="java-desc">
                            \//No me gusta Python
                            <br></br><br></br>
                            \/*Java es más
                            <br></br>
                            seguro que
                            <br></br>
                            Python*/
                        </div>
                    </div>
                </div>
            ]
        }
    ]
}

export default temas_2_2