// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home/Home';
import Course1Sublevel1 from "./screens/Course1/Course1Sublevel1";
import AvatarSelection from "./screens/AvatarSelection/AvatarSelection";
import Course1Sublevel2 from "./screens/Course1/Course1Sublevel2";
import Course1Sublevel3 from "./screens/Course1/Course1Sublevel3";
import TeoricSublevel from "./screens/Course1/TeoricSublevel/TeoricSublevel";
import Course1Sublevel4 from "./screens/Course1/Course1Sublevel4";
import Course1Sublevel5 from "./screens/Course1/Course1Sublevel5";
import Course1Sublevel6 from "./screens/Course1/Course1Sublevel6";
import Course1Sublevel16 from "./screens/Course1/Course1Sublevel16";
import Course1Sublevel22 from "./screens/Course1/Course1Sublevel22";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/avatar-selection" element={<AvatarSelection/>}/>
                    <Route path="/course/1/theoretical" element={<TeoricSublevel/>}/>
                    <Route path="/course/1/1" element={<Course1Sublevel1/>}/>
                    <Route path="/course/1/2" element={<Course1Sublevel2/>}/>
                    <Route path="/course/1/3" element={<Course1Sublevel3/>}/>
                    <Route path="/course/1/4" element={<Course1Sublevel4/>}/>
                    <Route path="/course/1/5" element={<Course1Sublevel5/>}/>
                    <Route path="/course/1/6" element={<Course1Sublevel6/>}/>
                    <Route path="/course/1/16" element={<Course1Sublevel16/>}/>
                    <Route path="/course/1/22" element={<Course1Sublevel22/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
