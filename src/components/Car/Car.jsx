import React from 'react';
import carimg from '../../assets/car.jpeg';
import './car.css';

const Car = ({ taxi }) => {
  const { vehicle_type, driver, category, engine_type, seats } = taxi;
  return (
    <div className='cars-inner-box'>
      <h2>{vehicle_type}</h2>
      <img className='cars-img' src={carimg} alt={vehicle_type} />
      <p>
        Catégorie : {category}
        <br />
        Type de moteur : {engine_type}
        <br />
        Nombre de places disponibles : {seats}
        <br />
        Chauffeur : {driver.name}
        <br />
        Description du chauffeur : {driver.description}
      </p>
    </div>
  );
};


export default Car;
