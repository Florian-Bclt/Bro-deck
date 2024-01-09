import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    monster: true,
    magic: true,
    trap: true,
    monsterTypes: {
      dragon: true,
      spellcaster: true,
      warrior: true,
      // Ajoutez d'autres types de monstres ici
    },
    magicTypes: {
      normal: true,
      field: true,
      continuous: true,
      // Ajoutez d'autres types de magies ici
    },
    trapTypes: {
      normal: true,
      counter: true,
      continuous: true,
      // Ajoutez d'autres types de pièges ici
    },
  });

  const handleFilterChange = (filterCategory, filterName) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterCategory]: {
        ...prevFilters[filterCategory],
        [filterName]: !prevFilters[filterCategory][filterName],
      },
    }));
    onFilterChange(filters); // Appel de la fonction de rappel avec les nouveaux filtres
  };

  return (
    <div className="app__sidebar">
      <div>
        <h2>Monstres</h2>
        <label>
          <input
            type="checkbox"
            checked={filters.monster}
            onChange={() => handleFilterChange('monster', 'monster')}
          />
          Tous les monstres
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={filters.monsterTypes.dragon}
              onChange={() => handleFilterChange('monsterTypes', 'dragon')}
            />
            Dragon
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.monsterTypes.spellcaster}
              onChange={() => handleFilterChange('monsterTypes', 'spellcaster')}
            />
            Spellcaster
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.monsterTypes.warrior}
              onChange={() => handleFilterChange('monsterTypes', 'warrior')}
            />
            Warrior
          </label>
          {/* Ajoutez d'autres types de monstres ici */}
        </div>
      </div>
      <div>
        {/* Ajoutez des sections similaires pour les types de magie et de piège */}
      </div>
    </div>
  );
};

export default Sidebar;
