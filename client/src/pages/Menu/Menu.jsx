import './Menu.css';
import { useState } from 'react';

const categories = [
  { key: 'boissons', label: 'Boissons' },
  { key: 'entrees', label: 'Entrées' },
  { key: 'plats', label: 'Plats' },
  { key: 'breakfast', label: 'Breakfast' },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('boissons');

  return (
    <div className="page-content">
      <h2>Menu</h2>
      <div className="menu-categories-bar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`menu-category-btn${selectedCategory === cat.key ? ' selected' : ''}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="menu-category-content">
        {selectedCategory === 'boissons' && (
          <ul>{/* Ajoute ici les boissons */}</ul>
        )}
        {selectedCategory === 'entrees' && (
          <ul>{/* Ajoute ici les entrées */}</ul>
        )}
        {selectedCategory === 'plats' && (
          <ul>{/* Ajoute ici les plats */}</ul>
        )}
        {selectedCategory === 'breakfast' && (
          <ul>{/* Ajoute ici les breakfast */}</ul>
        )}
      </div>
    </div>
  );
}

export default Menu; 