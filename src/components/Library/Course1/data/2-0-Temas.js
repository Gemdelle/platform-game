import React from "react";

const temas_2_0 = {
    title: "Temas",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué vamos a estudiar?",
            texts: [ //29
                <div>En este curso, el objetivo es:</div>,
                <ul>
                    <li>Entender la diferencia entre un lenguaje tipado y no tipado</li>
                    <li>Aprender a declarar variables tipadas</li>
                    <li>Aprender a hacer un cierre de línea</li>
                    <li>Aprender a indentar correctamente</li>
                </ul>,
                <div>Para indicar el lenguaje vamos a hacer uso de mascotas</div>
            ],
            previews: [
                <div>
                    <div className="python-green"></div>
                    <div className="frog-happy-grey"></div>
                </div>,
                <div><span>Python</span><span>Java</span></div>
            ]
        }
    ]
}

export default temas_2_0 