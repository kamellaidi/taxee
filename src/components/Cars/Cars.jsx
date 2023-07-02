import React from 'react';
import './cars.css'
import Car from '../Car/Car' 
import taxis from '../data/taxisdriver'

const Cars = () => {
  return (
    <div className='cars'>
      <h1 className='cars-title'>Nos véhicules</h1>
      <div className='cars-box'>
      {console.log(taxis)}
      {taxis.map((taxi) => (
          <Car key={taxi.id} taxi={taxi} />
        ))}
      </div>
    </div>
  );
};

// {/* <div className='cars-inner-box'>
// <h2>Contenu de la boîte</h2>
// <p>Ceci est le contenu de la deuxième boîte.</p>
// </div>
// <div className='cars-inner-box'>
// <h2>Contenu de la boîte</h2>
// <p>Ceci est le contenu de la première boîte.</p>
// </div>
// <div className='cars-inner-box'>
// <h2>Contenu de la boîte</h2>
// <p>Ceci est le contenu de la première boîte.</p>
// </div>
// <div className='cars-inner-box'>
// <h2>Contenu de la boîte</h2>
// <p>Ceci est le contenu de la première boîte.</p>
// </div>
// <div className='cars-inner-box'>
// <h2>Contenu de la boîte</h2>
// <p>Ceci est le contenu de la première boîte.</p>
// </div> */}

export default Cars;
