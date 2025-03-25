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
import CustomCursor from "./components/Cursor/CustomCursor";
import Library from "./components/Library/Library";
import CourseSelection from "./screens/CourseSelection/CourseSelection";
import CoursePython2Sublevel2 from "./screens/python_course/Course2/CoursePython2Sublevel2";
import CoursePython2Sublevel3 from "./screens/python_course/Course2/CoursePython2Sublevel3";
import CoursePython2Sublevel4 from "./screens/python_course/Course2/CoursePython2Sublevel4";
import CoursePython2Sublevel5 from "./screens/python_course/Course2/CoursePython2Sublevel5";
import CoursePython2Sublevel6 from "./screens/python_course/Course2/CoursePython2Sublevel6";
import CoursePython2Sublevel7 from "./screens/python_course/Course2/CoursePython2Sublevel7";
import CoursePython2Sublevel8 from "./screens/python_course/Course2/CoursePython2Sublevel8";
import CoursePython2Sublevel9 from "./screens/python_course/Course2/CoursePython2Sublevel9";
import CoursePython2Sublevel10 from "./screens/python_course/Course2/CoursePython2Sublevel10";
import CoursePython2Sublevel11 from "./screens/python_course/Course2/CoursePython2Sublevel11";
import CoursePython2Sublevel12 from "./screens/python_course/Course2/CoursePython2Sublevel12";
import CoursePython2Sublevel13 from "./screens/python_course/Course2/CoursePython2Sublevel13";
import CoursePython2Sublevel14 from "./screens/python_course/Course2/CoursePython2Sublevel14";
import CoursePython2Sublevel15 from "./screens/python_course/Course2/CoursePython2Sublevel15";
import CoursePython2Sublevel16 from "./screens/python_course/Course2/CoursePython2Sublevel16";
import CoursePython2Sublevel17 from "./screens/python_course/Course2/CoursePython2Sublevel17";
import CoursePython2Sublevel18 from "./screens/python_course/Course2/CoursePython2Sublevel18";
import CoursePython3Sublevel3 from "./screens/python_course/Course3/CoursePython3Sublevel3";
import CoursePython3Sublevel4 from "./screens/python_course/Course3/CoursePython3Sublevel4";
import CoursePython3Sublevel5 from "./screens/python_course/Course3/CoursePython3Sublevel5";
import CoursePython3Sublevel6 from "./screens/python_course/Course3/CoursePython3Sublevel6";
import CoursePython3Sublevel7 from "./screens/python_course/Course3/CoursePython3Sublevel7";
import CoursePython3Sublevel8 from "./screens/python_course/Course3/CoursePython3Sublevel8";
import CoursePython3Sublevel9 from "./screens/python_course/Course3/CoursePython3Sublevel9";
import CoursePython3Sublevel10 from "./screens/python_course/Course3/CoursePython3Sublevel10";
import CoursePython3Sublevel11 from "./screens/python_course/Course3/CoursePython3Sublevel11";
import CoursePython3Sublevel12 from "./screens/python_course/Course3/CoursePython3Sublevel12";
import CoursePython3Sublevel13 from "./screens/python_course/Course3/CoursePython3Sublevel13";
import CoursePython3Sublevel14 from "./screens/python_course/Course3/CoursePython3Sublevel14";
import CoursePython3Sublevel15 from "./screens/python_course/Course3/CoursePython3Sublevel15";
import CoursePython3Sublevel16 from "./screens/python_course/Course3/CoursePython3Sublevel16";
import CoursePython3Sublevel17 from "./screens/python_course/Course3/CoursePython3Sublevel17";
import CoursePython3Sublevel18 from "./screens/python_course/Course3/CoursePython3Sublevel18";
import Course4Sublevel1 from "./screens/python_course/Course4/Course4Sublevel1";
import Course4Sublevel2 from "./screens/python_course/Course4/Course4Sublevel2";
import Course4Sublevel3 from "./screens/python_course/Course4/Course4Sublevel3";
import Course4Sublevel4 from "./screens/python_course/Course4/Course4Sublevel4";
import Course4Sublevel5 from "./screens/python_course/Course4/Course4Sublevel5";
import Course4Sublevel6 from "./screens/python_course/Course4/Course4Sublevel6";
import Course4Sublevel7 from "./screens/python_course/Course4/Course4Sublevel7";
import Course4Sublevel8 from "./screens/python_course/Course4/Course4Sublevel8";
import Course4Sublevel9 from "./screens/python_course/Course4/Course4Sublevel9";
import Course4Sublevel10 from "./screens/python_course/Course4/Course4Sublevel10";
import Course4Sublevel11 from "./screens/python_course/Course4/Course4Sublevel11";
import Course4Sublevel12 from "./screens/python_course/Course4/Course4Sublevel12";
import Course8Sublevel1 from "./screens/python_course/Course8/Course8Sublevel1";
import Teoric3Sublevel from "./screens/python_course/Course3/TeoricSublevel/Teoric3Sublevel";
import Course8Sublevel2 from "./screens/python_course/Course8/Course8Sublevel2";
import Course8Sublevel3 from "./screens/python_course/Course8/Course8Sublevel3";
import Course8Sublevel4 from "./screens/python_course/Course8/Course8Sublevel4";
import Course8Sublevel5 from "./screens/python_course/Course8/Course8Sublevel5";
import Course8Sublevel6 from "./screens/python_course/Course8/Course8Sublevel6";
import Course8Sublevel7 from "./screens/python_course/Course8/Course8Sublevel7";
import Course8Sublevel8 from "./screens/python_course/Course8/Course8Sublevel8";
import Course8Sublevel9 from "./screens/python_course/Course8/Course8Sublevel9";
import Course8Sublevel10 from "./screens/python_course/Course8/Course8Sublevel10";
import Course8Sublevel11 from "./screens/python_course/Course8/Course8Sublevel11";
import Course8Sublevel12 from "./screens/python_course/Course8/Course8Sublevel12";
import CoursePython2Sublevel1 from "./screens/python_course/Course2/CoursePython2Sublevel1";
import CoursePython3Sublevel1 from "./screens/python_course/Course3/CoursePython3Sublevel1";
import CoursePython3Sublevel2 from "./screens/python_course/Course3/CoursePython3Sublevel2";
import Course6Sublevel13 from "./screens/python_course/Course6/Course6Sublevel13";
import Course6Sublevel14 from "./screens/python_course/Course6/Course6Sublevel14";
import Course6Sublevel15 from "./screens/python_course/Course6/Course6Sublevel15";

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

                    <Route path="/course-python/2/1" element={<CoursePython2Sublevel1/>}/>
                    <Route path="/course-python/2/2" element={<CoursePython2Sublevel2/>}/>
                    <Route path="/course-python/2/3" element={<CoursePython2Sublevel3/>}/>
                    <Route path="/course-python/2/4" element={<CoursePython2Sublevel4/>}/>
                    <Route path="/course-python/2/5" element={<CoursePython2Sublevel5/>}/>
                    <Route path="/course-python/2/6" element={<CoursePython2Sublevel6/>}/>
                    <Route path="/course-python/2/7" element={<CoursePython2Sublevel7/>}/>
                    <Route path="/course-python/2/8" element={<CoursePython2Sublevel8/>}/>
                    <Route path="/course-python/2/9" element={<CoursePython2Sublevel9/>}/>
                    <Route path="/course-python/2/10" element={<CoursePython2Sublevel10/>}/>
                    <Route path="/course-python/2/11" element={<CoursePython2Sublevel11/>}/>
                    <Route path="/course-python/2/12" element={<CoursePython2Sublevel12/>}/>
                    <Route path="/course-python/2/13" element={<CoursePython2Sublevel13/>}/>
                    <Route path="/course-python/2/14" element={<CoursePython2Sublevel14/>}/>
                    <Route path="/course-python/2/15" element={<CoursePython2Sublevel15/>}/>
                    <Route path="/course-python/2/16" element={<CoursePython2Sublevel16/>}/>
                    <Route path="/course-python/2/17" element={<CoursePython2Sublevel17/>}/>
                    <Route path="/course-python/2/18" element={<CoursePython2Sublevel18/>}/>

                    <Route path="/course-python/3/theoretical" element={<Teoric3Sublevel/>}/>
                    <Route path="/course-python/3/1" element={<CoursePython3Sublevel1/>}/>
                    <Route path="/course-python/3/2" element={<CoursePython3Sublevel2/>}/>
                    <Route path="/course-python/3/3" element={<CoursePython3Sublevel3/>}/>
                    <Route path="/course-python/3/4" element={<CoursePython3Sublevel4/>}/>
                    <Route path="/course-python/3/5" element={<CoursePython3Sublevel5/>}/>
                    <Route path="/course-python/3/6" element={<CoursePython3Sublevel6/>}/>
                    <Route path="/course-python/3/7" element={<CoursePython3Sublevel7/>}/>
                    <Route path="/course-python/3/8" element={<CoursePython3Sublevel8/>}/>
                    <Route path="/course-python/3/9" element={<CoursePython3Sublevel9/>}/>
                    <Route path="/course-python/3/10" element={<CoursePython3Sublevel10/>}/>
                    <Route path="/course-python/3/11" element={<CoursePython3Sublevel11/>}/>
                    <Route path="/course-python/3/12" element={<CoursePython3Sublevel12/>}/>
                    <Route path="/course-python/3/13" element={<CoursePython3Sublevel13/>}/>
                    <Route path="/course-python/3/14" element={<CoursePython3Sublevel14/>}/>
                    <Route path="/course-python/3/15" element={<CoursePython3Sublevel15/>}/>
                    <Route path="/course-python/3/16" element={<CoursePython3Sublevel16/>}/>
                    <Route path="/course-python/3/17" element={<CoursePython3Sublevel17/>}/>
                    <Route path="/course-python/3/18" element={<CoursePython3Sublevel18/>}/>

                    <Route path="/course-python/4/1" element={<Course4Sublevel1/>}/>
                    <Route path="/course-python/4/2" element={<Course4Sublevel2/>}/>
                    <Route path="/course-python/4/3" element={<Course4Sublevel3/>}/>
                    <Route path="/course-python/4/4" element={<Course4Sublevel4/>}/>
                    <Route path="/course-python/4/5" element={<Course4Sublevel5/>}/>
                    <Route path="/course-python/4/6" element={<Course4Sublevel6/>}/>
                    <Route path="/course-python/4/7" element={<Course4Sublevel7/>}/>
                    <Route path="/course-python/4/8" element={<Course4Sublevel8/>}/>
                    <Route path="/course-python/4/9" element={<Course4Sublevel9/>}/>
                    <Route path="/course-python/4/10" element={<Course4Sublevel10/>}/>
                    <Route path="/course-python/4/11" element={<Course4Sublevel11/>}/>
                    <Route path="/course-python/4/12" element={<Course4Sublevel12/>}/>

                    <Route path="/course-python/6/13" element={<Course6Sublevel13/>}/>
                    <Route path="/course-python/6/14" element={<Course6Sublevel14/>}/>
                    <Route path="/course-python/6/15" element={<Course6Sublevel15/>}/>

                    <Route path="/course-python/8/1" element={<Course8Sublevel1/>}/>
                    <Route path="/course-python/8/2" element={<Course8Sublevel2/>}/>
                    <Route path="/course-python/8/3" element={<Course8Sublevel3/>}/>
                    <Route path="/course-python/8/4" element={<Course8Sublevel4/>}/>
                    <Route path="/course-python/8/5" element={<Course8Sublevel5/>}/>
                    <Route path="/course-python/8/6" element={<Course8Sublevel6/>}/>
                    <Route path="/course-python/8/7" element={<Course8Sublevel7/>}/>
                    <Route path="/course-python/8/8" element={<Course8Sublevel8/>}/>
                    <Route path="/course-python/8/9" element={<Course8Sublevel9/>}/>
                    <Route path="/course-python/8/10" element={<Course8Sublevel10/>}/>
                    <Route path="/course-python/8/11" element={<Course8Sublevel11/>}/>
                    <Route path="/course-python/8/12" element={<Course8Sublevel12/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
