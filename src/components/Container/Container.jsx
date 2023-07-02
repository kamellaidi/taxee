import React from 'react';
import './Container.css';
import driveImg from '../../assets/drive.jpeg';
import joinUs from  '../../assets/joinus.jpeg';
import BlockLeft from './BlockLeft';
import BlockRight from './BlockRight';

const Container = () => {

  return (
    <div className='container'>
      <div className='box'>
        <div className='infos'>
          <img src={driveImg}></img>
        </div>
        <div className='infos'>
          <BlockLeft />
        </div>
      </div>
      <div className='box'>
        <div className='infos'>
          <BlockRight />
        </div>
        <div className='infos'>
          <img src={joinUs}></img>
        </div>
      </div>
    </div>
  );
};

export default Container;
