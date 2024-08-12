import React from 'react';
import './Preview.css';
const Preview = ({ previewImageUrl, className, shouldProceed, correctAnswerOutputImage }) => {

    return (
        <div className={`preview bg ${className}`} style={shouldProceed && correctAnswerOutputImage ? {backgroundImage: correctAnswerOutputImage} :{backgroundImage: previewImageUrl}}>

        </div>
    );
};

export default Preview;
