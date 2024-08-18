import React from "react";

const temas_2_1 = {
    title: "Lenguaje tipado vs. no tipado",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué vamos a estudiar?",
            texts: [ /* Diapositiva 29 */
                <div>En este curso, el objetivo es:</div>,
                <div>
                    <ul>
                        <li>Entender la diferencia entre un lenguaje tipado y no tipado
                        </li>
                        <li>Aprender a declarar variables tipadas
                        </li>
                        <li>Aprender a hacer un cierre de línea
                        </li>
                        <li>Aprender a indentar correctamente
                        </li>
                    </ul>
                </div>,
                <div>Para indicar el lenguaje vamos a hacer uso de mascotas</div>
            ],
            previews: [
                <div>
                    <div className="python-green"></div>
                    <div className="frog-happy-grey"></div>
                </div>,
                <div><span>Python</span><span>Java</span></div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cuál es la diferencia entre lenguaje tipado y no tipado?",
            texts: [ /* Diapositiva 30 */
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
            texts: [ /* Diapositiva 31 */
                <div>Python es un lenguaje <i>no tipado</i>. No existe una asignación <b>manual</b> de tipos de datos a las variables. Si hacemos memoria, para declarar una variable lo único que se necesita es el nombre que va a tener la variable, la asignación, y el valor que se va a almacenar:</div>,
                <div style={{ color: "#404047", font:"Courier"}}>nombreVariable = valor</div>,
                <div>En este ejemplo, creamos la variable mascota y le asignamos la cadena de caracteres Python. </div>
            ],

            previews: [
                <div className="python-green"></div>,
                <div>mascota='Python'</div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo se manejan los datos en lenguaje no tipado?",
            texts: [ /* Diapositiva 32 */
              <div>En ningún lugar se le especifica al lenguaje que el valor que se va a almacenar en la variable <i>mascota</i> es de tipo string. Sin embargo, el lenguaje lo infiere. </div>,
              <div>La siguiente línea imprime el tipo de dato almacenado en la variable mascota.</div>,
              <div style={{ color: "#404047", font:"Courier"}}>print(mascota.type)</div>,
              <div>Si se corre, la consola va a devolver…</div>,
              <div>
                <div className="btn-grey-teoric">string</div>
                <div className="btn-grey-teoric">mascota</div>
                <div className="btn-grey-teoric">Python</div>
              </div>
            ],

            previews: [
                <div className="python-green"></div>,
                <div>mascota='Python'</div>
            ]
        },
        {
            completed: false,
            subtitle: "¿Se pueden sobreescribir variables del mismo tipo de dato?",
            texts: [ /* Diapositiva 33 */
                <div>Se pueden sobreescribir los datos guardados en una variable sin problemas. Vamos a cambiar el nombre de la mascota.</div>,
                <div>Si se corren la líneas</div>,
                <div style={{ color: "#404047", font:"Courier"}} >mascota = ‘Pythoncito’</div>,
                <div style={{ color: "#404047", font:"Courier"}}>print(mascota)</div>,
                <div >la consola va a devolver…</div>,
                <div>
                    <div className="btn-grey-teoric">Pythoncito</div>
                    <div className="btn-grey-teoric">Python</div>
                    <div className="btn-grey-teoric">error</div>
                </div>
            ],

            previews: [
                <div className="pythoncito"></div>,
                <div>mascota='Pythoncito'</div>
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 34 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 35 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 36 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 37 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 38 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 39 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 40 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 41 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 42 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 43 */
              
            ],

            previews: [
                
            ]
        },
        {
            completed: false,
            subtitle: "",
            texts: [ /* Diapositiva 44 */
              
            ],

            previews: [
                
            ]
        },
    ]
}

export default temas_2_1 