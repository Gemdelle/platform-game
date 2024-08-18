import React from "react";

const temas_3_4 = {
    title: "Atributos final",
    slides: [
        {
            completed: false,
            subtitle: "¿Qué es un atributo final?",
            texts: [//64
                <div>los atributos <i>final</i> son útiles porque garantizan la <b>inmutabilidad</b> de los datos.
                <br></br><br></br>        
                Si una clase define un atributo final, al momento de crear el objeto el valor asignado a esa variable <b>no</b> podrá ser modificado. También se pueden definir con un valor ya asignado dentro de la clase para indicar que es un valor constante.
                <br></br><br></br>
                Al igual que los atributos static, los atributos final pueden almacenar cualquier tipo de dato, ya sea primitivo o String.
                </div>
            ],
            previews: [

            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo funciona un atributo final?",
            texts: [//65
                <div>
                    Los atributos final suelen utilizarse para datos que no cambian o para constantes.
                    <br></br><br></br>   
                    Por ejemplo, se crean 2 ranas, rana1 y rana2, y se les asigna el nombre Ornn y Quyn. Como el atributo nombre en la clase fue definido como final, las ranas no van a poder cambiar su nombre.
                    <br></br><br></br>   
                    De todas formas, es importante tener cuidado con la inmutabilidad de los datos porque en el día a día suele haber errores de tipeo en el ingreso de datos y pueden ocasionarse problemas.
                    <br></br><br></br>   
                    Más allá de que no se utilizan frecuentemente, es útil conocer la existencia de este tipo de variables.
                </div>
            ],
            previews: [
               
            ]
        }
    ]
}

export default temas_3_4