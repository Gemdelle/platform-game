import React from "react";

const temas_3_1 = {
    title: "Clases",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué es una clase?",
            texts: [//48
                <div>Es una plantilla que determina las <b>características</b> y el <b>comportamiento</b> de un objeto.</div>
            ],
            previews: [
                <div className="frog-happy-invert"></div>,
                <i>plantilla</i>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [//49
                <div>Las características se determinan mediante <b>atributos</b>, y el comportamiento se define mediante <b>métodos</b>.</div>
            ],
            previews: [
                <div className="frog-happy-invert"></div>,
                <i>plantilla</i>
            ]
        },
        {
            completed: false,
            subtitle: "¿Variable o atributo?",
            texts: [//50
                <div>En cualquier lenguaje se trabaja con variables. Una variable puede entenderse como una caja que donde se guarda un dato.
                <br></br><br></br>
                Los atributos también son variables. Entonces, ¿por qué se llaman atributos? Porque, aunque son similares a las variables comunes, su propósito es <b>describir</b> las <b>características</b> de un <b>objeto</b>.
                </div>
            ],
            previews: [
                <div className="frog-happy-invert"></div>,
                <i>plantilla</i>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [//51
                <div>Las palabras <i>private</i> y <i>public</i> son modificadores de acceso. Estos modificadores se van a ver con más detenimiento en el curso de métodos, pero a grandes rasgos, controlan el <b>acceso</b> a la información de una clase.
                <br></br><br></br>
                Los elementos que llevan modificadores de acceso son las clases mismas, los atributos y el constructor, que también vamos a ver más adelante en el curso sobre constructores.
                </div>
            ],
            previews: [
                <div className="frog-happy-invert"></div>,
                <i>plantilla</i>
            ]
        },

        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [//52
                <div>Las clases se van a definir como <i>public</i>, lo que permite que se puedan acceder desde otras partes del código para crear objetos.
                <br></br><br></br>
                Los atributos se van a definir como <i>private</i>, ya que contienen información que describe al objeto y no deberían ser modificados directamente. Más adelante, veremos que hay métodos para modificar estos datos de forma controlada, pero por defecto, los atributos son privados.
                <br></br><br></br>
                Los métodos se van a definir como <i>public</i> porque permiten realizar acciones con el objeto y deben estar disponibles para usarse en cualquier parte del programa.
                </div>
            ],
            previews: [
                <div className="frog-happy-invert"></div>,
                <i>plantilla</i>
            ]
        },

        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [//53
                <div>Por ejemplo, la clase Rana va a tener un atributo de tipo double ‘altura’ y un método ‘jump’, en el que va a imprimir que está saltando (en el curso Métodos se va a ver más en profundidad la declaración y funcionamiento de métodos y el uso de ‘void’).</div>,
                <pre-java>
                    <code-java className="language-java">
                        {`
                    private double altura;
                    public void saltar() {
                        System.out.println(“Estoy saltando”)
                    }
                    `}
                        <span>atributo</span>
                        <span>método</span>
                    </code-java>
                </pre-java>
            ],
            previews: [
                <div>
                    <i>altura</i>
                    <div className="frog-happy-grey"></div>
                    <div className="vertical-line"></div>
                </div>,
                <div>
                    <i>animación que salte</i>
                    <div className="frog-happy-grey"></div>
                </div>
            ]
        }
    ]
}

export default temas_3_1