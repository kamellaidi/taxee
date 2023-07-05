import React from 'react';
import './Container.css';
import driveImg from '../../assets/drive.jpeg';
import joinUs from  '../../assets/joinus.jpeg';
import BlockLeft from './BlockLeft';
import BlockRight from './BlockRight';

const Container = () => {
  return (
    <div className='container'>
      {/* Première boîte */}
      <div className='box'>
        <div className='infos'>
          {/* Image de conduite */}
          <img src={driveImg} alt='Conduite' />
        </div>
        <div className='infos'>
          {/* Composant BlockLeft */}
          <BlockLeft />
        </div>
      </div>

      {/* Deuxième boîte */}
      <div className='box'>
        <div className='infos'>
          {/* Composant BlockRight */}
          <BlockRight />
        </div>
        <div className='infos'>
          {/* Image de rejoignez-nous */}
          <img src={joinUs} alt='Rejoignez-nous' />
        </div>
      </div>
    </div>
  );
};

export default Container;
