import React from 'react';
import { useState } from 'react';
import './cars.css';
import Car from '../Car/Car';
import taxis from '../data/taxisdriver';

const Cars = () => {
  // Gestion des états
  const [startIndex, setStartIndex] = useState(0); // Indice de départ pour l'affichage des taxis
  const [selectedCategory, setSelectedCategory] = useState(''); // Catégorie sélectionnée pour le filtrage
  

  // Fonction pour passer à la page suivante
  const handleNext = () => {
    const nextIndex = startIndex + 2;
    if (nextIndex < taxis.length) {
      setStartIndex(nextIndex);
    }
  };

  // Fonction pour revenir à la page précédente
  const handlePrevious = () => {
    const previousIndex = startIndex - 2;
    if (previousIndex >= 0) {
      setStartIndex(previousIndex);
    }
  };

  // Fonction pour filtrer par catégorie
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setStartIndex(0);
  };

  // Fonction pour effacer le filtre et afficher tous les taxis
  const handleClearFilter = () => {
    setSelectedCategory('');
    setStartIndex(0);
  };

  // Filtrage des taxis en fonction de la catégorie sélectionnée
  const filteredTaxis = selectedCategory
    ? taxis.filter((taxi) => taxi.category === selectedCategory)
    : taxis;

  // Affichage des taxis à partir de l'indice de départ
  const displayedTaxis = filteredTaxis.slice(startIndex, startIndex + 2);

  // Obtention de toutes les catégories disponibles
  const categories = [...new Set(taxis.map((taxi) => taxi.category))];

  return (
    <div className='cars'>
      <h1 className='cars-title'>Nos véhicules</h1>
      
      {/* Boutons de navigation */}
      <div className='navigation-buttons'>
        <button onClick={handlePrevious} disabled={startIndex === 0}>
          Précédent
        </button>
        <button onClick={handleNext} disabled={startIndex + 2 >= filteredTaxis.length}>
          Suivant
        </button>
      </div>
      
      {/* Boutons de catégories */}
      <div className='categories-buttons'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
        <button onClick={handleClearFilter}>Tout</button>
      </div>
      
      {/* Affichage des taxis */}
      <div className='cars-box'>
        {displayedTaxis.map((taxi) => (
          <Car key={taxi.id} taxi={taxi} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
