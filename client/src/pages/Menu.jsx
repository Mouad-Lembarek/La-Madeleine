import { useState } from 'react';

const boissons = [
  { nom: 'Espresso', prix: '27 DHS' },
  { nom: 'Américano', prix: '32 DHS' },
  { nom: 'Double Espresso', prix: '35 DHS' },
  { nom: 'Nespresso', prix: '35 DHS' },
  { nom: 'Espresso Macchiato', prix: '32 DHS' },
  { nom: 'Café Crème', prix: '38 DHS' },
  { nom: 'Cappuccino', prix: '42 DHS' },
  { nom: 'Café Latté', prix: '42 DHS' },
  { nom: 'Latté Caramel', prix: '45 DHS' },
  { nom: 'Mocca Latté', prix: '45 DHS' },
  { nom: 'Chocolat Chaud', prix: '45 DHS' },
  { nom: 'Latté Vanille', prix: '45 DHS' },
];

const breakfast = {
  nom: 'Petit déjeuner “Tangerois”',
  prix: '105 DHS',
  items: [
    'Assortiment marocain (baghrir, msemmen, harcha, batbout)',
    'Beurre miel, fromage frais à l’huile d’olive et thym (jen), miel, amlou, confiture',
    'Tame au gruf et khlii',
    'Soupe marocaine (bissara à l’huile d’olive et cumin)',
    'Thé à la menthe tangérois',
    'Jus d’orange frais',
  ]
};

const pizzas = [
  { nom: 'Pizza Margherita', prix: '65 DHS' },
  { nom: 'Pizza Végétarienne', prix: '75 DHS' },
  { nom: 'Pizza 4 Fromages', prix: '85 DHS' },
  { nom: 'Pizza Pepperoni', prix: '85 DHS' },
  { nom: 'Pizza Poulet BBQ', prix: '90 DHS' },
  { nom: 'Pizza Fruits de Mer', prix: '95 DHS' },
];

const categories = [
  { key: 'boissons', label: 'Boissons' },
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'pizzas', label: 'Pizzas' },
  { key: 'entrees', label: 'Entrées' },
  { key: 'salades', label: 'Salades' },
  { key: 'pates', label: 'Pâtes' },
  { key: 'grillades', label: 'Grillades/Barbecue' },
  { key: 'marocaines', label: 'Spécialités marocaines' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'enfant', label: 'Menu enfant' },
];

function Menu() {
  const [selected, setSelected] = useState('boissons');

  return (
    <div className="page-content menu-page">
      <h2>Menu</h2>
      <div className="menu-tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`menu-tab-btn${selected === cat.key ? ' active' : ''}`}
            onClick={() => setSelected(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {selected === 'boissons' && (
        <div className="menu-category">
          <h3>Boissons</h3>
          <ul className="menu-list">
            {boissons.map((item) => (
              <li key={item.nom} className="menu-item">
                <span className="item-name">{item.nom}</span>
                <span className="item-price">{item.prix}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selected === 'breakfast' && (
        <div className="menu-category">
          <h3>Breakfast</h3>
          <div className="breakfast-block">
            <div className="breakfast-title">
              <span className="breakfast-name">{breakfast.nom}</span>
              <span className="breakfast-price">{breakfast.prix}</span>
            </div>
            <ul className="breakfast-list">
              {breakfast.items.map((item, idx) => (
                <li key={idx} className="breakfast-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {selected === 'pizzas' && (
        <div className="menu-category">
          <h3>Pizzas</h3>
          <ul className="menu-list">
            {pizzas.map((item) => (
              <li key={item.nom} className="menu-item">
                <span className="item-name">{item.nom}</span>
                <span className="item-price">{item.prix}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selected === 'entrees' && (
        <div className="menu-category"><h3>Entrées</h3><p className="menu-empty">À venir…</p></div>
      )}
      {selected === 'salades' && (
        <div className="menu-category"><h3>Salades</h3><p className="menu-empty">À venir…</p></div>
      )}
      {selected === 'pates' && (
        <div className="menu-category"><h3>Pâtes</h3><p className="menu-empty">À venir…</p></div>
      )}
      {selected === 'grillades' && (
        <div className="menu-category"><h3>Grillades/Barbecue</h3><p className="menu-empty">À venir…</p></div>
      )}
      {selected === 'marocaines' && (
        <div className="menu-category"><h3>Spécialités marocaines</h3><p className="menu-empty">À venir…</p></div>
      )}
      {selected === 'desserts' && (
        <div className="menu-category"><h3>Desserts</h3><p className="menu-empty">À venir…</p></div>
      )}
      {selected === 'enfant' && (
        <div className="menu-category"><h3>Menu enfant</h3><p className="menu-empty">À venir…</p></div>
      )}
    </div>
  );
}

export default Menu; 