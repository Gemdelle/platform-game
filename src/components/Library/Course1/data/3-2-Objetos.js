import React from "react";

const temas_3_2 = {
    title: "Objetos",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué es un objeto?",
            texts: [//54
                <div>Pero entonces, ¿qué es un objeto? Formalmente, un objeto es una <b>instancia</b> de una clase.
                <br></br><br></br>
                Esto quiere decir que a partir de la clase Rana, se van a crear muchas ranas que van a tener <b>todas</b> las características y métodos definidos en la clase. Cada rana creada es una instancia de la clase Rana.</div>
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
            texts: [//55
                <div>En la clase se van a definir las características y comportamientos que <b>deben</b> tener los
                    objetos de esa clase, pero <b>NO</b> tienen un valor asignado.
                    <br></br><br></br>
                    En la clase Rana se define que todos los objetos de tipo Rana tendrán un nombre, una altura y un
                    método saltar. Pero en la clase Rana no se guarda ningún nombre ni altura, porque no es un objeto
                    sino la plantilla con la que se crearán Ranas.</div>
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-invert"></div>
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
            texts: [//56
                <div>Al crearse un objeto de tipo Rana, se le asignan valores específicos ingresados por el
                    usuario.
                    <br></br><br></br>
                    Se crea una instancia de Rana y se le asigna el nombre Ornn y una altura de 2.76. La forma de crear
                    un objeto será haciendo uso del constructor (curso 2).</div>
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-invert"></div>
                        private String nombre;
                        <br></br>
                        private double altura;
                </div>,
                <div>
                    <i>rana 1</i>
                    <div className="frog-happy"></div>
                        nombre = Ornn
                        <br></br>
                        altura = 2.76
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué datos contiene una instancia?",
            texts: [//57
                <div>Los objetos creados en base a una clase (las instancias) van a tener todos los atributos de la
                    clase original, lo que variará van a ser los valores que se le asignen a los atributos (una Rana
                    nueva va a poder tener cualquier altura). Los métodos, en cambio, serán los mismos.</div>,
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-invert"></div>
                        private String nombre;
                        <br></br>
                        private double altura;
                </div>,
                <div>
                    <i>rana 1</i>
                    <div className="frog-happy"></div>
                        nombre = Ornn/Quyn/Ynn…
                        <br></br>
                        altura = 1.45/2.58/8.32…
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Qué datos contiene una instancia?",
            texts: [//58
                <div>A partir de la clase Rana se crean rana1, rana2 y rana3. Pero, ¿son iguales? No, porque aunque
                    tengan los mismos <b>atributos</b>, los <b>valores</b> asignados a esos atributos cambian. Mientras
                    que rana1 tiene una <i>altura</i> mayor que rana3, rana3 tiene una <i>altura</i> mayor que rana1.</div>,
            ],
            previews: [
                <div>
                    <i>Rana</i>
                    <div className="frog-happy-invert"></div>
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
            texts: [//59
                <div>En la carta anterior se definió que los atributos pueden adoptar cualquier valor cuando se crea el
                    objeto.
                    <br></br><br></br>
                    Esto hace referencia a que no hay problemas en cuanto a <b>rangos</b> de valores, pero sí respecto
                    del <b>tipo</b> de dato.
                    <br></br><br></br>
                    Por ejemplo, no se le puede asignar un valor de tipo String a un atributo de tipo double. La altura
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
        }
    ]
}

export default temas_3_2