import React, { useState } from 'react';
import './Library.css';
import Class1 from './Class1/Class1'; // Asegúrate de importar Class1
import Class2 from './Class2/Class2'; // Asegúrate de importar Class2
import Class3 from './Class3/Class3'; // Asegúrate de importar Class3
import Class4 from './Class4/Class4'; // Asegúrate de importar Class4
import Class5 from './Class5/Class5'; // Asegúrate de importar Class5
import Class6 from './Class6/Class6'; // Asegúrate de importar Class6
import Class7 from './Class7/Class7'; // Asegúrate de importar Class7

const Library = ({ onClose }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentClass, setCurrentClass] = useState(null); // Estado para mostrar clases específicas

  const handleButtonClick = (classComponent) => {
    setCurrentClass(classComponent);
    setShowOverlay(true); // Muestra overlay
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setCurrentClass(null); // Cierra el componente actual
  };

  return (
    <div className='library-popup'>
      <div className='library-container'>
        <button onClick={onClose} className='close-btn-library'></button>
        <h2 className='library-h2'>Library</h2>
        <div className='library-content'>
          <h3 className='library-h3'>Teoría Clases y Atributos</h3>
          <div className='index-content'>
            <button onClick={() => handleButtonClick(<Class1 onClose={handleCloseOverlay} />)} className='btn-library1'>Conceptos clase</button>
            <button onClick={() => handleButtonClick(<Class2 onClose={handleCloseOverlay} />)} className='btn-library1'>Conceptos atributos primitivos</button>
            <button onClick={() => handleButtonClick(<Class3 onClose={handleCloseOverlay} />)} className='btn-library1'>Conceptos atributos estáticos</button>
            <button onClick={() => handleButtonClick(<Class4 onClose={handleCloseOverlay} />)} className='btn-library1'>Conceptos atributos finales</button>
            <button onClick={() => handleButtonClick(<Class5 onClose={handleCloseOverlay} />)} className='btn-library1'>Conceptos instancia</button>
            <button onClick={() => handleButtonClick(<Class6 onClose={handleCloseOverlay} />)} className='btn-library1'>Crear una clase</button>
            <button onClick={() => handleButtonClick(<Class7 onClose={handleCloseOverlay} />)} className='btn-library1'>Definir atributos</button>
          </div>
        </div>
      </div>
      {showOverlay && (
        <div className='center-overlay' onClick={handleCloseOverlay}></div>
      )}
      {currentClass}
    </div>
  );
};

export default Library;
