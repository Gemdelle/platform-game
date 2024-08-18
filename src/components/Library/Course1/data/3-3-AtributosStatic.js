import React from "react";

const temas_3_3 = {
    title: "Atributos static",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué son los atributos static y final?",
            important: true,
            texts: [//60
                <div>Mencionamos antes que los atributos son variables, pero reciben este nombre porque pertenecen a una clase y sirven para describir sus propiedades.
                    <br></br><br></br>
                    Además de almacenar un tipo de valor determinado (como int, float, etc.) los atributos pueden ser de tipo <i>static</i> o <i>final</i>.
                    <br></br><br></br>
                    En breve vamos a ver qué implican estos términos, pero es importante entender que las variables comunes que se definen en un programa no son <i>static</i> ni <i>final</i>; estas características aplican a los atributos de una clase.
                </div>,
            ],
            previews: [

            ]
        },
        {
            completed: false,
            subtitle: "¿Qué es un atributo static?",
            important: true,
            texts: [//61
                <div>Un atributo <i>static</i> pertenece a la <b>clase</b> y no a un objeto individual, razón por la que recibe el nombre de <b>variable de clase</b>.
                    <br></br><br></br>
                    Los atributos que varían en valor para cada instancia se denominan <b>variables de instancia</b>.
                    <br></br><br></br>
                    Este valor es compartido por <b>todas</b> las instancias de una clase.
                    <br></br><br></br>
                    Puede ser de cualquier tipo dentro de los que ya vimos, primitivo o String.</div>,
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
        },
        {
            completed: false,
            subtitle: "¿Para qué sirve un atributo static?",
            important: true,
            texts: [//62
                <div>Un uso común es el de contador. Por ejemplo, si se quiere saber cuántas instancias existen de una clase basta con llamar el nombre de la clase y el atributo usado como contador.
                    <br></br><br></br>
                    Otro uso común corresponde a valores definidos que afectan a todas las instancias de una clase. Llevado a un caso diario podría tratarse del IVA, sería bastante tedioso tener que modificar el valor para cada instancia cuando es un valor único para todos los objetos de la clase, no?
                </div>
            ],
            previews: [

            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo funciona un contador?",
            important: true,
            texts: [//63
                <div>En la clase Rana se define el atributo count de tipo int (número entero) y se determina en el constructor (curso 2) que al crear un objeto de tipo Rana esta variable va a incrementar en 1.
                    <br></br><br></br>
                    En el primer ejemplo a la derecha, al llamar Rana.count el resultado va a ser 1 porque existe 1 sola instancia de la clase Rana. En el ejemplo de abajo el resultado va a ser…
                </div>,
                <div>
                    <div>0</div>
                    <div>1</div>
                    <div>2</div>
                </div>
            ],
            previews: [

            ]
        }
    ]
}

export default temas_3_3