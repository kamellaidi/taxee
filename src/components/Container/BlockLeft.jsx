import React from 'react';
import './BlockLeft.css';
import data from './data.jsx';

const BlockLeft = () => {
  return (
    <div className='bloc-left'>
      <h2> {data[1].title}</h2>
      <p>{data[1].text}</p>
    </div>
  );
};

export default BlockLeft;
