import React from 'react';
import './TeoricRules.css';
import {useUser} from "../../../components/utils/UserProvider";

const TeoricRules = ({onClose, handleGoNext, bestScore, total, grade}) => {
    const {userProfile} = useUser();
    const isAquatic = userProfile.profile.avatar === 'axolotl';
    const isTerrestrial = userProfile.profile.avatar === 'caterpillar';
    const hasHatched = userProfile.profile.level > 1;
    let hatchedBackgroundImage = `url("/assets/pets/evolutions/${isAquatic ? 'aquatic' : isTerrestrial ? 'terrestrial' : 'aerial'}/${userProfile.profile.level}.png")`;
    let eggBackgroundImage = `url("/assets/eggs/${isAquatic ? 'egg-aquatic' : isTerrestrial ? 'egg-terrestrial' : 'egg-aerial'}.png")`;
    let backgroundImage = hasHatched ? hatchedBackgroundImage : eggBackgroundImage
    return (
        <div className='teoric-rules-popup bg'>
            <div className='teoric-rules-content'>
                <button onClick={onClose} className='close-btn-teoric-rules'></button>

                <div className='start-score-container'>
                    <div className={`score-heart ${grade === "SILVER" ? 'silver' : grade === "GOLD" ? 'gold' : ''}`}>
                        <span>{`${bestScore} / ${total}`}</span></div>
                    <span className='previous-score-txt'>Puntuación máxima</span>
                </div>
                <div className='start-rules'>
                    <ul className='questionnaire-rules'>
                        <li>
                            <div className='rule-1'></div>
                            <span className='rule-text'>Contestar 15 preguntas para ganar oro (rango oro)</span></li>
                        <li>
                            <div className='rule-2'></div>
                            <span className='rule-text'>Contestar 12 preguntas para aprobar (rango plata)</span></li>
                        <li>
                            <div className='rule-3'></div>
                            <span className='rule-text'>No hay límite de intentos</span></li>
                        <li>
                            <div className='rule-4'></div>
                            <span className='rule-text'>Terminar antes de que la mascota llegue a la comida</span></li>
                    </ul>
                </div>
                <div className='start-pet'>
                    <div className='smoke'></div>
                    <div className={`pet ${hasHatched ? 'rules-hatched' : 'rules-egg'}`} id="petStatic"
                         style={{backgroundImage: backgroundImage}}></div>
                </div>

                <div className='teoric-rules-submit flex'>
                    <button type='submit' className='submit-btn bg' onClick={handleGoNext}>START</button>
                </div>
            </div>
        </div>
    );
};

export default TeoricRules;
