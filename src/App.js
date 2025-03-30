// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home/Home';
import Course1Sublevel1 from "./screens/java_course/Course1/Course1Sublevel1";
import AvatarSelection from "./screens/AvatarSelection/AvatarSelection";
import Course1Sublevel2 from "./screens/java_course/Course1/Course1Sublevel2";
import Course1Sublevel3 from "./screens/java_course/Course1/Course1Sublevel3";
import TeoricSublevel from "./screens/java_course/Course1/TeoricSublevel/TeoricSublevel";
import Course1Sublevel4 from "./screens/java_course/Course1/Course1Sublevel4";
import Course1Sublevel5 from "./screens/java_course/Course1/Course1Sublevel5";
import Course1Sublevel6 from "./screens/java_course/Course1/Course1Sublevel6";
import Course1Sublevel16 from "./screens/java_course/Course1/Course1Sublevel16";
import Course1Sublevel22 from "./screens/java_course/Course1/Course1Sublevel22";
import Course2Sublevel1 from "./screens/java_course/Course2/Course2Sublevel1";
import Course3Sublevel1 from "./screens/java_course/Course3/Course3Sublevel1";
import Course3Sublevel2 from "./screens/java_course/Course3/Course3Sublevel2";
import Teoric2Sublevel from "./screens/java_course/Course2/TeoricSublevel/Teoric2Sublevel";


import PythonTeoric1Sublevel1 from "./screens/python_course/Course1/TeoricSublevel/PythonTeoric1Sublevel1";
import CustomCursor from "./components/Cursor/CustomCursor";
import Library from "./components/Library/Library";
import CourseSelection from "./screens/CourseSelection/CourseSelection";
import CourseScreen from "./screens/python_course/CourseScreen/CourseScreen";
import Teoric3Sublevel from "./screens/python_course/Course3/TeoricSublevel/Teoric3Sublevel";

const App = () => {
    return (
        <Router>
            <div>
                <CustomCursor />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/course-selection" element={<CourseSelection/>}/>
                    <Route path="/avatar-selection" element={<AvatarSelection/>}/>
                    <Route path="/library/intro" element={<Library />}/>
                    <Route path="/library/:courseNumber" element={<Library />}/>
                    <Route path="/course/1/theoretical" element={<TeoricSublevel/>}/>
                    <Route path="/course/1/1" element={<Course1Sublevel1/>}/>
                    <Route path="/course/1/2" element={<Course1Sublevel2/>}/>
                    <Route path="/course/1/3" element={<Course1Sublevel3/>}/>
                    <Route path="/course/1/4" element={<Course1Sublevel4/>}/>
                    <Route path="/course/1/5" element={<Course1Sublevel5/>}/>
                    <Route path="/course/1/6" element={<Course1Sublevel6/>}/>
                    <Route path="/course/1/16" element={<Course1Sublevel16/>}/>
                    <Route path="/course/1/22" element={<Course1Sublevel22/>}/>
                    <Route path="/course/2/theoretical" element={<Teoric2Sublevel/>}/>
                    <Route path="/course/2/1" element={<Course2Sublevel1/>}/>
                    <Route path="/course/3/1" element={<Course3Sublevel1/>}/>
                    <Route path="/course/3/2" element={<Course3Sublevel2/>}/>

                    <Route path="/course-python/1/theoretical" element={<PythonTeoric1Sublevel1/>}/>
                    <Route path="/course-python/1/1" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/1/2'
                            validationUrl='course-python/1/1'
                            instructions="Habilitar la variable."
                            codeEditorSetup={
                                {
                                    title: "❧ 0.1 Comentarios de una línea #",
                                    previousCode:'# quote = "La materia no se crea ni se destruye, solo se transforma."',
                                    correctAnswer:'quote = "La materia no se crea ni se destruye, solo se transforma."'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Habilitar la variable.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/1/2" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/1/3'
                            validationUrl='course-python/1/2'
                            instructions="Agregar el nombre del autor (Antoine Lavoisier) a modo de comentario # al lado de la declaración de la variable."
                            codeEditorSetup={
                                {
                                    title: "❧ 0.1 Comentarios de una línea #",
                                    previousCode:'quote = "Nada se pierde, todo se transforma."',
                                    correctAnswer:'quote = "Nada se pierde, todo se transforma." # Antoine Lavoisier'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Agregar el nombre del autor (Antoine Lavoisier) a modo de comentario # al lado de la declaración de la variable.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/1/3" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/1/4'
                            validationUrl='course-python/1/3'
                            instructions="Corregir el código para que la variable quede habilitada y el nombre del autor comentado en la misma línea."
                            codeEditorSetup={
                                {
                                    title: "❧ 0.1 Comentarios de una línea #",
                                    previousCode:'% quote = "Todo es cuestión de átomos." %\n' +
                                        '% Richard Feynman\n',
                                    correctAnswer:'quote = "Todo es cuestión de átomos." # Richard Feynman'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Corregir el código para que la variable quede habilitada y el nombre del autor comentado en la misma línea.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/1/4" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/1/5'
                            validationUrl='course-python/1/4'
                            instructions="Deshabilitar la variable."
                            codeEditorSetup={
                                {
                                    title: '❧ 0.2 Comentarios multilínea """ """',
                                    previousCode:'quote = "Si la química no existiera, la vida no sería posible."',
                                    correctAnswer:'"""\n' +
                                        'quote = "Si la química no existiera, la vida no sería posible."\n' +
                                        '"""\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Deshabilitar la variable.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/1/5" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/1/6'
                            validationUrl='course-python/1/5'
                            instructions="Comentar las quotes que no corresponden al autor del comentario."
                            codeEditorSetup={
                                {
                                    title: '❧ 0.2 Comentarios multilínea """ """',
                                    previousCode:'"""\n' +
                                        'Glenn T. Seaborg (1912-1999) fue un químico estadounidense que descubrió varios elementos transuránicos, incluido el plutonio El elemento seaborgio (Sg) fue nombrado en su honor.\n' +
                                        '"""\n' +
                                        'quote1 = "La alquimia fue la predecesora de la química moderna." # Carl Jung\n' +
                                        'quote2 = "Cada elemento tiene su propia identidad." # Glenn T. Seaborg\n' +
                                        'quote3 = "La ciencia y la paz triunfarán sobre la ignorancia y la guerra." # Louis Pasteur\n',
                                    correctAnswer:'"""\n' +
                                        'Glenn T. Seaborg (1912-1999) fue un químico estadounidense que descubrió varios elementos transuránicos, incluido el plutonio El elemento seaborgio (Sg) fue nombrado en su honor.\n' +
                                        '"""\n' +
                                        '"""\n' +
                                        'quote1 = "La alquimia fue la predecesora de la química moderna." # Carl Jung\n' +
                                        '"""\n' +
                                        'quote2 = "Cada elemento tiene su propia identidad." # Glenn T. Seaborg\n' +
                                        '"""\n' +
                                        'quote3 = "La ciencia y la paz triunfarán sobre la ignorancia y la guerra." # Louis Pasteur\n' +
                                        '"""\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Comentar las quotes que no corresponden al autor del comentario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/1/6" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/1/7'
                            validationUrl='course-python/1/6'
                            instructions="Comentar la información del autor en formato multilínea y el nombre del autor después de la frase en la misma línea."
                            codeEditorSetup={
                                {
                                    title: '❧ 0.2 Comentarios multilínea """ """',
                                    previousCode:'Theodore Gray es un químico, escritor y divulgador científico conocido por su pasión por la tabla periódica. Es cofundador de Wolfram Research y autor de libros como The Elements, donde presenta la química de forma visual e interactiva.\n' +
                                        '\n' +
                                        'quote = "Los elementos son los átomos de la tabla periódica, pero la química es la sinfonía de sus combinaciones." - Theodore Gray\n',
                                    correctAnswer:'"""\n' +
                                        'Theodore Gray es un químico, escritor y divulgador científico conocido por su pasión por la tabla periódica. Es cofundador de Wolfram Research y autor de libros como The Elements, donde presenta la química de forma visual e interactiva.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'quote = "Los elementos son los átomos de la tabla periódica, pero la química es la sinfonía de sus combinaciones." # Theodore Gray\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Comentar la información del autor en formato multilínea y el nombre del autor después de la frase en la misma línea.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>

                    <Route path="/course-python/2/1" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/2'
                            validationUrl='course-python/2/1'
                            instructions="?????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.1. Imprimir texto",
                                    previousCode:'print.log("El agua es esencial para todos los seres vivos.")',
                                    correctAnswer:'print("El agua es esencial para todos los seres vivos.")'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Imprimir el mensaje correctamente.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/2" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/3'
                            validationUrl='course-python/2/2'
                            instructions="?????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.1. Imprimir texto",
                                    previousCode:'print El agua hierve a 100°C y se congela a 0°C.\n' +
                                        'print "El agua tiene un punto de ebullición de 100°C y congelación de 0°C."\n',
                                    correctAnswer:'print("El agua hierve a 100°C y se congela a 0°C.")\n' +
                                        'print("El agua tiene un punto de ebullición de 100°C y congelación de 0°C.")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Imprimir los mensajes correctamente.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/3" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/4'
                            validationUrl='course-python/2/3'
                            instructions="?????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.1. Imprimir texto",
                                    previousCode:'"""\n' +
                                        'El agua (H2O) es líquida a temperatura ambiente.\n' +
                                        'El agua hierve a 100°C y se congela a 0°C.\n' +
                                        'El agua tiene un punto de ebullición de 100°C y congelación de 0°C.\n' +
                                        '"""\n',
                                    correctAnswer:'print("El agua (H2O) es líquida a temperatura ambiente.")\n' +
                                        'print("El agua hierve a 100°C y se congela a 0°C.")\n' +
                                        'print("El agua tiene un punto de ebullición de 100°C y congelación de 0°C.")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Imprimir las tres frases por separado y eliminar el comentario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/4" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/5'
                            validationUrl='course-python/2/4'
                            instructions="Imprimir la variable <sal_importancia>."
                            codeEditorSetup={
                                {
                                    title: "❧ 1.2 Imprimir variables",
                                    previousCode:'sal_importancia = "Se usa en la industria alimentaria y como desinfectante."\n' +
                                        'print("sal_importancia"’)\n',
                                    correctAnswer:'sal_importancia = "Se usa en la industria alimentaria y como desinfectante."\n' +
                                        'print(sal_importancia)\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Imprimir la variable <sal_importancia>.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/5" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/6'
                            validationUrl='course-python/2/5'
                            instructions="Imprimir la variable <sal_estado>."
                            codeEditorSetup={
                                {
                                    title: "❧ 1.2 Imprimir variables",
                                    previousCode:'sal_estado = "sólido"\n' +
                                        'print()\n',
                                    correctAnswer:'sal_estado = "sólido"\n' +
                                        'print(sal_estado)\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Imprimir la variable <sal_estado>",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/6" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/7'
                            validationUrl='course-python/2/6'
                            instructions="Habilitar las variables  <sal_formula>, <sal_punto_fusion> y <sal_punto_ebullicion = '1413°C'> e imprimirla."
                            codeEditorSetup={
                                {
                                    title: "❧ 1.2 Imprimir variables",
                                    previousCode:'# sal_formula = "NaCl"\n' +
                                        '# sal_punto_fusion = "801°C"\n' +
                                        '# sal_punto_ebullicion = "1413°C"\n',
                                    correctAnswer:'sal_formula = "NaCl"\n' +
                                        'sal_punto_fusion = "801°C"\n' +
                                        'sal_punto_ebullicion = "1413°C"\n' +
                                        'print(sal_formula)\n' +
                                        'print(sal_punto_fusion)\n' +
                                        'print(sal_punto_ebullicion)\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Habilitar las variables  <sal_formula>, <sal_punto_fusion> y <sal_punto_ebullicion = \"1413°C\"> e imprimirla.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/7" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/8'
                            validationUrl='course-python/2/7'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.3 Imprimir concatenación de texto y variables con ,",
                                    previousCode:'metano_nombre = "Metano"\n' +
                                        'metano_formula = "CH4"\n' +
                                        '\n' +
                                        '# print("El compuesto es", "metano_nombre")\n',
                                    correctAnswer:'metano_nombre = "Metano"\n' +
                                        'metano_formula = "CH4"\n' +
                                        '\n' +
                                        'print("El compuesto es", metano_nombre)\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Habilitar y ajustar el print para que imprima correctamente una descripción del metano.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/8" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/9'
                            validationUrl='course-python/2/8'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.3 Imprimir concatenación de texto y variables con ,",
                                    previousCode:'metano_nombre = "Metano"\n' +
                                        'metano_formula = "CH4"\n' +
                                        'metano_punto_fusion = "-161.5°C"\n' +
                                        '\n' +
                                        'print("La fórmula del metano es ", metano_formula)\n' +
                                        'print("Su punto de fusión es)\n',
                                    correctAnswer:'metano_nombre = "Metano"\n' +
                                        'metano_formula = "CH4"\n' +
                                        'metano_punto_fusion = "-161.5°C"\n' +
                                        '\n' +
                                        'print("La fórmula del metano es ", metano_formula, ".")\n' +
                                        'print("Su punto de fusión es", metano_punto_fusion, ".")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Agregar las variables correspondientes en cada print y un punto al final de cada frase.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/9" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/10'
                            validationUrl='course-python/2/9'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.3 Imprimir concatenación de texto y variables con ,",
                                    previousCode:'"""\n' +
                                        'metano_nombre = "Metano"\n' +
                                        'metano_formula = "CH4"\n' +
                                        'metano_estado = "gas"\n' +
                                        'metano_punto_fusion = "-161.5°C"\n' +
                                        'metano_punto_ebullicion = "-161.5°C"\n' +
                                        'metano_origen = "Se encuentra en los yacimientos de gas natural."\n' +
                                        '"""\n' +
                                        '\n' +
                                        '# print("El nombre del compuesto a describir es", metano_nombre, ".")\n',
                                    correctAnswer:'metano_nombre = "Metano"\n' +
                                        'metano_formula = "CH4"\n' +
                                        'metano_estado = "gas"\n' +
                                        'metano_punto_fusion = "-161.5°C"\n' +
                                        'metano_punto_ebullicion = "-161.5°C"\n' +
                                        'metano_origen = "Se encuentra en los yacimientos de gas natural."\n' +
                                        '\n' +
                                        'print("El nombre del compuesto a describir es", metano_nombre, ".")\n' +
                                        'print("Su fórmula química es", metano_formula, ".")\n' +
                                        'print("Se encuentra en estado", metano_estado, ".")\n' +
                                        'print("Su punto de fusión es", metano_punto_fusion, ".")\n' +
                                        'print("Su punto de ebullición es", metano_punto_ebullicion, ".")\n' +
                                        'print(metano_origen)\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Habilitar las variables y el print y agregar un nuevo print por cada variable. Todas las impresiones deben tener un punto final.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/10" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/11'
                            validationUrl='course-python/2/10'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.4. Imprimir concatenación de variables con +",
                                    previousCode:'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
                                        'dioxido_carbono_formula = "CO2"\n' +
                                        'dioxido_carbono_estado = "gas"\n' +
                                        '# print("El " + dioxido_carbono_nombre + "Dióxido de Azufre" + " tiene la fórmula " + "CO2" +  dioxido_carbono_formula)\n' +
                                        '# print("El  + "Dióxido de Magnesio" + dioxido_carbono_nombre + "es un " + "líquido" + dioxido_carbono_estado)\n',
                                    correctAnswer:'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
                                        'dioxido_carbono_formula = "CO2"\n' +
                                        'dioxido_carbono_estado = "gas"\n' +
                                        '\n' +
                                        '# print("El " + dioxido_carbono_nombre + " tiene la fórmula " + dioxido_carbono_formula)\n' +
                                        '# print("El + dioxido_carbono_nombre + " es un " +  dioxido_carbono_estado)\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Habilitar y ajustar el print para que imprima correctamente una descripción descripción del dióxido de carbono.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/11" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/12'
                            validationUrl='course-python/2/11'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.4. Imprimir concatenación de variables con +",
                                    previousCode:'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
                                        'dioxido_carbono_formula = "CO2"\n' +
                                        'dioxido_carbono_estado = "gas"\n' +
                                        'dioxido_carbono_concentracion_atmosferica = "0.04%"\n' +
                                        '\n' +
                                        'print("El " + dioxido_carbono_nombre + " tiene la fórmula " + dioxido_carbono_formula)\n' +
                                        'print("Es un " + <> + " que se encuentra en la atmósfera con una concentración de " +<>)\n',
                                    correctAnswer:'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
                                        'dioxido_carbono_formula = "CO2"\n' +
                                        'dioxido_carbono_estado = "gas"\n' +
                                        'dioxido_carbono_concentracion_atmosferica = "0.04%"\n' +
                                        '\n' +
                                        'print("El " + dioxido_carbono_nombre + " tiene la fórmula " + dioxido_carbono_formula + ".")\n' +
                                        'print("Es un " + dioxido_carbono_estado + " que se encuentra en la atmósfera con una concentración de " + dioxido_carbono_concentracion_atmosferica + "."’)\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Agregar las variables correspondientes en cada print y un punto al final de cada frase.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/12" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/13'
                            validationUrl='course-python/2/12'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.4. Imprimir concatenación de variables con +",
                                    previousCode:'"""\n' +
                                        'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
                                        'dioxido_carbono_formula = "CO2"\n' +
                                        'dioxido_carbono_estado = "gas"\n' +
                                        'dioxido_carbono_concentracion_atmosferica = "0.04%"\n' +
                                        'dioxido_carbono_efecto_invernadero = "Contribuye al cambio climático."\n' +
                                        '"""\n' +
                                        '\n' +
                                        '# print("El compuesto " +)\n',
                                    correctAnswer:'dioxido_carbono_nombre = "Dióxido de carbono"\n' +
                                        'dioxido_carbono_formula = "CO2"\n' +
                                        'dioxido_carbono_estado = "gas"\n' +
                                        'dioxido_carbono_concentracion_atmosferica = "0.04%"\n' +
                                        'dioxido_carbono_efecto_invernadero = "Contribuye al cambio climático."\n' +
                                        '\n' +
                                        'print("El compuesto "+ dioxido_carbono_nombre + " tiene la fórmula " + dioxido_carbono_formula + \n' +
                                        '      ", se encuentra en estado " + dioxido_carbono_estado + \n' +
                                        '      " y su concentración en la atmósfera es de " + dioxido_carbono_concentracion_atmosferica + \n' +
                                        '      ". " + dioxido_carbono_efecto_invernadero)\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Habilitar las variables y el print y completarlo agregando todas las variables.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/13" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/14'
                            validationUrl='course-python/2/13'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.5 Impresión formateada",
                                    previousCode:'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
                                        'acido_clorhidrico_formula = "HCl"\n' +
                                        '\n' +
                                        'print(f"El compuesto {"acido_clorhidrico_nombre"} tiene la fórmula {"acido_clorhidrico_formula"}.")\n',
                                    correctAnswer:'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
                                        'acido_clorhidrico_formula = "HCl"\n' +
                                        '\n' +
                                        'print(f"El compuesto {acido_clorhidrico_nombre} tiene la fórmula {acido_clorhidrico_formula}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Imprimir correctamente los datos del ácido clorhídrico. Incluir el punto final.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/14" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/15'
                            validationUrl='course-python/2/14'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.5 Impresión formateada",
                                    previousCode:'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
                                        'acido_clorhidrico_formula = "HCl"\n' +
                                        'acido_clorhidrico_estado = "líquido"\n' +
                                        'acido_clorhidrico_ph = "1"\n' +
                                        '\n' +
                                        '# print("El compuesto acido_clorhidrico_nombre tiene la fórmula acido_clorhidrico_formula, es un acido_clorhidrico_estado y su pH es acido_clorhidrico_ph.")\n',
                                    correctAnswer:'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
                                        'acido_clorhidrico_formula = "HCl"\n' +
                                        'acido_clorhidrico_estado = "líquido"\n' +
                                        'acido_clorhidrico_ph = "1"\n' +
                                        '\n' +
                                        'print(f"El compuesto {acido_clorhidrico_nombre} tiene la fórmula {acido_clorhidrico_formula}, es un {acido_clorhidrico_estado} y su pH es {acido_clorhidrico_ph}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Imprimir correctamente los datos del ácido clorhídrico. Incluir el punto final.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/15" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/16'
                            validationUrl='course-python/2/15'
                            instructions="??????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 1.5 Impresión formateada",
                                    previousCode:'"""\n' +
                                        'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
                                        'acido_clorhidrico_formula = "HCl"\n' +
                                        'acido_clorhidrico_estado = "líquido"\n' +
                                        'acido_clorhidrico_ph = "1"\n' +
                                        'acido_clorhidrico_usos = "Se utiliza en la limpieza industrial y en la producción de cloro."\n' +
                                        '"""\n',
                                    correctAnswer:'acido_clorhidrico_nombre = "Ácido clorhídrico"\n' +
                                        'acido_clorhidrico_formula = "HCl"\n' +
                                        'acido_clorhidrico_estado = "líquido"\n' +
                                        'acido_clorhidrico_ph = "1"\n' +
                                        'acido_clorhidrico_usos = "Se utiliza en la limpieza industrial y en la producción de cloro."\n' +
                                        '\n' +
                                        'print(f"El compuesto {acido_clorhidrico_nombre} tiene la fórmula {acido_clorhidrico_formula}, se encuentra en estado {acido_clorhidrico_estado}, su pH es {acido_clorhidrico_ph} y {acido_clorhidrico_usos}")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Imprimir de manera formateada todos los datos del ácido clorhídrico.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/16" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/17'
                            validationUrl='course-python/2/16'
                            instructions="Imprimir los datos del ácido sulfúrico de manera tal que quede un dato por línea, separados por un solo renglón."
                            codeEditorSetup={
                                {
                                    title: "1.6 Impresión formateada y salto de línea",
                                    previousCode:'# acido_sulfurico_nombre = "Ácido sulfúrico"\n' +
                                        '# acido_sulfurico_formula = "H₂SO₄"\n' +
                                        '\n' +
                                        '# print(f"Nombre: \\n{acido_sulfurico_nombre}\\n\\n Fórmula: \\n{acido_sulfurico_formula}")\n',
                                    correctAnswer:'acido_sulfurico_nombre = "Ácido sulfúrico"\n' +
                                        'acido_sulfurico_formula = "H₂SO₄"\n' +
                                        '\n' +
                                        'print(f"Nombre: {acido_sulfurico_nombre}\\n Fórmula: {acido_sulfurico_formula}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Imprimir los datos del ácido sulfúrico de manera tal que quede un dato por línea, separados por un solo renglón.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/17" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/18'
                            validationUrl='course-python/2/17'
                            instructions="Agregar los saltos de línea donde corresponde de manera tal que quede un dato por línea. El último dato a imprimir debe ser el uso. Debe contar con punto final."
                            codeEditorSetup={
                                {
                                    title: "1.6 Impresión formateada y salto de línea",
                                    previousCode:'"""\n' +
                                        'acido_sulfurico_usos = "Se utiliza en la fabricación de fertilizantes, detergentes y en el refinado de petróleo."\n' +
                                        'acido_sulfurico_formula = "H₂SO₄"\n' +
                                        'acido_sulfurico_ph = "0.3"\n' +
                                        '"""\n' +
                                        '\n' +
                                        '# print("La fórmula del ácido sulfúrico es . El ph del ácido sulfúrico es.")\n',
                                    correctAnswer:'acido_sulfurico_usos = "Se utiliza en la fabricación de fertilizantes, detergentes y en el refinado de petróleo."\n' +
                                        'acido_sulfurico_formula = "H₂SO₄"\n' +
                                        'acido_sulfurico_ph = "0.3"\n' +
                                        '\n' +
                                        'print(f"La fórmula del ácido sulfúrico es {acido_sulfurico_formula}.\\nEl pH del ácido sulfúrico es {acido_sulfurico_ph}.\\n{acido_sulfurico_usos}")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Agregar los saltos de línea donde corresponde de manera tal que quede un dato por línea. El último dato a imprimir debe ser el uso. Debe contar con punto final.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/2/18" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/2/19'
                            validationUrl='course-python/2/18'
                            instructions="Imprimir todos los datos de las variables de manera tal que queden exactamente igual al contenido de las triples comillas."
                            codeEditorSetup={
                                {
                                    title: "1.6 Impresión formateada y salto de línea",
                                    previousCode:'"""\n' +
                                        'acido_sulfurico_nombre = "Ácido sulfúrico"\n' +
                                        'acido_sulfurico_formula = "H₂SO₄"\n' +
                                        'acido_sulfurico_estado = "líquido"\n' +
                                        'acido_sulfurico_ph = "0.3"\n' +
                                        'acido_sulfurico_usos = "Se utiliza en la fabricación de fertilizantes, detergentes y en el refinado de petróleo."\n' +
                                        '"""\n',
                                    correctAnswer:'acido_sulfurico_nombre = "Ácido sulfúrico"\n' +
                                        'acido_sulfurico_formula = "H₂SO₄"\n' +
                                        'acido_sulfurico_estado = "líquido"\n' +
                                        'acido_sulfurico_ph = "0.3"\n' +
                                        'acido_sulfurico_usos = "Se utiliza en la fabricación de fertilizantes, detergentes y en el refinado de petróleo."\n' +
                                        '\n' +
                                        'print(f\'acido_sulfurico_nombre = "{acido_sulfurico_nombre}"\\nacido_sulfurico_formula = "{acido_sulfurico_formula}"\\nacido_sulfurico_estado = "{acido_sulfurico_estado}"\\nacido_sulfurico_ph = "{acido_sulfurico_ph}"\\nacido_sulfurico_usos = "{acido_sulfurico_usos}"\')\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Imprimir todos los datos de las variables de manera tal que queden exactamente igual al contenido de las triples comillas.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>

                    <Route path="/course-python/3/theoretical" element={<Teoric3Sublevel/>}/>
                    <Route path="/course-python/3/1" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/2'
                            validationUrl='course-python/3/1'
                            instructions="Declarar las variables correctamente e imprimir sus valores."
                            codeEditorSetup={
                                {
                                    title: "2.1 Variable de tipo string",
                                    previousCode:'# "aluminio_nombre" = -"Aluminio"-\n' +
                                        '# "aluminio_simbolo" = -"Al"-\n' +
                                        '\n' +
                                        'print(f"Nombre: \\nSímbolo: ")\n',
                                    correctAnswer:'aluminio_nombre  = "Aluminio"\n' +
                                        'aluminio_simbolo  = "Al"\n' +
                                        '\n' +
                                        'print(f"Nombre: {aluminio_nombre}\\nSímbolo: {aluminio_simbolo}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Declarar las variables correctamente e imprimir sus valores.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/2" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/3'
                            validationUrl='course-python/3/2'
                            instructions="Declarar las mismas variables para Arsénico (As) e imprimir sus valores. Los elementos deben quedar separados por una línea en blanco."
                            codeEditorSetup={
                                {
                                    title: "2.1 Variable de tipo string",
                                    previousCode:'aluminio_nombre  = "Aluminio"\n' +
                                        'aluminio_simbolo  = "Al"\n',
                                    correctAnswer:'aluminio_nombre  = "Aluminio"\n' +
                                        'aluminio_simbolo  = "Al"\n' +
                                        'arsenico_nombre = "Arsénico"\n' +
                                        'arsenico_simbolo = "As"\n' +
                                        '\n' +
                                        'print(f"Nombre: {aluminio_nombre}\\nSímbolo: {aluminio_simbolo}\\nNombre: {arsenico_nombre}\\nSímbolo: {arsenico_simbolo}")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Declarar las mismas variables para Arsénico (As) e imprimir sus valores. Los elementos deben quedar separados por una línea en blanco.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/3" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/4'
                            validationUrl='course-python/3/3'
                            instructions="Arreglar la declaración de variables y agregar el Calcio (Ca). Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "2.1 Variable de tipo string",
                                    previousCode:'"""\n' +
                                        'Nombre: Aluminio\n' +
                                        'Símbolo: …\n' +
                                        '\n' +
                                        'Nombre: Arsénico\n' +
                                        'Símbolo: …\n' +
                                        '\n' +
                                        'Nombre: Calcio\n' +
                                        'Símbolo: Ca\n' +
                                        '"""\n' +
                                        '\n' +
                                        '# aluminio_nombre  = As\n' +
                                        '# aluminio_simbolo  = Arsénico\n' +
                                        '# arsenico_nombre = Al\n' +
                                        '# arsenico_simbolo = Aluminio\n',
                                    correctAnswer:'aluminio_nombre  = "Aluminio"\n' +
                                        'aluminio_simbolo  = "Al"\n' +
                                        'arsenico_nombre = "Arsénico"\n' +
                                        'arsenico_simbolo = "As"\n' +
                                        'calcio_nombre = "Calcio"\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        '\n' +
                                        'print(f"Nombre: {aluminio_nombre}\\nSímbolo: {aluminio_simbolo}\\n\\nNombre: {arsenico_nombre}\\nSímbolo: {arsenico_simbolo}\\n\\nNombre: {calcio_nombre}\\nSímbolo: {calcio_simbolo}")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Arreglar la declaración de variables y agregar el Calcio (Ca). Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/4" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/5'
                            validationUrl='course-python/3/4'
                            instructions="Corregir los números atómicos de los elementos; el Calcio tiene un valor 20 veces mayor que el Hidrógeno. Deben ser números enteros. Imprimir los números atómicos de ambos elementos, separados por una línea en blanco"
                            codeEditorSetup={
                                {
                                    title: "2.2 Variable de tipo int",
                                    previousCode:'\'hidrogeno_simbolo = "H"\n' +
                                        'hidrogeno_numero_atomico = "10"\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'calcio_numero_atomico = "200"\n' +
                                        '\n' +
                                        '# print(f"Z(H): {hidrogeno_numero_atomico}")\n',
                                    correctAnswer:'hidrogeno_simbolo = "H"\n' +
                                        'hidrogeno_numero_atomico = 1\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'calcio_numero_atomico = 20\n' +
                                        '\n' +
                                        'print(f"Z(H): {hidrogeno_numero_atomico\\nZ(Ca): {calcio_numero_atomico}}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Corregir los números atómicos de los elementos; el Calcio tiene un valor 20 veces mayor que el Hidrógeno. Deben ser números enteros. Imprimir los números atómicos de ambos elementos, separados por una línea en blanco.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/5" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/6'
                            validationUrl='course-python/3/5'
                            instructions="Declarar las variables para el elemento Azufre (S), con un número atómico de 16. Agregarlo a la impresión."
                            codeEditorSetup={
                                {
                                    title: "2.2 Variable de tipo int",
                                    previousCode:'hidrogeno_simbolo = "H"\n' +
                                        'hidrogeno_numero_atomico = 1\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'calcio_numero_atomico = 20\n' +
                                        '\n' +
                                        '# print(f"Z(H): {hidrogeno_numero_atomico\\nZ(Ca): {calcio_numero_atomico}}.")\n',
                                    correctAnswer:'hidrogeno_simbolo = "H"\n' +
                                        'hidrogeno_numero_atomico = 1\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'calcio_numero_atomico = 20\n' +
                                        'azufre_simbolo = "S"\n' +
                                        'azufre_numero_atomico = 16\n' +
                                        '\n' +
                                        '# print(f"Z(H): {hidrogeno_numero_atomico\\nZ(Ca): {calcio_numero_atomico}}.\\nZ(S): {azufre_numero_atomico }}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Declarar las variables para el elemento Azufre (S), con un número atómico de 16. Agregarlo a la impresión.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/6" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/7'
                            validationUrl='course-python/3/6'
                            instructions="Corregir el número atómico de los elementos, que están invertidos. Declarar las mismas variables para el Arsénico (Z(As) corresponde a la suma de Z(Ca) y Z(Al), escribir el número sin realizar cuentas). Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "2.2 Variable de tipo int",
                                    previousCode:'"""\n' +
                                        'Z(Ca): …\n' +
                                        '\n' +
                                        'Z(Al): …\n' +
                                        '\n' +
                                        'Z(As): …\n' +
                                        '"""\n' +
                                        '\n' +
                                        '# calcio_simbolo = Ca\n' +
                                        '# calcio_numero_atomico = "13"\n' +
                                        '# aluminio_simbolo = Al\n' +
                                        '# aluminio_numero_atomico = "20"\n' +
                                        '\n' +
                                        '# print(f"")\n',
                                    correctAnswer:'"""\n' +
                                        'Z(Ca): …\n' +
                                        '\n' +
                                        'Z(Al): …\n' +
                                        '\n' +
                                        'Z(As): …\n' +
                                        '"""\n' +
                                        '\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'calcio_numero_atomico = 20 \n' +
                                        'aluminio_simbolo = "Al"\n' +
                                        'aluminio_numero_atomico = 13\n' +
                                        'arsenico_simbolo = "As"\n' +
                                        'arsenico_numero_atomico = 33\n' +
                                        '\n' +
                                        '# print(f"Z({calcio_simbolo}): {calcio_numero_atomico\\n\\nZ({aluminio_simbolo}): {aluminio_numero_atomico}.\\n\\nZ({arsenico_simbolo}): {arsenico_numero_atomico}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Corregir el número atómico de los elementos, que están invertidos. Declarar las mismas variables para el Arsénico (Z(As) corresponde a la suma de Z(Ca) y Z(Al), escribir el número sin realizar cuentas). Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/7" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/8'
                            validationUrl='course-python/3/7'
                            instructions="Corregir el peso atómico de los elementos para que quede representado con 2 decimales. Imprimir los valores."
                            codeEditorSetup={
                                {
                                    title: "2.3 Variable de tipo float",
                                    previousCode:'aluminio_simbolo = "Al"\n' +
                                        'aluminio_numero_atomico = 13\n' +
                                        'aluminio_peso_atomico = "26.9875"\n' +
                                        '\n' +
                                        'azufre_simbolo = "S"\n' +
                                        'azufre_numero_atomico = 16\n' +
                                        'azufre_peso_atomico = "32.0668"\n' +
                                        '\n' +
                                        '# print(f"Peso atómico ({aluminio_simbolo}):\\n")\n',
                                    correctAnswer:'aluminio_simbolo = "Al"\n' +
                                        'aluminio_numero_atomico = 13 \n' +
                                        'aluminio_peso_atomico = 26.9875\n' +
                                        '\n' +
                                        'azufre_simbolo = "S"\n' +
                                        'azufre_numero_atomico = 16\n' +
                                        'azufre_peso_atomico = 32.0668\n' +
                                        '\n' +
                                        'print(f"Peso atómico ({aluminio_simbolo}): {aluminio_peso_atomico}\\nPeso atómico ({azufre_simbolo}): {azufre_peso_atomico}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Corregir el peso atómico de los elementos para que quede representado con 2 decimales. Imprimir los valores.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/8" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/9'
                            validationUrl='course-python/3/8'
                            instructions="Completar los valores para el Hidrógeno (H, 1.008) y declarar las variables para el Aluminio (Al, 26.98). Imprimir los valores; los elementos deben estar separados por una línea vacía."
                            codeEditorSetup={
                                {
                                    title: "2.3 Variable de tipo float",
                                    previousCode:'hidrogeno_simbolo =\n' +
                                        'hidrogeno_peso_atomico =\n' +
                                        '\n' +
                                        '# print(f"Peso atómico ({}): {}\\n")\n',
                                    correctAnswer:'hidrogeno_simbolo = "H"\n' +
                                        'hidrogeno_peso_atomico = 1.008\n' +
                                        'aluminio_simbolo = "Al"\n' +
                                        'aluminio_peso_atomico = 26.98\n' +
                                        '\n' +
                                        'print(f"Peso atómico ({hidrogeno_simbolo}): {hidrogeno_peso_atomico}\\n\\nPeso atómico ({aluminio_simbolo}): {aluminio_peso_atomico}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Completar los valores para el Hidrógeno (H, 1.008) y declarar las variables para el Aluminio (Al, 26.98). Imprimir los valores; los elementos deben estar separados por una línea vacía.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/9" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/10'
                            validationUrl='course-python/3/9'
                            instructions="Declarar las variables para los pesos atómicos de cada elemento y definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "2.3 Variable de tipo float",
                                    previousCode:'"""\n' +
                                        'Peso atómico (H): 1.008\n' +
                                        'Peso atómico (As): 74.922\n' +
                                        'Peso atómico (Ca): 40.078\n' +
                                        'Peso atómico (Al): 26.982\n' +
                                        'Peso atómico (S): 32.065\n' +
                                        '"""\n' +
                                        '\n' +
                                        'hidrogeno_simbolo = "H"\n' +
                                        'arsenico_simbolo = "As"\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'aluminio_simbolo = "Al"\n' +
                                        'azufre_simbolo = "S"\n' +
                                        '\n' +
                                        '# print()\n',
                                    correctAnswer:'hidrogeno_simbolo = "H"\n' +
                                        'arsenico_simbolo = "As"\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'aluminio_simbolo = "Al"\n' +
                                        'azufre_simbolo = "S"\n' +
                                        '\n' +
                                        'hidrogeno_peso_atomico = 1.008\n' +
                                        'arsenico_peso_atomico = 74.922\n' +
                                        'calcio_peso_atomico = 40.078\n' +
                                        'aluminio_peso_atomico = 26.982\n' +
                                        'azufre_peso_atomico = 32.065\n' +
                                        '\n' +
                                        'print(f"Peso atómico ({hidrogeno_simbolo}): {hidrogeno_peso_atomico}\\nPeso atómico ({arsenico_simbolo}): {arsenico_peso_atomico}\\n Peso atómico ({calcio_simbolo}): {calcio_peso_atomico}\\nPeso atómico ({aluminio_simbolo}): {aluminio_peso_atomico}\\nPeso atómico ({azufre_simbolo}): {azufre_peso_atomico}")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Declarar las variables para los pesos atómicos de cada elemento y definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/10" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/11'
                            validationUrl='course-python/3/10'
                            instructions="Los elementos se dividen en metales, no metales y metaloides según su ubicación en la tabla periódica. El Hidrógeno es un no metal. Corregir la declaración de la variable e imprimir los datos."
                            codeEditorSetup={
                                {
                                    title: "2.4 Variable de tipo boolean",
                                    previousCode:'hidrogeno_simbolo = "H" # str\n' +
                                        'hidrogeno_es_metaloide = "false"  # boolean\n' +
                                        '\n' +
                                        '# print(f"El Hidrógeno ({}) es un metal: {}")\n',
                                    correctAnswer:'hidrogeno_simbolo = "H" # str\n' +
                                        'hidrogeno_es_metaloide = False  # boolean\n' +
                                        '\n' +
                                        '# print(f"El Hidrógeno ({hidrogeno_simbolo}) es un metal: {hidrogeno_es_metaloide}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Los elementos se dividen en metales, no metales y metaloides según su ubicación en la tabla periódica. El Hidrógeno es un no metal. Corregir la declaración de la variable e imprimir los datos.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/11" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/12'
                            validationUrl='course-python/3/11'
                            instructions="El Hidrógeno es un no metal, mientras que el Azufre es un metal. Declarar las mismas variables para el Azufre e imprimir los valores de ambos elementos."
                            codeEditorSetup={
                                {
                                    title: "2.4 Variable de tipo boolean",
                                    previousCode:'hidrogeno_simbolo = "H" # str\n' +
                                        'hidrogeno_es_metaloide = False  # boolean\n' +
                                        '\n' +
                                        '# print(f"El Hidrógeno ({hidrogeno_simbolo}) es un metal: {hidrogeno_es_metaloide}\\n")\n',
                                    correctAnswer:'hidrogeno_simbolo = "H" # str\n' +
                                        'hidrogeno_es_metaloide = False  # boolean\n' +
                                        '\n' +
                                        'azufre_simbolo = "S"\n' +
                                        'azufre_es_metaloide = True \n' +
                                        '\n' +
                                        '# print(f"El Hidrógeno ({hidrogeno_simbolo}) es un metal: {hidrogeno_es_metaloide}\\nEl Azufre ({S}) es un metal: {azufre_es_metaloide}")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "El Hidrógeno es un no metal, mientras que el Azufre es un metal. Declarar las mismas variables para el Azufre e imprimir los valores de ambos elementos.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/12" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/13'
                            validationUrl='course-python/3/12'
                            instructions="Declarar las variables de cada elemento y definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "2.4 Variable de tipo boolean",
                                    previousCode:'"""\n' +
                                        'H: False\n' +
                                        'As: True\n' +
                                        'Ca: False\n' +
                                        'S: True\n' +
                                        '"""\n' +
                                        '\n' +
                                        'hidrogeno_simbolo = H\n' +
                                        'arsenico_simbolo = As\n' +
                                        'calcio_simbolo = Ca\n' +
                                        'azufre_simbolo = S\n' +
                                        '\n' +
                                        'hidrogeno_es_metaloide =\n' +
                                        '\n' +
                                        '# print()\n',
                                    correctAnswer:'"""\n' +
                                        'H: False\n' +
                                        'As: True\n' +
                                        'Ca: False\n' +
                                        'S: True\n' +
                                        '"""\n' +
                                        '\n' +
                                        'hidrogeno_simbolo = "H"\n' +
                                        'arsenico_simbolo = "As"\n' +
                                        'calcio_simbolo = "Ca"\n' +
                                        'azufre_simbolo = "S"\n' +
                                        '\n' +
                                        'hidrogeno_es_metaloide = False\n' +
                                        'arsenico_es_metaloide = True\n' +
                                        'calcio_es_metaloide = False\n' +
                                        'azufre_es_metaloide = True\n' +
                                        '\n' +
                                        '# print(f"{hidrogeno_simbolo}: {hidrogeno_es_metaloide}\\n{arsenico_simbolo}: {arsenico_es_metaloide}\\n{calcio_simbolo}: {calcio_es_metaloide}\\n{azufre_simbolo}: {azufre_es_metaloide}")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Declarar las variables de cada elemento y definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/13" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/14'
                            validationUrl='course-python/3/13'
                            instructions="Eliminar las variables necesarias para que la asignación de valores sea correcta. La asignación incorrecta que no afecta el resultado no debe ser eliminada."
                            codeEditorSetup={
                                {
                                    title: "2.5 Sobreescribir variables de tipo string",
                                    previousCode:'silicio_nombre = "Silicio"\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        'oxigeno_simbolo = "Cl"\n' +
                                        'silicio_simbolo = "K"\n' +
                                        'silicio_simbolo = "Si"\n' +
                                        'Oxígeno_nombre = "Oxígeno"\n' +
                                        'silicio_nombre = "Cloro"\n' +
                                        '\n' +
                                        'print(f"{hidrogeno_nombre}: {hidrogeno_simbolo}\\n{aluminio_nombre}: {aluminio_simbolo}")\n',
                                    correctAnswer:'silicio_nombre = "Silicio"\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        'silicio_simbolo = "K"\n' +
                                        'silicio_simbolo = "Si"\n' +
                                        'Oxígeno_nombre = "Oxígeno"\n' +
                                        '\n' +
                                        'print(f"{hidrogeno_nombre}: {hidrogeno_simbolo}\\n{aluminio_nombre}: {aluminio_simbolo}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Eliminar las variables necesarias para que la asignación de valores sea correcta. La asignación incorrecta que no afecta el resultado no debe ser eliminada.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/14" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/15'
                            validationUrl='course-python/3/14'
                            instructions="Los nombres y símbolos de los elementos están alternados. Sobreescribir los valores declarando nuevas variables e imprimir los valores."
                            codeEditorSetup={
                                {
                                    title: "2.5 Sobreescribir variables de tipo string",
                                    previousCode:'magnesio_nombre = Potasio\n' +
                                        'magnesio_simbolo = K\n' +
                                        '\n' +
                                        'potasio_nombre = Magnesio\n' +
                                        'potasio_simbolo = Mg\n' +
                                        '\n' +
                                        '# print(f"{magnesio_nombre}: {magnesio_simbolo}\\n")\n',
                                    correctAnswer:'magnesio_nombre = "Potasio"\n' +
                                        'magnesio_simbolo = "K"\n' +
                                        'magnesio_nombre = "Magnesio"\n' +
                                        'magnesio_simbolo = "Mg"\n' +
                                        '\n' +
                                        'potasio_nombre = "Magnesio"\n' +
                                        'potasio_simbolo = "Mg"\n' +
                                        'potasio_nombre = "Potasio"\n' +
                                        'potasio_simbolo = "K"\n' +
                                        '\n' +
                                        '# print(f"{magnesio_nombre}: {magnesio_simbolo}\\n{potasio_nombre}: {potasio_simbolo}")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Los nombres y símbolos de los elementos están alternados. Sobreescribir los valores declarando nuevas variables e imprimir los valores.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/15" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/16'
                            validationUrl='course-python/3/15'
                            instructions="Sobreescribir las los valores que sean necesarios declarando nuevas variables. Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "2.5 Sobreescribir variables de tipo string",
                                    previousCode:'"""\n' +
                                        'elemento 1: "Oxígeno" (O)\n' +
                                        'elemento 2: "Silicio" (Si)\n' +
                                        'elemento 3: "Magnesio" (Mg)\n' +
                                        '"""\n' +
                                        '\n' +
                                        'oxigeno_nombre = "Oxígeno"\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        '\n' +
                                        'silicio_nombre = "Silicio"\n' +
                                        'silicio_simbolo = "Si"\n' +
                                        'oxigeno_simbolo = "Cl"\n' +
                                        '\n' +
                                        'magnesio_nombre = "Magnesio"\n' +
                                        'oxigeno_nombre =  "Potasio"\n' +
                                        'magnesio_simbolo = "Mg"\n' +
                                        'magnesio_nombre = "Cloro"\n',
                                    correctAnswer:'"""\n' +
                                        'elemento 1: "Oxígeno" (O)\n' +
                                        'elemento 2: "Silicio" (Si)\n' +
                                        'elemento 3: "Magnesio" (Mg)\n' +
                                        '"""\n' +
                                        '\n' +
                                        'oxigeno_nombre = "Oxígeno"\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        '\n' +
                                        'silicio_nombre = "Silicio"\n' +
                                        'silicio_simbolo = "Si"\n' +
                                        'oxigeno_simbolo = "Cl"\n' +
                                        '\n' +
                                        'magnesio_nombre = "Magnesio"\n' +
                                        'oxigeno_nombre =  "Potasio"\n' +
                                        'magnesio_simbolo = "Mg"\n' +
                                        'magnesio_nombre = "Cloro"\n' +
                                        '\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        'oxigeno_nombre = "Oxígeno"\n' +
                                        'magnesio_nombre = "Magnesio"\n' +
                                        '\n' +
                                        'print(f\'elemento 1: "{oxigeno_nombre}" ({oxigeno_simbolo})\\n elemento 2: "{silicio_nombre}" ({silicio_simbolo})\\n\'\'elemento 3: "{magnesio_nombre}" ({magnesio_simbolo})\')\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Sobreescribir las los valores que sean necesarios declarando nuevas variables. Definir la impresión para que quede exactamente el mismo formato que el texto comentado",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/16" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/17'
                            validationUrl='course-python/3/16'
                            instructions="Eliminar únicamente las asignaciones que hacen que el resultado sea erróneo."
                            codeEditorSetup={
                                {
                                    title: "2.6 Sobreescribir variables de tipo int",
                                    previousCode:'"""\n' +
                                        'El número atómico de (O) es 8.\n' +
                                        'El número atómico de (Mg) es 12.\n' +
                                        'El número atómico de (Cl) es 17.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        'magnesio_simbolo = "Mg"\n' +
                                        'cloro_simbolo = "Cl"\n' +
                                        '\n' +
                                        'oxigeno_numero_atomico = 5\n' +
                                        'magnesio_numero_atomico = 12\n' +
                                        'cloro_numero_atomico = 17\n' +
                                        'oxigeno_numero_atomico = 8\n' +
                                        'magnesio_numero_atomico = 16\n' +
                                        'oxigeno_numero_atomico = 5\n' +
                                        '\n' +
                                        '# print(f"El número atómico de ({oxigeno_simbolo}) es {oxigeno_numero_atomico}.\\nEl número atómico de ({magnesio_simbolo}) es {magnesio_numero_atomico}.\\nEl número atómico de ({cloro_simbolo}) es {cloro_numero_atomico}.")\n',
                                    correctAnswer:'"""\n' +
                                        'El número atómico de (O) es 8.\n' +
                                        'El número atómico de (Mg) es 12.\n' +
                                        'El número atómico de (Cl) es 17.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'oxigeno_simbolo = "O"\n' +
                                        'magnesio_simbolo = "Mg"\n' +
                                        'cloro_simbolo = "Cl"\n' +
                                        '\n' +
                                        'oxigeno_numero_atomico = 8\n' +
                                        'magnesio_numero_atomico = 12\n' +
                                        'cloro_numero_atomico = 17\n' +
                                        'oxigeno_numero_atomico = 8\n' +
                                        '\n' +
                                        'print(f"El número atómico de ({oxigeno_simbolo}) es {oxigeno_numero_atomico}.\\nEl número atómico de ({magnesio_simbolo}) es {magnesio_numero_atomico}.\\nEl número atómico de ({cloro_simbolo}) es {cloro_numero_atomico}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Eliminar únicamente las asignaciones que hacen que el resultado sea erróneo.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/17" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/18'
                            validationUrl='course-python/3/17'
                            instructions="Sobreescribir los valores de los números atómicos erróneos. Imprimir los valores."
                            codeEditorSetup={
                                {
                                    title: "2.6 Sobreescribir variables de tipo int",
                                    previousCode:'"""\n' +
                                        'Z(K) es 25 - 6.\n' +
                                        'Z(Si) es 6 + 8.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'potasio_simbolo = R\n' +
                                        'potasio_numero_atomico = 17\n' +
                                        '\n' +
                                        'silicio_simbolo = So\n' +
                                        'silicio_numero_atomico = 15\n' +
                                        '\n' +
                                        '# print("Z() es .\\n Z() es .")\n',
                                    correctAnswer:'"""\n' +
                                        'Z(K) es 25 - 6.\n' +
                                        'Z(Si) es 6 + 8.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'potasio_simbolo = "R"\n' +
                                        'potasio_numero_atomico = 17\n' +
                                        'potasio_simbolo = "K"\n' +
                                        'potasio_numero_atomico = 19\n' +
                                        '\n' +
                                        'silicio_simbolo = "So"\n' +
                                        'silicio_numero_atomico = 15\n' +
                                        'silicio_simbolo = "Si"\n' +
                                        'silicio_numero_atomico = 14\n' +
                                        '\n' +
                                        'print(f"Z({potasio_simbolo}) es {potasio_numero_atomico}.\\nZ ({silicio_simbolo}) es {silicio_numero_atomico}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Sobreescribir los valores de los números atómicos erróneos. Imprimir los valores.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/3/18" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/3/19'
                            validationUrl='course-python/3/18'
                            instructions="Sobreescribir los valores de las variables según la información del comentario. Completar los valores desconocidos … en la impresión. Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "2.6 Sobreescribir variables de tipo int",
                                    previousCode:'"""\n' +
                                        'Cantidad de elementos: …\n' +
                                        'Cantidad de metaloides: …\n' +
                                        'Cantidad de no metaloides: …\n' +
                                        'Z(Si) es 14.\n' +
                                        'Z(Cl) es 17.\n' +
                                        'Z(K) es 19.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'silicio_es_metaloide = "True"\n' +
                                        'cloro_es_metaloide = "False"\n' +
                                        'potasio_es_metaloide = "False"\n' +
                                        '\n' +
                                        'cantidad_elementos = 6\n' +
                                        'cantidad_elementos_no_metaloides = 1\n' +
                                        'cantidad_elementos_metaloides = 3\n' +
                                        '\n' +
                                        'silicio_simbolo = Si\n' +
                                        'silicio_numero_atomico = 14\n' +
                                        'potasio_simbolo = K\n' +
                                        'potasio_numero_atomico = 18\n' +
                                        'cloro_simbolo = Cl\n' +
                                        'cloro_numero_atomico = 17\n' +
                                        '\n' +
                                        '# print(f"Cantidad de elementos: \\nCantidad de metaloides: \\n Cantidad de no metaloides: \\n")\n',
                                    correctAnswer:'"""\n' +
                                        'Cantidad de elementos: …\n' +
                                        'Cantidad de metaloides: …\n' +
                                        'Cantidad de no metaloides: …\n' +
                                        'Z(Si) es 14.\n' +
                                        'Z(Cl) es 17.\n' +
                                        'Z(K) es 19.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'silicio_es_metaloide = True\n' +
                                        'cloro_es_metaloide = False\n' +
                                        'potasio_es_metaloide = False\n' +
                                        '\n' +
                                        'cantidad_elementos = 6\n' +
                                        'cantidad_elementos_no_metaloides = 1\n' +
                                        'cantidad_elementos_metaloides = 3\n' +
                                        'cantidad_elementos = 3\n' +
                                        'cantidad_elementos_no_metaloides = 2\n' +
                                        'cantidad_elementos_metaloides = 1\n' +
                                        '\n' +
                                        'silicio_simbolo = Si\n' +
                                        'silicio_numero_atomico = 14\n' +
                                        'potasio_simbolo = K\n' +
                                        'potasio_numero_atomico = 18\n' +
                                        'potasio_numero_atomico = 19\n' +
                                        'cloro_simbolo = Cl\n' +
                                        'cloro_numero_atomico = 17\n' +
                                        '\n' +
                                        '# print(f"Cantidad de elementos: {cantidad_elementos}\\nCantidad de metaloides: {cantidad_elementos_metaloides}\\n Cantidad de no metaloides: {cantidad_elementos_no_metaloides}\\nZ(silicio_simbolo) es {silicio_numero_atomico}.\\nZ(cloro_simbolo) es {cloro_numero_atomico}.\\nZ(potasio_simbolo) es {potasio_numero_atomico}.")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Sobreescribir los valores de las variables según la información del comentario. Completar los valores desconocidos … en la impresión. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>

                    <Route path="/course-python/4/1" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/2'
                            validationUrl='course-python/4/1'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "3.1. str a int",
                                    previousCode:'bromo_cantidad_sustancia = "2"  # mol\n' +
                                        'cobre_cantidad_sustancia = "5"  # mol\n' +
                                        '\n' +
                                        'bromo_cantidad_sustancia = int(bromo_cantidad_sustancia)  # mol\n' +
                                        'cobre_cantidad_sustancia = int(cobre_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        '#print(f"La cantidad de sustancia a analizar de Bromo es de {bromo_cantidad_sustancia.}")\n',
                                    correctAnswer:'bromo_cantidad_sustancia = "2"  # mol\n' +
                                        'bromo_cantidad_sustancia = int(bromo_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        'print(f"La cantidad de sustancia a analizar de Bromo es de {bromo_cantidad_sustancia.}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "En el laboratorio se registraron los datos de cantidad de sustancia en formato caracter. Se convirtieron a enteros, pero el único valor correctamente registrado es Bromo. Eliminar Borrar las variables que corresponden a otros elementos.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/2" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/3'
                            validationUrl='course-python/4/2'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "3.1. str a int",
                                    previousCode:'bromo_cantidad_sustancia = "1"  # mol\n' +
                                        'bromo_cantidad_sustancia =  # mol\n' +
                                        '\n' +
                                        'print(f"La cantidad de sustancia necesaria Bromo es de {}.")\n',
                                    correctAnswer:'bromo_cantidad_sustancia = "1"  # mol\n' +
                                        'bromo_cantidad_sustancia = int(bromo_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        'print(f"La cantidad de sustancia necesaria Bromo es de {bromo_cantidad_sustancia.}")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Se devolvieron los datos analizados del bromo, pero falta la transformación de tipo. Agregar lo necesario para realizar la transformación de caracter a entero.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/3" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/4'
                            validationUrl='course-python/4/3'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "3.1. str a int",
                                    previousCode:'"""\n' +
                                        'Cantidad de sustancia de Bromo: 2 mol\n' +
                                        'Cantidad de sustancia de Neón: 3 mol\n' +
                                        'Cantidad de sustancia de Hierro: 4 mol\n' +
                                        '"""\n' +
                                        '\n' +
                                        'unidad_de_medida = "mol"\n' +
                                        'bromo_cantidad_sustancia = "2"\n' +
                                        'neon_cantidad_sustancia = "3"\n' +
                                        'hierro_cantidad_sustancia = "4"\n' +
                                        '\n' +
                                        '# print(f"Cantidad de sustancia de bromo: \\n")\n',
                                    correctAnswer:'"""\n' +
                                        'Cantidad de sustancia de Bromo: 2 mol\n' +
                                        'Cantidad de sustancia de Neón: 3 mol\n' +
                                        'Cantidad de sustancia de Hierro: 4 mol\n' +
                                        '"""\n' +
                                        '\n' +
                                        'unidad_de_medida = "mol"\n' +
                                        'bromo_cantidad_sustancia = "2"  # mol\n' +
                                        'neon_cantidad_sustancia = "3"  # mol\n' +
                                        'hierro_cantidad_sustancia = "4"  # mol\n' +
                                        '\n' +
                                        'bromo_cantidad_sustancia = int(bromo_cantidad_sustancia)  # mol\n' +
                                        'neon_cantidad_sustancia = int(neon_cantidad_sustancia)  # mol\n' +
                                        'hierro_cantidad_sustancia = int(hierro_cantidad_sustancia)   # mol\n' +
                                        '\n' +
                                        '# print(f"Cantidad de sustancia de bromo: {bromo_cantidad_sustancia} {unidad_de_medida}\\nCantidad de sustancia de bromo: {neon_cantidad_sustancia} {unidad_de_medida}\\nCantidad de sustancia de hierro: {hierro_cantidad_sustancia} {unidad_de_medida}")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Definir nuevas variables para convertir los datos a enteros.  Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/4" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/5'
                            validationUrl='course-python/4/4'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.2 str a float",
                                    previousCode:'cobre_masa = "63.546"  # g/mol\n' +
                                        'cobre_volumen = "8.9"  # L (volumen molar estimado)\n' +
                                        'cobre_cantidad_sustancia = "5"  # mol\n' +
                                        '\n' +
                                        'cobre_masa = (float(int(float(cobre_masa)))  # g/mol\n' +
                                        'cobre_volumen = int(float(cobre_volumen))  # L (volumen molar estimado)\n' +
                                        'cobre_cantidad_sustancia = int(cobre_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        '# print(f"Masa Cobre: {cobre_masa} g/mol\\nVolumen Cobre: {cobre_volumen}\\nCantidad sustancia Cobre: {cobre_cantidad_sustancia}")\n',
                                    correctAnswer:'cobre_masa = 63.546  # g/mol\n' +
                                        'cobre_volumen = 8.9  # L (volumen molar estimado)\n' +
                                        'cobre_cantidad_sustancia = 5  # mol\n' +
                                        '\n' +
                                        'cobre_masa = float(cobre_masa)  # g/mol\n' +
                                        'cobre_volumen =float(cobre_volumen)  # L (volumen molar estimado)\n' +
                                        'cobre_cantidad_sustancia = int(cobre_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        '# print(f"Masa Cobre: {cobre_masa} g/mol\\nVolumen Cobre: {cobre_volumen} L\\nCantidad sustancia Cobre: {cobre_cantidad_sustancia} mol")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "El registro del cobre se realizó de manera incorrecta, ya que los datos están en formato caracter. Se intentó realizar la transformación de tipo, pero no salió muy bien. Corregir la transformación de tipo.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/5" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/6'
                            validationUrl='course-python/4/5'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.2 str a float",
                                    previousCode:'hierro_masa = float(55.845)  # g/mol\n' +
                                        'hierro_volumen = 7.1  # L (volumen molar estimado)\n' +
                                        'hierro_cantidad_sustancia = 4  # mol\n' +
                                        '\n' +
                                        'print(f"Masa Hierro: {hierro_masa} g/mol\\n")\n',
                                    correctAnswer:'hierro_masa = float(55.845)  # g/mol\n' +
                                        'hierro_volumen = float(7.1)  # L (volumen molar estimado)\n' +
                                        'hierro_cantidad_sustancia = int(4)  # mol\n' +
                                        '\n' +
                                        'print(f"Masa Hierro: {hierro_masa} g/mol\\nVolumen Hierro: {hierro_volumen} L\\nCantidad sustancia Hierro: {hierro_cantidad_sustancia} mol")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "Como el registro anterior tenía un exceso de transformación de datos, para este registro se transformaron solo algunos. Transformar los datos que falten. Declarar las variables con las unidades correspondientes. Imprimir todos los datos.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/6" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/7'
                            validationUrl='course-python/4/6'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.2 str a float",
                                    previousCode:'"""\n' +
                                        'Masa Helio: 4.0026 g/mol\n' +
                                        'Volumen Helio: 22.4 L\n' +
                                        'Cantidad sustancia Helio: 1 mol\n' +
                                        '"""\n' +
                                        '\n' +
                                        'helio_masa = "4.0026"  # g/mol\n' +
                                        'helio_volumen = "22.4"  # L (volumen molar a condiciones estándar)\n' +
                                        'helio_cantidad_sustancia = "1"  # mol\n' +
                                        '\n' +
                                        'unidad_masa = "g/mol"\n',
                                    correctAnswer:'helio_masa = "4.0026"  # g/mol\n' +
                                        'helio_volumen = "22.4"  # L (volumen molar a condiciones estándar)\n' +
                                        'helio_cantidad_sustancia = "1"  # mol\n' +
                                        '\n' +
                                        'helio_masa = float(4.0026)  # g/mol\n' +
                                        'helio_volumen = float(22.4)  # L (volumen molar a condiciones estándar)\n' +
                                        'helio_cantidad_sustancia = int(1)  # mol\n' +
                                        '\n' +
                                        'unidad_masa = "g/mol"\n' +
                                        'unidad_volumen = "L" \n' +
                                        'unidad_sustancia = "mol"\n' +
                                        '\n' +
                                        'print(f"Masa Helio: {helio_masa} {unidad_masa}\\nVolumen Helio: {helio_volumen} {unidad_volumen}\\n{helio_sustancia} {unidad_sustancia}")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Los registros anteriores se hicieron muy mal, entonces para este analisis se dejaron los datos originales. Convertir los datos a valor real. Declarar las variables con las unidades correspondientes. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/7" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/8'
                            validationUrl='course-python/4/7'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.3 int a str",
                                    previousCode:'estroncio_cantidad_sustancia = 4  # mol\n' +
                                        'niquel_cantidad_sustancia = 1  # mol\n' +
                                        'paladio_cantidad_sustancia = 3  # mol\n' +
                                        '\n' +
                                        'estroncio_cantidad_sustancia = int(str(estroncio_cantidad_sustancia))  # mol\n' +
                                        'niquel_cantidad_sustancia = int(str(niquel_cantidad_sustancia))  # mol\n' +
                                        'paladio_cantidad_sustancia = int(str(paladio_cantidad_sustancia))  # mol\n' +
                                        '\n' +
                                        '# print("CANTIDAD DE SUSTANCIA\\nEstroncio: {estroncio_cantidad_sustancia}\\nNíquel: {niquel_cantidad_sustancia}\\n Paladio: {paladio_cantidad_sustancia} ")\n',
                                    correctAnswer:'estroncio_cantidad_sustancia = 4  # mol\n' +
                                        'niquel_cantidad_sustancia = 1  # mol\n' +
                                        'paladio_cantidad_sustancia = 3  # mol\n' +
                                        '\n' +
                                        'estroncio_cantidad_sustancia = str(estroncio_cantidad_sustancia)  # mol\n' +
                                        'niquel_cantidad_sustancia = str(niquel_cantidad_sustancia)  # mol\n' +
                                        'paladio_cantidad_sustancia = str(paladio_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        '# print("CANTIDAD DE SUSTANCIA\\nEstroncio: {estroncio_cantidad_sustancia}\\nNíquel: {niquel_cantidad_sustancia}\\n Paladio: {paladio_cantidad_sustancia} ")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Se registra la cantidad de sustancia de cada elemento encontrada encontrada en una fábrica. Los registros van a guardarse en un libro. Corregir el tipo de dato de las variables para que sean caracteres.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/8" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/9'
                            validationUrl='course-python/4/8'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.3 int a str",
                                    previousCode:'estroncio_aparicion = 24\n' +
                                        'niquel_aparicion = 75\n' +
                                        'paladio_aparicion = 12\n' +
                                        '\n' +
                                        'estroncio_aparicion = str(estroncio_aparicion)\n' +
                                        '\n' +
                                        '# print(f"APARICIONES\\nEstroncio: {}\\n")\n',
                                    correctAnswer:'estroncio_cantidad_sustancia = 4  # mol\n' +
                                        'niquel_cantidad_sustancia = 1  # mol\n' +
                                        'paladio_cantidad_sustancia = 3  # mol\n' +
                                        '\n' +
                                        'estroncio_cantidad_sustancia = str(estroncio_cantidad_sustancia)  # mol\n' +
                                        'niquel_cantidad_sustancia = str(niquel_cantidad_sustancia)  # mol\n' +
                                        'paladio_cantidad_sustancia = str(paladio_cantidad_sustancia)  # mol\n' +
                                        '\n' +
                                        '# print("CANTIDAD DE SUSTANCIA\\nEstroncio: {estroncio_cantidad_sustancia}\\nNíquel: {niquel_cantidad_sustancia}\\n Paladio: {paladio_cantidad_sustancia} ")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "En el registro se quiere agregar la cantidad de veces que apareció cada sustancia. Declarar las variables correspondientes. Imprimir los datos.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/9" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/10'
                            validationUrl='course-python/4/9'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.3 int a str",
                                    previousCode:'"""\n' +
                                        'APARICIÓN POR DÍA\n' +
                                        'Lunes:\n' +
                                        'Martes:\n' +
                                        'Miércoles:\n' +
                                        'Jueves:\n' +
                                        'Viernes:\n' +
                                        '"""\n' +
                                        '\n' +
                                        'cantidad_lunes = 8\n' +
                                        'cantidad_martes = 17\n' +
                                        'cantidad_miércoles = 15\n' +
                                        'cantidad_jueves = 20\n' +
                                        'cantidad_viernes = 15\n' +
                                        '\n' +
                                        '# print("APARICIÓN POR DÍA\\nLunes: \\nMartes: \\nMiércoles: \\nJueves: \\nViernes: ")\n',
                                    correctAnswer:'"""\n' +
                                        'APARICIÓN POR DÍA\n' +
                                        'Lunes: \n' +
                                        'Martes:\n' +
                                        'Miércoles:\n' +
                                        'Jueves:\n' +
                                        'Viernes: \n' +
                                        '"""\n' +
                                        '\n' +
                                        'cantidad_lunes = 8  \n' +
                                        'cantidad_martes = 17  \n' +
                                        'cantidad_miércoles = 15  \n' +
                                        'cantidad_jueves = 20  \n' +
                                        'cantidad_viernes = 15 \n' +
                                        '\n' +
                                        'cantidad_lunes = str(cantidad_lunes)\n' +
                                        'cantidad_martes = str(cantidad_martes)\n' +
                                        'cantidad_miércoles = str(cantidad_miercoles)\n' +
                                        'cantidad_jueves = str(cantidad_jueves)\n' +
                                        'cantidad_viernes = str(cantidad_viernes)\n' +
                                        '\n' +
                                        '# print("APARICIÓN POR DÍA\\nLunes: {cantidad_lunes}\\nMartes: {cantidad_martes}\\nMiércoles: {cantidad_miércoles}\\nJueves: \\nViernes: {cantidad_viernes}")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Como la mayor cantidad de apariciones corresponde al Níquel, se quiere especificar la cantidad por día. Definir las variables correspondientes. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/10" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/11'
                            validationUrl='course-python/4/10'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.4 float a str",
                                    previousCode:'"""\n' +
                                        'RECETA\n' +
                                        '1. 75.35 L de Nitrógeno\n' +
                                        '2. 14.24 L Oxígeno\n' +
                                        '"""\n' +
                                        'nitrogeno_volumen = str(75.35)\n' +
                                        'oxigeno_volumen = float(str(14.24))\n' +
                                        '\n' +
                                        'nitrogeno_volumen = str(nitrogeno_volumen)\n' +
                                        'oxigeno_volumen = float(str(oxigeno_volumen))\n' +
                                        '\n' +
                                        '# print(f"RECETA\\n1. {nitrogeno_volumen} L de Nitrógeno\\n2. {oxigeno_volumen} L de Oxígeno")\n',
                                    correctAnswer:'"""\n' +
                                        'RECETA\n' +
                                        '1. 75.35 L de Nitrógeno\n' +
                                        '2. 14.24 L Oxígeno\n' +
                                        '"""\n' +
                                        'nitrogeno_volumen = 75.35\n' +
                                        'oxigeno_volumen = 14.24 \n' +
                                        '\n' +
                                        'nitrogeno_volumen = str(nitrogeno_volumen)\n' +
                                        'oxigeno_volumen = str(oxigeno_volumen)\n' +
                                        '\n' +
                                        'print(f"RECETA\\n1. {nitrogeno_volumen} L de Nitrógeno\\n2. {oxigeno_volumen} L de Oxígeno")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Se pide transcribir de uno de los libros la cantidad de volumen de cada elemento para un analisis. Como estos datos forman parte de una receta, es necesario transformarlos a caracter antes de transcribir el libro, ya que serán datos de lectura.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/11" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/12'
                            validationUrl='course-python/4/11'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.4 float a str",
                                    previousCode:'"""\n' +
                                        'RECETA\n' +
                                        '1. 75.35 L de Nitrógeno\n' +
                                        '2. 14.24 L Oxígeno\n' +
                                        '3. 53.29 L Vanadio\n' +
                                        '4. 199.2 L Berilio\n' +
                                        '"""\n' +
                                        'nitrogeno_volumen = 75.35\n' +
                                        'oxigeno_volumen = 14.24\n' +
                                        '\n' +
                                        'nitrogeno_volumen = str(nitrogeno_volumen)\n' +
                                        'oxigeno_volumen = str(oxigeno_volumen)\n' +
                                        '\n' +
                                        'print(f"RECETA\\n1. {nitrogeno_volumen} L de Nitrógeno\\n2. {oxigeno_volumen} L de Oxígeno")\n',
                                    correctAnswer:'"""\n' +
                                        'RECETA\n' +
                                        '1. 75.35 L de Nitrógeno\n' +
                                        '2. 14.24 L Oxígeno\n' +
                                        '3. 53.29 L Vanadio\n' +
                                        '4. 199.2 L Berilio\n' +
                                        '"""\n' +
                                        'nitrogeno_volumen = 75.35\n' +
                                        'oxigeno_volumen = 14.24 \n' +
                                        'vanadio_volumen = 53.9\n' +
                                        'berilio_volumen = 199.2\n' +
                                        '\n' +
                                        'nitrogeno_volumen = str(nitrogeno_volumen)\n' +
                                        'oxigeno_volumen = str(oxigeno_volumen)\n' +
                                        'vanadio_volumen = str(vanadio_volumen)\n' +
                                        'berilio_volumen = str(berilio_volumen)\n' +
                                        '\n' +
                                        'print(f"RECETA\\n1. {nitrogeno_volumen} L de Nitrógeno\\n2. {oxigeno_volumen} L de Oxígeno\\n3. {vanadio_volumen} L de Vanadio\\n 4. {berilio_volumen} L de Berilio")\n'
                                }}
                            userStories={[
                                {
                                    action: "ADD",
                                    description: "A la receta se le agregan 2 elementos más, Vanadio y Berilio. Agregarlos a la receta. Imprimir los datos nuevamente.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>
                    <Route path="/course-python/4/12" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/4/13'
                            validationUrl='course-python/4/12'
                            instructions="?????????????????????"
                            codeEditorSetup={
                                {
                                    title: "❧ 3.4 float a str",
                                    previousCode:'"""\n' +
                                        'RECETA\n' +
                                        'Elementos utilizados: Yodo, Litio, Zinc\n' +
                                        '1. 22.75 L de Yodo\n' +
                                        '2. 13.54 L de Litio\n' +
                                        '3. 45.88 L de Zinc\n' +
                                        '\n' +
                                        'TOTAL: 82.17 L\n' +
                                        '"""\n' +
                                        '\n' +
                                        'yodo_volumen = 35.32\n' +
                                        'yodo_volumen = yodo_volumen\n' +
                                        '\n' +
                                        'total_volumen = yodo_volumen + litio_volumen + zinc_volumen # escribir el resultado final\n' +
                                        '\n' +
                                        'frase = Elementos utilizados:\n',
                                    correctAnswer:'"""\n' +
                                        'RECETA\n' +
                                        'Elementos utilizados: Yodo, Litio, Zinc\n' +
                                        '1. 22.75 L de Yodo\n' +
                                        '2. 13.54 L de Litio\n' +
                                        '3. 45.88 L de Zinc\n' +
                                        '\n' +
                                        'TOTAL: 82.17 L\n' +
                                        '"""\n' +
                                        '\n' +
                                        'yodo_volumen = 22.75\n' +
                                        'litio_volumen = 13.54\n' +
                                        'zinc_volumen = 45.88\n' +
                                        '\n' +
                                        'yodo_volumen = str(yodo_volumen)\n' +
                                        'litio_volumen = str(litio_volumen)\n' +
                                        'zinc_volumen = str(zinc_volumen)\n' +
                                        '\n' +
                                        'total_volumen = 82.17 # escribir la suma final\n' +
                                        '\n' +
                                        'frase = "Elementos utilizados: Yodo, Litio, Zinc"\n' +
                                        '\n' +
                                        'print(f"RECETA\\n{frase}\\n1. {yodo_volumen} L de Yodo\\n2. {litio_volumen} L de Litio\\n3. {zinc_volumen} L de Zinc\\nTOTAL: {total_volumen} L")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Escribir una nueva receta. Definir la impresión para que quede exactamente el mismo formato que el texto comentado.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "VALIDAAAAAAAAAAAR"}
                        />
                    }/>

                    <Route path="/course-python/6/13" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/6/14'
                            validationUrl='course-python/6/13'
                            instructions="Sabiendo que los átomos de Flúor son el cuádruple que los átomos de carbono, calcular la cantidad de átomos de Flúor en el Tetrafluoruro de carbono. Verificar que la operación sea correcta."
                            codeEditorSetup={
                                {
                                    title: "❧ 5.5 Multiplicación con variables (*)",
                                    previousCode:'atomos_carbono = str(1)\n' +
                                        'atomos_fluor = 1 * 4 + 2\n' +
                                        '\n' +
                                        '# print(f"El Tetrafluoruro de carbono tiene {atomos_carbono} átomos de Carbono y {atomos_fluor} átomos de Flúor.")\n',
                                    correctAnswer:'atomos_carbono = 1\n' +
                                        'atomos_fluor = 1 * 4\n' +
                                        '\n' +
                                        'print(f"El Tetrafluoruro de carbono tiene {atomos_carbono} átomos de Carbono y {atomos_fluor} átomos de Flúor.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El Tetrafluoruro de carbono tiene 1 átomos de Carbono y 4 átomos de Flúor."}
                        />
                    }/>
                    <Route path="/course-python/6/14" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/6/15'
                            validationUrl='course-python/6/14'
                            instructions="Sabiendo que los átomos de Carbono corresponden a ⅓ de la cantidad total de átomos en el Hexaclorociclohexano, calcular la cantidad de átomos totales. Definir las variables necesarias."
                            codeEditorSetup={
                                {
                                    title: "❧ 5.5 Multiplicación con variables (*)",
                                    previousCode:'atomos_carbono = 6\n' +
                                        '\n' +
                                        'print(f"El Hexaclorociclohexano tiene un total de {atomos_totales} átomos.")\n',
                                    correctAnswer:'atomos_carbono = 6\n' +
                                        'atomos_totales = 6 * 3\n' +
                                        '\n' +
                                        'print(f"El Hexaclorociclohexano tiene un total de {atomos_totales} átomos.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El Hexaclorociclohexano tiene un total de 18 átomos."}
                        />
                    }/>
                    <Route path="/course-python/6/15" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/6/16'
                            validationUrl='course-python/6/15'
                            instructions="Sabiendo la siguiente información de la Trimetilamina, calcular la cantidad de átomos de cada elemento y la cantidad total: la cantidad de átomos de Carbono corresponde al triple de átomos de Nitrógeno, y la cantidad de átomos de Hidrógeno corresponde al triple de átomos de Carbono."
                            codeEditorSetup={
                                {
                                    title: "❧ 5.5 Multiplicación con variables (*)",
                                    previousCode:'"""\n' +
                                        'La Trimetilamina tiene un total de <total_atomos> átomos.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'atomos_nitrogeno = 1\n' +
                                        'atomos_carbono =\n' +
                                        'atomos_hidrogeno =\n',
                                    correctAnswer:'"""\n' +
                                        'La Trimetilamina tiene un total de <total_atomos> átomos.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'atomos_nitrogeno = 1\n' +
                                        'atomos_carbono =  atomos_nitrogeno * 3\n' +
                                        'átomos_hidrógeno = atomos_carbono * 3\n' +
                                        '\n' +
                                        'total_atomos = atomos_nitrogeno  + atomos_carbono + átomos_hidrógeno\n' +
                                        '\n' +
                                        'print(f"La Trimetilamina tiene un total de {total_atomos} átomos.")\n'
                                }}
                            userStories={[
                                {
                                    action: "EDIT",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "La Trimetilamina tiene un total de 13 átomos."}
                        />
                    }/>

                    <Route path="/course-python/8/1" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/2'
                            validationUrl='course-python/8/1'
                            instructions="Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.1 if - No igual que (!=)",
                                    previousCode:'"""\n' +
                                        'Estado actual del agua: líquido\n' +
                                        '"""\n' +
                                        '\n' +
                                        'estado_1 = "líquido"\n' +
                                        'estado_2 = "sólido"\n' +
                                        'estado_3 = "gaseoso"\n' +
                                        'estado_actual = estado_123\n' +
                                        '\n' +
                                        'if estado_actual =!= "sólido":\n' +
                                        '# print("El agua no está en estado sólido.")\n',
                                    correctAnswer:'"""\n' +
                                        'Estado actual del agua: líquido\n' +
                                        '"""\n' +
                                        '\n' +
                                        'estado_1 = "líquido"  \n' +
                                        'estado_2 = "sólido"\n' +
                                        'estado_3 = "gaseoso"\n' +
                                        'estado_actual = estado_1\n' +
                                        '\n' +
                                        'if estado_actual != "sólido":  \n' +
                                        '    print("El agua no está en estado sólido.") \n'
                            }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El agua no está en estado sólido."}
                        />
                    }/>
                    <Route path="/course-python/8/2" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/3'
                            validationUrl='course-python/8/2'
                            instructions="Definir el tipo del agua; se sabe que no es un metal. Declarar las variables necesarias."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.1 if - No igual que (!=)",
                                    previousCode:'"""\n' +
                                        'Átomos (H₂O) = 3\n' +
                                        'El agua está formada por {atomos} átomos.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if atomos 1:\n',
                                    correctAnswer:'"""\n' +
                                        'Átomos (H₂O) = 3\n' +
                                        'El agua está formada por {atomos} átomos.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'atomos = 3\n' +
                                        '\n' +
                                        'if atomos != 1:\n' +
                                        '   print(f"El agua está formada por {atomos} átomos.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El agua está formada por 3 átomos."}
                        />
                    }/>
                    <Route path="/course-python/8/3" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/4'
                            validationUrl='course-python/8/3'
                            instructions="Definir si una molécula de agua (H₂O) está formado por un único átomo. Declarar las variables necesarias.  Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.1 if - No igual que (!=)",
                                    previousCode:'"""\n' +
                                        'Átomos (H₂O) = 3\n' +
                                        'El agua está formada por {atomos} átomos.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if atomos 1:\n',
                                    correctAnswer:'"""\n' +
                                        'Átomos (H₂O) = 3\n' +
                                        'El agua está formada por {atomos} átomos.\n' +
                                        '"""\n' +
                                        '\n' +
                                        'atomos = 3\n' +
                                        '\n' +
                                        'if atomos != 1:\n' +
                                        '   print(f"El agua está formada por {atomos} átomos.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El agua está formada por 3 átomos."}
                        />
                    }/>
                    <Route path="/course-python/8/4" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/5'
                            validationUrl='course-python/8/4'
                            instructions="Sabiendo que el punto de fusión del agua es 0°C, determinar el estado del agua. Corregir las variables necesarias."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.2 if/else - Menor que (<)",
                                    previousCode:'"""\n' +
                                        'Temperatura  actual: -2.3°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = -22.3\n' +
                                        '\n' +
                                        'if temperatura < 10:\n' +
                                        '    mensaje = "La temperatura está por debajo de 0°C. Está congelando."\n' +
                                        'else:\n' +
                                        '    mensaje = "La temperatura está por encima de 0°C. No está congelando."\n' +
                                        '\n' +
                                        '# print(f"La temperatura ingresada es {temperatura_actual}°C.\\n{mensaje}")\n',
                                    correctAnswer:'"""\n' +
                                        'Temperatura  actual: -2.3°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = -2.3\n' +
                                        '\n' +
                                        'if temperatura_actual < 0:  \n' +
                                        '    mensaje = "La temperatura está por debajo de 0°C. Está congelando."\n' +
                                        'else:\n' +
                                        '    mensaje = "La temperatura está por encima de 0°C. No está congelando."\n' +
                                        '\n' +
                                        'print(f"La temperatura ingresada es {temperatura_actual}°C.\\n{mensaje}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "La temperatura ingresada es -2.3°C.\nLa temperatura está por debajo de 0°C. Está congelando."}
                        />
                    }/>
                    <Route path="/course-python/8/5" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/6'
                            validationUrl='course-python/8/5'
                            instructions="Sabiendo que el punto de fusión del agua es 0°C, determinar el estado del agua. Declarar las variables necesarias."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.2 if/else - Menor que (<)",
                                    previousCode:'"""\n' +
                                        'Temperatura  actual: 26°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual =\n' +
                                        'temperatura_fusion =\n' +
                                        '\n' +
                                        'if :\n' +
                                        '    mensaje = "La temperatura está por debajo de 0°C. Está congelando."\n' +
                                        '    mensaje = "La temperatura está por encima de 0°C. No está congelando."\n' +
                                        '\n' +
                                        'f"La temperatura ingresada es {temperatura}°C.\\n{mensaje}"\n',
                                    correctAnswer:'"""\n' +
                                        'Temperatura  actual: 26°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = 26\n' +
                                        'temperatura_fusion = 0\n' +
                                        '\n' +
                                        'if temperatura_actual < temperatura_fusion:\n' +
                                        '    mensaje = "La temperatura está por debajo de 0°C. Está congelando."\n' +
                                        'else:\n' +
                                        '    mensaje = "La temperatura está por encima de 0°C. No está congelando."\n' +
                                        '\n' +
                                        'print(f"La temperatura ingresada es {temperatura_actual}°C.\\n{mensaje}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "La temperatura ingresada es 26°C.\nLa temperatura está por encima de 0°C. No está congelando."}
                        />
                    }/>
                    <Route path="/course-python/8/6" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/7'
                            validationUrl='course-python/8/6'
                            instructions="Sabiendo que el agua alcanza el punto de ebullición a 373K, determinar el estado del agua. Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.2 if/else - Menor que (<)",
                                    previousCode:'"""\n' +
                                        'Temperatura actual: 372K\n' +
                                        'El agua se está evaporando. / El agua no se está evaporando. # imprimir el mensaje correspondiente\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if :\n' +
                                        '   pass\n' +
                                        'else:\n' +
                                        '   pass\n' +
                                        '\n' +
                                        'print()\n',
                                    correctAnswer:'"""\n' +
                                        'Temperatura actual: 372K\n' +
                                        'El agua se está evaporando. / El agua no se está evaporando. # imprimir el mensaje correspondiente\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = 372\n' +
                                        'temperatura_fusion = 373\n' +
                                        '\n' +
                                        'if  temperatura_actual < temperatura_fusion:  \n' +
                                        '   print("El agua no se está evaporando.")\n' +
                                        'else:\n' +
                                        '   print("El agua se está evaporando.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El agua no se está evaporando."}
                        />
                    }/>
                    <Route path="/course-python/8/7" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/8'
                            validationUrl='course-python/8/7'
                            instructions="Sabiendo que el agua alcanza su máxima densidad a 4°C, determinar si ya se alcanzó o no según la temperatura actual."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.3 if/else - Mayor que (>)",
                                    previousCode:'"""\n' +
                                        'Temperatura actual: 5°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = 51\n' +
                                        '\n' +
                                        '      if temperatura_actual == 3  > 4:\n' +
                                        '\n' +
                                        '\n' +
                                        '\n' +
                                        '  print(f"Temperatura: {temperatura_actual_c}°C.\\nEl agua alcanzó su máxima densidad")\n' +
                                        '           else:\n' +
                                        '\n' +
                                        '  print(f"Temperatura: {temperatura_actual_c}°C.\\nEl agua todavía no alcanzó su máxima densidad")\n',
                                    correctAnswer:'"""\n' +
                                        'Temperatura actual: 5°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = 5\n' +
                                        '\n' +
                                        'if temperatura_actual  > 4:\n' +
                                        '  print(f"Temperatura: {temperatura_actual}°C.\\nEl agua alcanzó su máxima densidad")\n' +
                                        'else:\n' +
                                        '  print(f"Temperatura: {temperatura_actual}°C.\\nEl agua todavía no alcanzó su máxima densidad")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "Temperatura: 5°C.\nEl agua alcanzó su máxima densidad"}
                        />
                    }/>
                    <Route path="/course-python/8/8" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/9'
                            validationUrl='course-python/8/8'
                            instructions="Determinar si la densidad es máxima según la temperatura. La densidad máxima es a 4°C. Declarar las variables necesarias."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.3 if/else - Mayor que (>)",
                                    previousCode:'"""\n' +
                                        'Temperatura actual: 5°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual =\n' +
                                        '\n' +
                                        'if temperatura_densidad_maxima:\n' +
                                        '  print(f"Temperatura: {temperatura}°C.\\nEl agua alcanzó su máxima densidad.")\n' +
                                        'else:\n' +
                                        '  print(f"Temperatura: {temperatura}°C.\\nEl agua todavía no alcanzó su máxima densidad.")\n',
                                    correctAnswer:'"""\n' +
                                        'Temperatura actual: 1°C\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = 1\n' +
                                        'temperatura_densidad_maxima = 4\n' +
                                        '\n' +
                                        'if temperatura_actual > temperatura_densidad_maxima:\n' +
                                        '  print(f"Temperatura: {temperatura_actual}°C.\\nEl agua alcanzó su máxima densidad.")\n' +
                                        'else:\n' +
                                        '  print(f"Temperatura: {temperatura_actual}°C.\\nEl agua todavía no alcanzó su máxima densidad.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "Temperatura: 1°C.\nEl agua todavía no alcanzó su máxima densidad."}
                        />
                    }/>
                    <Route path="/course-python/8/9" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/10'
                            validationUrl='course-python/8/9'
                            instructions="Determinar nuevamente si la densidad es máxima según la temperatura. La densidad máxima es a 4°C. Declarar las variables necesarias. Definir la impresión para que quede exactamente el mismo formato que el texto comentado."
                            codeEditorSetup={
                                {
                                    title: "❧ 7.3 if/else - Mayor que (>)",
                                    previousCode:'"""\n' +
                                        'Temperatura actual: 140°C\n' +
                                        'El agua alcanzó su máxima densidad. / El agua todavía no alcanzó su máxima densidad. # imprimir el mensaje correspondiente\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if temperatura_densidad_maxima temperatura_actual:\n' +
                                        '  print()\n' +
                                        '  print()\n',
                                    correctAnswer:'"""\n' +
                                        'Temperatura actual: 140°C\n' +
                                        'El agua alcanzó su máxima densidad. / El agua todavía no alcanzó su máxima densidad. # imprimir el mensaje correspondiente\n' +
                                        '"""\n' +
                                        '\n' +
                                        'temperatura_actual = 140\n' +
                                        'temperatura_densidad_maxima = 4\n' +
                                        '\n' +
                                        'if temperatura_actual > temperatura_densidad_maxima:\n' +
                                        '  print(f"Temperatura: {temperatura_actual}.\\nEl agua alcanzó su máxima densidad.")\n' +
                                        'else:\n' +
                                        '  print(f"Temperatura: {temperatura_densidad_maxima}.\\nEl agua todavía no alcanzó su máxima densidad.")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "Temperatura: 140.\nEl agua alcanzó su máxima densidad."}
                        />
                    }/>
                    <Route path="/course-python/8/10" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/11'
                            validationUrl='course-python/8/10'
                            instructions="Utilizando el operador >=, verificar si el pH es mayor o igual a 7."
                            codeEditorSetup={
                                {
                                    title: "7.4 if/else - Mayor/menor o igual que (>=)",
                                    previousCode:'"""\n' +
                                        'pH: 4\n' +
                                        'pH menor a 7: Agua ácida\n' +
                                        'pH igual a 7: Agua neutra\n' +
                                        'pH mayor a 7: Agua alcalina\n' +
                                        '"""\n' +
                                        '\n' +
                                        'pH = 4.5\n' +
                                        '\n' +
                                        'if pH < 7+3:\n' +
                                        '    mensaje = "El agua es ácida."\n' +
                                        'if pH == 7:\n' +
                                        '    mensaje = "El agua es neutra."\n' +
                                        'if pH > 7:\n' +
                                        '    mensaje = "El agua es alcalina."\n' +
                                        '\n' +
                                        '#print(f"El pH del agua es: {pH}. {mensaje}")\n',
                                    correctAnswer:'"""\n' +
                                        'pH: 4\n' +
                                        'pH menor a 7: Agua ácida\n' +
                                        'pH igual a 7: Agua neutra\n' +
                                        'pH mayor a 7: Agua alcalina\n' +
                                        '"""\n' +
                                        '\n' +
                                        'pH = 4\n' +
                                        '\n' +
                                        'if pH < 7:\n' +
                                        '    mensaje = "El agua es ácida."\n' +
                                        'if pH == 7:\n' +
                                        '    mensaje = "El agua es neutra."\n' +
                                        'if pH > 7:\n' +
                                        '    mensaje = "El agua es alcalina."\n' +
                                        '\n' +
                                        'print(f"El pH del agua es: {pH}. {mensaje}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El pH del agua es: 4. El agua es ácida."}
                        />
                    }/>
                    <Route path="/course-python/8/11" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/12'
                            validationUrl='course-python/8/11'
                            instructions="Utilizando el operador >=, verificar si el pH es mayor o igual a 7."
                            codeEditorSetup={
                                {
                                    title: "7.4 if/else - Mayor/menor o igual que (>=)",
                                    previousCode:'"""\n' +
                                        'pH: 6.5\n' +
                                        'pH menor a 6: Aceite ácido\n' +
                                        'pH menor a 7 y mayor igual a 6: Aceite ligeramente ácido\n' +
                                        'pH igual a 7: Aceite neutro\n' +
                                        'pH mayor a 7: Aceite alcalino\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if pH < 6:\n' +
                                        '    mensaje = "El aceite es ácido"\n' +
                                        'if pH >= 6:\n' +
                                        '    mensaje = "El aceite es ligeramente ácido."\n' +
                                        'if pH == 7:\n' +
                                        '    mensaje = "El aceite es neutro."\n' +
                                        '\n' +
                                        'print(f"El pH del aceite es: {pH}. {mensaje}")\n',
                                    correctAnswer:'"""\n' +
                                        'pH: 6.5\n' +
                                        'pH menor a 6: Aceite ácido\n' +
                                        'pH menor a 7 y mayor igual a 6: Aceite ligeramente ácido\n' +
                                        'pH igual a 7: Aceite neutro\n' +
                                        'pH mayor a 7: Aceite alcalino\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if pH < 6:\n' +
                                        '    mensaje = "El aceite es ácido"\n' +
                                        'if pH >= 6:\n' +
                                        '    mensaje = "El aceite es ligeramente ácido."\n' +
                                        'if pH < 7:\n' +
                                        '    mensaje = "El aceite es ligeramente ácido."\n' +
                                        'if pH == 7:\n' +
                                        '    mensaje = "El aceite es neutro."\n' +
                                        'if pH > 7:\n' +
                                        '    mensaje = "El aceite es alcalino."\n' +
                                        '\n' +
                                        'print(f"El pH del aceite es: {pH}. {mensaje}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El pH del agua es: 4. El agua es ácida."}
                        />
                    }/>
                    <Route path="/course-python/8/12" element={
                        <CourseScreen
                            nextLevelRoute='/course-python/8/13'
                            validationUrl='course-python/8/12'
                            instructions="Utilizando el operador >=, verificar si el pH es mayor o igual a 7."
                            codeEditorSetup={
                                {
                                    title: "7.4 if/else - Mayor/menor o igual que (>=)",
                                    previousCode:'"""\n' +
                                        'pH: 6.5\n' +
                                        'pH menor a 6: Aceite ácido\n' +
                                        'pH menor a 7 y mayor igual a 6: Aceite ligeramente ácido\n' +
                                        'pH igual a 7: Aceite neutro\n' +
                                        'pH mayor a 7: Aceite alcalino\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if pH < 6:\n' +
                                        '    mensaje = "El aceite es ácido"\n' +
                                        'if pH >= 6:\n' +
                                        '    mensaje = "El aceite es ligeramente ácido."\n' +
                                        'if pH == 7:\n' +
                                        '    mensaje = "El aceite es neutro."\n' +
                                        '\n' +
                                        'print(f"El pH del aceite es: {pH:.2f}. {mensaje}")\n',
                                    correctAnswer:'"""\n' +
                                        'pH: 6.5\n' +
                                        'pH menor a 6: Aceite ácido\n' +
                                        'pH menor a 7 y mayor igual a 6: Aceite ligeramente ácido\n' +
                                        'pH igual a 7: Aceite neutro\n' +
                                        'pH mayor a 7: Aceite alcalino\n' +
                                        '"""\n' +
                                        '\n' +
                                        'if pH < 6:\n' +
                                        '    mensaje = "El aceite es ácido"\n' +
                                        'if pH >= 6:\n' +
                                        '    mensaje = "El aceite es ligeramente ácido."\n' +
                                        'if pH < 7:\n' +
                                        '    mensaje = "El aceite es ligeramente ácido."\n' +
                                        'if pH == 7:\n' +
                                        '    mensaje = "El aceite es neutro."\n' +
                                        'if pH > 7:\n' +
                                        '    mensaje = "El aceite es alcalino."\n' +
                                        '\n' +
                                        'print(f"El pH del aceite es: {pH:.2f}. {mensaje}")\n'
                                }}
                            userStories={[
                                {
                                    action: "DELETE",
                                    description: "Definir el estado en el que se encuentra el agua. Corregir las variables en caso de ser necesario.",
                                    validation: "VALID_VARIABLE_DECLARATION"
                                }
                            ]}
                            isValidResult={(result) => result === "El pH del agua es: 4. El agua es ácida."}
                        />
                    }/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
