import React from 'react';
import './EvolutionMap.css';

const EvolutionMap = ({ onClose }) => {
  return (
    <div className='evolutionMap-popup bg'>
      <div className='evolutionMap-content'>
        <button onClick={onClose} className='close-btn-evolutionmap'></button>

        <div className='title-and-progress'></div>
        <div className='evolution-content'>
          <div className='evo-row-1'>
            <div className='evo-pets'>
              <div className='pet' id='evo-pet-0'>
                
              </div>
              <div className='pet' id='evo-pet-1'></div>
              <div className='pet' id='evo-pet-2'></div>
              <div className='pet' id='evo-pet-3'></div>
              <div className='pet' id='evo-pet-4'></div>
              <div className='pet' id='evo-pet-5'></div>
              <div className='pet' id='evo-pet-6'></div>
            </div>
            <div className='evo-xp-info'>
              <div className='xp' id='xp-pet-0'>500 / 1600</div>
              <div className='xp' id='xp-pet-1'>500 / 1600</div>
              <div className='xp' id='xp-pet-2'>500 / 1600</div>
              <div className='xp' id='xp-pet-3'>500 / 1600</div>
              <div className='xp' id='xp-pet-4'>500 / 1600</div>
              <div className='xp' id='xp-pet-5'>500 / 1600</div>
              <div className='xp' id='xp-pet-6'>500 / 1600</div>
            </div>
          </div>
          <div className='evo-row-2'>
            <div className='evo-pets'>
              <div className='pet' id='evo-pet-7'></div>
              <div className='pet' id='evo-pet-8'></div>
              <div className='pet' id='evo-pet-9'></div>
              <div className='pet' id='evo-pet-10'></div>
              <div className='pet' id='evo-pet-11'></div>
              <div className='pet' id='evo-pet-12'></div>
            </div>
            <div className='evo-xp-info'>
              <div className='xp' id='xp-pet-7'>500 / 1600</div>
              <div className='xp' id='xp-pet-8'>500 / 1600</div>
              <div className='xp' id='xp-pet-9'>500 / 1600</div>
              <div className='xp' id='xp-pet-10'>500 / 1600</div>
              <div className='xp' id='xp-pet-11'>500 / 1600</div>
              <div className='xp' id='xp-pet-12'>500 / 1600</div>
            </div>
          </div>
        </div>
        <div className='orb'></div>
      </div>
    </div>
  );
};

export default EvolutionMap;
