// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home/Home';
import Course1Sublevel1 from "./screens/Course1/Course1Sublevel1/Course1Sublevel1";
import AvatarSelection from "./screens/AvatarSelection/AvatarSelection";
import Course1Sublevel2 from "./screens/Course1/Course1Sublevel2/Course1Sublevel2";
import Course1Sublevel3 from "./screens/Course1/Course1Sublevel3/Course1Sublevel3";
import TeoricSublevel from "./screens/Course1/TeoricSublevel/TeoricSublevel";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/course/1/1" element={<TeoricSublevel/>}/>
                    <Route path="/course/1/2" element={<Course1Sublevel1/>}/>
                    <Route path="/course/1/3" element={<Course1Sublevel2/>}/>
                    <Route path="/course/1/4" element={<Course1Sublevel3/>}/>
                    <Route path="/avatar-selection" element={<AvatarSelection/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
