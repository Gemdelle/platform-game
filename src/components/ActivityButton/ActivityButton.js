import React, { useState } from 'react';
import './ActivityButton.css';

const ActivityButton = () => {
    const [active, setActive] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setActive(!active);
    };

    return (
        <div id="container" className={`clickable ${clicked ? 'clicked' : ''} ${active ? 'active' : ''}`} onClick={handleClick}>
            <button type="button" className="activity-button clickable">
                <section className="activity">
                    <div className="item">
                        <p>¡Tenemos novedades! Hay nuevo contenido en <a> Library </a> esperando por ti. ¡Échale un vistazo ahora!</p>
                    </div>
                </section>
                <span className="buttonText">Activity</span>
            </button>
        </div>
    );
};

export default ActivityButton;
