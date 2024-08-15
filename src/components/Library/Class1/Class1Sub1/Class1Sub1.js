import React, { useState } from 'react';
import './Class1Sub1.css';

const Class1Sub1 = ({ onClose }) => {
  const images = [
    '/assets/giph1.png',
    '/assets/giph2.png',
    '/assets/giph3.png',
    '/assets/giph4.png'
  ];

  const texts = [
    'Public Class: This class is a fundamental concept in programming where we define the blueprint of objects. It encapsulates data for the object and methods to manipulate that data. Public classes are accessible from anywhere in the application, making them essential for shared functionality.',
    'Another Class: This class focuses on encapsulating behavior and data that are related to a specific type of object. It is an extension of basic classes, incorporating additional features and methods to perform complex tasks. It demonstrates how to use inheritance to extend functionality.',
    'Yet Another Class: In this class, we explore advanced features such as interfaces and abstract classes. These concepts allow for more flexible and reusable code by defining contracts that classes must adhere to. This approach helps in designing scalable and maintainable systems.',
    'Final Class: This class provides an overview of polymorphism and its applications. Polymorphism allows objects of different classes to be treated as objects of a common superclass. This capability is crucial for implementing dynamic method calls and achieving a high degree of flexibility in your code.'
  ];

  const classes = [
    'class1',
    'class2',
    'class3',
    'class4'
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Índice inicial

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  return (
    <div className='class1Sub1-popup bg'>
      <div className='class1Sub1-content'>
        <h2 className='class1Sub1-h2'>Library</h2>
        <div className='class1Sub1-content1'>
          <button onClick={onClose} className='close-btn-class1Sub1'></button>
          <div className={`text-content ${classes[currentIndex-1]}`}>
            <p className='class1Sub1-description-p'>{texts[currentIndex]}</p>
          </div>

          <div className={`giph-content ${classes[currentIndex]}`}>
            <div className='giph' style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
          </div>

          <div className='arrows-class1Sub1'>
            <div className='arrow-left-class1Sub1' onClick={handleLeftClick}></div>
            <div className='arrow-left-class1Sub1 arrow-right-class1Sub1' onClick={handleRightClick}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class1Sub1;
