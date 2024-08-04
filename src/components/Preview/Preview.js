import React from 'react';
import './Preview.css';
const Preview = ({ previewImageUrl }) => {

    return (
        <div className='preview bg' style={{backgroundImage: previewImageUrl}}>

        </div>
    );
};

export default Preview;
