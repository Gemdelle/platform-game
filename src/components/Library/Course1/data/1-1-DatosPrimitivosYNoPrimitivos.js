import React from "react";

const temas_1_1 = {
    title: "Datos primitivos y no primitivos",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué tipos de datos se utilizan en Java?",
            texts: [ //6
                <div>
                    En Java, para declarar variables (ya sean comunes o atributos, que veremos en el curso de Clases y Atributos) se utilizan tipos de datos primitivos y no primitivos.
                    <br /><br />
                    Un concepto importante que al principio puede parecer confuso es que los atributos primitivos aparecen también como no primitivos. El dato primitivo siempre están escritos en minúscula, como el atributo edad (int), y los no primitivos, con la primera letra mayúscula, como kmRecorridos (Integer).
                    <br /><br />
                    Esto sucede porque los atributos no primitivos parecen ser lo mismo que sus versiones primitivas, como Integer e int, pero los no primitivos tienen más herramientas.
                    <br /><br />
                    ¿Cómo saber cuándo usar cuál?
                </div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>,
                <div>int edad = 2<br />
                    Integer kmRecorridos = 4
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Primitivos o no primitivos?",
            texts: [ //7
                <div>
                    En la práctica, los atributos que existen de forma primitiva se usan más seguido que los de tipo no primitiva.
                    <br /><br />
                    Los atributos primitivos, como int, son simples y rápidos, ideales para cálculos básicos. En cambio, los no primitivos, como Integer, son más completos y útiles cuando se necesitan funciones adicionales, como trabajar con listas.
                    <br /><br />
                    Por eso existen ambos: uno para tareas rápidas y simples, y el otro para cuando se necesitan más opciones.
                </div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>,
                <div>int edad = 2<br />
                    Integer kmRecorridos = 4
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un dato primitivo?",
            texts: [ //8
                <div>
                    Como vimos, el dato primitivo es el más básico en Java y almacena un valor simple y directo, como un número, un caracter o un valor booleano.
                    <br /><br />
                    Los datos primitivos en Java corresponden a:
                    <br />
                </div>,
                <ul>
                    <li><b>byte</b>: Enteros pequeños (8 bits) → 30</li>
                    <li><b>short</b>: Enteros más grandes que byte (16 bits) → 32000</li>
                    <li><b>int</b>: Enteros de tamaño estándar (32 bits) → 325000</li>
                    <li><b>long</b>: Enteros grandes (64 bits) → 1234567890</li>
                    <li><b>float</b>: Números de punto flotante (32 bits) → 0.75f</li>
                    <li><b>double</b>: Números de punto flotante más precisos (64 bits) → 28.75</li>
                    <li><b>char</b>: Caracteres individuales (16 bits) → 'R'</li>
                    <li><b>boolean</b>: Valores lógicos → true, false</li>
                </ul>
            ],
            previews: [
                <div className="frog-happy-grey"></div>,
                <div><b>edad</b> → 3 (int)<br />
                    <b>crias</b>  → 86 (byte)<br />
                    <b>dientes</b>  → 9 (short)<br />
                    <b>id</b>  → 12345 (long)<br />
                    <b>peso</b>  → 0.5 (float)<br />
                    <b>temperatura</b>  → 28.5 (double)<br />
                    <b>color</b>  → 'V' (char)<br />
                    <b>feliz</b>  → true (boolean)
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un dato NO primitivo?",
            texts: [//9
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
            subtitle: "Tipos de datos similares",
            texts: [//10
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
            texts: [//11
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
            subtitle: "Visualización de datos",
            texts: [//12
                <div>Como referencia visual, los datos primitivos se muestran en el editor como <span
                    style={{ color: "#7F6000" }}>palabras reservadas</span>, con otro color, y se escriben en minúscula.
                </div>,
                <div>Los datos no primitivos se muestran del mismo color que el resto del código, y se escriben con la
                    primera letra Mayúscula.</div>,
            ],
            previews: [
                <div className="frog-happy"></div>,
                <b>edad = 2 (<span style={{ color: "#7F6000" }}>int</span>)</b>,
                <b>frase = ‘La rana Ornn’ (String)</b>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué tipos de datos son más comunes?",
            texts: [//13
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
    ]
}

export default temas_1_1