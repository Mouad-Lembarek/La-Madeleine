import './Menu.css';
import { useState } from 'react';

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
  petitDejeuner: '/Petit-déjeuner.png',
  brunchs: '/brunch.png',
  salade: '/salade.png',
  entrees: '/Entrées.png',
  specialiteMarocaine: '/Spécialite marocaine.png',
  grillades: '/grillades.png',
  poulet: '/poulet-frit.png',
  poisson: '/poisson.png',
  pizza: '/pizza.png',
  patesRiz: '/spaghetti.png',
  menuEnfant: '/Menu enfant.png',
  crepesGaufres: '/Crêpes & Gaufres .png',
  glaces: '/Glaces.png',
  sucres: '/Crêpes & Gaufres .png'
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
  petitDejeuner: '/Petit-déjeuner.png',
  brunchs: '/brunch.png',
  salade: '/salade.png',
  entrees: '/Entrées.png',
  specialiteMarocaine: '/Spécialite marocaine.png',
  grillades: '/grillades.png',
  poulet: '/poulet-frit.png',
  poisson: '/poisson.png',
  pizza: '/pizza.png',
  patesRiz: '/spaghetti.png',
  menuEnfant: '/Menu enfant.png',
  crepesGaufres: '/Crêpes & Gaufres .png',
  glaces: '/Glaces.png',
  sucres: '/Crêpes & Gaufres .png'
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
    title: 'MATCHA - CONVENTIONNEL / BIO',
    items: [
      { name: 'VIRGIN MATCHA', price: '45 DHS / 95 DHS', description: 'Matcha pur traditionnel' },
      { name: 'HOT MATCHA LATTE', price: '45 DHS / 95 DHS', description: 'Thé vert matcha avec lait chaud' },
      { name: 'ICED MATCHA LATTE', price: '45 DHS / 95 DHS', description: 'Matcha latté glacé' },
      { name: 'MATCHA VANILLA LATTE', price: '45 DHS / 95 DHS', description: 'Matcha avec vanille' },
      { name: 'MATCHA COCO LATTE', price: '45 DHS / 95 DHS', description: 'Matcha avec noix de coco' },
      { name: 'DIRTY MATCHA', price: '47 DHS / 95 DHS', description: 'Matcha + Espresso' },
      { name: 'ICE MATCHA LAIT', price: '47 DHS / 95 DHS', description: 'Matcha glacé avec lait' },
      { name: 'ICE MATCHA', price: '47 DHS / 95 DHS', description: 'Matcha glacé avec café et lait' },
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
      { 
        name: 'Harira Maison', 
        price: '65 MAD', 
        components: 'Lentilles, Tomates, Viande, Épices, Dattes, Chebakia',
        description: 'Harira traditionnelle marocaine aux lentilles et tomates, servie avec dattes et chebakia. Parfaite pour le ramadan.',
        image: '/Plats/Harira.png'
      },
      { 
        name: 'Barbouche', 
        price: '65 MAD', 
        components: 'Escargots, Bouillon épicé, Herbes, Épices marocaines',
        description: 'Barbouche traditionnel aux escargots mijotés dans un bouillon épicé aux herbes et épices marocaines.',
        image: '/Plats/Barbouch.png'
      },
      { 
        name: 'Créme de Pistou', 
        price: '55 MAD', 
        components: 'Basilic, Tomates, Haricots verts, Fromage, Huile d\'olive',
        description: 'Créme de pistou provençale au basilic, tomates et haricots verts, agrémentée de fromage et huile d\'olive.',
        image: '/Plats/Créme de Pistou.png'
      },
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
        image: '/Plats/Spaghetti a la bolanoise.png'
      },
      { 
        name: 'Raviolis Ricotta & Épinards', 
        price: '115 MAD', 
        components: 'Raviolis frais, Ricotta crémeuse, Épinards frais, Sauce aux champignons sauvages, Parmesan, Basilic frais',
        description: 'Raviolis frais farcis à la ricotta crémeuse et aux épinards frais, servis dans une sauce aux champignons sauvages. Garnis de copeaux de parmesan et de feuilles de basilic frais. Une harmonie parfaite entre douceur et fraîcheur.',
        image: '/Plats/Raviolis ricotta & epinards.png'
      },
      { 
        name: 'Risotto Nero à l\'Encre de Seiche', 
        price: '135 MAD', 
        components: 'Risotto crémeux, Encre de seiche, Calamars frais, Parmesan affiné, Huile d\'olive extra vierge, Persil frais',
        description: 'Risotto crémeux à l\'encre de seiche avec des calamars frais. Agrémenté de parmesan affiné et d\'un filet d\'huile d\'olive extra vierge. Un voyage gustatif vers la Méditerranée avec cette spécialité italienne audacieuse.',
        image: '/Plats/Risotto nero a la encre de seiche.png'
      },
      { 
        name: 'Pâtes Fruits de Mer', 
        price: '125 MAD', 
        components: 'Pâtes fraîches, Crevettes, Calamars, Moules, Tomates cerises, Ail, Persil, Huile d\'olive',
        description: 'Pâtes fraîches aux fruits de mer avec crevettes, calamars et moules. Cuisinées avec des tomates cerises, ail et persil dans un filet d\'huile d\'olive. Un plat de la mer authentique et savoureux.',
        image: '/Plats/Pattes Fruits de Mer.png'
      },
    ]
  },
  pizzas: {
    title: 'PIZZAS ARTISANALES',
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
        image: '/Plats/Pizzas/Pizza cinq fromage.png'
      },
      { 
        name: 'Pizza La Madeleine', 
        price: '180 MAD', 
        components: 'Sauce tomate, Mozzarella, Jambon, Champignons, Olives',
        description: 'Notre pizza signature avec jambon, champignons et olives. Une création unique de La Madeleine.',
        image: '/Plats/Pizzas/Pizza La Madeleine.png'
      },
      { 
        name: 'BBQ Chicken Pizza', 
        price: '135 MAD', 
        components: 'Poulet grillé, Sauce BBQ, Oignons caramélisés, Mozzarella',
        description: 'Pizza au poulet grillé avec sauce BBQ maison et oignons caramélisés. Un mélange sucré-salé irrésistible.',
        image: '/Plats/Pizzas/BBQ Chicken Pizza.png'
      },
      { 
        name: 'Pizza Fruits de Mer', 
        price: '160 MAD', 
        components: 'Calamars, Crevettes, Moules, Tomates, Ail, Persil',
        description: 'Pizza aux fruits de mer frais avec calamars, crevettes et moules. Un voyage gustatif vers la Méditerranée.',
        image: '/Plats/Pizzas/Pizza fruits de mer.png'
      },
      { 
        name: 'Pizza Napolitaine', 
        price: '140 MAD', 
        components: 'Tomate, Mozzarella, Anchois, Câpres, Olives',
        description: 'Pizza napolitaine traditionnelle avec anchois, câpres et olives. Les saveurs authentiques de Naples.',
        image: '/Plats/Pizzas/Pizza Napolitaine.png'
      },
      { 
        name: 'Pizza Végétarienne', 
        price: '120 MAD', 
        components: 'Tomate, Mozzarella, Légumes grillés, Basilic',
        description: 'Pizza végétarienne avec une sélection de légumes grillés et basilic frais. Fraîche et colorée.',
        image: '/Plats/Pizzas/Pizza Végetarian.png'
      },
      { 
        name: 'Pizza Truffe & Champignons', 
        price: '180 MAD', 
        components: 'Sauce à la truffe, Champignons de Paris, Mozzarella, Persil',
        description: 'Pizza raffinée à la truffe noire et champignons de Paris. Une expérience gastronomique unique.',
        image: '/Plats/Pizzas/Pizza truffe& Champingghions.png'
      },
      { 
        name: 'Pizza Épinards & Fromage Gorgonzola', 
        price: '150 MAD', 
        components: 'Épinards frais, Gorgonzola, Mozzarella, Noix',
        description: 'Pizza aux épinards frais et gorgonzola avec des noix. Un mélange de saveurs terreuses et crémeuses.',
        image: '/Plats/Pizzas/Pizza épinards et fromage cordonzola.png'
      },
      { 
        name: 'Pizza Viande Hachée au Poivre', 
        price: '135 MAD', 
        components: 'Viande hachée, Sauce au poivre, Oignons, Mozzarella',
        description: 'Pizza à la viande hachée avec une sauce au poivre relevée et oignons. Un plat généreux et savoureux.',
        image: '/Plats/Pizzas/Pizza Viande hachee au poivre.png'
      },
      { 
        name: 'Pizza Ramdania', 
        price: '135 MAD', 
        components: 'Sauce tomate, Mozzarella, Merguez, Poivrons, Oignons',
        description: 'Pizza marocaine avec merguez, poivrons et oignons. Un mélange de saveurs orientales et italiennes.',
        image: '/Plats/Pizzas/Pizza Ramdania.png'
      },
    ]
  },
  grillades: {
    title: 'GRILLADES & BARBECUE',
    items: [
      { 
        name: 'Brochettes de Poulet', 
        price: 'Plat 120 MAD / Sandwich 75 MAD', 
        components: 'Poulet mariné, Épices marocaines, Riz aux herbes, Légumes grillés',
        description: 'Brochettes de poulet marinées aux épices marocaines, servies avec riz aux herbes et légumes grillés.',
        image: '/Plats/Brochet de poulet.png'
      },
      { 
        name: 'Brochettes de Viande', 
        price: 'Plat 129 MAD / Sandwich 85 MAD', 
        components: 'Viande de bœuf, Épices, Riz aux herbes, Légumes grillés',
        description: 'Brochettes de viande de bœuf marinées aux épices, accompagnées de riz aux herbes et légumes grillés.',
        image: '/Plats/Brochettes de viande.png'
      },
      { 
        name: 'Brochettes Mixtes', 
        price: 'Plat 135 MAD / Sandwich 95 MAD', 
        components: 'Mélange de viandes, Épices variées, Riz safrané, Frites maison',
        description: 'Brochettes mixtes avec un assortiment de viandes marinées aux épices variées, servies avec riz safrané et frites maison.',
        image: '/Plats/Brochette mixte.png'
      },
      { 
        name: 'Entrecôte de Bœuf', 
        price: '169 MAD', 
        components: 'Entrecôte 300g, Frites maison, Sauce au poivre, Salade verte',
        description: 'Entrecôte de bœuf de 300g grillée à point, servie avec frites maison, sauce au poivre et salade verte.',
        image: '/Plats/Entrecote de boeuf.png'
      },
      { 
        name: 'Filet de Bœuf Grillé', 
        price: '159 MAD', 
        components: 'Filet de bœuf, Pommes sautées, Salade verte, Sauce béarnaise',
        description: 'Filet de bœuf tendre grillé à la perfection, accompagné de pommes sautées, salade verte et sauce béarnaise.',
        image: '/Plats/Fillet de boeur grille.png'
      },
      { 
        name: 'Médaillon de Filet de Bœuf', 
        price: '165 MAD', 
        components: 'Médaillon de bœuf, Purée maison, Légumes de saison, Sauce au vin',
        description: 'Médaillon de filet de bœuf tendre, servi avec purée maison, légumes de saison et sauce au vin rouge.',
        image: '/Plats/Médaillon filet de boeuf.png'
      },
      { 
        name: 'Émincé de Bœuf', 
        price: '145 MAD', 
        components: 'Émincé de bœuf, Oignons, Poivrons, Sauce soja, Riz basmati',
        description: 'Émincé de bœuf sauté aux oignons et poivrons avec une sauce soja, servi avec riz basmati parfumé.',
        image: '/Plats/Emincer de boeuf.png'
      },
      { 
        name: 'Escalope Milanaise', 
        price: '125 MAD', 
        components: 'Escalope de veau, Chapelure, Parmesan, Frites, Salade',
        description: 'Escalope de veau panée à la milanaise avec chapelure et parmesan, servie avec frites et salade verte.',
        image: '/Plats/Escalope milanaise.png'
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
        image: '/Plats/Saumon sauce épinard a zestes.png'
      },
      { 
        name: 'Pavé de Saumon Grillé', 
        price: '135 MAD', 
        components: 'Pavé de saumon, Légumes grillés, Purée de pommes de terre, Citron',
        description: 'Pavé de saumon grillé aux herbes, accompagné de légumes grillés et purée de pommes de terre maison.',
        image: '/Plats/Pavé saumon grille.png'
      },
      { 
        name: 'Pavé de Saumon aux Citrons', 
        price: '140 MAD', 
        components: 'Pavé de saumon, Citrons confits, Herbes de Provence, Riz pilaf',
        description: 'Pavé de saumon aux citrons confits et herbes de Provence, servi avec riz pilaf parfumé.',
        image: '/Plats/Pavé saumon aux citron.png'
      },
      { 
        name: 'Filet de Loup aux Citrons', 
        price: '155 MAD', 
        components: 'Filet de loup, Citrons, Câpres, Persil, Pommes vapeur',
        description: 'Filet de loup frais aux citrons et câpres, garni de persil frais et servi avec pommes de terre vapeur.',
        image: '/Plats/Filet de loup aux citron.png'
      },
      { 
        name: 'Loup Bar Entier', 
        price: '180 MAD', 
        components: 'Loup bar entier, Herbes, Citron, Légumes de saison',
        description: 'Loup bar entier grillé aux herbes et citron, accompagné de légumes de saison. Un plat impressionnant.',
        image: '/Plats/Loup bar entier.png'
      },
      { 
        name: 'Loup Bar en Cuisson al Cartoccio', 
        price: '165 MAD', 
        components: 'Loup bar, Papillote, Herbes, Tomates cerises, Olives',
        description: 'Loup bar cuit en papillote avec herbes, tomates cerises et olives. Une cuisson douce qui préserve tous les arômes.',
        image: '/Plats/Loup Bar en cuisson al cartoccio.png'
      },
      { 
        name: 'Gambas Pil Pil', 
        price: '125 MAD', 
        components: 'Gambas, Ail, Piment, Huile d\'olive, Pain grillé',
        description: 'Gambas sautées à l\'ail et au piment dans l\'huile d\'olive, servies avec pain grillé. Un classique espagnol.',
        image: '/Plats/Gambas pil pil.png'
      },
      { 
        name: 'Gambas à l\'Ail', 
        price: '120 MAD', 
        components: 'Gambas, Ail, Persil, Citron, Riz basmati',
        description: 'Gambas sautées à l\'ail et persil, arrosées de citron et servies avec riz basmati parfumé.',
        image: '/Plats/Gambas a jilio.png'
      },
      { 
        name: 'Poulpe à la Gallega', 
        price: '130 MAD', 
        components: 'Poulpe, Pommes de terre, Paprika, Huile d\'olive',
        description: 'Poulpe tendre à la galicienne avec pommes de terre et paprika, arrosé d\'huile d\'olive. Une spécialité espagnole.',
        image: '/Plats/Pulpo a la gallega.png'
      },
    ]
  },
  marocaines: {
    title: 'SPÉCIALITÉS MAROCAINES',
    items: [
      { 
        name: 'Tajine de Poulet aux Pruneaux', 
        price: '125 MAD', 
        components: 'Poulet, Pruneaux, Amandes, Oignons, Épices marocaines, Pain maison',
        description: 'Tajine traditionnel de poulet aux pruneaux et amandes, mijoté aux épices marocaines et servi avec pain maison.',
        image: '/Plats/Tajine viend hacher aux oeufs.png'
      },
      { 
        name: 'Tajine de Viande Hachée aux Œufs', 
        price: '129 MAD', 
        components: 'Viande hachée, Œufs, Sauce tomate, Épices, Pain chaud',
        description: 'Tajine de viande hachée aux œufs dans une sauce tomate épicée, servi avec pain chaud traditionnel.',
        image: '/Plats/Tajine viend hacher aux oeufs.png'
      },
      { 
        name: 'Tangia Marrakchia', 
        price: '140 MAD', 
        components: 'Viande d\'agneau, Cumin, Citron confit, Ail, Épices',
        description: 'Tangia marrakchia traditionnelle avec viande d\'agneau mijotée au cumin et citron confit. Une spécialité de Marrakech.',
        image: '/Plats/Tanjia Marrakechia.png'
      },
      { 
        name: 'Couscous de Poulet et Tfaya', 
        price: '90 MAD', 
        components: 'Semoule, Poulet, Oignons caramélisés, Raisins secs, Amandes, Épices',
        description: 'Couscous traditionnel au poulet avec tfaya (oignons caramélisés aux raisins secs et amandes). Un délice sucré-salé.',
        image: '/Plats/Couscouss Royal.png'
      },
      { 
        name: 'Couscous au Bœuf', 
        price: '120 MAD', 
        components: 'Semoule fine, Viande de bœuf, Légumes de saison, Bouillon épicé',
        description: 'Couscous traditionnel au bœuf avec légumes de saison dans un bouillon épicé. Un plat réconfortant.',
        image: '/Plats/Couscous Royale.png'
      },
      { 
        name: 'Couscous Royal', 
        price: '150 MAD', 
        components: 'Semoule fine, Agneau, Poulet, Merguez, Légumes de saison, Bouillon épicé',
        description: 'Couscous royal avec agneau, poulet, merguez et légumes dans un bouillon parfumé. Le roi des couscous.',
        image: '/Plats/Couscous Royale.png'
      },
      { 
        name: 'Saffa Traditionnelle', 
        price: '95 MAD / Avec poulet 125 MAD', 
        components: 'Cheveux d\'ange, Poulet, Fruits secs, Beurre, Sucre',
        description: 'Saffa traditionnelle aux cheveux d\'ange avec poulet et fruits secs, ou simplement avec beurre et sucre.',
        image: '/Plats/Safa.png'
      },
      { 
        name: 'Pastilla aux Amandes & Ananas', 
        price: '129 MAD', 
        components: 'Pâte filo, Poulet, Amandes, Ananas, Œufs, Épices',
        description: 'Pastilla traditionnelle au poulet avec amandes et ananas, enveloppée dans de la pâte filo dorée.',
        image: '/Plats/Pastilla aux amende& ananas.png'
      },
      { 
        name: 'Pastilla aux Fruits de Mer', 
        price: '129 MAD', 
        components: 'Pâte filo, Fruits de mer, Œufs, Épices, Persil',
        description: 'Pastilla aux fruits de mer frais avec œufs et épices, enveloppée dans de la pâte filo croustillante.',
        image: '/Plats/Pastilla aux Fruits de Mer.png'
      },
      { 
        name: 'Pastilla Végétarienne', 
        price: '105 MAD', 
        components: 'Pâte filo, Légumes, Œufs, Épices, Herbes fraîches',
        description: 'Pastilla végétarienne aux légumes de saison avec œufs et épices, enveloppée dans de la pâte filo.',
        image: '/Plats/Pastilla Végétarienne.png'
      },
      { 
        name: 'Rfissa de Poulet', 
        price: '145 MAD', 
        components: 'Poulet fermier, Lentilles, Msemen, Fenugrec, Épices marocaines',
        description: 'Rfissa traditionnelle au poulet fermier avec lentilles, msemen et fenugrec. Un plat réconfortant aux saveurs authentiques.',
        image: '/Plats/Tride de Poulet.png'
      },
      { 
        name: 'Tajine Végétarienne', 
        price: '95 MAD', 
        components: 'Légumes de saison, Tomates, Oignons, Épices marocaines, Herbes fraîches',
        description: 'Tajine végétarienne aux légumes de saison mijotés aux épices marocaines et herbes fraîches. Un délice végétal.',
        image: '/Plats/Tagine vegetarienne.png'
      },
      { 
        name: 'Assortiment de Briouates', 
        price: '105 MAD 1PRS / 190 2PRS', 
        components: 'Briouates variées, Viande, Fromage, Légumes, Épinards, Saumon',
        description: 'Assortiment de briouates farcies à la viande, fromage, légumes, épinards et saumon. Un voyage gustatif.',
        image: '/Plats/Assortiment de briwat.png'
      },
      { 
        name: 'Assortiment de Pâtisserie', 
        price: '75 MAD', 
        components: 'Gâteaux marocains variés, Pâtisseries traditionnelles',
        description: 'Assortiment de pâtisseries marocaines traditionnelles. Un délice sucré pour terminer votre repas.',
        image: '/Plats/Assortiment de briwat.png'
      },
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
        image: '/Plats/Poulet pamigiana gratiné.png'
      },
    ]
  },
  enfant: {
    title: 'MENU ENFANT',
    items: [
      { 
        name: 'Duo de Mini Burgers au Poulet Pané', 
        price: '69 MAD', 
        components: 'Mini burgers, Poulet pané, Frites, Ketchup',
        description: 'Duo de mini burgers au poulet pané, servis avec des frites croustillantes et ketchup.'
      },
      { 
        name: 'Mini Pizza Margherita', 
        price: '49 MAD', 
        components: 'Pâte à pizza, Tomate, Mozzarella, Basilic',
        description: 'Mini pizza Margherita parfaite pour les enfants, avec tomate, mozzarella et basilic.'
      },
    ]
  }
};

const dejeunerDinerData = {
  salade: {
    title: 'SALADES FRAÎCHES',
    items: [
      { 
        name: 'César au Poulet Croustillant', 
        price: '80 DH', 
        components: 'Parmesan, croûtons, sauce maison',
        description: 'Salade César traditionnelle avec poulet croustillant, parmesan, croûtons et sauce maison.'
      },
      { 
        name: 'César aux Gambas Grillées', 
        price: '95 DH', 
        components: 'Gambas marinées, citron, parmesan',
        description: 'Salade César aux gambas grillées marinées, citron et parmesan.'
      },
      { 
        name: 'Salade Marocaine', 
        price: '70 DH', 
        components: 'Tomates, poivrons, oignons rouges, olives',
        description: 'Salade marocaine traditionnelle avec tomates, poivrons, oignons rouges et olives.'
      },
      { 
        name: 'Burrata & Légumes Grillés', 
        price: '90 DH', 
        components: 'Burrata, légumes grillés',
        description: 'Burrata crémeuse accompagnée de légumes grillés de saison.'
      },
      { 
        name: 'Chèvre Chaud au Miel', 
        price: '85 DH', 
        components: 'Mesclun, noix caramélisées',
        description: 'Chèvre chaud au miel sur lit de mesclun et noix caramélisées.'
      },
      { 
        name: 'Salade Nordique Tartar', 
        price: '95 DH', 
        components: 'Saumon, avocat, sauce tartar',
        description: 'Salade nordique avec saumon, avocat et sauce tartar.'
      },
      { 
        name: 'Salade Quinoa', 
        price: '85 DH', 
        components: 'Quinoa, mangue, avocat, thon, tomates séchées, miel moutarde',
        description: 'Salade de quinoa avec mangue, avocat, thon, tomates séchées et vinaigrette miel moutarde.'
      },
      { 
        name: 'Salade Bistrot', 
        price: '85 DH', 
        components: 'Thon, tomate, avocat, roquette, mozzarella, parmesan',
        description: 'Salade bistrot avec thon, tomate, avocat, roquette, mozzarella et parmesan.'
      },
      { 
        name: 'Salade Océane', 
        price: '95 DH', 
        components: 'Crevettes, avocat, laitue, mangue',
        description: 'Salade océane avec crevettes, avocat, laitue et mangue.'
      },
    ]
  },
  entrees: {
    title: 'ENTRÉES',
    items: [
      { 
        name: 'Assortiment de Salades Marocaines', 
        price: '95 DH (1 pers) / 160 DH (2 pers)', 
        components: 'Zaalouk, Taktouka, carottes au cumin, poivrons grillés, lentilles mijotées avec de la viande séchée, haricots blancs parfumés au cumin et au citron confit',
        description: 'Assortiment de salades marocaines traditionnelles avec zaalouk, taktouka, carottes au cumin, poivrons grillés, lentilles mijotées avec de la viande séchée et haricots blancs parfumés au cumin et au citron confit.'
      },
      { 
        name: 'Assortiment de Briouates Maison', 
        price: '105 DH (1 pers) / 190 DH (2 pers)', 
        components: 'Viande hachée, fromage, légumes, épinards-saumon, poulet-ananas',
        description: 'Assortiment de briouates maison farcies à la viande hachée, fromage, légumes, épinards-saumon et poulet-ananas.'
      },
      { 
        name: 'Assortiment Oriental', 
        price: '80 DH (1 pers) / 150 DH (2 pers)', 
        components: 'Houmous, Labneh, Muhammara, kébbé, Baba ghanouch, feuilles de vigne farcies au riz, Girit Izmi',
        description: 'Assortiment oriental avec houmous, labneh, muhammara, kébbé, baba ghanouch, feuilles de vigne farcies au riz et girit izmi.'
      },
      { 
        name: 'Barbouche', 
        price: '65 DH (1 pers) / 130 DH (2 pers)', 
        components: 'Escargots mijotés aux herbes & épices marocaines',
        description: 'Barbouche traditionnel aux escargots mijotés aux herbes et épices marocaines.',
        image: '/Plats/Barbouch.png'
      },
      { 
        name: 'Assortiment de Bruschettas', 
        price: '85 DH (1 pers) / 160 DH (2 pers)', 
        components: 'Tomates basilic, mozzarella, variations gourmandes',
        description: 'Assortiment de bruschettas avec tomates basilic, mozzarella et variations gourmandes.'
      },
      { 
        name: 'Pulpo a la Gallega', 
        price: '85 DH (1 pers) / 160 DH (2 pers)', 
        components: 'Poulpe tendre, pommes de terre, paprika fumé',
        description: 'Poulpe tendre à la galicienne avec pommes de terre et paprika fumé.',
        image: '/Plats/Pulpo a la gallega.png'
      },
      { 
        name: 'Gambas al Ajillo', 
        price: '70 DH (1 pers) / 130 DH (2 pers)', 
        components: 'Crevettes à l\'ail, huile d\'olive, tomate cerise, basilic, crème fraîche',
        description: 'Gambas al ajillo avec crevettes à l\'ail, huile d\'olive, tomate cerise, basilic et crème fraîche.'
      },
      { 
        name: 'Gambas Pil Pil', 
        price: '70 DH (1 pers) / 130 DH (2 pers)', 
        components: 'Crevettes sautées à l\'huile d\'olive, ail & piment',
        description: 'Gambas pil pil avec crevettes sautées à l\'huile d\'olive, ail et piment.',
        image: '/Plats/Gambas pil pil.png'
      },
      { 
        name: 'Harira Maison', 
        price: '65 DH (1 pers) / 130 DH (2 pers)', 
        components: 'Soupe traditionnelle servie avec dattes & chebakia',
        description: 'Harira maison, soupe traditionnelle marocaine servie avec dattes et chebakia.',
        image: '/Plats/Harira.png'
      },
    ]
  },
  specialiteMarocaine: {
    title: 'SPÉCIALITÉS MAROCAINES',
    items: [
      { 
        name: 'Tajine de Poulet aux Pruneaux', 
        price: '125 MAD', 
        components: 'Poulet, Pruneaux, Amandes, Oignons, Épices marocaines, Pain maison',
        description: 'Tajine traditionnel de poulet aux pruneaux et amandes, mijoté aux épices marocaines et servi avec pain maison.',
        image: '/Plats/Tajine viend hacher aux oeufs.png'
      },
      { 
        name: 'Tajine de Viande Hachée aux Œufs', 
        price: '129 MAD', 
        components: 'Viande hachée, Œufs, Sauce tomate, Épices, Pain chaud',
        description: 'Tajine de viande hachée aux œufs dans une sauce tomate épicée, servi avec pain chaud traditionnel.',
        image: '/Plats/Tajine viend hacher aux oeufs.png'
      },
      { 
        name: 'Tangia Marrakchia', 
        price: '140 MAD', 
        components: 'Viande d\'agneau, Cumin, Citron confit, Ail, Épices',
        description: 'Tangia marrakchia traditionnelle avec viande d\'agneau mijotée au cumin et citron confit. Une spécialité de Marrakech.',
        image: '/Plats/Tanjia Marrakechia.png'
      },
      { 
        name: 'Couscous de Poulet et Tfaya', 
        price: '90 MAD', 
        components: 'Semoule, Poulet, Oignons caramélisés, Raisins secs, Amandes, Épices',
        description: 'Couscous traditionnel au poulet avec tfaya (oignons caramélisés aux raisins secs et amandes). Un délice sucré-salé.',
        image: '/Plats/Couscouss Royal.png'
      },
      { 
        name: 'Couscous au Bœuf', 
        price: '120 MAD', 
        components: 'Semoule fine, Viande de bœuf, Légumes de saison, Bouillon épicé',
        description: 'Couscous traditionnel au bœuf avec légumes de saison dans un bouillon épicé. Un plat réconfortant.',
        image: '/Plats/Couscous Royale.png'
      },
      { 
        name: 'Couscous Royal', 
        price: '150 MAD', 
        components: 'Semoule fine, Agneau, Poulet, Merguez, Légumes de saison, Bouillon épicé',
        description: 'Couscous royal avec agneau, poulet, merguez et légumes dans un bouillon parfumé. Le roi des couscous.',
        image: '/Plats/Couscous Royale.png'
      },
      { 
        name: 'Saffa Traditionnelle', 
        price: '95 MAD / Avec poulet 125 MAD', 
        components: 'Cheveux d\'ange, Poulet, Fruits secs, Beurre, Sucre',
        description: 'Saffa traditionnelle aux cheveux d\'ange avec poulet et fruits secs, ou simplement avec beurre et sucre.',
        image: '/Plats/Safa.png'
      },
      { 
        name: 'Pastilla aux Amandes & Ananas', 
        price: '129 MAD', 
        components: 'Pâte filo, Poulet, Amandes, Ananas, Œufs, Épices',
        description: 'Pastilla traditionnelle au poulet avec amandes et ananas, enveloppée dans de la pâte filo dorée.',
        image: '/Plats/Pastilla aux amende& ananas.png'
      },
      { 
        name: 'Pastilla aux Fruits de Mer', 
        price: '129 MAD', 
        components: 'Pâte filo, Fruits de mer, Œufs, Épices, Persil',
        description: 'Pastilla aux fruits de mer frais avec œufs et épices, enveloppée dans de la pâte filo croustillante.',
        image: '/Plats/Pastilla aux Fruits de Mer.png'
      },
      { 
        name: 'Pastilla Végétarienne', 
        price: '105 MAD', 
        components: 'Pâte filo, Légumes, Œufs, Épices, Herbes fraîches',
        description: 'Pastilla végétarienne aux légumes de saison avec œufs et épices, enveloppée dans de la pâte filo.',
        image: '/Plats/Pastilla Végétarienne.png'
      },
      { 
        name: 'Rfissa de Poulet', 
        price: '145 MAD', 
        components: 'Poulet fermier, Lentilles, Msemen, Fenugrec, Épices marocaines',
        description: 'Rfissa traditionnelle au poulet fermier avec lentilles, msemen et fenugrec. Un plat réconfortant aux saveurs authentiques.',
        image: '/Plats/Tride de Poulet.png'
      },
      { 
        name: 'Tajine Végétarienne', 
        price: '95 MAD', 
        components: 'Légumes de saison, Tomates, Oignons, Épices marocaines, Herbes fraîches',
        description: 'Tajine végétarienne aux légumes de saison mijotés aux épices marocaines et herbes fraîches. Un délice végétal.',
        image: '/Plats/Tagine vegetarienne.png'
      },
      { 
        name: 'Assortiment de Briouates', 
        price: '105 MAD 1PRS / 190 2PRS', 
        components: 'Briouates variées, Viande, Fromage, Légumes, Épinards, Saumon',
        description: 'Assortiment de briouates farcies à la viande, fromage, légumes, épinards et saumon. Un voyage gustatif.',
        image: '/Plats/Assortiment de briwat.png'
      },
      { 
        name: 'Assortiment de Pâtisserie', 
        price: '75 MAD', 
        components: 'Gâteaux marocains variés, Pâtisseries traditionnelles',
        description: 'Assortiment de pâtisseries marocaines traditionnelles. Un délice sucré pour terminer votre repas.',
        image: '/Plats/Assortiment de briwat.png'
      },
    ]
  },
  grillades: {
    title: 'GRILLADES & BARBECUE',
    items: [
      { 
        name: 'Brochettes de Poulet', 
        price: 'Plat 120 MAD / Sandwich 75 MAD', 
        components: 'Poulet mariné, Épices marocaines, Riz aux herbes, Légumes grillés',
        description: 'Brochettes de poulet marinées aux épices marocaines, servies avec riz aux herbes et légumes grillés.',
        image: '/Plats/Brochet de poulet.png'
      },
      { 
        name: 'Brochettes de Viande', 
        price: 'Plat 129 MAD / Sandwich 85 MAD', 
        components: 'Viande de bœuf, Épices, Riz aux herbes, Légumes grillés',
        description: 'Brochettes de viande de bœuf marinées aux épices, accompagnées de riz aux herbes et légumes grillés.',
        image: '/Plats/Brochettes de viande.png'
      },
      { 
        name: 'Brochettes Mixtes', 
        price: 'Plat 135 MAD / Sandwich 95 MAD', 
        components: 'Mélange de viandes, Épices variées, Riz safrané, Frites maison',
        description: 'Brochettes mixtes avec un assortiment de viandes marinées aux épices variées, servies avec riz safrané et frites maison.',
        image: '/Plats/Brochette mixte.png'
      },
      { 
        name: 'Entrecôte de Bœuf', 
        price: '169 MAD', 
        components: 'Entrecôte 300g, Frites maison, Sauce au poivre, Salade verte',
        description: 'Entrecôte de bœuf de 300g grillée à point, servie avec frites maison, sauce au poivre et salade verte.',
        image: '/Plats/Entrecote de boeuf.png'
      },
      { 
        name: 'Filet de Bœuf Grillé', 
        price: '159 MAD', 
        components: 'Filet de bœuf, Pommes sautées, Salade verte, Sauce béarnaise',
        description: 'Filet de bœuf tendre grillé à la perfection, accompagné de pommes sautées, salade verte et sauce béarnaise.',
        image: '/Plats/Fillet de boeur grille.png'
      },
      { 
        name: 'Médaillon de Filet de Bœuf', 
        price: '165 MAD', 
        components: 'Médaillon de bœuf, Purée maison, Légumes de saison, Sauce au vin',
        description: 'Médaillon de filet de bœuf tendre, servi avec purée maison, légumes de saison et sauce au vin rouge.',
        image: '/Plats/Médaillon filet de boeuf.png'
      },
      { 
        name: 'Émincé de Bœuf', 
        price: '145 MAD', 
        components: 'Émincé de bœuf, Oignons, Poivrons, Sauce soja, Riz basmati',
        description: 'Émincé de bœuf sauté aux oignons et poivrons avec une sauce soja, servi avec riz basmati parfumé.',
        image: '/Plats/Emincer de boeuf.png'
      },
      { 
        name: 'Escalope Milanaise', 
        price: '125 MAD', 
        components: 'Escalope de veau, Chapelure, Parmesan, Frites, Salade',
        description: 'Escalope de veau panée à la milanaise avec chapelure et parmesan, servie avec frites et salade verte.',
        image: '/Plats/Escalope milanaise.png'
      },
    ]
  },
  poulet: {
    title: 'PLATS DE VOLAILLE',
    items: [
      { 
        name: 'Poulet Parmigiana Gratiné', 
        price: '135 MAD', 
        components: 'Escalope de poulet, Sauce tomate, Mozzarella, Parmesan, Basilic',
        description: 'Escalope de poulet panée gratinée avec sauce tomate, mozzarella et parmesan. Un classique italien revisité.',
        image: '/Plats/Poulet pamigiana gratiné.png'
      },
    ]
  },
  poisson: {
    title: 'POISSONS & FRUITS DE MER',
    items: [
      { 
        name: 'Saumon Sauce Épinards aux Zestes', 
        price: '145 MAD', 
        components: 'Pavé de saumon, Sauce aux épinards, Zestes de citron, Riz basmati',
        description: 'Pavé de saumon frais avec une sauce crémeuse aux épinards et zestes de citron, servi avec riz basmati.',
        image: '/Plats/Saumon sauce épinard a zestes.png'
      },
      { 
        name: 'Pavé de Saumon Grillé', 
        price: '135 MAD', 
        components: 'Pavé de saumon, Légumes grillés, Purée de pommes de terre, Citron',
        description: 'Pavé de saumon grillé aux herbes, accompagné de légumes grillés et purée de pommes de terre maison.',
        image: '/Plats/Pavé saumon grille.png'
      },
      { 
        name: 'Pavé de Saumon aux Citrons', 
        price: '140 MAD', 
        components: 'Pavé de saumon, Citrons confits, Herbes de Provence, Riz pilaf',
        description: 'Pavé de saumon aux citrons confits et herbes de Provence, servi avec riz pilaf parfumé.',
        image: '/Plats/Pavé saumon aux citron.png'
      },
      { 
        name: 'Filet de Loup aux Citrons', 
        price: '155 MAD', 
        components: 'Filet de loup, Citrons, Câpres, Persil, Pommes vapeur',
        description: 'Filet de loup frais aux citrons et câpres, garni de persil frais et servi avec pommes de terre vapeur.',
        image: '/Plats/Filet de loup aux citron.png'
      },
      { 
        name: 'Loup Bar Entier', 
        price: '180 MAD', 
        components: 'Loup bar entier, Herbes, Citron, Légumes de saison',
        description: 'Loup bar entier grillé aux herbes et citron, accompagné de légumes de saison. Un plat impressionnant.',
        image: '/Plats/Loup bar entier.png'
      },
      { 
        name: 'Loup Bar en Cuisson al Cartoccio', 
        price: '165 MAD', 
        components: 'Loup bar, Papillote, Herbes, Tomates cerises, Olives',
        description: 'Loup bar cuit en papillote avec herbes, tomates cerises et olives. Une cuisson douce qui préserve tous les arômes.',
        image: '/Plats/Loup Bar en cuisson al cartoccio.png'
      },
      { 
        name: 'Gambas Pil Pil', 
        price: '125 MAD', 
        components: 'Gambas, Ail, Piment, Huile d\'olive, Pain grillé',
        description: 'Gambas sautées à l\'ail et au piment dans l\'huile d\'olive, servies avec pain grillé. Un classique espagnol.',
        image: '/Plats/Gambas pil pil.png'
      },
      { 
        name: 'Gambas à l\'Ail', 
        price: '120 MAD', 
        components: 'Gambas, Ail, Persil, Citron, Riz basmati',
        description: 'Gambas sautées à l\'ail et persil, arrosées de citron et servies avec riz basmati parfumé.',
        image: '/Plats/Gambas a jilio.png'
      },
      { 
        name: 'Poulpe à la Gallega', 
        price: '130 MAD', 
        components: 'Poulpe, Pommes de terre, Paprika, Huile d\'olive',
        description: 'Poulpe tendre à la galicienne avec pommes de terre et paprika, arrosé d\'huile d\'olive. Une spécialité espagnole.',
        image: '/Plats/Pulpo a la gallega.png'
      },
    ]
  },
  pizza: {
    title: 'PIZZAS ARTISANALES',
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
        image: '/Plats/Pizzas/Pizza cinq fromage.png'
      },
      { 
        name: 'Pizza La Madeleine', 
        price: '180 MAD', 
        components: 'Sauce tomate, Mozzarella, Jambon, Champignons, Olives',
        description: 'Notre pizza signature avec jambon, champignons et olives. Une création unique de La Madeleine.',
        image: '/Plats/Pizzas/Pizza La Madeleine.png'
      },
      { 
        name: 'BBQ Chicken Pizza', 
        price: '135 MAD', 
        components: 'Poulet grillé, Sauce BBQ, Oignons caramélisés, Mozzarella',
        description: 'Pizza au poulet grillé avec sauce BBQ maison et oignons caramélisés. Un mélange sucré-salé irrésistible.',
        image: '/Plats/Pizzas/BBQ Chicken Pizza.png'
      },
      { 
        name: 'Pizza Fruits de Mer', 
        price: '160 MAD', 
        components: 'Calamars, Crevettes, Moules, Tomates, Ail, Persil',
        description: 'Pizza aux fruits de mer frais avec calamars, crevettes et moules. Un voyage gustatif vers la Méditerranée.',
        image: '/Plats/Pizzas/Pizza fruits de mer.png'
      },
      { 
        name: 'Pizza Napolitaine', 
        price: '140 MAD', 
        components: 'Tomate, Mozzarella, Anchois, Câpres, Olives',
        description: 'Pizza napolitaine traditionnelle avec anchois, câpres et olives. Les saveurs authentiques de Naples.',
        image: '/Plats/Pizzas/Pizza Napolitaine.png'
      },
      { 
        name: 'Pizza Végétarienne', 
        price: '120 MAD', 
        components: 'Tomate, Mozzarella, Légumes grillés, Basilic',
        description: 'Pizza végétarienne avec une sélection de légumes grillés et basilic frais. Fraîche et colorée.',
        image: '/Plats/Pizzas/Pizza Végetarian.png'
      },
      { 
        name: 'Pizza Truffe & Champignons', 
        price: '180 MAD', 
        components: 'Sauce à la truffe, Champignons de Paris, Mozzarella, Persil',
        description: 'Pizza raffinée à la truffe noire et champignons de Paris. Une expérience gastronomique unique.',
        image: '/Plats/Pizzas/Pizza truffe& Champingghions.png'
      },
      { 
        name: 'Pizza Épinards & Fromage Gorgonzola', 
        price: '150 MAD', 
        components: 'Épinards frais, Gorgonzola, Mozzarella, Noix',
        description: 'Pizza aux épinards frais et gorgonzola avec des noix. Un mélange de saveurs terreuses et crémeuses.',
        image: '/Plats/Pizzas/Pizza épinards et fromage cordonzola.png'
      },
      { 
        name: 'Pizza Viande Hachée au Poivre', 
        price: '135 MAD', 
        components: 'Viande hachée, Sauce au poivre, Oignons, Mozzarella',
        description: 'Pizza à la viande hachée avec une sauce au poivre relevée et oignons. Un plat généreux et savoureux.',
        image: '/Plats/Pizzas/Pizza Viande hachee au poivre.png'
      },
      { 
        name: 'Pizza Ramdania', 
        price: '135 MAD', 
        components: 'Sauce tomate, Mozzarella, Merguez, Poivrons, Oignons',
        description: 'Pizza marocaine avec merguez, poivrons et oignons. Un mélange de saveurs orientales et italiennes.',
        image: '/Plats/Pizzas/Pizza Ramdania.png'
      },
    ]
  },
  patesRiz: {
    title: 'PÂTES & RISOTTOS',
    items: [
      { 
        name: 'Spaghetti Bolognaise', 
        price: '105 MAD', 
        components: 'Spaghetti, Sauce bolognaise, Viande hachée de bœuf, Oignons, Carottes, Céleri, Parmesan, Basilic frais',
        description: 'Spaghetti al dente nappés d\'une sauce bolognaise traditionnelle mijotée longuement avec de la viande hachée de bœuf, oignons, carottes et céleri. Garnis de parmesan fraîchement râpé et de feuilles de basilic frais. Un classique italien préparé avec amour.',
        image: '/Plats/Spaghetti a la bolanoise.png'
      },
      { 
        name: 'Raviolis Ricotta & Épinards', 
        price: '115 MAD', 
        components: 'Raviolis frais, Ricotta crémeuse, Épinards frais, Sauce aux champignons sauvages, Parmesan, Basilic frais',
        description: 'Raviolis frais farcis à la ricotta crémeuse et aux épinards frais, servis dans une sauce aux champignons sauvages. Garnis de copeaux de parmesan et de feuilles de basilic frais. Une harmonie parfaite entre douceur et fraîcheur.',
        image: '/Plats/Raviolis ricotta & epinards.png'
      },
      { 
        name: 'Risotto Nero à l\'Encre de Seiche', 
        price: '135 MAD', 
        components: 'Risotto crémeux, Encre de seiche, Calamars frais, Parmesan affiné, Huile d\'olive extra vierge, Persil frais',
        description: 'Risotto crémeux à l\'encre de seiche avec des calamars frais. Agrémenté de parmesan affiné et d\'un filet d\'huile d\'olive extra vierge. Un voyage gustatif vers la Méditerranée avec cette spécialité italienne audacieuse.',
        image: '/Plats/Risotto nero a la encre de seiche.png'
      },
      { 
        name: 'Pâtes Fruits de Mer', 
        price: '125 MAD', 
        components: 'Pâtes fraîches, Crevettes, Calamars, Moules, Tomates cerises, Ail, Persil, Huile d\'olive',
        description: 'Pâtes fraîches aux fruits de mer avec crevettes, calamars et moules. Cuisinées avec des tomates cerises, ail et persil dans un filet d\'huile d\'olive. Un plat de la mer authentique et savoureux.',
        image: '/Plats/Pattes Fruits de Mer.png'
      },
    ]
  },
  menuEnfant: {
    title: 'MENU ENFANT',
    items: [
      { 
        name: 'Duo de Mini Burgers au Poulet Pané', 
        price: '69 MAD', 
        components: 'Mini burgers, Poulet pané, Frites, Ketchup',
        description: 'Duo de mini burgers au poulet pané, servis avec des frites croustillantes et ketchup.'
      },
      { 
        name: 'Mini Pizza Margherita', 
        price: '49 MAD', 
        components: 'Pâte à pizza, Tomate, Mozzarella, Basilic',
        description: 'Mini pizza Margherita parfaite pour les enfants, avec tomate, mozzarella et basilic.'
      },
    ]
  }
};

const gouterData = {
  // Goûter vide pour l'instant
};

const sucresData = {
  crepesGaufres: {
    title: 'CRÊPES & GAUFRES',
    items: [
      // Les items seront ajoutés plus tard
    ]
  },
  glaces: {
    title: 'GLACES',
    items: [
      // Les items seront ajoutés plus tard
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
        image: '/Petitdéjeuner_Brunch/Croissant Bénidictain.png'
      },
      { 
        name: 'Brunch Soleil du Sud', 
        price: '135 DHS', 
        components: 'Boisson chaude & jus d\'orange, Bissara, Tajine de khlii, Assortiment de pains et galettes : batbout, harcha, msemen, churro, Beurre & miel, Baghrir servi avec amlou et fruits frais, Raib à l\'huile d\'argan et fruits secs',
        description: 'Un brunch aux saveurs du sud avec bissara et tajine de khlii traditionnel. Accompagné d\'un assortiment de pains et galettes : batbout, harcha, msemen, churro. Terminé par du baghrir avec amlou et un raib à l\'huile d\'argan.',
        image: '/Petitdéjeuner_Brunch/Brunch Soleil du Sud.PNG'
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
        image: '/breakfast-nordique.jpg'
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

  // Fonction pour rendre le menu Goûter (vide pour l'instant)
  const renderGouterMenu = (data) => {
    return (
      <div className="boissons-container">
        <div className="boissons-category">
          <h3 className="boissons-category-title">GOÛTER</h3>
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            Bientôt disponible...
          </p>
        </div>
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
        <div className="boissons-navigation sucres-navigation">
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
        {selectedCategory === 'petit-dejeuner-brunch' && renderPetitDejeunerBrunchMenu(petitDejeunerBrunchData)}
        {selectedCategory === 'dejeuner-diner' && renderDejeunerDinerMenu(dejeunerDinerData)}
        {selectedCategory === 'gouter' && renderGouterMenu(gouterData)}
        {selectedCategory === 'sucres' && renderSucresMenu(sucresData)}
      </div>
    </div>
  );
}

export default Menu; 
