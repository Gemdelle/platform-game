import React, { useState } from 'react';

import './Home.css';
import Header from "../../components/Header/Header";
import Course from "../../components/Course/Course";

const Home = () => {

    return (
        <div className="App">
            <Header/>
            <div className='header-space'></div>
            <Course
                name={"COURSE 1"}
                description={{ message: "The course -name- us about -description. Once finished, you will know how to:", itemCount: 4 }}
                levels={25}
                navigationUrl={'/course/1/'}
            />

            <Course
                name={"COURSE 2"}
                description={{ message: "The course -name- us about -description. Once finished, you will know how to:", itemCount: 4 }}
                levels={13}
                navigationUrl={'/course/2/'}
            />
        </div>
    );
};

export default Home;
