import React, {useEffect} from 'react';
import './EvolutionMap.css';
import {useUser} from "../utils/UserProvider";

const EvolutionMap = ({ onClose }) => {
  const {userProfile} = useUser();
  useEffect(() => {
    if (userProfile.profile.avatar === 'caterpillar') {
      import('./EvolutionMapTerrestrial.css');
    } else if(userProfile.profile.avatar === 'axolotl') {
      import('./EvolutionMapAquatic.css');
    }else {
      import('./EvolutionMapAerial.css');
    }
  }, []);

  return (
    <div className='evolutionMap-popup bg'>
      <div className='evolutionMap-content'>
        <button onClick={onClose} className='close-btn-evolutionmap'></button>

        <div className='title-and-progress'></div>

        <div className='evolution-content'>
          <div className='evo-row-1'>
            <div className='pet'>
              <div className='pet-img' id='evo-pet-0'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-1'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-2'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-3'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>
            <div className='pet'>
              <div className='pet-img' id='evo-pet-4'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>
            <div className='pet'>
              <div className='pet-img' id='evo-pet-5'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>
            <div className='pet'>
              <div className='pet-img' id='evo-pet-6'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>

            </div>
          </div>
          <div className='evo-row-2'>
            <div className='pet'>
              <div className='pet-img' id='evo-pet-7'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-8'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-9'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-10'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-11'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

            <div className='pet'>
              <div className='pet-img' id='evo-pet-12'></div>
              <div className='pet-xp'>
                <div className='evo-bar'></div>
                <div className='xp-progress-numbers'>500 / 1700</div>
              </div>
            </div>

          </div>

        </div>
        <div className='orb'></div>
      </div>
    </div>
  );
};

export default EvolutionMap;
