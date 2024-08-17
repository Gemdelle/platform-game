import React from "react";

export default {
    title: "Conceptos Clase",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué es una clase?",
            texts: [
                <div>Es una plantilla que determina las características y el comportamiento de un objeto.</div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>,
                <i>plantilla</i>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [
                <div>Las características se determinan mediante <b>atributos</b>, y el comportamiento,
                    mediante <b>métodos</b>.</div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>,
                <i>plantilla</i>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [
                <div>Las palabras private y public son modificadores de acceso, concepto en el que se va a profundizar
                    más adelante.</div>,
                <div>Por ahora vamos a definir los atributos con el modificador de acceso privado, ya que deberían ser
                    modificados sólo por la clase, mientras que los métodos se definen como públicos, para que puedan
                    ser invocados por cualquiera.</div>
            ],
            previews: [
                <div className="frog-happy-grey"></div>,
                <i>plantilla</i>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué se almacena en una clase?",
            texts: [
                <div>Por ejemplo, la clase Rana va a tener un atributo de tipo double ‘altura’ y un método ‘jump’, en el
                    que va a imprimir que está saltando. Que un método sea de tipo void implica que no <b>retorna</b> un
                    valor (se )</div>,
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
                </div>,
                <div>
                    <i>animación que salte</i>
                    <div className="frog-happy-grey"></div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un objeto?",
            texts: [
                <div>Pero entonces, ¿qué es un objeto? Formalmente, un objeto es una <b>instancia</b> de una clase.
                </div>,
                <div>Esto quiere decir que a partir de la clase Rana, se van a crear muchas ranas que van a
                    tener <b>todas</b> las características y métodos definidos en la clase.</div>
            ],
            previews: [
                <div>
                    <i>clase</i>
                    <div className="frog-happy-grey"></div>
                </div>,
                <div>
                    <div>
                        <div className="frog-happy"></div>
                        <i>objeto 1</i>
                    </div>
                    <div>
                        <div className="frog-happy"></div>
                        <i>objeto 2</i>
                    </div>
                    <div>
                        <div className="frog-happy"></div>
                        <i>objeto 3</i>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cuál es la diferencia entre clase y objeto?",
            texts: [
                <div>En la clase se van a definir las características y comportamientos que <b>deben</b> tener los
                    objetos de esa clase, pero <b>NO</b> tienen un valor asignado.</div>,
                <div>En la clase Rana se define que todos los objetos de tipo Rana tendrán un nombre, una altura y un
                    método saltar. Pero en la clase Rana no se guarda ningún nombre ni altura, porque no es un objeto
                    sino la plantilla con la que se crearán Ranas.</div>
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-grey"></div>
                    <span>private String nombre;</span>
                    <span>private double altura;</span>
                </div>,
                <div>
                    <i>rana 1</i>
                    <div className="frog-happy"></div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cuál es la diferencia entre clase y objeto?",
            texts: [
                <div>Al crearse un objeto de tipo Rana, se le asignan valores específicos ingresados por el
                    usuario.</div>,
                <div>Se crea una instancia de Rana y se le asigna el nombre Ornn y una altura de 2.76. La forma de crear
                    un objeto será haciendo uso del constructor (curso 2).</div>
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-grey"></div>
                    <span>private String nombre;</span>
                    <span>private double altura;</span>
                </div>,
                <div>
                    <i>rana 1</i>
                    <div className="frog-happy"></div>
                    <span>nombre = Ornn</span>
                    <span>altura = 2.76</span>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué datos contiene una instancia?",
            texts: [
                <div>Los objetos creados en base a una clase (las instancias) van a tener todos los atributos de la
                    clase original, lo que variará van a ser los valores que se le asignen a los atributos (una Rana
                    nueva va a poder tener cualquier altura). Los métodos, en cambio, serán los mismos.</div>,
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-grey"></div>
                    <span>private String nombre;</span>
                    <span>private double altura;</span>
                </div>,
                <div>
                    <i>rana 1</i>
                    <div className="frog-happy"></div>
                    <span>nombre = Ornn/Quyn/Ynn…</span>
                    <span>altura = 1.45/2.58/8.32…</span>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué datos contiene una instancia?",
            texts: [
                <div>A partir de la clase Rana se crean rana1, rana2 y rana3. Pero, ¿son iguales? No, porque aunque
                    tengan los mismos <b>atributos</b>, los <b>valores</b> asignados a esos atributos cambian. Mientras
                    que rana1 tiene una altura mayor que rana3, rana3 tiene una altura mayor que rana1.</div>,
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-grey"></div>
                </div>,
                <div>
                    <div>
                        <div className="frog-happy"></div>
                        <i>rana1</i>
                    </div>
                    <div>
                        <div className="frog-happy"></div>
                        <i>rana2</i>
                    </div>
                    <div>
                        <div className="frog-happy"></div>
                        <i>rana3</i>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué datos contiene una instancia?",
            important: true,
            texts: [
                <div>En la carta anterior se definió que los atributos pueden adoptar cualquier valor cuando se crea el
                    objeto.</div>,
                <div>Esto hace referencia a que no hay problemas en cuanto a <b>rangos</b> de valores, pero sí respecto
                    del <b>tipo</b> de dato.</div>,
                <div>Por ejemplo, no se le puede asignar un valor de tipo String a un atributo de tipo double. La altura
                    de una Rana puede ser cualquier número siempre y cuando sea un <b>número</b>.</div>,
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-grey"></div>
                    <span>public double height;</span>
                </div>,
                <div>
                    <i>rana1</i>
                    <div className="frog-happy"></div>
                    <span>altura 1.45</span>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un atributo static?",
            important: true,
            texts: [
                <div>Un atributo <i>static</i> pertenece a la <b>clase</b> y no a un objeto individual, razón por la que
                    recibe el nombre de <b>variable de clase</b>.</div>,
                <div>Los atributos que varían en valor para cada instancia se denominan <b>variables de instancia</b>.
                </div>,
                <div>Este valor es compartido por <b>todas</b> las instancias de una clase.</div>,
                <div>Puede ser de cualquier tipo dentro de los que ya vimos, primitivo o String.</div>,
            ],
            previews: [
                <div>
                    <div>
                        <div>
                            <div className="frog-happy"></div>
                            <i>rana1</i>
                        </div>
                        <div>
                            <div className="frog-happy"></div>
                            <i>rana2</i>
                        </div>
                    </div>
                    <div>
                        <span>nombre = Quyn</span>
                        <span>nombre = Ornn</span>
                    </div>
                    <span>variables de instancia (valores específicos para cada objeto)</span>
                </div>,
                <div>
                    <div>
                        <div>
                            <div className="frog-happy"></div>
                            <i>rana1</i>
                        </div>
                        <div>
                            <div className="frog-happy"></div>
                            <i>rana2</i>
                        </div>
                    </div>
                    <div>
                        <span>nombre = Quyn</span>
                        <span>nombre = Ornn</span>
                    </div>
                    <div>
                        <span>cantidad = 2</span>
                        <span>cantidad = 2</span>
                    </div>
                    <span>variables de clase (valores iguales para todas las instancias)</span>
                </div>
            ]
        }
    ]
}