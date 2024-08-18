import React from "react";

const temas_2_1 = {
    title: "Lenguaje tipado vs. no tipado",
    slides: [
        {
            completed: false,
            subtitle: "¿Cuál es la diferencia entre lenguaje tipado y no tipado?",
            texts: [ //30
                <div>En este curso, el objetivo es:</div>,
                <div>La diferencia principal entre un lenguaje <b>tipado</b> y uno <b>no tipado</b> es la manera en la que se manejan los tipos de datos.</div>,
                <div>Para indicar el lenguaje vamos a hacer uso de mascotas</div>
            ],
            previews: [
                <div>
                    <div className="python-green-invertx"></div>
                    <div className="frog-happy-grey"></div>
                </div>,
                <div><span>Lenguaje no tipado</span><span>Lenguaje tipado</span></div>
            ]
        },
        {
            completed: false,
            subtitle: "El lenguaje no tipado",
            texts: [ //31
                <div>Python es un lenguaje <i>no tipado</i>. No existe una asignación <b>manual</b> de tipos de datos a las variables. Si hacemos memoria, para declarar una variable lo único que se necesita es el nombre que va a tener la variable, la asignación, y el valor que se va a almacenar:</div>,
                <div style={{ color: "#404047", font: "Courier" }}>nombreVariable = valor</div>,
                <div>En este ejemplo, creamos la variable mascota y le asignamos la cadena de caracteres Python. </div>
            ],

            previews: [
                <div className="python-green"></div>,
                <div>mascota = 'Python'</div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo se manejan los datos en lenguaje no tipado?",
            texts: [ //32
                <div>En ningún lugar se le especifica al lenguaje que el valor que se va a almacenar en la variable <i>mascota</i> es de tipo string. Sin embargo, el lenguaje lo infiere.
                    <br></br><br></br>
                    La siguiente línea imprime el tipo de dato almacenado en la variable mascota.</div>,
                <div style={{ color: "#404047", font: "Courier" }}>print(mascota.type)</div>,
                <div>Si se corre, la consola va a devolver…</div>,
                <div>
                    <div className="btn-grey-teoric">string</div>
                    <div className="btn-grey-teoric">mascota</div>
                    <div className="btn-grey-teoric">Python</div>
                </div>
            ],

            previews: [
                <div className="python-green"></div>,
                <div>mascota = 'Python'</div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Se pueden sobreescribir variables del mismo tipo de dato?",
            texts: [ //33
                <div>Se pueden sobreescribir los datos guardados en una variable sin problemas. Vamos a cambiar el nombre de la mascota.
                    <br></br><br></br>
                    Si se corren la líneas
                </div>,
                <div style={{ color: "#404047", font: "Courier" }} >mascota = ‘Pythoncito’
                    <br></br><br></br>
                    print(mascota)
                </div>,
                <div >la consola va a devolver…</div>,
                <div>
                    <div className="btn-grey-teoric">Pythoncito</div>
                    <div className="btn-grey-teoric">Python</div>
                    <div className="btn-grey-teoric">error</div>
                </div>
            ],

            previews: [
                <div className="pythoncito"></div>,
                <div>mascota = 'Pythoncito'</div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Y se pueden sobreescribir variables con otro tipo de dato?",
            texts: [ //34
            <div>Por lo que hablamos inicialmente, la respuesta a la pregunta de arriba es sí. Se pueden sobrescribir los datos guardados en una variable aunque sean de otro tipo precisamente porque nunca se le asigna el tipo de dato a la variable de forma manual, sino que el lenguaje mismo infiere el tipo.
                <br></br><br></br>
                Si se corren la líneas
            </div>,
            <div style={{ color: "#404047", font: "Courier" }} >mascota = ‘Pythoncito’
                <br></br><br></br>
                mascota = ‘Pythoncito’
                <br></br>
                mascota = 1
                <br></br>
                print(mascota)
            </div>,
            <div >la consola va a devolver…</div>,
            <div>
                <div className="btn-grey-teoric">mascota</div>
                <div className="btn-grey-teoric">Python</div>
                <div className="btn-grey-teoric">1</div>
            </div>
        ],

        previews: [
            <div className="pythoncito"></div>,
            <div>mascota = 'Pythoncito'</div>
        ]
        },
        {
            completed: false,
            subtitle: "El lenguaje tipado",
            texts: [ /* Diapositiva 35 */
                <div>
                    Java es un lenguaje <b>tipado</b>. Esto significa que tanto las variables como los métodos tienen un tipo de dato específico (int, String, etc.) que <b>debe ser</b> definido al momento de declarar.
                </div>
            ],

            previews: [
                <div className="flex-col">
                    <div className="java-pet"></div>,
                    <div className="java-txt">mascota = ‘Java’</div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "Tipos de datos",
            texts: [ /* Diapositiva 36 */
                <div>
                    Antes de aprender cómo se declaran los atributos en java, es importante saber qué tipos de datos son comunes entre python y java.
                    <br></br><br></br>
                    Una de las diferencias más importantes es que en python existen los tipos de datos primitivos, al igual que en java, pero no existen los tipos de datos <b>no primitivos</b> de los datos <b>primitivos</b>.
                </div>
            ],

            previews: [
                <div className="flex-col">
                    <div className="python-col">
                        <div className="python-img"></div>
                        <div className="python-desc">
                            edad = 33 (int) <i>primitivo</i>
                            <br></br>
                            <div className="grey-color">edad = 33 (Integer) <i>no primitivo (no existe)</i></div>
                        </div>
                    </div>,
                    <div className="java-col">
                        <div className="java-img"></div>
                        <div className="java-desc">
                            edad = 33 (int) <i>primitivo</i>
                            <br></br>
                            Integer edad = 29  <i>no primitivo</i>
                        </div>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "Tipos de datos primitivos",
            texts: [ /* Diapositiva 37 */
            ],
            previews: [
            ]
        },
        {
            completed: false,
            subtitle: "bool y boolean",
            texts: [ /* Diapositiva 38 */
                <div>
                    Mientras que los valores posibles para un valor de tipo bool o boolean siempre son verdadero o falso, la forma en la que se escriben no es la misma.
                    <br></br><br></br>
                    En python el tipo de dato se denomina bool, y el valor se escribe con la primera letra mayúscula (True, False). En java, se denomina boolean, y va con minúscula (true, false).
                </div>
            ],

            previews: [
                <div className="flex-col">
                    <div className="python-col">
                        <div className="python-img"></div>
                        <div className="python-desc">
                            tomaCafe = False
                            <br></br>
                            usaPython = True
                        </div>
                    </div>,
                    <div className="java-col">
                        <div className="java-img"></div>
                        <div className="java-desc">
                            tomaCafe = true
                            <br></br>
                            usaPython = false
                        </div>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "string, String y char",
            texts: [ /* Diapositiva 39 */
                <div>
                    Los tipos de datos relacionados a texto difieren también entre estos dos lenguajes.
                    <br></br><br></br>
                    Mientras que string en python hace referencia ya sea a un caracter o cadena de caracteres, en java existe el tipo de dato char para un solo caracter y el tipo String para una cadena de caracteres.
                    <br></br><br></br>
                    En python, string es un tipo de dato primitivo, y en java, String es no primitivo.
                </div>
            ],
            previews: [
                <div className="flex-col">
                    <div className="python-col">
                        <div className="python-img"></div>
                        <div className="python-desc">
                            cuerpo = ‘verde’
                            <br></br>
                            ojos = ‘naranja’
                            <br></br>
                            colores = ‘Tiene cuerpo naranja y ojos verdes’
                        </div>
                    </div>,
                    <div className="java-col">
                        <div className="java-img"></div>
                        <div className="java-desc">
                            char taza = ‘b’
                        </div>
                    </div>
                </div>
            ]
        },
        {
            completed: false,
            subtitle: "Tipos de datos no primitivos (en python, compuestos)",
            texts: [ /* Diapositiva 40 */

            ],

            previews: [

            ]
        }
    ]
}

export default temas_2_1 