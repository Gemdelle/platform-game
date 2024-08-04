import React from 'react';
import './Preview.css';
import {useUser} from "../utils/UserProvider";
const Preview = ({ previewImageUrl }) => {

    return (
        <div className='preview bg' style={{backgroundImage: previewImageUrl}}>

        </div>
    );
};

export default Preview;
