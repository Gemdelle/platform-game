import React from "react";

const temas_1_3 = {
    title: "Métodos",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué pasa con el tipo String…?",
            texts: [//24
                <div>En Java, <span style={{ color: "#188038" }}>String</span> no es un tipo primitivo, aunque se suele
                    pensar que sí es.</div>,
                <div>Mientras que los tipos primitivos son básicos, <span style={{ color: "#188038" }}>String</span> es un
                    objeto que permite manipular cadenas de texto.</div>,
                <div>Aunque se usa mucho como si fuera un primitivo, tiene más funcionalidades y es más complejo.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>nombre Ornn (String)</b>,
                <b>frase ‘La rana Ornn’ (String)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué pasa con el tipo String…?",
            texts: [//25
                <div>Por ejemplo, una de las funcionalidades de los Strings es obtener la <b>longitud</b> de una cadena
                    de texto.</div>,
                <div>Si se crea el objeto de la derecha y se llama a la siguiente línea, que devuelve el nombre de la
                    rana:</div>,
                <div>Rana.getNombre().length()</div>,
                <div>¿Cuál va a ser el resultado?</div>,
                <div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <span>nombre = Ornn</span>,
                <span>altura = 1.54</span>
            ]
        },
        {
            completed: false,
            subtitle: "Métodos y devolución de dato transformado",
            texts: [//26
                <div>Otra funcionalidad es obtener una cadena de caracteres convertida a mayúscula. En este caso, se devuelve el mismo valor original transformado, no información sobre ese dato.
                    <br></br> <br></br>
                    Una vez creado el objeto de la derecha (se va a ver en el curso de Instancias) y se llama a la siguiente línea, que devuelve el nombre de la rana:
                </div>,
                <div>Rana.getNombre().toUpperCase()</div>,
                <div>¿Cuál va a ser el resultado?</div>,
                <div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            ],
            previews: [
                <div className="frog-happy"></div>,
                <span>nombre = Ornn</span>,
                <span>altura = 1.54</span>
            ]
        }
    ]
}

export default temas_1_3