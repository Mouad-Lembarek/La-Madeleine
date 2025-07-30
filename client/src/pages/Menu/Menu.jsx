import './Menu.css';
import { useState } from 'react';

const categories = [
  { key: 'boissons', label: 'Boissons' },
  { key: 'salades', label: 'Salades' },
  { key: 'entrees', label: 'Entrées' },
  { key: 'plats', label: 'Plats' },
  { key: 'breakfast', label: 'Breakfast' },
];

const boissonsData = {
  cafes: {
    title: '☕ CAFÉS CHAUDS & GLACÉS',
    items: [
      { name: 'ESPRESSO', price: '25 DHS' },
      { name: 'AMERICANO', price: '30 DHS' },
      { name: 'DOUBLE ESPRESSO', price: '35 DHS' },
      { name: 'NESPRESSO', price: '30 DHS' },
      { name: 'ESPRESSO MACCHIATO', price: '30 DHS' },
      { name: 'CAFÉ CORTADO', price: '30 DHS' },
      { name: 'CAFÉ CRÈME', price: '35 DHS' },
      { name: 'CAPPUCCINO', price: '35 DHS' },
      { name: 'CAFÉ LATTÉ', price: '35 DHS' },
      { name: 'LATTE CARAMEL', price: '40 DHS' },
      { name: 'MOCCA LATTE', price: '40 DHS' },
      { name: 'CAFÉ ROYAL (avec crème fraîche)', price: '40 DHS' },
      { name: 'ICE CAPPUCCINO (caramel, chocolat, vanille)', price: '45 DHS' },
      { name: 'ICE COFFEE LATTE', price: '45 DHS' },
      { name: 'ICE SPANISH LATTE', price: '45 DHS' },
      { name: 'FRAPPUCCINO (chocolat, vanille, caramel, fraise)', price: '45 DHS' },
      { name: 'LATTE GLACÉ', price: '45 DHS' },
    ]
  },
  chocolats: {
    title: '🍫 CHOCOLATS CHAUDS',
    items: [
      { name: 'CHOCOLAT CHAUD', price: '40 DHS' },
      { name: 'CHOCOLAT OREO', price: '50 DHS' },
      { name: 'CHOCOLAT BLANC', price: '50 DHS' },
      { name: 'CHOCOLAT NUTELLA', price: '50 DHS' },
      { name: 'CHOCOLAT KITKAT', price: '50 DHS' },
      { name: 'CHOCOLAT KINDER', price: '55 DHS' },
      { name: 'CHOCOLAT LOTUS', price: '55 DHS' },
      { name: 'CHOCOLAT À L\'ANCIENNE', price: '60 DHS' },
      { name: 'CHOCOLAT MARSHMALLOW', price: '60 DHS' },
      { name: 'RUBY PINKY CHOCOLATE', price: '70 DHS' },
    ]
  },
  matcha: {
    title: '🍵 MATCHA',
    items: [
      { name: 'MATCHA LATTE', price: '45 DHS' },
      { name: 'ICED MATCHA LATTE', price: '45 DHS' },
      { name: 'MATCHA VANILLA LATTE', price: '47 DHS' },
      { name: 'MATCHA COCO LATTE', price: '47 DHS' },
      { name: 'DIRTY MATCHA (Matcha + Espresso)', price: '50 DHS' },
      { name: 'ICE MATCHA LAIT', price: '50 DHS' },
      { name: 'ICE MATCHA (CAFÉ + LAIT)', price: '55 DHS' },
    ]
  },
  infusions: {
    title: '🌿 INFUSIONS',
    items: [
      { name: 'THÉ MAROCAIN', price: '30 DHS' },
      { name: 'TISANE', price: '35 DHS' },
      { name: 'INFUSION HIBISCUS', price: '35 DHS' },
    ]
  },
  frappes: {
    title: '🧋 FRAPPÉS',
    items: [
      { name: 'FRAPPÉ CAFÉ', price: '45 DHS' },
      { name: 'FRAPPÉ CARAMEL', price: '47 DHS' },
      { name: 'FRAPPÉ OREO', price: '50 DHS' },
      { name: 'FRAPPÉ NUTELLA', price: '50 DHS' },
      { name: 'FRAPPÉ VANILLE', price: '50 DHS' },
      { name: 'FRAPPÉ KINDER', price: '55 DHS' },
      { name: 'FRAPPÉ LOTUS', price: '55 DHS' },
      { name: 'FRAPPÉ HIBISCUS FRAISE', price: '50 DHS' },
    ]
  },
  mocktails: {
    title: '🍹 MOCKTAILS',
    items: [
      { name: 'MOJITO CLASSIQUE', price: '40 DHS' },
      { name: 'MOJITO FRAISE', price: '45 DHS' },
      { name: 'MOJITO PASSION', price: '45 DHS' },
      { name: 'VIRGIN COLADA', price: '48 DHS' },
      { name: 'LITCHI BLOSSOM', price: '48 DHS' },
      { name: 'SUNSHINE BREEZE (Mangue–Fruits Rouges)', price: '50 DHS' },
      { name: 'LA MADELEINE SIGNATURE', price: '50 DHS' },
      { name: 'HIBISCUS SUNSET', price: '50 DHS' },
    ]
  },
  bubbleTea: {
    title: '🧋 BUBBLE TEA',
    items: [
      { name: 'THÉ NOIR CLASSIQUE', price: '45 DHS' },
      { name: 'MATCHA', price: '47 DHS' },
      { name: 'VANILLE CARAMEL', price: '47 DHS' },
      { name: 'FRAISE LITCHI', price: '47 DHS' },
      { name: 'CHOCOLAT', price: '47 DHS' },
      { name: 'HIBISCUS LITCHI', price: '47 DHS' },
    ]
  },
  bobaDrinks: {
    title: '🥤 BOBA DRINKS',
    items: [
      { name: 'LITCHI ROSE', price: '48 DHS' },
      { name: 'MANGUE PASSION', price: '48 DHS' },
      { name: 'FRAISE KIWI', price: '48 DHS' },
      { name: 'COCO ANANAS', price: '50 DHS' },
      { name: 'PASTÈQUE MENTHE', price: '50 DHS' },
      { name: 'HIBISCUS FRUITS ROUGES', price: '50 DHS' },
    ]
  },
  milkTea: {
    title: '🧋 MILK TEA',
    items: [
      { name: 'CLASSIQUE', price: '45 DHS' },
      { name: 'THÉ VERT JASMIN', price: '47 DHS' },
      { name: 'VANILLE', price: '47 DHS' },
      { name: 'CARAMEL', price: '47 DHS' },
      { name: 'NOISETTE', price: '48 DHS' },
      { name: 'LAVANDE', price: '50 DHS' },
      { name: 'HIBISCUS', price: '50 DHS' },
    ]
  },
  smoothies: {
    title: '🥤 SMOOTHIES',
    items: [
      { name: 'FRAISE BANANE', price: '48 DHS' },
      { name: 'MANGUE ANANAS', price: '48 DHS' },
      { name: 'FRUITS ROUGES', price: '50 DHS' },
      { name: 'GREEN BOOST (kiwi–pomme–menthe)', price: '52 DHS' },
      { name: 'PROTÉINÉ (banane–beurre de cacahuète–lait d\'amande)', price: '55 DHS' },
      { name: 'HIBISCUS FRAMBOISE', price: '52 DHS' },
    ]
  },
  detox: {
    title: '🍃 DÉTOX',
    items: [
      { name: 'GREEN (concombre–citron–gingembre–menthe)', price: '45 DHS' },
      { name: 'ENERGY (carotte–pomme–gingembre)', price: '45 DHS' },
      { name: 'IMMUNITÉ (orange–curcuma–citron)', price: '45 DHS' },
      { name: 'FRAÎCHEUR (pastèque–menthe–citron vert)', price: '45 DHS' },
      { name: 'HIBISCUS & MENTHE', price: '45 DHS' },
    ]
  },
  sodas: {
    title: '🥤 SODAS & EAUX',
    items: [
      { name: 'COCA-COLA / ZERO / SPRITE / SCHWEPPES CITRON / TONIC', price: '25 DHS' },
      { name: 'RED BULL', price: '45 DHS' },
      { name: 'SIDI ALI 75 CL', price: '25 DHS' },
      { name: 'SIDI ALI 50 CL', price: '20 DHS' },
      { name: 'OULMÉS 25 CL', price: '20 DHS' },
      { name: 'OULMÉS 1 L', price: '30 DHS' },
      { name: 'SAN PELLEGRINO 33 CL', price: '35 DHS' },
      { name: 'EAU PÉTILLANTE HIBISCUS', price: '35 DHS' },
    ]
  }
};

const entreesData = {
  assortiments: {
    title: '🧆 ASSORTIMENTS (Pour 1 ou 2 personnes)',
    items: [
      { name: 'Assortiment de salades marocaines (zaalouk, taktouka, carottes au cumin, poivrons grillés, foie mariné à la chermoula, cervelle marinée à la chermoula)', price: '95 MAD 1PRS / 160 2PRS' },
      { name: 'Assortiment de briouates (farcies à la viande hachée, au fromage, aux légumes, aux épinards et saumon, ainsi qu\'au poulet et ananas)', price: '105 MAD 1PRS / 190 2PRS' },
      { name: 'Assortiment Oriental (Houmous, labneh, muhammara, kaba, pain pita)', price: '80 MAD 1PRS / 150 2PRS' },
    ]
  },
  soupes: {
    title: '🍲 SOUPES TRADITIONNELLES',
    items: [
      { name: 'Harira Maison (soupe traditionnelle marocaine, servie avec dattes et chebakia)', price: '65 MAD' },
      { name: 'Barbouche (à base d\'escargots mijotés dans un bouillon épicé aux herbes et épices)', price: '65 MAD' },
    ]
  },
  supplement: {
    title: '🌀 SUPPLÉMENT',
    items: [
      { name: 'Supplément', price: '35 MAD' },
    ]
  }
};

const saladesData = {
  saladesFraiches: {
    title: '🥗 SALADES FRAÎCHES',
    items: [
      { name: 'Salade César (Poulet croustillant, parmesan, croûtons)', price: '79 MAD' },
      { name: 'Salade Burrata (Burrata, tomates cerises, roquette, pesto)', price: '89 MAD' },
      { name: 'Salade Marocaine (Tomates, poivrons, oignons rouges, olives)', price: '69 MAD' },
      { name: 'Salade Océane (Crevettes, avocat, laitue, mangue)', price: '95 MAD' },
    ]
  }
};

const platsData = {
  pates: {
    title: '🍝 PÂTES & RISOTTOS',
    items: [
      { name: 'Spaghetti Bolognaise (Sauce tomate maison, viande hachée)', price: '105 MAD' },
      { name: 'Penne à la Crème de Truffe (Crème truffée, champignons)', price: '119 MAD' },
      { name: 'Raviolis Ricotta & Épinards (Sauce champignons)', price: '115 MAD' },
      { name: 'Risotto Fruits de Mer (Crevettes, calamars, moules)', price: '135 MAD' },
      { name: 'Lasagne (composé de couches de pâtes fraîches, de sauce bolognaise à la viande hachée, de béchamel onctueuse et de fromage gratiné)', price: '125 MAD' },
    ]
  },
  pizzas: {
    title: '🍕 PIZZAS ARTISANALES',
    items: [
      { name: 'Margherita (Tomate, mozzarella, origan)', price: '85 MAD' },
      { name: 'Quatre Fromages (mozzarella, emmental, bleu et parmesan, le tout sur une sauce tomate maison et une pâte fine croustillante)', price: '105 MAD' },
      { name: 'Pizza Kefta Marocaine (Kefta épicée, œuf, olives)', price: '115 MAD' },
      { name: 'Pizza BBQ Chicken (Poulet BBQ, oignons caramélisés)', price: '119 MAD' },
      { name: 'Pizza Fruits de Mer (Calamars, crevettes, moules)', price: '130 MAD' },
      { name: 'Calzone (Toute pizza peut être servie en calzone)', price: '+20 MAD' },
    ]
  },
  grillades: {
    title: '🍢 GRILLADES & BARBECUE (Plat ou sandwich)',
    items: [
      { name: 'Brochettes de Poulet Marocaines (Riz aux herbes & légumes grillés)', price: 'Plat 105 MAD / Sandwich 75 MAD' },
      { name: 'Brochettes de viande (Riz aux herbes & légumes grillés)', price: 'Plat 129 MAD / Sandwich 85 MAD' },
      { name: 'Brochettes de foie (frites maison ou riz safrané, et sauces maison)', price: 'Plat 135 MAD / Sandwich 95 MAD' },
      { name: 'Brochettes de saucisse de foie (frites maison ou riz safrané, et sauces maison)', price: 'Plat 129 MAD / Sandwich 85 MAD' },
      { name: 'Brochettes de saucisse de viande (frites maison ou riz safrané, et sauces maison)', price: 'Plat 109 MAD / Sandwich 80 MAD' },
      { name: 'Côte de Bœuf (300g) (Frites & sauce au poivre)', price: '169 MAD' },
      { name: 'Côtelettes d\'Agneau (Pommes sautées & salade verte)', price: '159 MAD' },
      { name: 'Poisson Grillé (Filet du jour, purée maison & citron confit)', price: '139 MAD' },
      { name: 'Grillade Mixte viande (Brochettes de bœuf, côtelettes d\'agneau, filet de poulet mariné et merguez. Servie avec légumes grillés, frites maison ou riz safrané, et sauces maison.)', price: '169 MAD' },
      { name: 'Grillade Mixte poissons (saumon, filet de poisson blanc, crevette et calamars. Servie avec légumes grillés, frites maison ou riz safrané, et sauces maison.)', price: '179 MAD' },
    ]
  },
  marocaines: {
    title: '🇲🇦 SPÉCIALITÉS MAROCAINES',
    items: [
      { name: 'Tajine de Poulet Citron & Olives (Pain maison)', price: '125 MAD' },
      { name: 'Tajine de Kefta aux Œufs (Sauce tomate, pain chaud)', price: '129 MAD' },
      { name: 'Tajine Makfoul (à base de viande fondante mijotée lentement avec des oignons confits, parfumé à la cannelle et agrémenté d\'une touche de miel)', price: '145 MAD' },
      { name: 'Couscous Royal (Agneau, poulet, merguez)', price: '150 MAD' },
      { name: 'Tangia Marrakchia (Viande mijotée longuement, cumin & citron confit)', price: '140 MAD' },
      { name: 'Chwa d\'agneau (Épaule d\'agneau marinée aux épices lentement rôtie au four. Servie avec ses accompagnements de saison)', price: '240 MAD / kg' },
      { name: 'Rfissa Traditionnelle (Poulet fermier, lentilles, msemen, fenugrec)', price: '145 MAD' },
      { name: 'Saffa Traditionnelle (Cheveux d\'ange cuite à la vapeur servie avec du poulet, des fruits secs ou simplement avec du beurre et du sucre)', price: '95 MAD / Avec poulet 125 MAD' },
      { name: 'Pastilla au Poulet, Ananas & Amandes', price: '129 MAD' },
      { name: 'Pastilla aux Fruits de Mer', price: '129 MAD' },
      { name: 'Pastilla Végétarienne', price: '105 MAD' },
    ]
  },
  enfant: {
    title: '👶 MENU ENFANT',
    items: [
      { name: 'Duo de mini burgers au poulet pané, servis avec des frites', price: '69 MAD' },
      { name: 'Mini Pizza Margherita', price: '49 MAD' },
    ]
  }
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('boissons');

  const renderBoissons = () => {
    return (
      <div className="boissons-container">
        {Object.values(boissonsData).map((category, index) => (
          <div key={index} className="boissons-category">
            <h3 className="boissons-category-title">{category.title}</h3>
            <ul className="boissons-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="boissons-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderEntrees = () => {
    return (
      <div className="boissons-container">
        {Object.values(entreesData).map((category, index) => (
          <div key={index} className="boissons-category">
            <h3 className="boissons-category-title">{category.title}</h3>
            <ul className="boissons-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="boissons-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderSalades = () => {
    return (
      <div className="boissons-container">
        {Object.values(saladesData).map((category, index) => (
          <div key={index} className="boissons-category">
            <h3 className="boissons-category-title">{category.title}</h3>
            <ul className="boissons-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="boissons-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderPlats = () => {
    return (
      <div className="boissons-container">
        {Object.values(platsData).map((category, index) => (
          <div key={index} className="boissons-category">
            <h3 className="boissons-category-title">{category.title}</h3>
            <ul className="boissons-list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="boissons-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

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
        {selectedCategory === 'boissons' && renderBoissons()}
        {selectedCategory === 'salades' && renderSalades()}
        {selectedCategory === 'entrees' && renderEntrees()}
        {selectedCategory === 'plats' && renderPlats()}
        {selectedCategory === 'breakfast' && (
          <ul>{/* Ajoute ici les breakfast */}</ul>
        )}
      </div>
    </div>
  );
}

export default Menu; 