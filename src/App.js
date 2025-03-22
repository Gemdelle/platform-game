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
import CoursePython1Sublevel1  from "./screens/python_course/Course1/CoursePython1Sublevel1" ;
import CoursePython1Sublevel2 from "./screens/python_course/Course1/CoursePython1Sublevel2";
import CoursePython1Sublevel3 from "./screens/python_course/Course1/CoursePython1Sublevel3";
import CoursePython1Sublevel4 from "./screens/python_course/Course1/CoursePython1Sublevel4";
import CoursePython1Sublevel5 from "./screens/python_course/Course1/CoursePython1Sublevel5";
import CoursePython1Sublevel6 from "./screens/python_course/Course1/CoursePython1Sublevel6";
import CoursePython1Sublevel7 from "./screens/python_course/Course1/CoursePython1Sublevel7";
import CustomCursor from "./components/Cursor/CustomCursor";
import Library from "./components/Library/Library";
import CourseSelection from "./screens/CourseSelection/CourseSelection";

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
                    <Route path="/course-python/1/1" element={<CoursePython1Sublevel1/>}/>
                    <Route path="/course-python/1/2" element={<CoursePython1Sublevel2/>}/>
                    <Route path="/course-python/1/3" element={<CoursePython1Sublevel3/>}/>
                    <Route path="/course-python/1/4" element={<CoursePython1Sublevel4/>}/>
                    <Route path="/course-python/1/5" element={<CoursePython1Sublevel5/>}/>
                    <Route path="/course-python/1/6" element={<CoursePython1Sublevel6/>}/>
                    <Route path="/course-python/1/7" element={<CoursePython1Sublevel7/>}/>
                    <Route path="/course-python/1/22" element={<Course1Sublevel22/>}/>
                    <Route path="/course-python/2/theoretical" element={<Teoric2Sublevel/>}/>
                    <Route path="/course-python/2/1" element={<Course2Sublevel1/>}/>
                    <Route path="/course-python/3/1" element={<Course3Sublevel1/>}/>
                    <Route path="/course-python/3/2" element={<Course3Sublevel2/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
