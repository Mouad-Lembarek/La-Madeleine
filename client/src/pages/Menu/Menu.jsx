import './Menu.css';
import { useState, useEffect } from 'react';

const categories = [
  { key: 'boissons', label: 'Boissons' },
  { key: 'petit-dejeuner-brunch', label: 'Petit-déjeuner & Brunch' },
  { key: 'dejeuner-diner', label: 'Déjeuner & Dîner' },
  { key: 'gouter', label: 'Goûter' },
  { key: 'sucres', label: 'Sucrés' },
];

// Icônes pour chaque catégorie
const categoryIcons = {
  cafes: '☕',
  chocolats: '🍫',
  matcha: '🍵',
  infusions: '🌿',
  frappes: '🧋',
  mocktails: '🍹',
  bobaDrinks: '🥤',
  milkTea: '🧋',
  smoothies: '🥤',
  detox: '🍃',
  jus: '🥤',
  sodas: '🥤',
  milkShake: '🥤',
  orangeShake: '🥤',
  bubbleThe: '🧋',
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
  aLaCarte: '🍽️',
  petitDejeuner: '🥐',
  brunchs: '🍳',
  salade: '🥗',
  entrees: '🍽️',
  specialiteMarocaine: '🇲🇦',
  grillades: '🍢',
  poulet: '🍗',
  poisson: '🐟',
  pizza: '🍕',
  patesRiz: '🍝',
  menuEnfant: '👶',
  crepesGaufres: '🥞',
  glaces: '🍦',
  sucres: '🍰'
};

// Mapping des images pour chaque famille de boissons
const familyImages = {
  cafes: '/boissons/cafes-chauds-glaces-famille.png',
  chocolats: encodeURI('/boissons/CHOCOLATS CHAUDS.png'),
  matcha: '/boissons/IMG_1465.png',
  infusions: '/boissons/Infusions.png',
  frappes: '/boissons/frappes-famille.png',
  mocktails: '/boissons/MOCKTAILS.png',
  bobaDrinks: encodeURI('/boissons/BOBA DRINKS.png'),
  milkTea: encodeURI('/boissons/MILK TEA.png'),
  smoothies: '/boissons/SMOOTHIES.png',
  detox: '/boissons/detox-famille.png',
  jus: '/boissons/Jus.png',
  sodas: '/boissons/Soda&eaux.png',
  milkShake: '/boissons/IMG_1473.png',
  orangeShake: '/boissons/ORANGE SHAKE.png',
  bubbleThe: encodeURI('/boissons/BUBBLE TEA.png'),
  petitDejeuner: '/Petit_dejeuner.png',
  brunchs: '/brunch.png',
  salade: '/salade.png',
  entrees: '/Entrees.png',
  specialiteMarocaine: '/specialites.png',
  grillades: '/grillades.png',
  poulet: '/poulet_frit.png',
  poisson: '/poisson.png',
  pizza: '/pizza.png',
  patesRiz: '/spaghetti.png',
  menuEnfant: '/Menu_enfant.png',
  crepesGaufres: '/Crepes_Gaufres .png',
  glaces: '/Glaces.png',
  sucres: '/Crepes_Gaufres .png',
  volaille: '/poulet_frit.png',
  viandes: '/grillades.png',
  burgers: '/pizza.png',
  desserts: '/Glaces.png',
  specialites: '/speciality.png',
  bubbleWaffle: '/Bubble_Cones.png',
  crepes: '/Crepes_Gaufres .png',
  pancakes: '/pancake.png',
  puffPastry: '/cake.png',
  toShare: '/pizza.png',
  sticks: '/pizza.png',
  brookie: '/cake.png',
  cups: '/Glaces.png',
  cakes: '/cake.png'
};

// Mapping des icônes pour la navigation
const familyIcons = {
  cafes: '/boissons/icons/cafes-chauds-glaces.png',
  chocolats: '/boissons/icons/chocolat-chaud.png',
  matcha: '/boissons/icons/MATCHA.png',
  infusions: '/boissons/icons/INFUSIONS.png',
  frappes: '/boissons/icons/frappes.png',
  mocktails: '/boissons/icons/mocktails.png',
  bobaDrinks: '/boissons/icons/bubble-tea.png',
  milkTea: '/boissons/icons/milk-tea.png',
  smoothies: '/boissons/icons/SMOOTHIES.png',
  detox: '/boissons/icons/detox.png',
  jus: '/boissons/icons/sodas-eaux.png',
  sodas: '/boissons/icons/sodas-eaux.png',
  milkShake: '/boissons/icons/sodas-eaux.png',
  orangeShake: '/boissons/icons/sodas-eaux.png',
  bubbleThe: '/boissons/icons/bubble-tea.png',
  petitDejeuner: '/Petit_dejeuner.png',
  brunchs: '/brunch.png',
  salade: '/salade.png',
  entrees: '/Entrees.png',
  specialiteMarocaine: '/specialites.png',
  grillades: '/grillades.png',
  poulet: '/poulet_frit.png',
  poisson: '/poisson.png',
  pizza: '/pizza.png',
  patesRiz: '/spaghetti.png',
  menuEnfant: '/Menu_enfant.png',
  crepesGaufres: '/Crepes_Gaufres .png',
  glaces: '/Glaces.png',
  sucres: '/Crepes_Gaufres .png',
  volaille: '/poulet_frit.png',
  viandes: '/grillades.png',
  burgers: '/pizza.png',
  desserts: '/Glaces.png',
  specialites: '/speciality.png',
  bubbleWaffle: '/Bubble_Cones.png',
  crepes: '/Crepes_Gaufres .png',
  pancakes: '/pancake.png',
  puffPastry: '/cake.png',
  toShare: '/pizza.png',
  sticks: '/pizza.png',
  brookie: '/cake.png',
  cups: '/Glaces.png',
  cakes: '/cake.png'
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
      { name: 'LATTE CARAMEL', price: '40 DHS', description: 'Latté avec sirop de caramel' },
      { name: 'MOCCA LATTE', price: '40 DHS', description: 'Latté avec chocolat et café' },
      { name: 'CAFÉ ROYAL', price: '40 DHS', description: 'Avec crème fraîche' },
      { name: 'ICE CAPPUCCINO', price: '45 DHS', description: 'Cappuccino glacé (caramel, chocolat, vanille)' },
      { name: 'ICE COFFEE LATTE', price: '45 DHS', description: 'Latté glacé rafraîchissant' },
      { name: 'ICE SPANISH LATTE', price: '45 DHS', description: 'Latté glacé à l\'espagnole' },
      { name: 'FRAPPUCCINO', price: '45 DHS', description: 'Boisson glacée (chocolat, vanille, caramel, fraise)' },
      { name: 'BETTERAVE LATTE', price: '55 DHS', description: 'Lait onctueux et douceur de betterave pour une boisson colorée, saine et réconfortante' },
    ]
  },
  chocolats: {
    title: 'CHOCOLATS CHAUDS',
    items: [
      { name: 'CHOCOLAT AU LAIT', price: '35 DHS', description: 'Chocolat au lait' },
      { name: 'CHOCOLAT À L\'ANCIENNE', price: '50 DHS', description: 'Recette traditionnelle' },
      { name: 'CHOCOLAT BLANC', price: '50 DHS', description: 'Chocolat blanc crémeux' },
      { name: 'CHOCOLAT NUTELLA', price: '55 DHS', description: 'Chocolat avec Nutella' },
      { name: 'CHOCOLAT KITKAT', price: '55 DHS', description: 'Chocolat avec KitKat' },
      { name: 'CHOCOLAT KINDER', price: '55 DHS', description: 'Chocolat avec Kinder', isNew: true },
      { name: 'CHOCOLAT LOTUS', price: '55 DHS', description: 'Chocolat avec spéculoos Lotus' },
      { name: 'CHOCOLAT OREO', price: '55 DHS', description: 'Chocolat avec biscuits Oreo' },
      { name: 'CHOCOLAT MARSHMALLOW', price: '60 DHS', description: 'Avec guimauves fondantes' },
      { name: 'RUBY PINKY CHOCOLATE', price: '70 DHS', description: 'Chocolat rubis unique' },
    ]
  },
  matcha: {
    title: 'MATCHA - CONVENTIONNEL / BIO',
    items: [
      { name: 'VIRGIN MATCHA', price: '45 DHS / 95 DHS', description: 'Matcha pur traditionnel' },
      { name: 'HOT or ICED MATCHA LATTE', price: '45 DHS / 85 DHS', description: 'Thé vert matcha avec lait ou boisson végétale' },
      { name: 'STRAWBERRY MATCHA LATTE', price: '50 DHS / 95 DHS', description: 'Une base de purée de fraise, du lait (ou boisson végétale) et de poudre de matcha vert fouettée' },
      { name: 'MATCHA VANILLA LATTE', price: '50 DHS / 95 DHS', description: 'Matcha avec vanille' },
      { name: 'MATCHA COCO LATTE', price: '50 DHS / 95 DHS', description: 'Matcha avec noix de coco' },
      { name: 'DIRTY MATCHA', price: '50 DHS / 95 DHS', description: 'Matcha + Espresso' },
      { name: 'MANGO MATCHA LATTE', price: '50 DHS / 95 DHS', description: 'Ice matcha combine la douceur fruitée de la mangue' },
      { name: 'OREO MATCHA LATTE', price: '50 DHS / 95 DHS', description: 'Combine les saveurs terreuses et végétales du matcha avec le goût sucré et chocolaté des biscuits OREO' },
      { name: 'YUZU MATCHA LATTE', price: '50 DHS / 95 DHS', description: 'mélangeant les saveurs légèrement amères du thé matcha avec les notes vives, florales et acidulées de l\'agrume japonais, le yuzu' },
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
      { name: 'LA MADELEINE SIGNATURE', price: '50 DHS', description: 'Création signature du restaurant' },
      { name: 'MOJITO CLASSIQUE', price: '40 DHS', description: 'Mojito sans alcool' },
      { name: 'MOJITO FRAISE', price: '45 DHS', description: 'Mojito à la fraise' },
      { name: 'MOJITO PASSION', price: '45 DHS', description: 'Mojito à la passion' },
      { name: 'VIRGIN COLADA', price: '48 DHS', description: 'Pina colada sans alcool' },
      { name: 'LITCHI BLOSSOM', price: '48 DHS', description: 'Cocktail litchi floral' },
      { name: 'SUNSHINE BREEZE', price: '50 DHS', description: 'Mangue et fruits rouges' },
      { name: 'HIBISCUS SUNSET', price: '50 DHS', description: 'Cocktail hibiscus' },
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
  jus: {
    title: 'JUS',
    items: [
      { name: 'Jus d\'orange', price: '30 DHS', description: 'Jus d\'orange frais pressé' },
      { name: 'Jus de carotte', price: '35 DHS', description: 'Jus de carotte naturel' },
      { name: 'Jus de citron', price: '35 DHS', description: 'Jus de citron frais' },
      { name: 'Jus de concombre', price: '35 DHS', description: 'Jus de concombre rafraîchissant' },
      { name: 'Jus de banane', price: '40 DHS', description: 'Jus de banane crémeux' },
      { name: 'Jus de pomme', price: '45 DHS', description: 'Jus de pomme naturel' },
      { name: 'Jus de fraise', price: '40 DHS', description: 'Jus de fraise sucré' },
      { name: 'Jus de passion', price: '40 DHS', description: 'Jus de fruit de la passion' },
      { name: 'Avocat fruits secs', price: '60 DHS', description: 'Smoothie avocat aux fruits secs' },
      { name: 'Jus de kiwi', price: '45 DHS', description: 'Jus de kiwi vitaminé' },
      { name: 'Citronnade gingembre', price: '45 DHS', description: 'Citronnade au gingembre' },
      { name: 'Jus d\'avocat', price: '45 DHS', description: 'Jus d\'avocat crémeux' },
      { name: 'Jus d\'ananas', price: '45 DHS', description: 'Jus d\'ananas tropical' },
      { name: 'Jus de mangue', price: '45 DHS', description: 'Jus de mangue exotique' },
    ]
  },
  milkShake: {
    title: 'MILK SHAKE',
    items: [
      { name: 'MILK SHAKE OREO', price: '65 DHS', description: 'Milk shake aux biscuits Oreo' },
      { name: 'MILK SHAKE CHOCOLAT', price: '65 DHS', description: 'Milk shake au chocolat' },
      { name: 'MILK SHAKE CARAMEL', price: '65 DHS', description: 'Milk shake au caramel' },
      { name: 'MILK SHAKE KINDER', price: '65 DHS', description: 'Milk shake Kinder' },
      { name: 'MILK SHAKE SNICKERS', price: '65 DHS', description: 'Milk shake Snickers' },
      { name: 'MILK SHAKE RAFFAELLO', price: '65 DHS', description: 'Milk shake Raffaello' },
      { name: 'MILK SHAKE FERRERO', price: '65 DHS', description: 'Milk shake Ferrero' },
      { name: 'MILK SHAKE MANGUE', price: '65 DHS', description: 'Milk shake à la mangue' },
      { name: 'MILK SHAKE FRAISE', price: '65 DHS', description: 'Milk shake à la fraise' },
      { name: 'MILK SHAKE FRAMBOISE', price: '65 DHS', description: 'Milk shake à la framboise' },
      { name: 'MILK SHAKE BLUE BERRY', price: '65 DHS', description: 'Milk shake aux myrtilles' },
    ]
  },
  orangeShake: {
    title: 'ORANGE SHAKE',
    items: [
      { name: 'ORANGE SHAKE FRAISE', price: '70 DHS', description: 'Orange shake à la fraise' },
      { name: 'ORANGE SHAKE FRAMBOISE', price: '70 DHS', description: 'Orange shake à la framboise' },
      { name: 'ORANGE SHAKE MANGUE', price: '70 DHS', description: 'Orange shake à la mangue' },
      { name: 'ORANGE SHAKE BLUE BERRY', price: '70 DHS', description: 'Orange shake aux myrtilles' },
    ]
  },
  bubbleThe: {
    title: 'BUBBLE THE',
    items: [
      { name: 'THÉ NOIR CLASSIQUE', price: '45 DHS', description: 'Thé noir classique' },
      { name: 'BLACK THE MATCHA', price: '47 DHS', description: 'Thé noir matcha' },
      { name: 'VANILLE CARAMEL', price: '47 DHS', description: 'Vanille caramel' },
      { name: 'FRAISE LITCHI', price: '47 DHS', description: 'Fraise litchi' },
      { name: 'CHOCOLAT', price: '47 DHS', description: 'Bubble tea chocolat' },
      { name: 'HIBISCUS LITCHI', price: '47 DHS', description: 'Hibiscus litchi' },
      { name: 'FRUIT PASSION', price: '47 DHS', description: 'Fruit de la passion' },
      { name: 'MANGUE', price: '47 DHS', description: 'Bubble tea mangue' },
      { name: 'FRAISE', price: '47 DHS', description: 'Bubble tea fraise' },
      { name: 'PEACHE', price: '47 DHS', description: 'Bubble tea pêche' },
      { name: 'BLUEBERRY', price: '47 DHS', description: 'Bubble tea myrtille' },
      { name: 'LITCHI', price: '47 DHS', description: 'Bubble tea litchi' },
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
    title: 'ENTRÉES / APÉRITIFS (1 ou 2 pers.)',
    items: [
      { name: 'Assortiment de Salades Marocaines', price: '95 MAD / 160 MAD', description: 'Zaalouk, taktouka, carottes au cumin, poivrons grillés, lentilles mijotées avec de la viande séchée, Haricots blancs parfumés au cumin et au citron confit' },
      { name: 'Assortiment de Briouates Maison', price: '105 MAD / 190 MAD', description: 'Viande hachée, fromage, légumes, épinards-saumon, poulet-ananas' },
      { name: 'Assortiment Oriental', price: '80 MAD / 150 MAD', description: 'Houmous, labneh, muhammara, kébbé, BABA GHANOUCH, feuilles de vigne farcies au riz, Houmous de betterave' },
      { name: 'Assortiment de Bruschettas', price: '85 MAD / 160 MAD', description: 'Tomates basilic, mozzarella, variations gourmandes' },
      { name: 'Pulpo a la Gallega', price: '85 MAD / 160 MAD', description: 'Poulpe tendre, pommes de terre, paprika fumé' },
      { name: 'Gambas al Ajillo', price: '70 MAD / 130 MAD', description: 'Crevettes à l\'ail, HUILE D\'OLIVE, TOMATE CERISE, BASILIQUE, CRÈME FRAICHE' },
      { name: 'Gambas Pil Pil', price: '70 MAD / 130 MAD', description: 'Crevettes sautées à l\'huile d\'olive, ail & piment' },
      { name: 'Harira Maison', price: '65 MAD', description: 'Soupe traditionnelle servie avec dattes & chebakia & ŒUF' },
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
    title: 'SALADES',
    items: [
      { name: 'César au Poulet Croustillant', price: '79 MAD', description: 'Parmesan, croûtons, sauce maison' },
      { name: 'César aux Gambas Grillées', price: '95 MAD', description: 'Gambas marinées, citron, parmesan' },
      { name: 'Burrata & Fruits de Saison', price: '89 MAD', description: 'Roquette, burrata crémeuse, fruits frais, FRUITS SEC, SAUCE VAINIGRETE' },
      { name: 'Chèvre Chaud au Miel', price: '85 MAD', description: 'Mesclun, noix caramélisées' },
      { name: 'Salade quinoa', price: '85 MAD', description: 'quinoa, mangue, avocat, tomates séchées, miel moutarde FRUITS SEC' },
      { name: 'Salade Bistrot', price: '85 MAD', description: 'Mesclun, Thon, tomate, avocat, roquette, parmesan' },
      { name: 'Salade Marocaine', price: '75 MAD', description: 'Tomates, poivrons, oignons rouges, olives' },
    ]
  }
};

const platsData = {
  pates: {
    title: 'PÂTES',
    items: [
      { 
        name: 'Bolognaise', 
        price: '130 MAD', 
        components: 'Sauce tomate maison, viande hachée',
        description: 'Sauce bolognaise traditionnelle mijotée longuement avec de la viande hachée de bœuf, oignons, carottes et céleri.',
        image: '/Plats/Spaghetti_la bolanoise.png'
      },
      { 
        name: 'Fruits de Mer', 
        price: '160 MAD', 
        components: 'Crevettes, calamars, moules',
        description: 'Pâtes fraîches aux fruits de mer avec crevettes, calamars et moules.',
        image: '/Plats/Pattes_Fruits_de_Mer.png'
      },
      { 
        name: 'ALFREDO - Poulet & Champignons', 
        price: '120 MAD', 
        components: 'Poulet, champignons, sauce alfredo',
        description: 'Pâtes à la sauce alfredo avec poulet et champignons.',
      },
      { 
        name: 'Crème de Truffe & Champignons', 
        price: '170 MAD', 
        components: 'Crème de truffe, champignons',
        description: 'Pâtes à la crème de truffe et champignons.',
      },
      { 
        name: 'Sicilienne', 
        price: '140 MAD', 
        components: 'Câpres, anchois, olives, sauce tomate',
        description: 'Pâtes à la sicilienne avec câpres, anchois et olives.',
      },
      { 
        name: 'Crème de Pesto', 
        price: '130 MAD', 
        components: 'Basilic & courgettes',
        description: 'Pâtes à la crème de pesto avec basilic et courgettes.',
      },
      { 
        name: 'Primavera', 
        price: '120 MAD', 
        components: 'Légumes de saison, crème fraîche ou ail & huile d\'olive',
        description: 'Pâtes aux légumes de saison avec crème fraîche ou ail et huile d\'olive.',
      },
      { 
        name: 'Raviolis Ricotta & Épinards', 
        price: '140 MAD', 
        components: 'Raviolis frais, Ricotta crémeuse, Épinards frais',
        description: 'Raviolis frais farcis à la ricotta crémeuse et aux épinards frais.',
        image: '/Plats/Raviolis_ricotta_epinards.png'
      },
      { 
        name: 'Lasagne Maison Bolognaise gratinée', 
        price: '130 MAD', 
        components: 'Lasagne, sauce bolognaise, béchamel, fromage',
        description: 'Lasagne maison gratinée à la bolognaise.',
      },
      { 
        name: 'Risotto aux Fruits de Mer', 
        price: '160 MAD', 
        components: 'Risotto, fruits de mer, crème de bisque',
        description: 'Risotto aux fruits de mer avec crème de bisque.',
      },
      { 
        name: 'Risotto à la Crème de Truffe & Champignons', 
        price: '170 MAD', 
        components: 'Risotto, crème de truffe, champignons',
        description: 'Risotto à la crème de truffe et champignons.',
      },
      { 
        name: 'Risotto Nero (à l\'encre de seiche)', 
        price: '190 MAD', 
        components: 'Risotto, encre de seiche, Gambas & courgettes',
        description: 'Risotto à l\'encre de seiche avec gambas et courgettes.',
        image: '/Plats/Risotto_nero_encre_seiche.png'
      },
    ]
  },
  volaille: {
    title: '🍗 VOLAILLE & RECETTES DU MONDE (2 garnitures : riz, légumes, purée, pâtes ou salade)',
    items: [
      { name: 'Émincés de Poulet aux Champignons', price: '110 MAD', description: 'Émincés de poulet tendre aux champignons sautés' },
      { name: 'Poulet à la Florentine (épinards & mozzarella)', price: '120 MAD', description: 'Poulet pané aux épinards et mozzarella fondante' },
      { name: 'Suprême de Poulet à la crème du Truffe', price: '180 MAD', description: 'Suprême de poulet nappé d\'une crème de truffe délicate' },
      { name: 'Poulet Parmigiana gratiné', price: '140 MAD', description: 'Poulet pané gratiné à la parmigiana' },
      { name: 'Escalope Milanaise', price: '100 MAD', description: 'Escalope de poulet panée à la milanaise' },
    ]
  },
  pizzas: {
    title: 'PIZZAS',
    items: [
      { 
        name: 'Margherita', 
        price: '85 MAD', 
        components: 'Tomate, Mozzarella, Basilic frais, Huile d\'olive',
        description: 'La pizza classique italienne avec une base de tomate, mozzarella fraîche et basilic. Simple et délicieuse.',
        image: '/Plats/Pizzas/Margherita.png'
      },
      { 
        name: 'Pizza Cinq Fromages', 
        price: '130 MAD', 
        components: 'Mozzarella, Emmental, Bleu, Parmesan, Chèvre',
        description: 'Une pizza généreuse avec cinq fromages différents pour une explosion de saveurs fromagères.',
        image: '/Plats/Pizzas/Pizza_cinq_fromage.png'
      },
      { 
        name: 'Pizza La Madeleine', 
        price: '180 MAD', 
        components: 'Sauce tomate, Mozzarella, Jambon, Champignons, Olives',
        description: 'Notre pizza signature avec jambon, champignons et olives. Une création unique de La Madeleine.',
        image: '/Plats/Pizzas/Pizza_Madeleine.png'
      },
      { 
        name: 'BBQ Chicken Pizza', 
        price: '135 MAD', 
        components: 'Poulet grillé, Sauce BBQ, Oignons caramélisés, Mozzarella',
        description: 'Pizza au poulet grillé avec sauce BBQ maison et oignons caramélisés. Un mélange sucré-salé irrésistible.',
        image: '/Plats/Pizzas/BBQ_Chicken_Pizza.png'
      },
      { 
        name: 'Pizza Fruits de Mer', 
        price: '160 MAD', 
        components: 'Calamars, Crevettes, Moules, Tomates, Ail, Persil',
        description: 'Pizza aux fruits de mer frais avec calamars, crevettes et moules. Un voyage gustatif vers la Méditerranée.',
        image: '/Plats/Pizzas/Pizza_fruits_mer.png'
      },
      { 
        name: 'Pizza Napolitaine', 
        price: '140 MAD', 
        components: 'Tomate, Mozzarella, Anchois, Câpres, Olives',
        description: 'Pizza napolitaine traditionnelle avec anchois, câpres et olives. Les saveurs authentiques de Naples.',
        image: '/Plats/Pizzas/Pizza_Napolitaine.png'
      },
      { 
        name: 'Pizza Végétarienne', 
        price: '120 MAD', 
        components: 'Tomate, Mozzarella, Légumes grillés, Basilic',
        description: 'Pizza végétarienne avec une sélection de légumes grillés et basilic frais. Fraîche et colorée.',
        image: '/Plats/Pizzas/PizzaeVegetarian.png'
      },
      { 
        name: 'Pizza Truffe & Champignons', 
        price: '180 MAD', 
        components: 'Sauce à la truffe, Champignons de Paris, Mozzarella, Persil',
        description: 'Pizza raffinée à la truffe noire et champignons de Paris. Une expérience gastronomique unique.',
        image: '/Plats/Pizzas/Pizza_truffe_Champingghions.png'
      },
      { 
        name: 'Pizza Épinards & Fromage Gorgonzola', 
        price: '150 MAD', 
        components: 'Épinards frais, Gorgonzola, Mozzarella, Noix',
        description: 'Pizza aux épinards frais et gorgonzola avec des noix. Un mélange de saveurs terreuses et crémeuses.',
        image: '/Plats/Pizzas/Pizza_epinards_fromage_cordonzola.png'
      },
      { 
        name: 'Pizza Viande Hachée au Poivre', 
        price: '135 MAD', 
        components: 'Viande hachée, Sauce au poivre, Oignons, Mozzarella',
        description: 'Pizza à la viande hachée avec une sauce au poivre relevée et oignons. Un plat généreux et savoureux.',
        image: '/Plats/Pizzas/Pizza_Viande_hachee_poivre.png'
      },
      { 
        name: 'Pizza Ramdania', 
        price: '135 MAD', 
        components: 'Sauce tomate, Mozzarella, Merguez, Poivrons, Oignons',
        description: 'Pizza marocaine avec merguez, poivrons et oignons. Un mélange de saveurs orientales et italiennes.',
        image: '/Plats/Pizzas/Pizza_Ramdania.png'
      },
    ]
  },
  viandes: {
    title: 'VIANDES',
    items: [
      { name: 'Filet de Bœuf grillé, sauce au choix', price: '240 MAD', description: 'Gorgonzola, poivre vert, champignon ou morilles' },
      { name: 'Entrecôte de Bœuf, sauce au choix', price: '280 MAD', description: 'Entrecôte de bœuf grillée avec sauce au choix' },
      { name: 'Émincé de Filet de Bœuf aux Morilles', price: '200 MAD', description: 'Émincé de filet de bœuf aux morilles' },
      { name: 'Médaillon de Bœuf « Marco Polo »', price: '220 MAD', description: 'Médaillon de bœuf spécial Marco Polo' },
    ]
  },
  poissons: {
    title: 'POISSONS',
    items: [
      { name: 'Pavé de Saumon au four, crème de bisque', price: '190 MAD', description: 'Pavé de saumon cuit au four avec crème de bisque' },
      { name: 'Saumon à l\'orange & zestes', price: '190 MAD', description: 'Saumon à l\'orange avec zestes' },
      { name: 'Saumon sauce épinards & citron', price: '190 MAD', description: 'Saumon avec sauce épinards et citron' },
      { name: 'Filet de Loup aux citron, orange, yuzu & pesto de roquette', price: '160 MAD', description: 'Filet de loup aux agrumes et pesto de roquette' },
      { name: 'Loup bar entier farci aux épinards, champignons et fruits de mer', price: '250 MAD', description: 'Loup bar entier farci aux épinards, champignons et fruits de mer' },
      { name: 'Loup bar en cuisson "al cartoccio"', price: '250 MAD', description: 'Loup bar cuit en papillote' },
    ]
  },
  burgers: {
    title: 'BURGERS',
    items: [
      { name: 'Classic Queen', price: '95 MAD', description: 'Pain brioché, viande hachée, cheddar, salade iceberg, tomate, oignons caramélisés' },
      { name: 'Crunchy Chick', price: '90 MAD', description: 'Bun, poulet croustillant, emmental, tomate, salade iceberg' },
      { name: 'Extase Cheese', price: '110 MAD', description: 'Pain brioché, bœuf haché, brie pané, champignons, mozzarella, roquette, tomates séchées' },
      { name: 'TRUFFE BURGER', price: '120 MAD', description: 'Un steak juteux de bœuf accompagné de champignons truffés sautés, oignons caramélisés, fromage EMMENTAL et sauce à l\'ail.' },
      { name: 'majorelle', price: '110 MAD', description: 'Pain khabzat, kafta a la marocaine, œuf au plat, emmental, taktouka, frite mima' },
      { name: 'Sandwich bab nkab', price: '90 MAD', description: 'Baguette khabzat, poulet mkili a la marocaine, olive, daghmira, citron confit frite mima' },
      { name: 'sandwich saucisse de foie', price: '130 MAD', description: 'Baguette khabzat, saucisse de foie, zaalouk machoui, emmentale, tomate oignon machoui, frite mima' },
      { name: 'PHILADELPHIA CHEESE STEAK SANDWICH', price: 'BŒUF 130 MAD / POULET 110 MAD', description: 'Emincé de poulet ou boeuf, oignons, poivrons et champignons couvert de fromage fondu' },
    ]
  },
  grillades: {
    title: 'GRILLADES',
    items: [
      { 
        name: 'Brochettes de Poulet', 
        price: 'Plat 120 MAD / Sandwich 75 MAD', 
        components: 'Poulet mariné, Épices marocaines, Riz aux herbes, Légumes grillés',
        description: 'Brochettes de poulet marinées aux épices marocaines, servies avec riz aux herbes et légumes grillés.',
        image: '/Plats/Brochet_de_poulet.png'
      },
      { 
        name: 'Brochettes de Viande', 
        price: 'Plat 129 MAD / Sandwich 85 MAD', 
        components: 'Viande de bœuf, Épices, Riz aux herbes, Légumes grillés',
        description: 'Brochettes de viande de bœuf marinées aux épices, accompagnées de riz aux herbes et légumes grillés.',
        image: '/Plats/Brochettes_de_viande.png'
      },
      { 
        name: 'Brochettes Mixtes', 
        price: 'Plat 135 MAD / Sandwich 95 MAD', 
        components: 'Mélange de viandes, Épices variées, Riz safrané, Frites maison',
        description: 'Brochettes mixtes avec un assortiment de viandes marinées aux épices variées, servies avec riz safrané et frites maison.',
        image: '/Plats/Brochette_mixte.png'
      },
      { 
        name: 'Entrecôte de Bœuf', 
        price: '169 MAD', 
        components: 'Entrecôte 300g, Frites maison, Sauce au poivre, Salade verte',
        description: 'Entrecôte de bœuf de 300g grillée à point, servie avec frites maison, sauce au poivre et salade verte.',
        image: '/Plats/Entrecote_de_boeuf.png'
      },
      { 
        name: 'Filet de Bœuf Grillé', 
        price: '159 MAD', 
        components: 'Filet de bœuf, Pommes sautées, Salade verte, Sauce béarnaise',
        description: 'Filet de bœuf tendre grillé à la perfection, accompagné de pommes sautées, salade verte et sauce béarnaise.',
        image: '/Plats/Fillet_de_boeur_grille.png'
      },
      { 
        name: 'Médaillon de Filet de Bœuf', 
        price: '165 MAD', 
        components: 'Médaillon de bœuf, Purée maison, Légumes de saison, Sauce au vin',
        description: 'Médaillon de filet de bœuf tendre, servi avec purée maison, légumes de saison et sauce au vin rouge.',
        image: '/Plats/Medaillon_filet_boeuf.png'
      },
      { 
        name: 'Émincé de Bœuf', 
        price: '145 MAD', 
        components: 'Émincé de bœuf, Oignons, Poivrons, Sauce soja, Riz basmati',
        description: 'Émincé de bœuf sauté aux oignons et poivrons avec une sauce soja, servi avec riz basmati parfumé.',
        image: '/Plats/Emincer_de_boeuf.png'
      },
      { 
        name: 'Escalope Milanaise', 
        price: '125 MAD', 
        components: 'Escalope de veau, Chapelure, Parmesan, Frites, Salade',
        description: 'Escalope de veau panée à la milanaise avec chapelure et parmesan, servie avec frites et salade verte.',
        image: '/Plats/Escalope_milanaise.png'
      },
    ]
  },
  poissons: {
    title: 'POISSONS & FRUITS DE MER',
    items: [
      { 
        name: 'Saumon Sauce Épinards aux Zestes', 
        price: '145 MAD', 
        components: 'Pavé de saumon, Sauce aux épinards, Zestes de citron, Riz basmati',
        description: 'Pavé de saumon frais avec une sauce crémeuse aux épinards et zestes de citron, servi avec riz basmati.',
        image: '/Plats/Saumon_sauce_epinard_zestes.png'
      },
      { 
        name: 'Pavé de Saumon Grillé', 
        price: '190 MAD', 
        components: 'Pavé de saumon, Légumes grillés, Purée de pommes de terre, Citron',
        description: 'Pavé de saumon grillé aux herbes, accompagné de légumes grillés et purée de pommes de terre maison.',
        image: '/Plats/Pave_saumon_grille.png'
      },
      { 
        name: 'Pavé de Saumon aux Citrons', 
        price: '140 MAD', 
        components: 'Pavé de saumon, Citrons confits, Herbes de Provence, Riz pilaf',
        description: 'Pavé de saumon aux citrons confits et herbes de Provence, servi avec riz pilaf parfumé.',
        image: '/Plats/Pave_saumon_aux_citron.png'
      },
      { 
        name: 'Filet de Loup aux Citrons', 
        price: '155 MAD', 
        components: 'Filet de loup, Citrons, Câpres, Persil, Pommes vapeur',
        description: 'Filet de loup frais aux citrons et câpres, garni de persil frais et servi avec pommes de terre vapeur.',
        image: '/Plats/Filet_de_loup_citron.png'
      },
      { 
        name: 'Loup Bar Entier', 
        price: '180 MAD', 
        components: 'Loup bar entier, Herbes, Citron, Légumes de saison',
        description: 'Loup bar entier grillé aux herbes et citron, accompagné de légumes de saison. Un plat impressionnant.',
        image: '/Plats/Loup_bar_entier.png'
      },
      { 
        name: 'Loup Bar en Cuisson al Cartoccio', 
        price: '165 MAD', 
        components: 'Loup bar, Papillote, Herbes, Tomates cerises, Olives',
        description: 'Loup bar cuit en papillote avec herbes, tomates cerises et olives. Une cuisson douce qui préserve tous les arômes.',
        image: '/Plats/Loup_Bar_en_cuisson_cartoccio.png'
      },
      { 
        name: 'Gambas Pil Pil', 
        price: '125 MAD', 
        components: 'Gambas, Ail, Piment, Huile d\'olive, Pain grillé',
        description: 'Gambas sautées à l\'ail et au piment dans l\'huile d\'olive, servies avec pain grillé. Un classique espagnol.',
        image: '/Plats/Gambas_pil_pil.png'
      },
      { 
        name: 'Gambas à l\'Ail', 
        price: '120 MAD', 
        components: 'Gambas, Ail, Persil, Citron, Riz basmati',
        description: 'Gambas sautées à l\'ail et persil, arrosées de citron et servies avec riz basmati parfumé.',
        image: '/Plats/Gambas_jilio.png'
      },
      { 
        name: 'Poulpe à la Gallega', 
        price: '130 MAD', 
        components: 'Poulpe, Pommes de terre, Paprika, Huile d\'olive',
        description: 'Poulpe tendre à la galicienne avec pommes de terre et paprika, arrosé d\'huile d\'olive. Une spécialité espagnole.',
        image: '/Plats/Pulpo_la_gallega.png'
      },
    ]
  },
  marocaines: {
    title: 'SPÉCIALITÉS',
    items: [
      { name: 'Tajine Poulet Citron & Olives', price: '120 MAD', description: 'Tajine traditionnel de poulet au citron et olives' },
      { name: 'Tajine Kefta aux Œufs', price: '130 MAD', description: 'Tajine de kefta aux œufs' },
      { name: 'Tajine Makfoul', price: '145 MAD', description: 'Tajine makfoul traditionnel' },
      { name: 'Tajine Végétarienne', price: '120 MAD', description: 'Tajine végétarien aux légumes' },
      { name: 'Couscous aux Sept Légumes', price: 'Poulet 90 MAD / Bœuf 120 MAD', description: 'Couscous aux sept légumes avec poulet ou bœuf' },
      { name: 'Tangia Marrakchia', price: '140 MAD', description: 'Tangia marrakchia traditionnelle' },
      { name: 'Rfissa Traditionnelle', price: '145 MAD', description: 'Rfissa traditionnelle (chaque mercredi)' },
      { name: 'Saffa aux Fruits Secs', price: '95 MAD / Avec Poulet 130 MAD', description: 'Saffa aux fruits secs avec ou sans poulet' },
      { name: 'Pastilla Poulet, Amandes & Ananas', price: '130 MAD', description: 'Pastilla au poulet, amandes et ananas' },
      { name: 'Pastilla Fruits de Mer', price: '150 MAD', description: 'Pastilla aux fruits de mer' },
      { name: 'Pastilla Végétarienne', price: '110 MAD', description: 'Pastilla végétarienne' },
    ]
  },
  specialites: {
    title: 'SPÉCIALITÉS MAISON',
    items: [
      { 
        name: 'Poulet Parmigiana Gratiné', 
        price: '135 MAD', 
        components: 'Escalope de poulet, Sauce tomate, Mozzarella, Parmesan, Basilic',
        description: 'Escalope de poulet panée gratinée avec sauce tomate, mozzarella et parmesan. Un classique italien revisité.',
        image: '/Plats/Poulet_pamigiana_gratine.png'
      },
    ]
  },
  enfant: {
    title: 'Menu Enfant',
    items: [
      { name: 'Deux mini-burgers poulet pané + frites', price: '60 MAD', description: 'Deux mini-burgers au poulet pané avec frites' },
      { name: 'Deux mini-burgers viande hachée + frites', price: '70 MAD', description: 'Deux mini-burgers à la viande hachée avec frites' },
      { name: 'Nuggets & frites', price: '60 MAD', description: 'Nuggets de poulet avec frites' },
      { name: 'Pizza Margherita', price: '50 MAD', description: 'Pizza Margherita pour enfants' },
    ]
  },
  desserts: {
    title: '🍰 DESSERTS MAISON',
    items: [
      { name: 'Assortiment de Gâteaux Marocains', price: '100 MAD', description: 'Assortiment de gâteaux marocains traditionnels' },
      { name: 'Cigares Pastilla Riz & Cannelle', price: '80 MAD', description: 'Cigares pastilla au riz et cannelle' },
      { name: 'Cigares Jawhara aux Amandes', price: '70 MAD', description: 'Cigares jawhara aux amandes' },
      { name: 'Coupe Glacée Marocaine', price: '75 MAD', description: 'Amlou, kaab ghzal, chebakia, orange cannelle' },
      { name: 'Brookie', price: '90 MAD', description: 'Mélange brownie et cookie, boule de glace' },
    ]
  }
};


const dejeunerDinerData = {
  salade: {
    title: 'SALADES FRAÎCHES & GOURMANDES',
    items: [
      { 
        name: 'César au Poulet Croustillant', 
        price: '79 MAD', 
        components: 'Parmesan, croûtons, sauce maison',
        description: 'Salade César traditionnelle avec poulet croustillant, parmesan, croûtons et sauce maison.',
        image: '/Plats/Cesar_poulet.PNG'
      },
      { 
        name: 'César aux Gambas Grillées', 
        price: '95 MAD', 
        components: 'Gambas marinées, citron, parmesan',
        description: 'Salade César aux gambas grillées marinées, citron et parmesan.',
        image: '/Plats/Cesar_gambas.PNG'
      },
      { 
        name: 'Burrata & Fruits de Saison', 
        price: '89 MAD', 
        components: 'Roquette, burrata crémeuse, fruits frais, FRUITS SEC, SAUCE VAINIGRETE',
        description: 'Burrata crémeuse accompagnée de roquette, fruits frais et fruits secs avec sauce vinaigrette.',
        image: '/Plats/Burrata_fruits.PNG'
      },
      { 
        name: 'Chèvre Chaud au Miel', 
        price: '85 MAD', 
        components: 'Mesclun, noix caramélisées',
        description: 'Chèvre chaud au miel sur lit de mesclun et noix caramélisées.',
        image: '/Plats/Chevre_chaud.png'
      },
      { 
        name: 'Salade quinoa', 
        price: '85 MAD', 
        components: 'quinoa, mangue, avocat, tomates séchées, miel moutarde FRUITS SEC',
        description: 'Salade de quinoa avec mangue, avocat, tomates séchées et vinaigrette miel moutarde avec fruits secs.',
        image: '/Plats/Salade_quinoa.PNG'
      },
      { 
        name: 'Salade Bistrot', 
        price: '85 MAD', 
        components: 'Mesclun, Thon, tomate, avocat, roquette, parmesan',
        description: 'Salade bistrot avec mesclun, thon, tomate, avocat, roquette et parmesan.',
        image: '/Plats/Salade_bistrot.PNG'
      },
      { 
        name: 'Salade Marocaine', 
        price: '75 MAD', 
        components: 'Tomates, poivrons, oignons rouges, olives',
        description: 'Salade marocaine traditionnelle avec tomates, poivrons, oignons rouges et olives.',
        image: '/Plats/Salade_marocaine.PNG'
      },
    ]
  },
  entrees: {
    title: 'ENTRÉES / APÉRITIFS (1 ou 2 pers.)',
    items: [
      { 
        name: 'Assortiment de Salades Marocaines', 
        price: '95 MAD / 160 MAD', 
        components: 'Zaalouk, taktouka, carottes au cumin, poivrons grillés, lentilles mijotées avec de la viande séchée, Haricots blancs parfumés au cumin et au citron confit',
        description: 'Assortiment de salades marocaines traditionnelles avec zaalouk, taktouka, carottes au cumin, poivrons grillés, lentilles mijotées avec de la viande séchée et haricots blancs parfumés au cumin et au citron confit.',
        image: '/Plats/Assortiment_Salades_Marocaines.PNG'
      },
      { 
        name: 'Assortiment de Briouates Maison', 
        price: '105 MAD / 190 MAD', 
        components: 'Viande hachée, fromage, légumes, épinards-saumon, poulet-ananas',
        description: 'Assortiment de briouates maison farcies à la viande hachée, fromage, légumes, épinards-saumon et poulet-ananas.',
        image: '/Plats/Assortiment_briouates.PNG'
      },
      { 
        name: 'Assortiment Oriental', 
        price: '80 MAD / 150 MAD', 
        components: 'Houmous, labneh, muhammara, kébbé, BABA GHANOUCH, feuilles de vigne farcies au riz, Houmous de betterave',
        description: 'Assortiment oriental avec houmous, labneh, muhammara, kébbé, baba ghanouch, feuilles de vigne farcies au riz et houmous de betterave.',
        image: '/Plats/Assortiment_Oriental.PNG'
      },
      { 
        name: 'Assortiment de Bruschettas', 
        price: '85 MAD / 160 MAD', 
        components: 'Tomates basilic, mozzarella, variations gourmandes',
        description: 'Assortiment de bruschettas avec tomates basilic, mozzarella et variations gourmandes.',
        image: '/Plats/Bruschettas.png'
      },
      { 
        name: 'Pulpo a la Gallega', 
        price: '85 MAD / 160 MAD', 
        components: 'Poulpe tendre, pommes de terre, paprika fumé',
        description: 'Poulpe tendre à la galicienne avec pommes de terre et paprika fumé.',
        image: '/Plats/Pulpo_la_gallega.png'
      },
      { 
        name: 'Gambas al Ajillo', 
        price: '70 MAD / 130 MAD', 
        components: 'Crevettes à l\'ail, HUILE D\'OLIVE, TOMATE CERISE, BASILIQUE, CRÈME FRAICHE',
        description: 'Gambas al ajillo avec crevettes à l\'ail, huile d\'olive, tomate cerise, basilic et crème fraîche.',
        image: '/Plats/Gambas_jilio.png'
      },
      { 
        name: 'Gambas Pil Pil', 
        price: '70 MAD / 130 MAD', 
        components: 'Crevettes sautées à l\'huile d\'olive, ail & piment',
        description: 'Gambas pil pil avec crevettes sautées à l\'huile d\'olive, ail et piment.',
        image: '/Plats/Gambas_pil_pil.png'
      },
      { 
        name: 'Harira Maison', 
        price: '85 MAD', 
        components: 'Soupe traditionnelle servie avec dattes & chebakia & ŒUF',
        description: 'Harira maison, soupe traditionnelle marocaine servie avec dattes, chebakia et œuf.',
        image: '/Plats/Harira.png'
      },
    ]
  },
  poulet: {
    title: 'VOLAILLE',
    items: [
      { 
        name: 'Émincés de Poulet aux Champignons', 
        price: '110 MAD', 
        components: 'Poulet, champignons',
        description: 'Émincés de poulet tendre aux champignons sautés.',
        image: '/Plats/Poulet_champignons.png'
      },
      { 
        name: 'Poulet à la Florentine (épinards & mozzarella)', 
        price: '120 MAD', 
        components: 'Poulet, épinards, mozzarella',
        description: 'Poulet pané aux épinards et mozzarella fondante.',
        image: '/Plats/Poulet_florentine.png'
      },
      { 
        name: 'Suprême de Poulet à la crème du Truffe', 
        price: '180 MAD', 
        components: 'Poulet, crème de truffe',
        description: 'Suprême de poulet nappé d\'une crème de truffe délicate.',
        image: '/Plats/Poulet_truffe.png'
      },
      { 
        name: 'Poulet Parmigiana gratiné', 
        price: '140 MAD', 
        components: 'Poulet, sauce tomate, mozzarella, parmesan',
        description: 'Poulet pané gratiné à la parmigiana.',
        image: '/Plats/Poulet_pamigiana_gratine.png'
      },
      { 
        name: 'Escalope Milanaise', 
        price: '100 MAD', 
        components: 'Escalope de poulet, chapelure, parmesan',
        description: 'Escalope de poulet panée à la milanaise.',
        image: '/Plats/Escalope_milanaise.png'
      },
    ]
  },
  viandes: {
    title: 'VIANDES',
    items: [
      { 
        name: 'Filet de Bœuf grillé, sauce au choix', 
        price: '240 MAD', 
        components: 'Gorgonzola, poivre vert, champignon ou morilles',
        description: 'Filet de bœuf grillé avec sauce au choix : gorgonzola, poivre vert, champignon ou morilles.',
        image: '/Plats/Fillet_de_boeur_grille.png'
      },
      { 
        name: 'Entrecôte de Bœuf, sauce au choix', 
        price: '280 MAD', 
        components: 'Entrecôte de bœuf, sauce au choix',
        description: 'Entrecôte de bœuf grillée avec sauce au choix.',
        image: '/Plats/Entrecote_de_boeuf.png'
      },
      { 
        name: 'Émincé de Filet de Bœuf aux Morilles', 
        price: '200 MAD', 
        components: 'Filet de bœuf, morilles',
        description: 'Émincé de filet de bœuf aux morilles.',
        image: '/Plats/Emincer_de_boeuf.png'
      },
      { 
        name: 'Médaillon de Bœuf « Marco Polo »', 
        price: '220 MAD', 
        components: 'Médaillon de bœuf, épices',
        description: 'Médaillon de bœuf spécial Marco Polo.',
        image: '/Plats/Medaillon_filet_boeuf.png'
      },
    ]
  },
  poisson: {
    title: 'POISSONS',
    items: [
      { 
        name: 'Pavé de Saumon au four, crème de bisque', 
        price: '190 MAD', 
        components: 'Pavé de saumon, crème de bisque',
        description: 'Pavé de saumon cuit au four avec crème de bisque.',
        image: '/Plats/Pave_saumon_grille.png'
      },
      { 
        name: 'Saumon à l\'orange & zestes', 
        price: '190 MAD', 
        components: 'Pavé de saumon, orange, zestes',
        description: 'Saumon à l\'orange avec zestes.',
        image: '/Plats/Pave_saumon_aux_citron.png'
      },
      { 
        name: 'Saumon sauce épinards & citron', 
        price: '190 MAD', 
        components: 'Pavé de saumon, sauce épinards, citron',
        description: 'Saumon avec sauce épinards et citron.',
        image: '/Plats/Saumon_sauce_epinard_zestes.png'
      },
      { 
        name: 'Filet de Loup aux citron, orange, yuzu & pesto de roquette', 
        price: '160 MAD', 
        components: 'Filet de loup, citron, orange, yuzu, pesto de roquette',
        description: 'Filet de loup aux agrumes et pesto de roquette.',
        image: '/Plats/Filet_de_loup_citron.png'
      },
      { 
        name: 'Loup bar entier farci aux épinards, champignons et fruits de mer', 
        price: '250 MAD', 
        components: 'Loup bar entier, épinards, champignons, fruits de mer',
        description: 'Loup bar entier farci aux épinards, champignons et fruits de mer.',
        image: '/Plats/Loup_bar_entier.png'
      },
      { 
        name: 'Loup bar en cuisson "al cartoccio"', 
        price: '250 MAD', 
        components: 'Loup bar, papillote, herbes',
        description: 'Loup bar cuit en papillote.',
        image: '/Plats/Loup_Bar_en_cuisson_cartoccio.png'
      },
    ]
  },
  burgers: {
    title: 'BURGERS',
    items: [
      { 
        name: 'Classic Queen', 
        price: '95 MAD', 
        components: 'Pain brioché, viande hachée, cheddar, salade iceberg, tomate, oignons caramélisés',
        description: 'Burger classique avec pain brioché, viande hachée, cheddar, salade iceberg, tomate et oignons caramélisés.',
        image: '/Plats/CLASSIC_QUEEN.png'
      },
      { 
        name: 'Crunchy Chick', 
        price: '90 MAD', 
        components: 'Bun, poulet croustillant, emmental, tomate, salade iceberg',
        description: 'Burger au poulet croustillant avec bun, emmental, tomate et salade iceberg.',
        image: '/Plats/Crunchy_Chick.png'
      },
      { 
        name: 'Extase Cheese', 
        price: '110 MAD', 
        components: 'Pain brioché, bœuf haché, brie pané, champignons, mozzarella, roquette, tomates séchées',
        description: 'Burger fromage avec pain brioché, bœuf haché, brie pané, champignons, mozzarella, roquette et tomates séchées.',
        image: '/Plats/Burger_Extase_cheese.png'
      },
      { 
        name: 'TRUFFE BURGER', 
        price: '120 MAD', 
        components: 'Steak de bœuf, champignons truffés, oignons caramélisés, emmental, sauce à l\'ail',
        description: 'Un steak juteux de bœuf accompagné de champignons truffés sautés, oignons caramélisés, fromage EMMENTAL et sauce à l\'ail.',
        image: '/Plats/Truffle_Burger.png'
      },
      { 
        name: 'majorelle', 
        price: '110 MAD', 
        components: 'Pain khabzat, kafta a la marocaine, œuf au plat, emmental, taktouka, frite mima',
        description: 'Burger marocain avec pain khabzat, kafta a la marocaine, œuf au plat, emmental, taktouka et frite mima.',
        image: '/Plats/majorelle.png'
      },
      { 
        name: 'Sandwich bab nkab', 
        price: '90 MAD', 
        components: 'Baguette khabzat, poulet mkili a la marocaine, olive, daghmira, citron confit, frite mima',
        description: 'Sandwich bab nkab avec baguette khabzat, poulet mkili a la marocaine, olive, daghmira, citron confit et frite mima.',
        image: '/Plats/Sandwich_bab_nkab.png'
      },
      { 
        name: 'sandwich saucisse de foie', 
        price: '130 MAD', 
        components: 'Baguette khabzat, saucisse de foie, zaalouk machoui, emmentale, tomate oignon machoui, frite mima',
        description: 'Sandwich saucisse de foie avec baguette khabzat, saucisse de foie, zaalouk machoui, emmentale, tomate oignon machoui et frite mima.',
        image: '/Plats/sandwich_saucisse_de_foie.png'
      },
      { 
        name: 'PHILADELPHIA CHEESE STEAK SANDWICH', 
        price: 'BŒUF 130 MAD / POULET 110 MAD', 
        components: 'Emincé de poulet ou boeuf, oignons, poivrons et champignons couvert de fromage fondu',
        description: 'Emincé de poulet ou boeuf, oignons, poivrons et champignons couvert de fromage fondu.',
        image: '/Plats/PHILADELPHIA_CHEESE_STEAK_SANDWICH.png'
      },
    ]
  },
  patesRiz: {
    title: 'PÂTES & RISOTTOS (Penne, spaghetti ou tagliatelle)',
    items: [
      { 
        name: 'Bolognaise', 
        price: '130 MAD', 
        components: 'Sauce tomate maison, viande hachée',
        description: 'Pâtes à la sauce bolognaise maison avec viande hachée.',
        image: '/Plats/Spaghetti_la bolanoise.png'
      },
      { 
        name: 'Fruits de Mer', 
        price: '160 MAD', 
        components: 'Crevettes, calamars, moules',
        description: 'Pâtes aux fruits de mer avec crevettes, calamars et moules.',
        image: '/Plats/Pattes_Fruits_de_Mer.png'
      },
      { 
        name: 'ALFREDO - Poulet & Champignons', 
        price: '120 MAD', 
        components: 'Poulet, champignons, sauce alfredo',
        description: 'Pâtes alfredo avec poulet et champignons.',
        image: '/Plats/Alfredo_poulet_champignons.png'
      },
      { 
        name: 'Crème de Truffe & Champignons', 
        price: '170 MAD', 
        components: 'Crème de truffe, champignons',
        description: 'Pâtes à la crème de truffe et champignons.',
        image: '/Plats/Penne_a_la_Creme_de_Truffe.jpg'
      },
      { 
        name: 'Sicilienne', 
        price: '140 MAD', 
        components: 'Câpres, anchois, olives, sauce tomate',
        description: 'Pâtes à la sicilienne avec câpres, anchois et olives.',
        image: '/Plats/Sicilienne.png'
      },
      { 
        name: 'Crème de Pesto', 
        price: '130 MAD', 
        components: 'Basilic & courgettes',
        description: 'Pâtes à la crème de pesto avec basilic et courgettes.',
        image: '/Plats/Creme_de_Pistou.png'
      },
      { 
        name: 'Primavera', 
        price: '120 MAD', 
        components: 'Légumes de saison, crème fraîche ou ail & huile d\'olive',
        description: 'Pâtes aux légumes de saison avec crème fraîche ou ail et huile d\'olive.',
        image: '/Plats/Primavera.png'
      },
      { 
        name: 'Raviolis Ricotta & Épinards', 
        price: '140 MAD', 
        components: 'Raviolis frais, ricotta, épinards',
        description: 'Raviolis frais farcis à la ricotta et aux épinards.',
        image: '/Plats/Raviolis_ricotta_epinards.png'
      },
      { 
        name: 'Lasagne Maison Bolognaise gratinée', 
        price: '130 MAD', 
        components: 'Lasagne, sauce bolognaise, béchamel, fromage',
        description: 'Lasagne maison gratinée à la bolognaise.',
        image: '/Plats/Lasagne.png'
      },
      { 
        name: 'Risotto aux Fruits de Mer', 
        price: '160 MAD', 
        components: 'Risotto, fruits de mer, crème de bisque',
        description: 'Risotto aux fruits de mer avec crème de bisque.',
        image: '/Plats/Risotto_fruits_de_mer.png'
      },
      { 
        name: 'Risotto à la Crème de Truffe & Champignons', 
        price: '170 MAD', 
        components: 'Risotto, crème de truffe, champignons',
        description: 'Risotto à la crème de truffe et champignons.',
        image: '/Plats/Risotto_truffe_champignons.png'
      },
      { 
        name: 'Risotto Nero (à l\'encre de seiche)', 
        price: '190 MAD', 
        components: 'Risotto, encre de seiche, Gambas & courgettes',
        description: 'Risotto à l\'encre de seiche avec gambas et courgettes.',
        image: '/Plats/Risotto_nero_encre_seiche.png'
      },
    ]
  },
  pizza: {
    title: 'PIZZAS',
    items: [
      { 
        name: 'Margherita', 
        price: '85 MAD', 
        components: 'Tomate, mozzarella, origan',
        description: 'Pizza margherita classique avec tomate, mozzarella et origan.',
        image: '/Plats/Pizzas/Margherita.png'
      },
      { 
        name: 'cinq Fromages', 
        price: '120 MAD', 
        components: 'Mozzarella, emmental, bleu, parmesan & chèvre',
        description: 'Pizza aux cinq fromages : mozzarella, emmental, bleu, parmesan et chèvre.',
        image: '/Plats/Pizzas/Pizza_cinq_fromage.png'
      },
      { 
        name: 'Viande Hachée au Poivre', 
        price: '120 MAD', 
        components: 'Sauce tomate, mozzarella, bœuf haché, poivre concassé',
        description: 'Pizza à la viande hachée au poivre avec sauce tomate et mozzarella.',
        image: '/Plats/Pizzas/Pizza_Viande_hachee_poivre.png'
      },
      { 
        name: 'BBQ Chicken', 
        price: '120 MAD', 
        components: 'Poulet BBQ, oignons caramélisés',
        description: 'Pizza au poulet BBQ avec oignons caramélisés.',
        image: '/Plats/Pizzas/BBQ_Chicken_Pizza.png'
      },
      { 
        name: 'Fruits de Mer', 
        price: '160 MAD', 
        components: 'Calamars, crevettes, champignons, roquette',
        description: 'Pizza aux fruits de mer avec calamars, crevettes, champignons et roquette.',
        image: '/Plats/Pizzas/Pizza_fruits_mer.png'
      },
      { 
        name: 'Végétarienne', 
        price: '90 MAD', 
        components: 'Tomates cerises, champignons, poivrons, olives, roquette',
        description: 'Pizza végétarienne avec tomates cerises, champignons, poivrons, olives et roquette.',
        image: '/Plats/Pizzas/PizzaeVegetarian.png'
      },
      { 
        name: 'Truffe & Champignons', 
        price: '180 MAD', 
        components: 'Crème de truffe, mozzarella, champignons',
        description: 'Pizza à la truffe et champignons avec crème de truffe et mozzarella.',
        image: '/Plats/Pizzas/Pizza_truffe_Champingghions.png'
      },
      { 
        name: 'Saumon Fumé & Roquette', 
        price: '160 MAD', 
        components: 'Crème fraîche, mozzarella, saumon fumé, roquette',
        description: 'Pizza au saumon fumé et roquette avec crème fraîche et mozzarella.',
        image: '/Plats/Pizza_saumon_fume.png'
      },
      { 
        name: 'Epinards et fromage cordonzola', 
        price: '110 MAD', 
        components: 'Épinards frais, gorgonzola, mozzarella',
        description: 'Un mariage d\'épinards frais légèrement sautés et de gorgonzola, accompagnés de mozzarella.',
        image: '/Plats/Pizzas/Pizza_epinards_fromage_cordonzola.png'
      },
      { 
        name: 'Napolitaine', 
        price: '140 MAD', 
        components: 'Sauce tomate, mozzarella, câpres, anchois, olives',
        description: 'Pizza napolitaine avec sauce tomate, mozzarella, câpres, anchois et olives.',
        image: '/Plats/Pizzas/Pizza_Napolitaine.png'
      },
      { 
        name: 'ramdania', 
        price: '90 MAD', 
        components: 'Sauce tomate a la marocaine, poivron oignon, mozzarella, fromage rouge, au choix: viande hachée / poulet / thon / merguez',
        description: 'Pizza ramdania avec sauce tomate à la marocaine, poivron, oignon, mozzarella, fromage rouge et au choix : viande hachée, poulet, thon ou merguez.',
        image: '/Plats/Pizzas/Pizza_Ramdania.png'
      },
      { 
        name: 'la madeleine', 
        price: '180 MAD', 
        components: 'Pizza gourmande à partagée en quatre quartiers : Épinards fondants et fromage gorgonzola, Viande hachée, Champignons sautés et mozzarella crémeuse, mozzarella et tranches de saucisse de de Foie, Poulet BBQ, oignons caramélisés, Jambon dinde fume',
        description: 'Pizza gourmande à partagée en quatre quartiers, chacun offrant une expérience unique.',
        image: '/Plats/Pizzas/Pizza_Madeleine.png'
      },
    ]
  },
  grillades: {
    title: 'GRILLADES',
    items: [
      { 
        name: 'Brochettes de Poulet à la Marocaine', 
        price: 'Plat 105 MAD', 
        components: 'Poulet mariné, épices marocaines',
        description: 'Brochettes de poulet marinées aux épices marocaines.',
        image: '/Plats/Brochet_de_poulet.png'
      },
      { 
        name: 'Brochettes de Viande', 
        price: 'Plat 150 MAD', 
        components: 'Viande de bœuf, épices',
        description: 'Brochettes de viande de bœuf marinées aux épices.',
        image: '/Plats/Brochettes_de_viande.png'
      },
      { 
        name: 'Brochettes de Saucisse de Foie', 
        price: 'Plat 160 MAD', 
        components: 'Saucisse de foie, épices',
        description: 'Brochettes de saucisse de foie aux épices.',
        image: '/Plats/Brochettes_de_Saucisses.png'
      },
      { 
        name: 'Brochettes de Saucisse de Viande', 
        price: 'Plat 120 MAD', 
        components: 'Saucisse de viande, épices',
        description: 'Brochettes de saucisse de viande aux épices.',
        image: '/Plats/Brochettes_de_Saucisses.png'
      },
      { 
        name: 'Mix Grill Viandes', 
        price: '180 MAD', 
        components: 'Poulet, kefta, bœuf, merguez',
        description: 'Mix grill avec poulet, kefta, bœuf et merguez.',
        image: '/Plats/Brochette_mixte.png'
      },
      { 
        name: 'Mix Grill Poissons', 
        price: '200 MAD', 
        components: 'Saumon, poisson blanc, crevettes',
        description: 'Mix grill avec saumon, poisson blanc et crevettes.',
        image: '/Plats/Mix_grill_poissons.png'
      },
    ]
  },
  specialiteMarocaine: {
    title: 'SPÉCIALITÉS',
    items: [
      { 
        name: 'Tajine Poulet Citron & Olives', 
        price: '120 MAD', 
        components: 'Poulet, citron, olives, épices marocaines',
        description: 'Tajine traditionnel de poulet au citron et olives mijoté aux épices marocaines.',
        image: '/Plats/Tajine_poulet_citron.png'
      },
      { 
        name: 'Tajine Kefta aux Œufs', 
        price: '130 MAD', 
        components: 'Kefta, œufs, sauce tomate, épices',
        description: 'Tajine de kefta aux œufs dans une sauce tomate épicée.',
        image: '/Plats/Tajine_viend_hacher_oeufs.png'
      },
      { 
        name: 'Tajine Makfoul', 
        price: '145 MAD', 
        components: 'Viande, légumes, épices marocaines',
        description: 'Tajine makfoul traditionnel aux légumes et épices marocaines.',
        image: '/Plats/Tajine_makfoul.png'
      },
      { 
        name: 'Tajine Végétarienne', 
        price: '120 MAD', 
        components: 'Légumes de saison, épices marocaines',
        description: 'Tajine végétarienne aux légumes de saison et épices marocaines.',
        image: '/Plats/Tagine_vegetarienne.png'
      },
      { 
        name: 'Couscous aux Sept Légumes', 
        price: 'Poulet 90 MAD / Bœuf 120 MAD', 
        components: 'Semoule, légumes, poulet ou bœuf',
        description: 'Couscous aux sept légumes avec poulet ou bœuf au choix.',
        image: '/Plats/Couscous_Royale.png'
      },
      { 
        name: 'Tangia Marrakchia', 
        price: '140 MAD', 
        components: 'Viande d\'agneau, cumin, citron confit',
        description: 'Tangia marrakchia traditionnelle avec viande d\'agneau mijotée au cumin et citron confit.',
        image: '/Plats/Tanjia_Marrakechia.png'
      },
      { 
        name: 'Rfissa Traditionnelle', 
        price: '145 MAD', 
        components: 'Poulet, lentilles, msemen, fenugrec',
        description: 'Rfissa traditionnelle chaque mercredi avec poulet, lentilles et msemen.',
        image: '/Plats/Tride_Poulet.png'
      },
      { 
        name: 'Saffa aux Fruits Secs', 
        price: '95 MAD / Avec Poulet 130 MAD', 
        components: 'Cheveux d\'ange, fruits secs, poulet optionnel',
        description: 'Saffa aux fruits secs avec ou sans poulet selon votre choix.',
        image: '/Plats/Safa.png'
      },
      { 
        name: 'Pastilla Poulet, Amandes & Ananas', 
        price: '130 MAD', 
        components: 'Pâte filo, poulet, amandes, ananas',
        description: 'Pastilla au poulet avec amandes et ananas enveloppée dans de la pâte filo.',
        image: '/Plats/Pastilla_amende_ananas.png'
      },
      { 
        name: 'Pastilla Fruits de Mer', 
        price: '150 MAD', 
        components: 'Pâte filo, fruits de mer, épices',
        description: 'Pastilla aux fruits de mer frais avec épices marocaines.',
        image: '/Plats/Pastilla_aux_Fruits_de_Mer.png'
      },
      { 
        name: 'Pastilla Végétarienne', 
        price: '110 MAD', 
        components: 'Pâte filo, légumes, épices',
        description: 'Pastilla végétarienne aux légumes et épices marocaines.',
        image: '/Plats/Pastilla_Vegetarienne.png'
      },
    ]
  },
  desserts: {
    title: 'DESSERTS',
    items: [
      { 
        name: 'Assortiment de Gâteaux Marocains', 
        price: '100 MAD', 
        components: 'Gâteaux marocains variés',
        description: 'Assortiment de gâteaux marocains traditionnels.',
        image: '/Plats/Gateaux_marocains.png'
      },
      { 
        name: 'Cigares Pastilla Riz & Cannelle', 
        price: '80 MAD', 
        components: 'Pâte filo, riz, cannelle',
        description: 'Cigares pastilla au riz et cannelle.',
        image: '/Plats/Cigares_pastilla.png'
      },
      { 
        name: 'Cigares Jawhara aux Amandes', 
        price: '70 MAD', 
        components: 'Pâte filo, amandes',
        description: 'Cigares jawhara aux amandes.',
        image: '/Plats/Cigares_jawhara.png'
      },
      { 
        name: 'Coupe Glacée Marocaine', 
        price: '75 MAD', 
        components: 'Amlou, kaab ghzal, chebakia, orange cannelle',
        description: 'Coupe glacée marocaine avec amlou, kaab ghzal, chebakia et orange cannelle.',
        image: '/Plats/Coupe_glacee_marocaine.png'
      },
      { 
        name: 'Brookie', 
        price: '90 MAD', 
        components: 'Mélange brownie et cookie, boule de glace',
        description: 'Mélange brownie et cookie avec boule de glace.',
        image: '/Plats/Brookie.png'
      },
    ]
  },
  menuEnfant: {
    title: 'Menu Enfant',
    items: [
      { 
        name: 'Deux mini-burgers poulet pané + frites', 
        price: '60 MAD', 
        components: 'Mini burgers, poulet pané, frites',
        description: 'Deux mini-burgers au poulet pané avec frites.',
        image: '/Plats/Mini_burgers_poulet.png'
      },
      { 
        name: 'Deux mini-burgers viande hachée + frites', 
        price: '70 MAD', 
        components: 'Mini burgers, viande hachée, frites',
        description: 'Deux mini-burgers à la viande hachée avec frites.',
        image: '/Plats/Mini_burgers_viande.png'
      },
      { 
        name: 'Nuggets & frites', 
        price: '60 MAD', 
        components: 'Nuggets de poulet, frites',
        description: 'Nuggets de poulet avec frites.',
        image: '/Plats/Nuggets_frites.png'
      },
      { 
        name: 'Pizza Margherita', 
        price: '50 MAD', 
        components: 'Pâte à pizza, tomate, mozzarella',
        description: 'Pizza Margherita pour enfants.',
        image: '/Plats/Pizza_enfant.png'
      },
    ]
  }
};
const gouterData = {
  formulesTeaTime: {
    title: 'FORMULES TEA TIME',
    subtitle: 'De 15h à 20h',
    items: [
      { 
        name: 'Douce Pause', 
        price: '55 DH', 
        components: 'Crêpe Sucrée ou gauffre ou pancake chocolat, Nuttela, Miel, Beurro & Miel, Caramel Bourro Salá, Jus frais ou Boisson chaude au choix'
      },
      { 
        name: 'Sweet Illusion', 
        price: '80 DH', 
        components: 'Trompe l\'oeil, Milk Shake ou Smoothie au Choix'
      },
      { 
        name: 'Gourmet Break', 
        price: '65 DH', 
        components: 'Cheese Cake < Lotus, Framboise>, Milk Shake ou Smoothie au Choix'
      },
      { 
        name: 'Thé & Pastilla', 
        price: '50 DH', 
        components: 'Pastilla Poulet, Boisson chaude au choix'
      },
      { 
        name: 'Saveurs Du Bled', 
        price: '40 DH', 
        components: 'Assortiment Marocain Msemen (Nature & Khlii), Harcha, Boisson chaude au choix'
      },
      { 
        name: 'Délice Salé', 
        price: '60 DH', 
        components: 'Crêpe salée <Fromage, Jambon, Poulet Champignon >, Jus frais ou Boisson chaude au choix'
      },
      { 
        name: 'Tarte Time', 
        price: '55 DH', 
        components: 'Tarte au Choix <Citron, Chocolat, Framboise, Amande >, Milk Shake ou Smoothie au Choix'
      },
      { 
        name: 'Douceur Parisienne', 
        price: '60 DH', 
        components: 'Assortiment de 4 Macaron, Milk Shake ou Smoothie au Choix'
      },
      { 
        name: 'Cake Time', 
        price: '65 DH', 
        components: 'Red Velvet ou Cake aux Carottes, Milk Shake ou Smoothie au Choix'
      },
      { 
        name: 'ALL YOU CAN EAT', 
        price: '200 DH', 
        components: 'SUCRÉ: Mini crêpes, gaufres, pancakes, Mini cakes (red velvet, carrot cake, cheesecake, brownies), Mini tartelettes (citron, framboise, chocolat, amande), Assortiment de macarons & cookies, Fruits de saison, yaourts & confitures. SALÉ: Mini sandwichs (saumon, poulet, fromage, légumes grillés), Mini quiches & mini crêpes salées, Spécialités marocaines (briouates, mini msemen, harcha). BOISSONS À VOLONTÉ: Thé, café, chocolat chaud, Jus frais & smoothies'
      }
    ]
  }
};

const sucresData = {
  bubbleWaffle: {
    title: 'CÔNE BUBBLE SIGNATURE',
    items: [
      { 
        name: 'UNICORN DREAM', 
        price: '90 DH', 
        components: 'Vanilla Bubble, Bubble gum gelato, Marshmallows, Strawberry syrup, M&M\'s, Multicolor sprinkles, Whipped cream, White Caprice',
        description: 'Cône bubble licorne avec M&M\'s, glace bubble gum et guimauves colorées.'
      },
      { 
        name: 'COOKIE RUSH', 
        price: '95 DH', 
        components: 'Vanilla Bubble with chocolate chips, Stracciatella gelato, Oreo biscuits, Chocolate syrup, Chocolate pearls, Whipped cream, Mikado sticks',
        description: 'Cône bubble cookies avec pépites de chocolat, glace stracciatella et biscuits Oreo.'
      },
      { 
        name: 'GOLDEN TROPIC', 
        price: '100 DH', 
        components: 'Double chocolate Bubble, Butter biscuits with chocolate chips, Butter caramel, Banoffee gelato, Whipped cream, Banana, Chocolate caprice, Hazelnut praline',
        description: 'Cône bubble tropical avec double chocolat, banane et glace banoffee.'
      },
      { 
        name: 'CRUMBLE KING', 
        price: '100 DH', 
        components: 'Vanilla Bubble, Biscuit syrup, Biscuit gelato, Chocolate caprice, Brownies, Gofretino, Whipped cream, Dark chocolate & vanilla chocolate cookies',
        description: 'Cône bubble crumble avec brownies, gofretino et chocolat noir et vanille.'
      },
      { 
        name: 'VELVET CRUNCH', 
        price: '100 DH', 
        components: 'Vanilla Bubble, Bueno gelato, Bueno choco bar, Whipped cream, Bueno praline, Gofretino Praline, Meringue, Mikado sticks',
        description: 'Cône bubble velvet avec praliné Bueno, glace Bueno et meringue.'
      },
      { 
        name: 'CHOCOBERRY', 
        price: '100 DH', 
        components: 'Vanilla Bubble, Cookie caramel crunch gelato, Oreo biscuits, Whipped cream, White hot chocolate, Fresh strawberries, White caprice',
        description: 'Cône bubble chocolat-fraise avec glace caramel crunch et chocolat chaud blanc.'
      },
      { 
        name: 'BERRY BLOOM', 
        price: '105 DH', 
        components: 'Vanilla Bubble, Milk hot chocolate, Lila gelato, Strawberries pearls, Fresh strawberries, White caprice, Lila Pause choco bar, Whipped cream',
        description: 'Cône bubble aux fruits rouges avec fraises fraîches et chocolat chaud au lait.'
      },
      { 
        name: 'CITY SWEET', 
        price: '105 DH', 
        components: 'Double chocolate Bubble, Caramelized with chocolate chips Almond, Belgium Choco Noir, Chocolate icecream, Mikado sticks, Chocolate cream, Whipped cream',
        description: 'Cône bubble city sweet avec double chocolat et amandes caramélisées.'
      },
      { 
        name: 'SWEET & SALTY CRUMBLE', 
        price: '110 DH', 
        components: 'Vanilla Bubble with pecan, Pecan, Salted caramel & pecan, Brownies cubes gelato, Mikado sticks, Butter caramel, Whipped cream',
        description: 'Cône bubble sucré-salé avec pacanes, caramel beurre et cubes de brownies.'
      }
    ]
  },
  crepes: {
    title: 'CRÊPES SIGNATURE',
    items: [
      { 
        name: 'SNICKERS', 
        price: '95 DH', 
        components: 'Crepe, Hazelnut Praline, Butter Biscuit',
        description: 'Crêpe Snickers avec praliné aux noisettes et biscuits au beurre.'
      },
      { 
        name: 'CINNAPLE', 
        price: '95 DH', 
        components: 'Crepe, Bugatsa cream, Crispy filo, Powdered sugar',
        description: 'Crêpe aux saveurs de cannelle avec crème bugatsa et filo croustillant.'
      },
      { 
        name: 'RAFFAELLO', 
        price: '95 DH', 
        components: 'Crepe, Coconut, Hazelnut, White chocolate, Raffaello choco sauce',
        description: 'Crêpe Raffaello avec chocolat blanc, sauce chocolat Raffaello, noix de coco et noisettes.'
      },
      { 
        name: 'SALTED CARAMEL BROWNIES', 
        price: '95 DH', 
        components: 'Crepe, Brownies, Walnuts, Salted caramel',
        description: 'Crêpe caramel salé avec brownies et noix.'
      },
      { 
        name: 'CINNAPLE', 
        price: '105 DH', 
        components: 'Crepe, Oreo biscuit, Hazelnut praline bueno',
        description: 'Crêpe Cinnaple avec biscuits Oreo et praliné aux noisettes Bueno.'
      },
      { 
        name: 'BANANA NUTS', 
        price: '95 DH', 
        components: 'Crepe, Banana, Butter biscuit, Hazelnut praline',
        description: 'Crêpe banane noix avec praliné aux noisettes et biscuits au beurre.'
      },
      { 
        name: 'STRAWBABY', 
        price: '105 DH', 
        components: 'Crepe, White chocolate, Fresh strawberries, Oreo biscuits, Strawberry chocolate pearls',
        description: 'Crêpe aux fraises avec chocolat blanc, fraises fraîches et perles de chocolat à la fraise.'
      },
      { 
        name: 'TWIX', 
        price: '105 DH', 
        components: 'Crepe, Milk chocolate, Miranda biscuits, Twix choco bar, Dulce de leche',
        description: 'Crêpe Twix avec chocolat au lait, biscuits Miranda et dulce de leche.'
      },
      { 
        name: 'MOSAIC', 
        price: '105 DH', 
        components: 'Crepe, White chocolate, Whipped cream, Crema Madagascar gelato, Chocolate gelato, Oreo biscuit, Premium praline',
        description: 'Crêpe mosaïque avec chocolat blanc, crème fouettée et glaces premium.'
      }
    ]
  },
  pancakes: {
    title: 'PANCAKES SIGNATURE',
    items: [
      { 
        name: 'NUTELLA', 
        price: '105 DH', 
        components: '4 Pancakes, Hazelnut praline, Caprice, Banana, Butter biscuits',
        description: 'Pancakes signature avec Nutella, praliné aux noisettes, caprice, banane et biscuits au beurre.'
      },
      { 
        name: 'CINNAMON ROLL', 
        price: '105 DH', 
        components: '4 Pancakes, Bueno choco bar, Bueno praline, Gofretino praline, Chocolate pearls',
        description: 'Pancakes cannelle avec barre chocolat Bueno, praliné Bueno et perles de chocolat.'
      },
      { 
        name: 'CHEESE CAKE', 
        price: '105 DH', 
        components: '4 Pancakes, Fresh strawberries, Cream cheese, Strawberry syrup, Whipped cream',
        description: 'Pancakes cheesecake avec fraises fraîches, fromage à la crème et sirop de fraise.'
      },
      { 
        name: 'CARAMEL CREAM', 
        price: '105 DH', 
        components: '4 Pancakes, Butter vanilla cream, Banana, Salted caramel, Caramelized almonds',
        description: 'Pancakes avec crème vanille beurre, banane, caramel salé et amandes caramélisées.'
      },
      { 
        name: 'BUENO BOMB', 
        price: '105 DH', 
        components: '4 Pancakes, Bueno choco bar, Bueno praline, Gofretino praline, Chocolate pearls',
        description: 'Explosion de saveurs Bueno avec barre chocolat, praliné et perles de chocolat.'
      },
      { 
        name: 'CEREAL', 
        price: '105 DH', 
        components: '4 Pancakes, Bitter chocolate, White chocolate, Oreo cereal, Oreo biscuit',
        description: 'Pancakes aux céréales avec chocolat noir et blanc, céréales Oreo et biscuits.'
      },
      { 
        name: 'WHITE OREO BERRY', 
        price: '105 DH', 
        components: '4 Pancakes, Butter vanilla cream, Banana, Salted caramel, Caramelized almonds',
        description: 'Pancakes aux Oreo blancs avec crème vanille beurre, banane et caramel salé.'
      },
      { 
        name: 'RED VELVET', 
        price: '105 DH', 
        components: '4 Pancakes, Red velvet cake, Cheesecake cream, Red velvet fruit sauce',
        description: 'Pancakes red velvet avec gâteau red velvet, crème cheesecake et sauce aux fruits.'
      },
      { 
        name: 'DARK CHOCOLATE', 
        price: '105 DH', 
        components: '4 Chocolate pancakes with fresh strawberries, Dark chocolate, Oreo biscuits, Nuts',
        description: 'Pancakes au chocolat noir avec fraises fraîches, chocolat noir, biscuits Oreo et noix.'
      }
    ]
  },
  puffPastry: {
    title: 'SPÉCIALITÉ PÂTE FEUILLETÉE',
    items: [
      { 
        name: 'CLASSIC WITH CREAM', 
        price: '85 MAD', 
        components: 'Pâte feuilletée, crème pâtissière',
        description: 'Pâte feuilletée classique avec crème pâtissière.'
      },
      { 
        name: 'PISTACHIO PUFF PASTRY', 
        price: '90 MAD', 
        components: 'Pâte feuilletée, pistaches, crème',
        description: 'Pâte feuilletée aux pistaches avec crème.'
      },
      { 
        name: 'DARK CHOCOLATE PUFF PASTRY', 
        price: '90 MAD', 
        components: 'Pâte feuilletée, chocolat noir, crème',
        description: 'Pâte feuilletée au chocolat noir avec crème.'
      },
      { 
        name: 'LOTUS SPECULOOS WITH CREAM', 
        price: '90 MAD', 
        components: 'Pâte feuilletée, Lotus Speculoos, crème',
        description: 'Pâte feuilletée Lotus Speculoos avec crème.'
      },
      { 
        name: 'OREO WITH CREAM', 
        price: '90 MAD', 
        components: 'Pâte feuilletée, Oreo, crème',
        description: 'Pâte feuilletée Oreo avec crème.'
      },
      { 
        name: 'BANANA PUFF PASTRY', 
        price: '90 MAD', 
        components: 'Pâte feuilletée, banane, crème',
        description: 'Pâte feuilletée à la banane avec crème.'
      },
      { 
        name: 'PUFF PASTRY SAMPLES', 
        price: '120 MAD', 
        components: 'Assortiment de pâtes feuilletées',
        description: 'Assortiment de différentes pâtes feuilletées.'
      }
    ]
  },
  toShare: {
    title: 'À PARTAGER',
    items: [
      { 
        name: 'SPECIAL BUBBLES', 
        price: '125 MAD', 
        components: 'Bubbles spéciales à partager',
        description: 'Bubbles spéciales pour partager entre amis.'
      },
      { 
        name: 'MINI PANCAKES', 
        price: '125 MAD', 
        components: 'Mini pancakes à partager',
        description: 'Mini pancakes pour partager.'
      },
      { 
        name: 'MINI ROLLS', 
        price: '125 MAD', 
        components: 'Mini rolls à partager',
        description: 'Mini rolls pour partager.'
      },
      { 
        name: 'DELUXE MINI PANCAKES', 
        price: '125 MAD', 
        components: 'Mini pancakes deluxe à partager',
        description: 'Mini pancakes deluxe pour partager.'
      },
      { 
        name: 'ASSIETTE MIX', 
        price: '185 MAD', 
        components: 'Assiette mixte à partager',
        description: 'Assiette mixte pour partager.'
      },
      { 
        name: 'MEGA MIXING PLATE', 
        price: '240 MAD', 
        components: 'Méga assiette mixte à partager',
        description: 'Méga assiette mixte pour partager.'
      }
    ]
  },
  brookie: {
    title: 'SPÉCIALITÉ BROOKIE',
    items: [
      { 
        name: 'DARK CHOCOLATE BROOKIE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie chocolat noir',
        description: 'Brookie au chocolat noir - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'WHITE CHOCOLATE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie chocolat blanc',
        description: 'Brookie au chocolat blanc - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'KIT KAT', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie Kit Kat',
        description: 'Brookie Kit Kat - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'PISTACHIO BROOKIE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie pistache',
        description: 'Brookie à la pistache - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'OREO BROOKIE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie Oreo',
        description: 'Brookie Oreo - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'BROOKIE LOTUS', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie Lotus',
        description: 'Brookie Lotus - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'M&M\'S BROOKIE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie M&M\'s',
        description: 'Brookie M&M\'s - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'KINDER', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie Kinder',
        description: 'Brookie Kinder - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'BROOKIE RED FRUITS', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie fruits rouges',
        description: 'Brookie aux fruits rouges - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'BROWNIE BROOKIE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie brownie',
        description: 'Brookie brownie - Petit: 95 MAD / Grand: 120 MAD.'
      },
      { 
        name: 'SPECIALE PAN BROOKIE', 
        price: '95 MAD / 120 MAD', 
        components: 'Brookie spéciale pan',
        description: 'Brookie spéciale pan - Petit: 95 MAD / Grand: 120 MAD.'
      }
    ]
  },
  cups: {
    title: 'COUPES',
    items: [
      { 
        name: 'HAWAIIAN BREEZE', 
        price: '90 MAD', 
        components: 'Fruits tropicaux, crème',
        description: 'Cup aux fruits tropicaux avec crème.'
      },
      { 
        name: 'BANANA SPLIT', 
        price: '80 MAD', 
        components: 'Banane, glace, chocolat',
        description: 'Banana split classique.'
      },
      { 
        name: 'AMERICANA', 
        price: '85 MAD', 
        components: 'Fruits, crème, chocolat',
        description: 'Cup Americana aux fruits.'
      },
      { 
        name: 'STRAWBERRY CAKE', 
        price: '89 MAD', 
        components: 'Fraise, gâteau, crème',
        description: 'Cup gâteau aux fraises.'
      },
      { 
        name: 'FRUIT CUPS', 
        price: '95 MAD', 
        components: 'Fruits frais, crème',
        description: 'Cup aux fruits frais.'
      },
      { 
        name: 'LOTUS FRUIT BOWL', 
        price: '95 MAD', 
        components: 'Fruits, Lotus, crème',
        description: 'Bowl aux fruits avec Lotus.'
      },
      { 
        name: 'OREO FRUIT BOWL', 
        price: '95 MAD', 
        components: 'Fruits, Oreo, crème',
        description: 'Bowl aux fruits avec Oreo.'
      },
      { 
        name: 'KITKAT FRUIT BOWL', 
        price: '95 MAD', 
        components: 'Fruits, KitKat, crème',
        description: 'Bowl aux fruits avec KitKat.'
      },
      { 
        name: 'KINDAR FRUIT BOWL', 
        price: '95 MAD', 
        components: 'Fruits, Kindar, crème',
        description: 'Bowl aux fruits avec Kindar.'
      },
      { 
        name: 'NUTELLA FRUIT BOWL', 
        price: '95 MAD', 
        components: 'Fruits, Nutella, crème',
        description: 'Bowl aux fruits avec Nutella.'
      },
      { 
        name: 'DIET FRUIT CUP', 
        price: '80 MAD', 
        components: 'Fruits, crème légère',
        description: 'Cup aux fruits diététique.'
      },
      { 
        name: 'AVOCADO FRUIT CUP', 
        price: '95 MAD', 
        components: 'Avocat, fruits, crème',
        description: 'Cup aux fruits avec avocat.'
      },
      { 
        name: 'KIDSPOT', 
        price: '60 MAD', 
        components: 'Fruits, crème, chocolat',
        description: 'Cup spéciale enfants.'
      },
      { 
        name: 'WHITE CHOCOLAT', 
        price: '95 MAD', 
        components: 'Fruits, chocolat blanc, crème',
        description: 'Cup aux fruits avec chocolat blanc.'
      },
      { 
        name: 'FERRERO ROCHER', 
        price: '95 MAD', 
        components: 'Fruits, Ferrero Rocher, crème',
        description: 'Cup aux fruits avec Ferrero Rocher.'
      }
    ]
  },
  cakes: {
    title: 'GÂTEAUX',
    items: [
      { 
        name: 'CHOCOLATE TRUFFLE CAKE', 
        price: '85 MAD', 
        components: 'Gâteau chocolat truffe, crème',
        description: 'Gâteau au chocolat truffe avec crème.'
      },
      { 
        name: 'CARROT CAKE', 
        price: '85 MAD', 
        components: 'Gâteau carotte, crème cheese',
        description: 'Gâteau à la carotte avec crème cheese.'
      },
      { 
        name: 'CHEESECAKE CLASSIC', 
        price: '75 MAD', 
        components: 'Cheesecake classique, crème',
        description: 'Cheesecake classique avec crème.'
      },
      { 
        name: 'RED VELVET CAKE', 
        price: '85 MAD', 
        components: 'Gâteau red velvet, crème cheese',
        description: 'Gâteau red velvet avec crème cheese.'
      },
      { 
        name: 'CHEESECAKE LOTUS', 
        price: '85 MAD', 
        components: 'Cheesecake Lotus, crème',
        description: 'Cheesecake Lotus avec crème.'
      },
      { 
        name: 'CHEESECAKE COCONUT PIE', 
        price: '85 MAD', 
        components: 'Cheesecake coco, noix de coco',
        description: 'Cheesecake à la noix de coco.'
      },
      { 
        name: 'CHEESECAKE TIRAMISU', 
        price: '85 MAD', 
        components: 'Cheesecake tiramisu, café',
        description: 'Cheesecake tiramisu au café.'
      },
      { 
        name: 'CHEESECAKE PEANUT BUTTER', 
        price: '85 MAD', 
        components: 'Cheesecake beurre de cacahuète',
        description: 'Cheesecake au beurre de cacahuète.'
      },
      { 
        name: 'CHEESECAKE 3 CHOCOLATS', 
        price: '85 MAD', 
        components: 'Cheesecake 3 chocolats',
        description: 'Cheesecake aux 3 chocolats.'
      },
      { 
        name: 'CHEESECAKE PISTACHIO', 
        price: '85 MAD', 
        components: 'Cheesecake pistache',
        description: 'Cheesecake à la pistache.'
      },
      { 
        name: 'CHEESECAKE LEMON MERINGUE', 
        price: '85 MAD', 
        components: 'Cheesecake citron meringue',
        description: 'Cheesecake citron meringue.'
      }
    ]
  }
};

const petitDejeunerBrunchData = {
  petitDejeuner: {
    title: 'PETIT-DÉJEUNER SIGNATURE LA MADELEINE',
    subtitle: '(Servis de 7h30 à 13h)',
    items: [
      { 
        name: 'Petit Déjeuner Express', 
        price: '55 DHS', 
        components: 'Boisson chaude & jus d\'orange, Corbeille de pain, beurre, confiture, Deux Mini viennoiseries',
        description: 'Un petit déjeuner express parfait pour commencer la journée avec une boisson chaude, jus d\'orange, corbeille de pain avec beurre et confiture, et deux mini viennoiseries.',
          image: '/Petitdéjeuner_Brunch/Express.png'
      },
      { 
        name: 'Continental', 
        price: '75 DHS', 
        components: 'Boisson chaude & jus d\'orange, Corbeille de pain, beurre, confiture, Omelette nature, Mini-viennoiseries, Yaourt au miel et fruits frais',
        description: 'Un petit déjeuner continental complet avec boisson chaude, jus d\'orange, corbeille de pain, omelette nature, mini-viennoiseries et yaourt au miel avec fruits frais.',
        image: '/Petitdéjeuner_Brunch/Continental.png'
      },
      { 
        name: 'Koutoubia', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus d\'orange, Harbal, Œuf au plat, Batbout, harcha, msemen, churro, Fromage blanc, Beurre & miel, Raib et fruits secs',
        description: 'Un petit déjeuner marocain traditionnel avec harbal, œuf au plat, assortiment de pains : batbout, harcha, msemen, churro, fromage blanc, beurre & miel, et raib avec fruits secs.',
        image: '/Petitdéjeuner_Brunch/Koutoubia.png'
      },
      { 
        name: 'Haouz', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus d\'orange, Barkoukch, Harcha au lait & Amlou, Pain grillé, Beurre & Olive noir, Œufs aux herbes fraîches',
        description: 'Un petit déjeuner aux saveurs du Haouz avec barkoukch, harcha au lait et amlou, pain grillé avec beurre et olive noir, et œufs aux herbes fraîches.',
        image: '/Petitdéjeuner_Brunch/Haouz.png'
      },
      { 
        name: 'Nature', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus détox, Pain complet grillé, Omelette aux herbes fraîches, Bowl de yaourt nature, granola maison et fruits frais, Verrine de graines de chia',
        description: 'Un petit déjeuner nature et équilibré avec pain complet grillé, omelette aux herbes fraîches, bowl de yaourt nature avec granola maison et fruits frais, et verrine de graines de chia.',
        image: '/Petitdéjeuner_Brunch/Nature.png'
      },
      { 
        name: 'Tangis', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus détox, Churros, Poêle œuf tomate, Mini Baghrir servi avec amlou et fruits frais, Paissar (purée de fèves et petit pois), Pain, Fromage frais, tomates confites',
        description: 'Un petit déjeuner aux saveurs de Tanger avec churros, poêle œuf tomate, mini baghrir avec amlou et fruits frais, paissar (purée de fèves et petit pois), pain, fromage frais et tomates confites.',
        image: '/Petitdéjeuner_Brunch/Tangis.png'
      }
    ]
  },
  brunchs: {
    title: 'LES BRUNCHS SIGNATURE LA MADELEINE',
    subtitle: '(Servis de 7h30 à 16h)',
    items: [
      { 
        name: 'Le Croissant Bénédictin', 
        price: '120 DHS', 
        components: 'Boisson chaude & jus d\'orange, Croissant salé artisanal, Œufs brouillés, Jambon de dinde, Cream cheese, Cake du jour, Quiche aux épinards, Yaourt & fruits frais',
        description: 'Un croissant salé artisanal garni d\'œufs brouillés, jambon de dinde et cream cheese. Accompagné d\'un cake du jour, quiche aux épinards, yaourt et fruits frais pour un brunch complet et savoureux.',
        image: '/Petitdéjeuner_Brunch/Croissant_Benidictain.png'
      },
      { 
        name: 'Brunch Soleil du Sud', 
        price: '135 DHS', 
        components: 'Boisson chaude & jus d\'orange, Bissara, Tajine de khlii, Assortiment de pains et galettes : batbout, harcha, msemen, churro, Beurre & miel, Baghrir servi avec amlou et fruits frais, Raib à l\'huile d\'argan et fruits secs',
        description: 'Un brunch aux saveurs du sud avec bissara et tajine de khlii traditionnel. Accompagné d\'un assortiment de pains et galettes : batbout, harcha, msemen, churro. Terminé par du baghrir avec amlou et un raib à l\'huile d\'argan.',
        image: '/Petitdéjeuner_Brunch/Brunch_Soleil_du_Sud.PNG'
      },
      { 
        name: '🇺🇸 La Belle Américaine', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange, Salade Cobb, Toast gratiné avec bacon halal, saucisse, œufs au plat, champignons poêlés, tomates confites et hash browns, Pancakes au sirop d\'érable, Yaourt au granola & fruits frais',
        description: 'Un brunch américain authentique avec une salade Cobb et un toast gratiné garni de bacon halal, saucisse, œufs au plat, champignons poêlés et tomates confites. Complété par des pancakes au sirop d\'érable et un yaourt au granola.',
        image: '/breakfast-americaine.jpg'
      },
      { 
        name: 'Brunch Évasion Nordique', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange frais, Tartine aux graines garnie de cream cheese, saumon fumé, guacamole maison, œufs pochés et sauce hollandaise, Quiche aux épinards, Yaourt grec accompagné de granola et de fruits frais',
        description: 'Une expérience nordique raffinée avec une tartine aux graines garnie de cream cheese et saumon fumé, accompagnée d\'œufs pochés et sauce hollandaise. Complété par une quiche aux épinards et un yaourt grec avec granola et fruits frais.',
        image: '/breakfast_nordique.jpg'
      },
      { 
        name: 'Brunch Bagel Royal', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange, Bagel aux céréales, laitue, œufs au plat ou brouillés, pastrami et sauce aïoli, Muffin, Yaourt maison, Salade de fruits frais',
        description: 'Un brunch royal avec un bagel aux céréales garni de laitue, œufs au choix, pastrami et sauce aïoli. Accompagné d\'un muffin, yaourt maison et une salade de fruits frais pour une expérience complète.',
        image: '/breakfast-bagel.jpg'
      },
      { 
        name: 'Brunch Andalou', 
        price: '145 DHS', 
        components: 'Boisson chaude & jus d\'orange, Pain grillé, Tortilla, Fromage et charcuterie, Purée de tomate aux herbes fines, Huile d\'olive & ail, Fromage blanc au thym, Salade de fruits, Cake du jour',
        description: 'Un brunch aux saveurs andalouses avec pain grillé, tortilla, fromage et charcuterie. Accompagné de purée de tomate aux herbes fines, huile d\'olive & ail, fromage blanc au thym, salade de fruits et cake du jour.',
        image: '/Petitdéjeuner_Brunch/Andalou.png'
      }
    ]
  }
};

const breakfastData = {
  breakfast: {
    title: 'BREAKFAST SIGNATURE LA MADELEINE',
    subtitle: '(Servis de 7h30 à 13h)',
    items: [
      { 
        name: 'Petit Déjeuner Express', 
        price: '55 DHS', 
        components: 'Boisson chaude & jus d\'orange, Corbeille de pain, beurre, confiture, Deux Mini viennoiseries',
        description: 'Un petit déjeuner express parfait pour commencer la journée avec une boisson chaude, jus d\'orange, corbeille de pain avec beurre et confiture, et deux mini viennoiseries.',
          image: '/Petitdéjeuner_Brunch/Express.png'
      },
      { 
        name: 'Continental', 
        price: '75 DHS', 
        components: 'Boisson chaude & jus d\'orange, Corbeille de pain, beurre, confiture, Omelette nature, Mini-viennoiseries, Yaourt au miel et fruits frais',
        description: 'Un petit déjeuner continental complet avec boisson chaude, jus d\'orange, corbeille de pain, omelette nature, mini-viennoiseries et yaourt au miel avec fruits frais.',
        image: '/Petitdéjeuner_Brunch/Continental.png'
      },
      { 
        name: 'Koutoubia', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus d\'orange, Harbal, Œuf au plat, Batbout, harcha, msemen, churro, Fromage blanc, Beurre & miel, Raib et fruits secs',
        description: 'Un petit déjeuner marocain traditionnel avec harbal, œuf au plat, assortiment de pains : batbout, harcha, msemen, churro, fromage blanc, beurre & miel, et raib avec fruits secs.',
        image: '/Petitdéjeuner_Brunch/Koutoubia.png'
      },
      { 
        name: 'Haouz', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus d\'orange, Barkoukch, Harcha au lait & Amlou, Pain grillé, Beurre & Olive noir, Œufs aux herbes fraîches',
        description: 'Un petit déjeuner aux saveurs du Haouz avec barkoukch, harcha au lait et amlou, pain grillé avec beurre et olive noir, et œufs aux herbes fraîches.',
        image: '/Petitdéjeuner_Brunch/Haouz.png'
      },
      { 
        name: 'Nature', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus détox, Pain complet grillé, Omelette aux herbes fraîches, Bowl de yaourt nature, granola maison et fruits frais, Verrine de graines de chia',
        description: 'Un petit déjeuner nature et équilibré avec pain complet grillé, omelette aux herbes fraîches, bowl de yaourt nature avec granola maison et fruits frais, et verrine de graines de chia.',
        image: '/Petitdéjeuner_Brunch/Nature.png'
      },
      { 
        name: 'Tangis', 
        price: '85 DHS', 
        components: 'Boisson chaude & jus détox, Churros, Poêle œuf tomate, Mini Baghrir servi avec amlou et fruits frais, Paissar (purée de fèves et petit pois), Pain, Fromage frais, tomates confites',
        description: 'Un petit déjeuner aux saveurs de Tanger avec churros, poêle œuf tomate, mini baghrir avec amlou et fruits frais, paissar (purée de fèves et petit pois), pain, fromage frais et tomates confites.',
        image: '/Petitdéjeuner_Brunch/Tangis.png'
      }
    ]
  }
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('boissons');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Effet pour détecter le scroll et afficher/masquer le bouton
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Afficher le bouton quand l'utilisateur est dans le dernier tiers de la page
      const threshold = documentHeight - windowHeight - 200;
      setShowScrollButton(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Fonction pour rendre le menu Petit-déjeuner & Brunch avec sous-catégories
  const renderPetitDejeunerBrunchMenu = (data) => {
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
        {/* Navigation rapide */}
        <div className="boissons-navigation petit-dejeuner-brunch">
          <div className="boissons-families">
            {Object.entries(data).map(([key, family]) => (
              <button
                key={key}
                className="boissons-family-btn"
                onClick={() => scrollToFamily(key)}
              >
                <div className="family-icon">
                  <img src={familyIcons[key]} alt={family.title} />
                </div>
                <span className="family-name">
                  {key === 'brunchs' ? 'Brunchs' : 
                   key === 'menuEnfant' ? 'Menu Enfant' : 
                   family.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu des familles */}
        {Object.entries(data).map(([key, family]) => (
          <div key={key} id={`family-${key}`} className="boissons-category">
            <h3 className="boissons-category-title">{family.title}</h3>
            {family.subtitle && <p className="boissons-category-subtitle">{family.subtitle}</p>}
            <ul className="boissons-list">
              {family.items.map((item, index) => (
                <li key={index} className="boissons-item">
                  {item.isNew && <div className="new-badge">NEW</div>}
                  <div className="item-main">
                    {item.image && (
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    )}
                    <div className="item-content">
                      <div className="item-content-main">
                        <div className="item-name">{item.name}</div>
                        {item.components && <div className="item-components">{item.components}</div>}
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

  // Fonction pour rendre le menu Déjeuner & Dîner avec navigation rapide
  const renderDejeunerDinerMenu = (data) => {
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
        {/* Navigation rapide */}
        <div className="boissons-navigation">
          <div className="boissons-families">
            {Object.entries(data).map(([key, family]) => (
              <button
                key={key}
                className="boissons-family-btn"
                onClick={() => scrollToFamily(key)}
              >
                <div className="family-icon">
                  <img src={familyIcons[key]} alt={family.title} />
                </div>
                <span className="family-name">
                  {key === 'menuEnfant' ? 'Menu Enfant' : family.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu des familles */}
        {Object.entries(data).map(([key, family]) => (
          <div key={key} id={`family-${key}`} className="boissons-category">
            <h3 className="boissons-category-title">{family.title}</h3>
            {family.subtitle && <p className="boissons-category-subtitle">{family.subtitle}</p>}
            <ul className="boissons-list">
              {family.items.map((item, index) => (
                <li key={index} className="boissons-item">
                  {item.isNew && <div className="new-badge">NEW</div>}
                  <div className="item-main">
                    {item.image && (
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    )}
                    <div className="item-content">
                      <div className="item-content-main">
                        <div className="item-name">{item.name}</div>
                        {item.components && <div className="item-components">{item.components}</div>}
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

  // Fonction pour rendre le menu Goûter
  const renderGouterMenu = (data) => {
    return (
      <div className="boissons-container">
        <ul className="boissons-list">
          {Object.entries(data).map(([key, category]) => (
            <li key={key} id={`family-${key}`} className="drink-family">
              {/* Header de la famille */}
              <div className="family-header">
                <div className="family-content">
                  <h2 className="family-title">{category.title}</h2>
                  {category.subtitle && (
                    <p className="family-subtitle">{category.subtitle}</p>
                  )}
                  <p className="family-subtitle">
                    {category.items.length} formule{category.items.length > 1 ? 's' : ''} disponible{category.items.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              
              {/* Menu des formules */}
              <div className="family-menu">
                <div className="family-items-grid">
                  {category.items.map((item, index) => (
                    <div key={index} className="family-item">
                      <div className="family-item-name">{item.name}</div>
                      <div className="family-item-price">{item.price}</div>
                      <div className="family-item-description">{item.components}</div>
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

  // Fonction pour rendre le menu Sucrés avec navigation rapide
  const renderSucresMenu = (data) => {
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
        {/* Navigation rapide */}
        <div className="boissons-navigation">
          <div className="boissons-families">
            {Object.entries(data).map(([key, family]) => (
              <button
                key={key}
                className="boissons-family-btn"
                onClick={() => scrollToFamily(key)}
              >
                <div className="family-icon">
                  <img src={familyIcons[key]} alt={family.title} />
                </div>
                <span className="family-name">
                  {key === 'bubbleWaffle' ? 'Cône Bubble' : 
                   key === 'crepes' ? 'Crêpes' : 
                   key === 'pancakes' ? 'Pancakes' : 
                   key === 'puffPastry' ? 'Pâte Feuilletée' : 
                   key === 'toShare' ? 'À Partager' : 
                   key === 'sticks' ? 'Sticks' : 
                   key === 'brookie' ? 'Brookie' : 
                   key === 'cups' ? 'Coupes' : 
                   key === 'cakes' ? 'Gâteaux' : 
                   family.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenu des familles */}
        {Object.entries(data).map(([key, family]) => (
          <div key={key} id={`family-${key}`} className="boissons-category">
            <h3 className="boissons-category-title">{family.title}</h3>
            {family.subtitle && <p className="boissons-category-subtitle">{family.subtitle}</p>}
            <ul className="boissons-list">
              {family.items.map((item, index) => (
                <li key={index} className="boissons-item">
                  {item.isNew && <div className="new-badge">NEW</div>}
                  <div className="item-main">
                    {item.image && (
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    )}
                    <div className="item-content">
                      <div className="item-content-main">
                        <div className="item-name">{item.name}</div>
                        {item.components && <div className="item-components">{item.components}</div>}
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

  // Fonction pour rendre les autres menus avec design original (breakfast, plats, etc.)
  const renderMenuItems = (data) => {
    return (
      <div className="boissons-container">
        {Object.entries(data).map(([key, category]) => (
          <div key={key} className="boissons-category">
            <h3 className="boissons-category-title">{category.title}</h3>
            {category.subtitle && <p className="boissons-category-subtitle">{category.subtitle}</p>}
            <ul className="boissons-list">
              {category.items.map((item, index) => (
                <li key={index} className="boissons-item">
                  {item.isNew && <div className="new-badge">NEW</div>}
                  <div className="item-main">
                    {item.image && (
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    )}
                    <div className="item-content">
                      <div className="item-content-main">
                        <div className="item-name">{item.name}</div>
                        {item.components && <div className="item-components">{item.components}</div>}
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
      
      <div className="menu-categories-bar sticky-navigation">
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

      {/* Navigation rapide sticky pour toutes les catégories */}
      {selectedCategory === 'boissons' && (
        <div className="sticky-family-navigation">
          <div className="sticky-family-nav-content">
            <h4 className="sticky-family-nav-title">Navigation Rapide</h4>
            <div className="sticky-family-nav-grid">
              {Object.entries(boissonsData).map(([key, category]) => (
                <button
                  key={key}
                  className="sticky-family-nav-btn"
                  onClick={() => {
                    const element = document.getElementById(`family-${key}`);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  title={category.title}
                >
                  <img 
                    src={familyIcons[key]} 
                    alt={category.title}
                    className="sticky-family-nav-icon"
                  />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCategory === 'petit-dejeuner-brunch' && (
        <div className="sticky-family-navigation">
          <div className="sticky-family-nav-content">
            <h4 className="sticky-family-nav-title">Navigation Rapide</h4>
            <div className="sticky-family-nav-grid">
              {Object.entries(petitDejeunerBrunchData).map(([key, category]) => (
                <button
                  key={key}
                  className="sticky-family-nav-btn"
                  onClick={() => {
                    const element = document.getElementById(`family-${key}`);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  title={category.title}
                >
                  <img 
                    src={familyIcons[key]} 
                    alt={category.title}
                    className="sticky-family-nav-icon"
                  />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCategory === 'dejeuner-diner' && (
        <div className="sticky-family-navigation">
          <div className="sticky-family-nav-content">
            <h4 className="sticky-family-nav-title">Navigation Rapide</h4>
            <div className="sticky-family-nav-grid">
              {Object.entries(dejeunerDinerData).map(([key, category]) => (
                <button
                  key={key}
                  className="sticky-family-nav-btn"
                  onClick={() => {
                    const element = document.getElementById(`family-${key}`);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  title={category.title}
                >
                  <img 
                    src={familyIcons[key]} 
                    alt={category.title}
                    className="sticky-family-nav-icon"
                  />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCategory === 'gouter' && (
        <div className="sticky-family-navigation">
          <div className="sticky-family-nav-content">
            <h4 className="sticky-family-nav-title">Navigation Rapide</h4>
            <div className="sticky-family-nav-grid">
              {Object.entries(gouterData).map(([key, category]) => (
                <button
                  key={key}
                  className="sticky-family-nav-btn"
                  onClick={() => {
                    const element = document.getElementById(`family-${key}`);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  title={category.title}
                >
                  <img 
                    src={familyIcons[key]} 
                    alt={category.title}
                    className="sticky-family-nav-icon"
                  />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCategory === 'sucres' && (
        <div className="sticky-family-navigation">
          <div className="sticky-family-nav-content">
            <h4 className="sticky-family-nav-title">Navigation Rapide</h4>
            <div className="sticky-family-nav-grid">
              {Object.entries(sucresData).map(([key, category]) => (
                <button
                  key={key}
                  className="sticky-family-nav-btn"
                  onClick={() => {
                    const element = document.getElementById(`family-${key}`);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  title={category.title}
                >
                  <img 
                    src={familyIcons[key]} 
                    alt={category.title}
                    className="sticky-family-nav-icon"
                  />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="menu-category-content">
        {selectedCategory === 'boissons' && renderDrinksMenuItems(boissonsData)}
        {selectedCategory === 'petit-dejeuner-brunch' && renderPetitDejeunerBrunchMenu(petitDejeunerBrunchData)}
        {selectedCategory === 'dejeuner-diner' && renderDejeunerDinerMenu(dejeunerDinerData)}
        {selectedCategory === 'gouter' && renderGouterMenu(gouterData)}
        {selectedCategory === 'sucres' && renderSucresMenu(sucresData)}
      </div>
      
      {/* Bouton de retour vers le haut */}
      {showScrollButton && (
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
            color: 'white',
            border: '3px solid #fff',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.4)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            opacity: '0.9'
          }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #A0522D 0%, #CD853F 100%)';
          e.target.style.transform = 'translateY(-3px) scale(1.05)';
          e.target.style.boxShadow = '0 12px 35px rgba(139, 69, 19, 0.6)';
          e.target.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)';
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.4)';
          e.target.style.opacity = '0.9';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
      )}
      
      <style jsx>{`
        .sticky-navigation {
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          padding: 10px 0;
        }
        
      `}</style>
    </div>
  );
}

export default Menu; 
