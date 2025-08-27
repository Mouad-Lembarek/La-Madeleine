import './Menu.css';
import { useState } from 'react';

const categories = [
  { key: 'boissons', label: 'Boissons' },
  { key: 'salades', label: 'Salades' },
  { key: 'entrees', label: 'Entrées' },
  { key: 'plats', label: 'Plats' },
  { key: 'breakfast', label: 'Breakfast' },
];

// Icônes pour chaque catégorie
const categoryIcons = {
  cafes: '☕',
  chocolats: '🍫',
  matcha: '🍵',
  infusions: '🌿',
  frappes: '🧋',
  mocktails: '🍹',
  bubbleTea: '🧋',
  bobaDrinks: '🥤',
  milkTea: '🧋',
  smoothies: '🥤',
  detox: '🍃',
  sodas: '🥤',
  saladesFraiches: '🥗',
  assortiments: '🧆',
  soupes: '🍲',
  supplement: '🌀',
  pates: '🍝',
  pizzas: '🍕',
  grillades: '🍢',
  marocaines: '🇲🇦',
  enfant: '👶',
  brunchesMarocains: '🇲🇦',
  breakfastsInternationaux: '🌍',
  aLaCarte: '🍽️'
};

// Mapping des images pour chaque famille de boissons
const familyImages = {
  cafes: '/boissons/cafes-chauds-glaces-famille.png',
  chocolats: encodeURI('/boissons/CHOCOLATS CHAUDS.png'),
  matcha: '/boissons/IMG_1465.png',
  infusions: '/boissons/IMG_1478.png',
  frappes: '/boissons/frappes-famille.png',
  mocktails: '/boissons/MOCKTAILS.png',
  bubbleTea: encodeURI('/boissons/BUBBLE TEA.png'),
  bobaDrinks: encodeURI('/boissons/BOBA DRINKS.png'),
  milkTea: encodeURI('/boissons/MILK TEA.png'),
  smoothies: '/boissons/SMOOTHIES.png',
  detox: '/boissons/detox-famille.png',
  sodas: '/boissons/IMG_1473.png'
};

// Mapping des icônes pour la navigation
const familyIcons = {
  cafes: '/boissons/icons/cafes-chauds-glaces.png',
  chocolats: '/boissons/icons/chocolat-chaud.png',
  matcha: '/boissons/icons/MATCHA.png',
  infusions: '/boissons/icons/INFUSIONS.png',
  frappes: '/boissons/icons/frappes.png',
  mocktails: '/boissons/icons/mocktails.png',
  bubbleTea: '/boissons/icons/bubble-tea.png',
  bobaDrinks: '/boissons/icons/bubble-tea.png',
  milkTea: '/boissons/icons/milk-tea.png',
  smoothies: '/boissons/icons/SMOOTHIES.png',
  detox: '/boissons/icons/detox.png',
  sodas: '/boissons/icons/sodas-eaux.png'
};

const boissonsData = {
  cafes: {
    title: 'CAFÉS CHAUDS & GLACÉS',
    items: [
      { name: 'ESPRESSO', price: '25 DHS', description: 'Café pur et intense, parfait pour commencer la journée' },
      { name: 'AMERICANO', price: '30 DHS', description: 'Espresso allongé avec de l\'eau chaude' },
      { name: 'DOUBLE ESPRESSO', price: '35 DHS', description: 'Double dose d\'intensité café' },
      { name: 'NESPRESSO', price: '30 DHS', description: 'Café capsule premium' },
      { name: 'ESPRESSO MACCHIATO', price: '30 DHS', description: 'Espresso avec une touche de mousse de lait' },
      { name: 'CAFÉ CORTADO', price: '30 DHS', description: 'Espresso avec lait chaud à parts égales' },
      { name: 'CAFÉ CRÈME', price: '35 DHS', description: 'Espresso avec crème fraîche' },
      { name: 'CAPPUCCINO', price: '35 DHS', description: 'Espresso, lait chaud et mousse de lait' },
      { name: 'CAFÉ LATTÉ', price: '35 DHS', description: 'Espresso avec beaucoup de lait chaud' },
      { name: 'LATTE CARAMEL', price: '40 DHS', description: 'Latté avec sirop de caramel', isNew: true },
      { name: 'MOCCA LATTE', price: '40 DHS', description: 'Latté avec chocolat et café' },
      { name: 'CAFÉ ROYAL', price: '40 DHS', description: 'Avec crème fraîche et cognac' },
      { name: 'ICE CAPPUCCINO', price: '45 DHS', description: 'Cappuccino glacé aux saveurs variées' },
      { name: 'ICE COFFEE LATTE', price: '45 DHS', description: 'Latté glacé rafraîchissant' },
      { name: 'ICE SPANISH LATTE', price: '45 DHS', description: 'Latté glacé à l\'espagnole' },
      { name: 'FRAPPUCCINO', price: '45 DHS', description: 'Boisson glacée aux saveurs variées' },
      { name: 'LATTE GLACÉ', price: '45 DHS', description: 'Latté glacé classique' },
    ]
  },
  chocolats: {
    title: 'CHOCOLATS CHAUDS',
    items: [
      { name: 'CHOCOLAT CHAUD', price: '40 DHS', description: 'Chocolat chaud traditionnel' },
      { name: 'CHOCOLAT OREO', price: '50 DHS', description: 'Chocolat avec biscuits Oreo' },
      { name: 'CHOCOLAT BLANC', price: '50 DHS', description: 'Chocolat blanc crémeux' },
      { name: 'CHOCOLAT NUTELLA', price: '50 DHS', description: 'Chocolat avec Nutella' },
      { name: 'CHOCOLAT KITKAT', price: '50 DHS', description: 'Chocolat avec KitKat' },
      { name: 'CHOCOLAT KINDER', price: '55 DHS', description: 'Chocolat avec Kinder', isNew: true },
      { name: 'CHOCOLAT LOTUS', price: '55 DHS', description: 'Chocolat avec spéculoos Lotus' },
      { name: 'CHOCOLAT À L\'ANCIENNE', price: '60 DHS', description: 'Recette traditionnelle' },
      { name: 'CHOCOLAT MARSHMALLOW', price: '60 DHS', description: 'Avec guimauves fondantes' },
      { name: 'RUBY PINKY CHOCOLATE', price: '70 DHS', description: 'Chocolat rubis unique' },
    ]
  },
  matcha: {
    title: 'MATCHA',
    items: [
      { name: 'MATCHA LATTE', price: '45 DHS', description: 'Thé vert matcha avec lait' },
      { name: 'ICED MATCHA LATTE', price: '45 DHS', description: 'Matcha latté glacé' },
      { name: 'MATCHA VANILLA LATTE', price: '47 DHS', description: 'Matcha avec vanille' },
      { name: 'MATCHA COCO LATTE', price: '47 DHS', description: 'Matcha avec noix de coco' },
      { name: 'DIRTY MATCHA', price: '50 DHS', description: 'Matcha + Espresso' },
      { name: 'ICE MATCHA LAIT', price: '50 DHS', description: 'Matcha glacé avec lait' },
      { name: 'ICE MATCHA', price: '55 DHS', description: 'Matcha glacé avec café et lait' },
    ]
  },
  infusions: {
    title: 'INFUSIONS',
    items: [
      { name: 'THÉ MAROCAIN', price: '30 DHS', description: 'Thé à la menthe traditionnel' },
      { name: 'TISANE', price: '35 DHS', description: 'Infusion aux herbes' },
      { name: 'INFUSION HIBISCUS', price: '35 DHS', description: 'Hibiscus rafraîchissant' },
    ]
  },
  frappes: {
    title: 'FRAPPÉS',
    items: [
      { name: 'FRAPPÉ CAFÉ', price: '45 DHS', description: 'Café glacé mixé' },
      { name: 'FRAPPÉ CARAMEL', price: '47 DHS', description: 'Frappé au caramel' },
      { name: 'FRAPPÉ OREO', price: '50 DHS', description: 'Frappé aux biscuits Oreo' },
      { name: 'FRAPPÉ NUTELLA', price: '50 DHS', description: 'Frappé au Nutella' },
      { name: 'FRAPPÉ VANILLE', price: '50 DHS', description: 'Frappé à la vanille' },
      { name: 'FRAPPÉ KINDER', price: '55 DHS', description: 'Frappé Kinder', isNew: true },
      { name: 'FRAPPÉ LOTUS', price: '55 DHS', description: 'Frappé aux spéculoos' },
      { name: 'FRAPPÉ HIBISCUS FRAISE', price: '50 DHS', description: 'Frappé hibiscus-fraise' },
    ]
  },
  mocktails: {
    title: 'MOCKTAILS',
    items: [
      { name: 'MOJITO CLASSIQUE', price: '40 DHS', description: 'Mojito sans alcool' },
      { name: 'MOJITO FRAISE', price: '45 DHS', description: 'Mojito à la fraise' },
      { name: 'MOJITO PASSION', price: '45 DHS', description: 'Mojito à la passion' },
      { name: 'VIRGIN COLADA', price: '48 DHS', description: 'Pina colada sans alcool' },
      { name: 'LITCHI BLOSSOM', price: '48 DHS', description: 'Cocktail litchi floral' },
      { name: 'SUNSHINE BREEZE', price: '50 DHS', description: 'Mangue et fruits rouges' },
      { name: 'LA MADELEINE SIGNATURE', price: '50 DHS', description: 'Création signature', isNew: true },
      { name: 'HIBISCUS SUNSET', price: '50 DHS', description: 'Cocktail hibiscus' },
    ]
  },
  bubbleTea: {
    title: 'BUBBLE TEA',
    items: [
      { name: 'THÉ NOIR CLASSIQUE', price: '45 DHS', description: 'Bubble tea classique' },
      { name: 'MATCHA', price: '47 DHS', description: 'Bubble tea matcha' },
      { name: 'VANILLE CARAMEL', price: '47 DHS', description: 'Vanille et caramel' },
      { name: 'FRAISE LITCHI', price: '47 DHS', description: 'Fraise et litchi' },
      { name: 'CHOCOLAT', price: '47 DHS', description: 'Bubble tea chocolat' },
      { name: 'HIBISCUS LITCHI', price: '47 DHS', description: 'Hibiscus et litchi' },
    ]
  },
  bobaDrinks: {
    title: 'BOBA DRINKS',
    items: [
      { name: 'LITCHI ROSE', price: '48 DHS', description: 'Litchi et rose' },
      { name: 'MANGUE PASSION', price: '48 DHS', description: 'Mangue et passion' },
      { name: 'FRAISE KIWI', price: '48 DHS', description: 'Fraise et kiwi' },
      { name: 'COCO ANANAS', price: '50 DHS', description: 'Noix de coco et ananas' },
      { name: 'PASTÈQUE MENTHE', price: '50 DHS', description: 'Pastèque et menthe' },
      { name: 'HIBISCUS FRUITS ROUGES', price: '50 DHS', description: 'Hibiscus et fruits rouges' },
    ]
  },
  milkTea: {
    title: 'MILK TEA',
    items: [
      { name: 'CLASSIQUE', price: '45 DHS', description: 'Milk tea traditionnel' },
      { name: 'THÉ VERT JASMIN', price: '47 DHS', description: 'Thé vert jasmin' },
      { name: 'VANILLE', price: '47 DHS', description: 'Milk tea vanille' },
      { name: 'CARAMEL', price: '47 DHS', description: 'Milk tea caramel' },
      { name: 'NOISETTE', price: '48 DHS', description: 'Milk tea noisette' },
      { name: 'LAVANDE', price: '50 DHS', description: 'Milk tea lavande' },
      { name: 'HIBISCUS', price: '50 DHS', description: 'Milk tea hibiscus' },
    ]
  },
  smoothies: {
    title: 'SMOOTHIES',
    items: [
      { name: 'FRAISE BANANE', price: '48 DHS', description: 'Fraise et banane' },
      { name: 'MANGUE ANANAS', price: '48 DHS', description: 'Mangue et ananas' },
      { name: 'FRUITS ROUGES', price: '50 DHS', description: 'Mélange de fruits rouges' },
      { name: 'GREEN BOOST', price: '52 DHS', description: 'Kiwi, pomme et menthe' },
      { name: 'PROTÉINÉ', price: '55 DHS', description: 'Banane, beurre de cacahuète, lait d\'amande' },
      { name: 'HIBISCUS FRAMBOISE', price: '52 DHS', description: 'Hibiscus et framboise' },
    ]
  },
  detox: {
    title: 'DÉTOX',
    items: [
      { name: 'GREEN', price: '45 DHS', description: 'Concombre, citron, gingembre, menthe' },
      { name: 'ENERGY', price: '45 DHS', description: 'Carotte, pomme, gingembre' },
      { name: 'IMMUNITÉ', price: '45 DHS', description: 'Orange, curcuma, citron' },
      { name: 'FRAÎCHEUR', price: '45 DHS', description: 'Pastèque, menthe, citron vert' },
      { name: 'HIBISCUS & MENTHE', price: '45 DHS', description: 'Hibiscus et menthe' },
    ]
  },
  sodas: {
    title: 'SODAS & EAUX',
    items: [
      { name: 'COCA-COLA / ZERO / SPRITE / SCHWEPPES CITRON / TONIC', price: '25 DHS', description: 'Boissons gazeuses classiques' },
      { name: 'RED BULL', price: '45 DHS', description: 'Boisson énergisante' },
      { name: 'SIDI ALI 75 CL', price: '25 DHS', description: 'Eau minérale 75cl' },
      { name: 'SIDI ALI 50 CL', price: '20 DHS', description: 'Eau minérale 50cl' },
      { name: 'OULMÉS 25 CL', price: '20 DHS', description: 'Eau minérale 25cl' },
      { name: 'OULMÉS 1 L', price: '30 DHS', description: 'Eau minérale 1L' },
      { name: 'SAN PELLEGRINO 33 CL', price: '35 DHS', description: 'Eau pétillante italienne' },
      { name: 'EAU PÉTILLANTE HIBISCUS', price: '35 DHS', description: 'Eau pétillante aromatisée' },
    ]
  }
};

const entreesData = {
  assortiments: {
    title: 'ASSORTIMENTS',
    items: [
      { name: 'Assortiment de salades marocaines', price: '95 MAD 1PRS / 160 2PRS', description: 'Zaalouk, taktouka, carottes au cumin, poivrons grillés, foie mariné à la chermoula, cervelle marinée à la chermoula' },
      { name: 'Assortiment de briouates', price: '105 MAD 1PRS / 190 2PRS', description: 'Farcies à la viande hachée, au fromage, aux légumes, aux épinards et saumon, ainsi qu\'au poulet et ananas' },
      { name: 'Assortiment Oriental', price: '80 MAD 1PRS / 150 2PRS', description: 'Houmous, labneh, muhammara, kaba, pain pita' },
    ]
  },
  soupes: {
    title: 'SOUPES TRADITIONNELLES',
    items: [
      { name: 'Harira Maison', price: '65 MAD', description: 'Soupe traditionnelle marocaine, servie avec dattes et chebakia' },
      { name: 'Barbouche', price: '65 MAD', description: 'À base d\'escargots mijotés dans un bouillon épicé aux herbes et épices' },
    ]
  },
  supplement: {
    title: 'SUPPLÉMENT',
    items: [
      { name: 'Supplément', price: '35 MAD', description: 'Supplément pour personnaliser votre plat' },
    ]
  }
};

const saladesData = {
  saladesFraiches: {
    title: 'SALADES FRAÎCHES',
    items: [
      { name: 'Salade César', price: '79 MAD', description: 'Poulet croustillant, parmesan, croûtons' },
      { name: 'Salade Burrata', price: '89 MAD', description: 'Burrata, tomates cerises, roquette, pesto' },
      { name: 'Salade Marocaine', price: '69 MAD', description: 'Tomates, poivrons, oignons rouges, olives' },
      { name: 'Salade Océane', price: '95 MAD', description: 'Crevettes, avocat, laitue, mangue' },
    ]
  }
};

const platsData = {
  pates: {
    title: 'PÂTES & RISOTTOS',
    items: [
      { 
        name: 'Spaghetti Bolognaise', 
        price: '105 MAD', 
        components: 'Spaghetti, Sauce bolognaise, Viande hachée de bœuf, Oignons, Carottes, Céleri, Parmesan, Basilic frais',
        description: 'Spaghetti al dente nappés d\'une sauce bolognaise traditionnelle mijotée longuement avec de la viande hachée de bœuf, oignons, carottes et céleri. Garnis de parmesan fraîchement râpé et de feuilles de basilic frais. Un classique italien préparé avec amour.',
        image: '/spaghetti-bolognaise.jpg'
      },
      { 
        name: 'Penne à la Crème de Truffe', 
        price: '119 MAD', 
        components: 'Penne rigate, Sauce crémeuse à la truffe noire, Champignons de Paris, Parmesan affiné, Herbes fraîches',
        description: 'Penne rigate cuites al dente dans une sauce crémeuse à la truffe noire, accompagnées de champignons de Paris sautés et de parmesan affiné. Une expérience gastronomique raffinée aux saveurs boisées et terreuses.',
        image: '/penne-truffe.jpg'
      },
      { 
        name: 'Raviolis Ricotta & Épinards', 
        price: '115 MAD', 
        components: 'Raviolis frais, Ricotta crémeuse, Épinards frais, Sauce aux champignons sauvages, Parmesan, Basilic frais',
        description: 'Raviolis frais farcis à la ricotta crémeuse et aux épinards frais, servis dans une sauce aux champignons sauvages. Garnis de copeaux de parmesan et de feuilles de basilic frais. Une harmonie parfaite entre douceur et fraîcheur.',
        image: '/raviolis-ricotta.jpg'
      },
      { 
        name: 'Risotto Fruits de Mer', 
        price: '135 MAD', 
        components: 'Risotto crémeux, Safran, Crevettes roses, Calamars tendres, Moules de bouchot, Parmesan affiné, Huile d\'olive extra vierge',
        description: 'Risotto crémeux au safran avec un mélange de fruits de mer frais : crevettes roses, calamars tendres et moules de bouchot. Agrémenté de parmesan affiné et d\'un filet d\'huile d\'olive extra vierge. Un voyage gustatif vers la Méditerranée.',
        image: '/spaghetti-bolognaise.jpg'
      },
      { 
        name: 'Lasagne', 
        price: '125 MAD', 
        components: 'Pâtes fraîches, Sauce bolognaise, Viande hachée, Béchamel onctueuse, Fromage gratiné, Parmesan',
        description: 'Lasagne traditionnelle composée de couches de pâtes fraîches, sauce bolognaise riche en viande, béchamel onctueuse et fromage gratiné. Cuite au four jusqu\'à obtenir une croûte dorée et croustillante. Un plat réconfortant par excellence.',
        image: '/penne-truffe.jpg'
      },
    ]
  },
  pizzas: {
    title: 'PIZZAS ARTISANALES',
    items: [
      { name: 'Margherita', price: '85 MAD', description: 'Tomate, mozzarella, origan' },
      { name: 'Quatre Fromages', price: '105 MAD', description: 'Mozzarella, emmental, bleu et parmesan' },
      { name: 'Pizza Kefta Marocaine', price: '115 MAD', description: 'Kefta épicée, œuf, olives' },
      { name: 'Pizza BBQ Chicken', price: '119 MAD', description: 'Poulet BBQ, oignons caramélisés' },
      { name: 'Pizza Fruits de Mer', price: '130 MAD', description: 'Calamars, crevettes, moules' },
      { name: 'Calzone', price: '+20 MAD', description: 'Toute pizza peut être servie en calzone' },
    ]
  },
  grillades: {
    title: 'GRILLADES & BARBECUE',
    items: [
      { name: 'Brochettes de Poulet Marocaines', price: 'Plat 105 MAD / Sandwich 75 MAD', description: 'Riz aux herbes & légumes grillés' },
      { name: 'Brochettes de viande', price: 'Plat 129 MAD / Sandwich 85 MAD', description: 'Riz aux herbes & légumes grillés' },
      { name: 'Brochettes de foie', price: 'Plat 135 MAD / Sandwich 95 MAD', description: 'Frites maison ou riz safrané, et sauces maison' },
      { name: 'Brochettes de saucisse de foie', price: 'Plat 129 MAD / Sandwich 85 MAD', description: 'Frites maison ou riz safrané, et sauces maison' },
      { name: 'Brochettes de saucisse de viande', price: 'Plat 109 MAD / Sandwich 80 MAD', description: 'Frites maison ou riz safrané, et sauces maison' },
      { name: 'Côte de Bœuf (300g)', price: '169 MAD', description: 'Frites & sauce au poivre' },
      { name: 'Côtelettes d\'Agneau', price: '159 MAD', description: 'Pommes sautées & salade verte' },
      { name: 'Poisson Grillé', price: '139 MAD', description: 'Filet du jour, purée maison & citron confit' },
      { name: 'Grillade Mixte viande', price: '169 MAD', description: 'Brochettes de bœuf, côtelettes d\'agneau, filet de poulet mariné et merguez' },
      { name: 'Grillade Mixte poissons', price: '179 MAD', description: 'Saumon, filet de poisson blanc, crevette et calamars' },
    ]
  },
  marocaines: {
    title: 'SPÉCIALITÉS MAROCAINES',
    items: [
      { name: 'Tajine de Poulet Citron & Olives', price: '125 MAD', description: 'Pain maison' },
      { name: 'Tajine de Kefta aux Œufs', price: '129 MAD', description: 'Sauce tomate, pain chaud' },
      { name: 'Tajine Makfoul', price: '145 MAD', description: 'Viande fondante mijotée lentement avec des oignons confits, parfumé à la cannelle et agrémenté d\'une touche de miel' },
      { name: 'Couscous Royal', price: '150 MAD', description: 'Agneau, poulet, merguez' },
      { name: 'Tangia Marrakchia', price: '140 MAD', description: 'Viande mijotée longuement, cumin & citron confit' },
      { name: 'Chwa d\'agneau', price: '240 MAD / kg', description: 'Épaule d\'agneau marinée aux épices lentement rôtie au four' },
      { name: 'Rfissa Traditionnelle', price: '145 MAD', description: 'Poulet fermier, lentilles, msemen, fenugrec' },
      { name: 'Saffa Traditionnelle', price: '95 MAD / Avec poulet 125 MAD', description: 'Cheveux d\'ange cuite à la vapeur servie avec du poulet, des fruits secs ou simplement avec du beurre et du sucre' },
      { name: 'Pastilla au Poulet, Ananas & Amandes', price: '129 MAD', description: 'Pastilla traditionnelle' },
      { name: 'Pastilla aux Fruits de Mer', price: '129 MAD', description: 'Pastilla aux fruits de mer' },
      { name: 'Pastilla Végétarienne', price: '105 MAD', description: 'Pastilla végétarienne' },
    ]
  },
  enfant: {
    title: 'MENU ENFANT',
    items: [
      { name: 'Duo de mini burgers au poulet pané', price: '69 MAD', description: 'Servis avec des frites' },
      { name: 'Mini Pizza Margherita', price: '49 MAD', description: 'Pizza miniature pour les enfants' },
    ]
  }
};

const breakfastData = {
  brunches: {
    title: 'BRUNCHS',
    items: [
      { 
        name: 'Brunch Évasion Nordique', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange frais, Tartine aux graines, Cream cheese, Saumon fumé, Guacamole maison, Œufs pochés, Sauce hollandaise, Quiche aux épinards, Yaourt grec, Granola, Fruits frais',
        description: 'Une expérience nordique raffinée avec une tartine aux graines garnie de cream cheese et saumon fumé, accompagnée d\'œufs pochés et sauce hollandaise. Complété par une quiche aux épinards et un yaourt grec avec granola et fruits frais.',
        image: '/breakfast-nordique.jpg'
      },
      { 
        name: 'Brunch Napoli', 
        price: '135 DHS', 
        components: 'Boisson chaude & jus détox, Salade César, Trio de bruschettas, Tomate & basilic, Burrata & réduction de balsamique, Version à la Norma, Verrine de tiramisu',
        description: 'Un voyage culinaire en Italie avec une salade César classique et un trio de bruschettas : tomate & basilic, burrata avec réduction de balsamique, et version à la Norma. Terminé par une verrine de tiramisu délicate.',
        image: '/breakfast-napoli.jpg'
      },
      { 
        name: 'Brunch Bagel Royal', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange, Bagel aux céréales, Laitue, Œufs au plat ou brouillés, Pastrami, Sauce aïoli, Muffin, Yaourt maison, Salade de fruits frais',
        description: 'Un brunch royal avec un bagel aux céréales garni de laitue, œufs au choix, pastrami et sauce aïoli. Accompagné d\'un muffin, yaourt maison et une salade de fruits frais pour une expérience complète.',
        image: '/breakfast-bagel.jpg'
      },
      { 
        name: 'Brunch Nature & Harmonie', 
        price: '135 DHS', 
        components: 'Boisson chaude & jus détox, Salade mixte, Gaufre à la farine d\'amande, Omelette au choix, Bowl de yaourt nature, Granola maison, Fruits frais, Verrine de graines de chia',
        description: 'Un brunch équilibré et harmonieux avec une salade mixte, une gaufre à la farine d\'amande et une omelette au choix. Complété par un bowl de yaourt nature avec granola maison, fruits frais et une verrine de graines de chia.',
        image: '/breakfast-nature.jpg'
      },
      { 
        name: 'Brunch Soleil du Sud', 
        price: '135 DHS', 
        components: 'Boisson chaude & jus d\'orange, Soupe blanche, Tajine de khlii, Assortiment de pains et galettes, Batbout, Harcha, Msemen, Chfenj, Beurre & miel, Baghrir, Amlou, Fruits frais, Raib à l\'huile d\'argan, Fruits secs',
        description: 'Un brunch aux saveurs du sud avec une soupe blanche et un tajine de khlii traditionnel. Accompagné d\'un assortiment de pains et galettes : batbout, harcha, msemen et chfenj. Terminé par du baghrir avec amlou et un raib à l\'huile d\'argan.',
        image: '/breakfast-soleil.jpg'
      },
      { 
        name: 'Le Croissant Bénédictin', 
        price: '100 DHS', 
        components: 'Boisson chaude & jus d\'orange, Croissant salé artisanal, Œufs brouillés, Jambon de dinde, Cream cheese, Cake, Yaourt & fruits frais',
        description: 'Un croissant salé artisanal garni d\'œufs brouillés, jambon de dinde et cream cheese. Accompagné d\'un cake, yaourt et fruits frais pour un petit déjeuner complet et savoureux.',
        image: '/breakfast-croissant.jpg'
      },
      { 
        name: '🇺🇸 La Belle Américaine', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange, Salade Cobb, Toast gratiné, Bacon halal, Saucisse, Œufs au plat, Champignons poêlés, Tomates confites, Hash browns, Pancakes au sirop d\'érable, Yaourt au granola, Fruits frais',
        description: 'Un brunch américain authentique avec une salade Cobb et un toast gratiné garni de bacon halal, saucisse, œufs au plat, champignons poêlés et tomates confites. Complété par des pancakes au sirop d\'érable et un yaourt au granola.',
        image: '/breakfast-americaine.jpg'
      },
      { 
        name: 'French Toast Chic', 
        price: '135 DHS', 
        components: 'Boisson chaude & jus d\'orange, Salade mixte, Croque-monsieur ou croque-madame, Tomates à la provençale, Mini-viennoiseries, Verrine de yaourt au miel, Fruits rouges',
        description: 'Un brunch chic avec une salade mixte et un croque-monsieur ou croque-madame accompagné de tomates à la provençale. Complété par des mini-viennoiseries et une verrine de yaourt au miel avec fruits rouges.',
        image: '/breakfast-french-toast.jpg'
      }
    ]
  }
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('boissons');

    // Fonction pour rendre les boissons avec design famille
  const renderDrinksMenuItems = (data) => {
    const scrollToFamily = (familyKey) => {
      const element = document.getElementById(`family-${familyKey}`);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return (
      <div className="boissons-container">
        {/* Navigation rapide des familles */}
        <div className="family-navigation">
          <h3 className="family-nav-title">Navigation Rapide</h3>
          <div className="family-nav-grid">
            {Object.entries(data).map(([key, category]) => (
              <button
                key={key}
                className="family-nav-btn"
                onClick={() => scrollToFamily(key)}
                title={category.title}
              >
                <img 
                  src={familyIcons[key]} 
                  alt={category.title}
                  className="family-nav-icon"
                />
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="boissons-list">
          {Object.entries(data).map(([key, category]) => (
            <li key={key} id={`family-${key}`} className="drink-family">
              {/* Header de la famille avec image */}
              <div className="family-header">
                <div className="family-content">
                  <h2 className="family-title">{category.title}</h2>
                  <p className="family-subtitle">
                    {category.items.length} boisson{category.items.length > 1 ? 's' : ''} disponible{category.items.length > 1 ? 's' : ''}
                  </p>
                </div>
                <img 
                  src={familyImages[key]} 
                  alt={category.title}
                  className="family-bg-image"
                />
              </div>
              
              {/* Menu des boissons de la famille */}
              <div className="family-menu">
                <div className="family-items-grid">
                  {category.items.map((item, index) => (
                    <div key={index} className="family-item">
                      {item.isNew && <div className="new-badge">NEW</div>}
                      <div className="family-item-name">{item.name}</div>
                      <div className="family-item-price">{item.price}</div>
                      <div className="family-item-description">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Fonction pour rendre les autres menus avec design original (breakfast, plats, etc.)
  const renderMenuItems = (data) => {
    return (
      <div className="boissons-container">
        {Object.entries(data).map(([key, category]) => (
          <div key={key} className="boissons-category">
            <h3 className="boissons-category-title">{category.title}</h3>
            <ul className="boissons-list">
              {category.items.map((item, index) => (
                <li key={index} className="boissons-item">
                  {item.isNew && <div className="new-badge">NEW</div>}
                  <div className="item-main">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-content">
                      <div className="item-content-main">
                        <div className="item-name">{item.name}</div>
                        <div className="item-components">{item.components}</div>
                        <div className="item-description">{item.description}</div>
                      </div>
                      <div className="item-price">{item.price}</div>
                    </div>
                  </div>
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
      <div className="menu-header">
        <div className="menu-brand">La Madeleine</div>
        <h1 className="menu-title">Menu</h1>
      </div>
      
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
        {selectedCategory === 'boissons' && renderDrinksMenuItems(boissonsData)}
        {selectedCategory === 'salades' && renderMenuItems(saladesData)}
        {selectedCategory === 'entrees' && renderMenuItems(entreesData)}
        {selectedCategory === 'plats' && renderMenuItems(platsData)}
        {selectedCategory === 'breakfast' && renderMenuItems(breakfastData)}
      </div>
    </div>
  );
}

export default Menu; 
