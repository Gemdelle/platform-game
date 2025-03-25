import React from "react";

const temas_3_6 = {
    title: "Definición de atributos",
    slides: [
        {
            completed: false,
            subtitle: "¿Cómo se define un atributo?",
            texts: [//69
                <div>
                    Los atributos, al igual que las clases, tienen un modificador de acceso (que será private), un tipo (primitivo, String) y un nombre, que puede ser el que quiera el usuario. 
                    <br></br><br></br>   
                    Un atributo se define como: 
                </div>,
                <div>modificadorAcceso tipoDato nombreAtributo;<br></br><br></br>
                public class Rana {<br></br>
                // private String nombre;<br></br>
                // private int edad;<br></br>
                // private double altura;<br></br>
                // private boolean feliz;<br></br>
                }
                </div>
            ],
            previews: [
               
            ]
        },
        {
            completed: false,
            subtitle: "¿Aplica el camel case?",
            texts: [//70
                <div>
                    En el caso de variables en general y atributos de clases, el nombre empieza en minúscula y cada nueva palabra dentro del nombre empieza con una letra mayúscula. Se evita el uso de tildes para que no haya confusiones.
                </div>,
                <div>
                    public class Rana {<br></br>
                        // private String nombreGenetico;<br></br>
                        // private int edad;<br></br>
                        // private double altura;<br></br>
                        // private boolean feliz;
                    }
                </div>
            ],
            previews: [
               
            ]
        },
        {
            completed: false,
            subtitle: "¿Cómo se nombran los atributos?",
            texts: [//71
                <div>
                    Es importante que los nombres de los atributos sean <b>representativos</b> del valor que almacenan, por ejemplo, nombre, edad, altura, en lugar de n, ed, alt, etc. ya que el objetivo es que cualquier persona que trabaje con el código desarrollado en un futuro pueda entenderlo de manera clara y rápida. 
                </div>
            ],
            previews: [
               
            ]
        }
    ]
}

export default temas_3_6