// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const goToCourse1 = () => {
        navigate('/course/1/1');
    };
    return (
        <div className="App">
            <header>
                <div className='header-container'>
                    <div className='menu'>
                        <div className='menu-options'>
                            <div id='courses'>Courses</div>
                            <div id='library'>Library</div>
                            <div id='friends'>Friends (coming soon)</div>
                            <div id='faq'>FAQ</div>
                            <div id='support'>Support</div>
                        </div>
                    </div>
                    <div className='hud flex'>
                        <div className='level-bar'></div>
                        <div className='data flex'>
                            <div className='pp flex'>profile picture</div>
                            <div className='heart bg flex'><span id='level'>1</span></div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='header-space'></div>
            <div className='course' id='course-1'>
                <h1>COURSE 1</h1>
                <div className='course-description'>
                    <span>The course -name- us about -description. Once finished, you will know how to:</span>
                    <ul>
                        <div className='heart-bullet bg'></div><li>Item 1</li>
                        <div className='heart-bullet bg'></div><li>Item 2</li>
                        <div className='heart-bullet bg'></div><li>Item 3</li>
                        <div className='heart-bullet bg'></div><li>Item 3</li>
                    </ul>
                </div>
                <div className='levels'>
                    <div className='level flex bg' onClick={goToCourse1}><span>1</span></div>
                    <div className='level flex bg'><span>2</span></div>
                    <div className='level flex bg'><span>3</span></div>
                    <div className='level flex bg'><span>4</span></div>
                    <div className='level flex bg'><span>5</span></div>
                    <div className='level flex bg'><span>6</span></div>
                    <div className='level flex bg'><span>7</span></div>
                    <div className='level flex bg'><span>8</span></div>
                    <div className='level flex bg'><span>9</span></div>
                    <div className='level flex bg'><span>10</span></div>
                    <div className='level flex bg'><span>11</span></div>
                    <div className='level flex bg'><span>12</span></div>
                    <div className='level flex bg'><span>13</span></div>
                    <div className='level flex bg'><span>14</span></div>
                    <div className='level flex bg'><span>15</span></div>
                    <div className='level flex bg'><span>16</span></div>
                    <div className='level flex bg'><span>17</span></div>
                    <div className='level flex bg'><span>18</span></div>
                    <div className='level flex bg'><span>19</span></div>
                    <div className='level flex bg'><span>20</span></div>
                    <div className='level flex bg'><span>21</span></div>
                    <div className='level flex bg'><span>22</span></div>
                    <div className='level flex bg'><span>23</span></div>
                    <div className='level flex bg'><span>24</span></div>
                    <div className='level flex bg'><span>25</span></div>
                </div>
            </div>

            <div className='course' id='course-2'>
                <h1>COURSE 2</h1>
                <div className='course-description'>
                    <span>The course -name- us about -description. Once finished, you will know how to:</span>
                    <ul>
                        <div className='heart-bullet bg'></div><li>Item 1</li>
                        <div className='heart-bullet bg'></div><li>Item 2</li>
                        <div className='heart-bullet bg'></div><li>Item 3</li>
                        <div className='heart-bullet bg'></div><li>Item 3</li>
                    </ul>
                </div>
                <div className='levels'>
                    <div className='level flex bg'><span>1</span></div>
                    <div className='level flex bg'><span>2</span></div>
                    <div className='level flex bg'><span>3</span></div>
                    <div className='level flex bg'><span>4</span></div>
                    <div className='level flex bg'><span>5</span></div>
                    <div className='level flex bg'><span>6</span></div>
                    <div className='level flex bg'><span>7</span></div>
                    <div className='level flex bg'><span>8</span></div>
                    <div className='level flex bg'><span>9</span></div>
                    <div className='level flex bg'><span>10</span></div>
                    <div className='level flex bg'><span>11</span></div>
                    <div className='level flex bg'><span>12</span></div>
                    <div className='level flex bg'><span>13</span></div>
                    <div className='level flex bg'><span>14</span></div>
                    <div className='level flex bg'><span>15</span></div>
                    <div className='level flex bg'><span>16</span></div>
                    <div className='level flex bg'><span>17</span></div>
                    <div className='level flex bg'><span>18</span></div>
                    <div className='level flex bg'><span>19</span></div>
                    <div className='level flex bg'><span>20</span></div>
                    <div className='level flex bg'><span>21</span></div>
                    <div className='level flex bg'><span>22</span></div>
                    <div className='level flex bg'><span>23</span></div>
                    <div className='level flex bg'><span>24</span></div>
                    <div className='level flex bg'><span>25</span></div>
                </div>
            </div>

        </div>
    );
};

export default Home;
