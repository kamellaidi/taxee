import React from 'react';
import carimg from '../../assets/car.jpeg';
import './car.css';

const Car = ({ taxi }) => {
  // Extraction des propriétés de l'objet taxi
  const { vehicle_type, driver, category, engine_type, seats } = taxi;
  
  return (
    <div className='cars-inner-box'>
      <h2>{vehicle_type}</h2>
      <img className='cars-img' src={carimg} alt={vehicle_type} />
      <p>
        {/* Affichage de la catégorie */}
        Catégorie : {category}
        <br />
        {/* Affichage du type de moteur */}
        Type de moteur : {engine_type}
        <br />
        {/* Affichage du nombre de places */}
        Nombre de places disponibles : {seats}
        <br />
        {/* Affichage du chauffeur */}
        Chauffeur : {driver.name}
        <br />
        {/* Affichage de la description du chauffeur */}
        Description du chauffeur : {driver.description}
      </p>
    </div>
  );
};


export default Car;
