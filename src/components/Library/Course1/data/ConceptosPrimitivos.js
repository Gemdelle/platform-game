import React from "react";

export default {
    title: "Conceptos atributos primitivos",
    slides: [
        {
            completed: false,
            subtitle: "Datos primitivos vs. no primitivos",
            texts: [
                <div>En Java se utilizan tipos de datos primitivos y no primitivos. Las diferencias más importantes son
                    cuatro. <br/><br/>
                    En Java se utilizan tipos de datos primitivos y no primitivos. Las diferencias más importantes son
                    cuatro.
                </div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo se conforman los datos?",
            texts: [
                <div>En primer lugar, Los datos primitivos almacenan un valor <b>indivisible</b>, mientras que los no
                    primitivos corresponden a estructuras complejas y almacenan <b>múltiples</b> valores.</div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo se conforman los datos?",
            texts: [
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
            subtitle: "¿Cómo se conforman los datos?",
            texts: [
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
            texts: [
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
            texts: [
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
            texts: [
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
            subtitle: "Datos primitivos vs. no primitivos",
            texts: [
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
            subtitle: "Datos y métodos",
            texts: [
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
            texts: [
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
        },
        {
            completed: false,
            subtitle: "Visualización de datos",
            texts: [
                <div>Como referencia visual, los datos primitivos se muestran en el editor como <span
                    style={{color: "#7F6000"}}>palabras reservadas</span>, con otro color, y se escriben en minúscula.
                </div>,
                <div>Los datos no primitivos se muestran del mismo color que el resto del código, y se escriben con la
                    primera letra Mayúscula.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 2 (<span style={{color: "#7F6000"}}>int</span>)</b>,
                <b>frase = ‘La rana Ornn’ (String)</b>
            ]
        },
        {
            completed: false,
            subtitle: "Datos primitivos y no primitivos",
            important: true,
            texts: [
                <div>A continuación se van a ver los tipos de datos primitivos y no primitivos. No hay que tener miedo
                    al ver que los atributos no primitivos aparecen también como no primitivos, a diferencia de la
                    primera letra mayúscula.</div>,
                <div>Esto sucede porque los atributos no primitivos parecen ser lo mismo que sus versiones primitivas,
                    como Integer e int, pero los no primitivos tienen más herramientas.</div>,
                <div>¿Cómo saber cuándo usar cuál?</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 2 (<span style={{color: "#7F6000"}}>int</span>)</b>,
                <b>kmRecorridos = 4 (Integer)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Primitivos o no primitivos?",
            texts: [
                <div>Como vimos, el dato primitivo es el más básico en Java y almacena un valor simple y directo, como
                    un número, un caracter o un valor booleano.</div>,
                <div>
                    <div>Los datos primitivos en Java corresponden a:</div>
                    <ul>
                        <li><b>int:</b> Enteros (32 bits) → 325000</li>
                        <li><b>byte:</b> Enteros chicos (8 bits) → 30</li>
                        <li><b>short:</b> Enteros más chicos (16 bits) → 32000</li>
                        <li><b>long:</b> Enteros grandes (64 bits) → 1234567890</li>
                        <li><b>float:</b> Números de punto flotante (32 bits) → 0.75f</li>
                        <li><b>double:</b> Números de punto flotante precisos (64 bits) → 28.75</li>
                        <li><b>char:</b> Caracteres individuales (16 bits) → 'R'</li>
                        <li><b>boolean:</b> Valores lógicos→ true, false</li>
                    </ul>
                </div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <div><b>edad</b> → 3 (int)</div>,
                <div><b>crias</b> → 86 (byte)</div>,
                <div><b>dientes</b> → 9 (short)</div>,
                <div><b>id</b> → 12345 (long)</div>,
                <div><b>peso</b> → 0.5 (float)</div>,
                <div><b>temperatura</b> → 28.5 (double)</div>,
                <div><b>color</b> → 'V' (char)</div>,
                <div><b>feliz</b> → true (boolean)</div>,
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un dato NO primitivo?",
            texts: [
                <div>Se dijo que dato <b>no primitivo</b> en Java almacena muchos valores. Las estructuras más comunes
                    corresponden a:</div>,
                <div>
                    <ul>
                        <li>String</li>
                        <li>Date</li>
                        <li>Map</li>
                        <li>Set</li>
                        <li>ArrayList</li>
                        <li>Atributos no primitivos que contienen primitivos (Integer)</li>
                        <li>Clases creadas en Java (Animal, Persona, Vehículo)</li>
                    </ul>
                </div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
            ]
        },
        {
            completed: false,
            subtitle: "¿Y el tipo String…?",
            texts: [
                <div>En Java, <span style={{color: "#188038"}}>String</span> no es un tipo primitivo, aunque se suele
                    pensar que sí es.</div>,
                <div>Mientras que los tipos primitivos son básicos, <span style={{color: "#188038"}}>String</span> es un
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
            subtitle: "¿Y el tipo String…?",
            texts: [
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
            subtitle: "Tipos de datos similares",
            texts: [
                <div>Existen tipos de datos similares que se diferencian por su precisión. El primer caso es el de los
                    tipos float y double.</div>,
                <div><b>float y double</b> son tipos de datos para números decimales.</div>,
                <div>Aunque en los dos se pueden almacenar números decimales, <b>float</b> ocupa menos memoria y la
                    cantidad de decimales es menor, es de precisión simple; <b>double</b> ocupa el doble de memoria y es
                    más preciso, permitiendo más decimales.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>jumpAltitude = 0.89f (float)</b>,
                <b>height = 0.33 (double)</b>,
                <b>color = ‘G’ (char)</b>,
                <b>frase = ‘La rana Ornn’ (String)</b>
            ]
        },
        {
            completed: false,
            subtitle: "Tipos de datos similares",
            texts: [
                <div>El segundo caso es el de los tipos char y String, tipos de datos para manejar texto. </div>,
                <div>El tipo <b>char</b> almacena un solo caracter y ocupa menos memoria, mientras
                    que <b>String</b> almacena una secuencia de caracteres y puede contener texto más largo.</div>,
                <div>¿Puede almacenarse un caracter en un atributo de tipo String? Sí, usar String es menos eficiente en
                    términos de memoria, pero es más flexible si el valor puede cambiar a una secuencia de caracteres
                    más larga en el futuro.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>jumpAltitude = 0.89f (float)</b>,
                <b>height = 0.33 (double)</b>,
                <b>color = ‘G’ (char)</b>,
                <b>frase = ‘La rana Ornn’ (String)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué tipos de datos son más comunes?",
            texts: [
                <div>Más allá de que vimos que existen varios tipos de datos, por practicidad los que más suelen usarse
                    y los que se van a usar en los cursos son:</div>,
                <div>
                    <ul>
                        <li>int</li>
                        <li>double</li>
                        <li>float</li>
                        <li>String</li>
                        <li>boolean</li>
                        <li>ArrayList</li>
                    </ul>
                </div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <span>nombre = Ornn</span>,
                <span>altura = 1.54</span>,
            ]
        }
    ],
}