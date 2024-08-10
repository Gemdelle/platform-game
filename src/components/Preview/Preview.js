import React from 'react';
import './Preview.css';
const Preview = ({ previewImageUrl, className }) => {

    return (
        <div className={`preview bg ${className}`} style={{backgroundImage: previewImageUrl}}>

        </div>
    );
};

export default Preview;
