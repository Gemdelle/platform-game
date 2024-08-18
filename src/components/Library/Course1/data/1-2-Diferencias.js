import React from "react";

const temas_1_2 = {
    title: "Diferencias",
    slides: [
        {
            completed: false,
            subtitle: "Diferencias entre datos primitivos y no primitivos",
            texts: [//14
                <div>Hablamos de tipos de datos primitivos y no primitivos, pero ¿qué diferencias tienen? Las más importantes son cuatro.</div>,
                <ol>
                    <li>Cantidad de datos almacenados</li>
                    <li>Almacenamiento de dato null en variables de datos no primitivos</li>
                    <li>Tamaño de datos</li>
                    <li>Existencia de métodos</li>
                </ol>
            ],
            previews: [
                <div className="frog-happy"></div>,
                <span>nombre = Ornn</span>,
                <span>altura = 1.54</span>,
            ]
        },
        {
            completed: false,
            subtitle: "¿Cuántos datos se almacenan?",
            texts: [ //15
                <div>En primer lugar, Los datos primitivos almacenan un valor <b>indivisible</b>, mientras que los no
                    primitivos corresponden a estructuras complejas y almacenan <b>múltiples</b> valores.</div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cuántos datos se almacenan?",
            texts: [ //16
                <div>En primer lugar, Los datos primitivos almacenan un valor <b>indivisible</b>, mientras que los no
                    primitivos corresponden a estructuras complejas y almacenan <b>múltiples</b> valores.</div>,
                <div>Por ejemplo, una edad o un color representado con <b>una</b> letra corresponden a un valor
                    específico.</div>
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 4 (int)</b>,
                <b>color = ‘G’ (char)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cuántos datos se almacenan?",
            texts: [ //17
                <div>En primer lugar, Los datos primitivos almacenan un valor <b>indivisible</b>, mientras que los no
                    primitivos corresponden a estructuras complejas y almacenan <b>múltiples</b> valores.</div>,
                <div>Por ejemplo, una edad o un color representado con <b>una</b> letra corresponden a un valor
                    específico.</div>,
                <div>La frase que dice la rana o la lista de comidas no están formadas por <b>un</b> solo valor,
                    sino <b>múltiples</b>, en el caso de la frase varias letras, y en el caso de la comida, dos comidas.
                </div>
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 4 (int)</b>,
                <b>color = ‘G’ (char)</b>,
                <b>frase = ‘La rana Ornn’ (String)</b>,
                <b>comida = [‘polilla’,’hoja’] (ArrayList)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Por qué se habla de datos divisibles?",
            texts: [ //18
                <div>Por atributos indivisibles no se habla en términos matemáticos, sino en
                    la <b>descomposición</b> del dato.</div>
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>frase = ‘La rana Ornn’ (String)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Por qué se habla de datos divisibles?",
            texts: [ //19
                <div>Por atributos indivisibles no se habla en términos matemáticos, sino en
                    la <b>descomposición</b> del dato.</div>,
                <div>Por ejemplo, una frase o una lista se pueden descomponer en palabras o elementos individuales, por
                    eso son <b>divisibles</b>, a diferencia de los atributos primitivos que no se descomponen en algo
                    más simple: </div>,
                <div>"La Rana Ornn" puede dividirse en tres palabras con sentido propio.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>frase = ‘La rana Ornn’ (String)</b>,
                <b>‘La’ + ‘rana’ + ‘Ornn’</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué significa null?",
            texts: [ //20
                <div>En segundo lugar, los datos primitivos no pueden almacenar un valor <i>null</i>.</div>,
                <div>Un valor null es un valor asignado a una variable como reserva, en un futuro va a convertirse en un
                    valor concreto.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 4 (int)</b>,
                <b>kmRecorridos = null (Integer)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué tamaño ocupan los datos?",
            texts: [ //21
                <div>Tercero, los datos primitivos tienen un tamaño fijo en memoria, mientras que los datos no
                    primitivos tienen un tamaño variable.</div>,
                <div>Mientras que edad y dientes ocupan el mismo espacio en memoria (4 bytes por ser de tipo int),
                    frasceCorta ocupa menos espacio que frase porque tiene menos caracteres y <b>sí</b> influye en el
                    espacio que ocupa.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 4 (int)</b>,
                <b>dientes = 8 (int)</b>,
                <b>fraseCorta = ‘La rana’ (String)</b>,
                <b>frase = ‘La rana Ornn’ (String)</b>,
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué atributos tienen métodos?",
            texts: [ //22
                <div>Por último, esta diferencia respecto de valores únicos y valores múltiples viene del hecho de que
                    los atributos no primitivos tienen métodos, y los atributos primitivos, no.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un método?",
            texts: [//23
                <div>Por último, esta diferencia respecto de valores únicos y valores múltiples viene del hecho de que
                    los atributos no primitivos tienen métodos, y los atributos primitivos, no.</div>,
                <div>Un método es una acción que un objeto puede realizar para hacer algo o resolver un problema. En
                    algunos casos, los métodos devuelven información sobre el dato que se trabaja, y en otros casos,
                    devuelve el dato con una transformación.</div>,
                <div>Al analizar datos no primitivos vamos a profundizar en cada caso.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <i>animación de que salte</i>,
            ]
        }
    ]
}

export default temas_1_2