import React from "react";

const temas_3_5 = {
    title: "Definición de clases",
    slides: [
        {
            completed: false,
            subtitle: "¿Cómo se define una clase",
            texts: [//66
                <div>
                    Ahora que conocés el concepto de clase y los atributos que puede contener, es momento de aprender la sintaxis. ¿Cuál es la estructura para definir una clase?
                    <br></br><br></br>   
                    Una clase se define como:
                </div>,
                <div>modificadorAcceso class nombreClase '{' contenido '}'</div>,
                <div>En el espacio donde va el contenido más adelante se van a definir los componentes que suelen tener la mayoría de las clases:</div>,
                <div>
                    // 01. ATRIBUTOS <br></br>
                    // 02. CONSTRUCTOR <br></br>
                    // 03. SETTERS & GETTERS <br></br>
                    // 04. MÉTODOS
                </div>
            ],
            previews: [
               
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo es la indentación en Java?",
            texts: [//67
                <div>
                    En Java, a diferencia de Python, la identación es importante en cuanto a legibilidad pero no en cuanto a sintaxis para que ande el programa. Es importante el uso de llaves (“{}”) delimitar los bloques de código.
                </div>
            ],
            previews: [
               
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es el camel case?",
            texts: [//68
                <div>
                    Por ahora vimos únicamente la definición de atributos. Es importante remarcar que los nombres de las clases son un sustantivo que siempre lleva la primera letra en mayúscula. Si el nombre de la clase tiene más de una palabra, se usa el camel case, donde cada palabra comienza con una letra mayúscula.  
                </div>,
                <div>
                    public class Rana {<br></br>
                    // contenido<br></br>
                    }<br></br><br></br>
                    public class RanaMala {<br></br>
                    // contenido<br></br>
                    }
                </div>

            ],
            previews: [
               
            ]
        }
    ]
}

export default temas_3_5