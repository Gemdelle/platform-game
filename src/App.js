// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './screens/Home/Home';
import CourseLevel1 from "./screens/CourseLevel1/CourseLevel1";
import AvatarSelection from "./screens/AvatarSelection/AvatarSelection";

const App = () => {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/course/1/1" element={<CourseLevel1 />} />
            <Route path="/avatar-selection" element={<AvatarSelection />} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
