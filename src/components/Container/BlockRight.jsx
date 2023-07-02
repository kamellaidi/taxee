import React from 'react';
import './BlockRight.css';
import data from './data.jsx';

const BlockRight = () => {
  return (
    <div className='bloc-right'>
      <h2>{data[2].title}</h2>
      <p>{data[2].text}</p>
    </div>
  );
};

export default BlockRight;
