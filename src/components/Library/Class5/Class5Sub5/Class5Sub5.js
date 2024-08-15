import React, { useState } from 'react';
import './Class5Sub5.css';

const Class5Sub5 = ({ onClose }) => {
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de imagen inicial
  const [currentText, setCurrentText] = useState(texts[0]); // Texto inicial

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      setCurrentText(texts[newIndex]); // Cambia el texto basado en el nuevo índice
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      setCurrentText(texts[newIndex]); // Cambia el texto basado en el nuevo índice
      return newIndex;
    });
  };

  return (
    <div className='class5Sub1-popup bg'>
      <div className='class5Sub1-content'>
        <h2 className='class5Sub1-h2'>Library</h2>
        <div className='class5Sub1-content1'>
          <button onClick={onClose} className='close-btn-class5Sub1'></button>
          <div className='text-content'>
            <p className='class5Sub1-description-p'>{currentText}</p>
          </div>

          <div className='giph-content'>
            <div className='giph' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>
          </div>

          <div className='arrows-class5Sub1'>
            <div className='arrow-left-class5Sub1' onClick={handleLeftClick}></div>
            <div className='arrow-left-class5Sub1 arrow-right-class5Sub1' onClick={handleRightClick}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class5Sub5;
