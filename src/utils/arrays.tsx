import React from 'react';

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    title: "Signature Tea",
    items: [
      { name: "BONSAI BLACK", price: "$8.75", description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine" },
      { name: "YUCHA GREEN", price: "$8.75", description: "Yuzu, Green Tea, Lemon, Honey" },
    ]
  },
  {
    title: "Milk Tea",
    items: [
      { name: "CLASSIC", price: "$8.50", description: "Earl Grey, Milk" },
      { name: "TARO", price: "$8.50", description: "Taro, Earl Grey, Milk" },
    ]
  },
  {
    title: "Fruit Tea",
    items: [
      { name: "PASSION BURST", price: "$8.50", description: "Passion Fruit, Lemon, Jasmine" },
      { name: "LYCHEE DELIGHT", price: "$8.50", description: "Lychee, Lemon, Jasmine" },
    ]
  },
  {
    title: "Toppings - $1.00 / Each",
    items: [
      { name: "BOBA PEARLS", price: "$1.00" },
      { name: "CHEESE FOAM", price: "$1.00" },
    ]
  },
  {
    title: "Caffeinated Tea",
    items: [
      { name: "CHINA ROSE PETAL", price: "$8.75", description: "Black Tea, Rose Petal, Rose Water" },
      { name: "THE HOLY BLEND", price: "$8.75", description: "Yerba Mate, Lemongrass, verbena" },
    ]
  },
  {
    title: "Slushy - $8.75",
    items: [
      { name: "BONSAI SLUSH", price: "$8.75", description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine" },
    ]
  },
];

export interface Question {
  question: string;
  answers: string[];
}

export interface Recommendation {
  name: string;
  description: string;
}

export const questions: Question[] = [
  {
    question: "Would you prefer a milk-based or fruit-based drink?",
    answers: ['Milk-based', 'Fruit-based']
  },
];

export const recommendations: Recommendation[] = [
  { name: "Bonsai Black", description: "Our signature drink with a perfect balance of flavors!" },
  { name: "Yucha Green", description: "A refreshing green tea with a citrusy twist." },
  { name: "Passion Burst", description: "A fruity explosion for those who love vibrant flavors." },
  { name: "Classic Milk Tea", description: "A timeless favorite for traditional boba lovers." },
  { name: "Taro Milk Tea", description: "Creamy and sweet, perfect for those with a sweet tooth." },
  { name: "Lychee Delight", description: "A delicate fruit tea for a light, refreshing experience." }
];

export interface DrinkInfo {
  name: string;
  image: string;
  description: string;
  tea: string;
  sugar: string; 
  flavor: string;
  price: string;
}

export const drinkCategories: { [key: string]: DrinkInfo[] } = {
  "Signature Tea": [
    {
      name: "BONSAI TEA",
      image: "/images/bonsaiImages/BonsaiTea.png",
      description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "BONSAI BLACK",
      image: "/images/bonsaiImages/BonsaiTea.png",
      description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "MANGO CHILI LOCO",
      image: "/images/bonsaiImages/MangoChiliLoco.png",
      description: "Mango, Lemon, Kumquat, Chili, Salt, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "THE EARL OF MATCHA",
      image: "/images/bonsaiImages/MatchaMilkTea.png",
      description: "Ceremonial Matcha, Milk, Earl Grey",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "PINK MATCHA",
      image: "/images/bonsaiImages/PinkMatcha.png",
      description: "Ceremonial Matcha, Strawberry, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "DIRTY TARO",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Ceremonial Matcha, Taro, Milk, Earl Grey",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "SHAY'S TARO",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Taro, Avocado, Milk, Earl Grey",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "GINA'S TARO",
      image: "/images/bonsaiImages/GinasTaro.png",
      description: "Taro, Black Sesame, Milk, Earl Grey",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "CHERRY BLOSSOM",
      image: "/images/bonsaiImages/CherryBlossom.png",
      description: "Strawberry, Avocado, Milk, Earl Grey",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "MANGO TANGO",
      image: "/images/bonsaiImages/MangoTango.png",
      description: "Mango, Lemon, Kumquat, Chili, Salt, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "PEACH LOVE & HAPPINESS",
      image: "/images/bonsaiImages/PeachLove&Happiness.png",
      description: "Strawberry, Peach, Rose, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "CREME DE ROSE",
      image: "/images/bonsaiImages/CremeDeRose.png",
      description: "Strawberry, Rose, Milk, Earl Grey",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
  ],
  "Fruit Tea": [
    {
      name: "PASSION BURST",
      image: "/images/bonsaiImages/PassionBurst.png",
      description: "Passion Fruit, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "LYCHEE DELIGHT",
      image: "/images/bonsaiImages/LycheeDelight.png",
      description: "Lychee, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "MANGO FRUIT",
      image: "/images/bonsaiImages/MangoFruitTea.png",
      description: "Mango, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "KUMQUAT LEMON",
      image: "/images/bonsaiImages/KumquatLemon.png",
      description: "Kumquat, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "ROSE GARDEN",
      image: "/images/bonsaiImages/RoseGarden.png",
      description: "Rose, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "STRAWBERRY BLISS",
      image: "/images/bonsaiImages/StrawberryBliss.png",
      description: "Strawberry, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
  ],
  "Toppings": [
    {
      name: "BOBA PEARLS",
      image: "/images/bonsaiImages/BobaPearls.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "CHEESE FOAM",
      image: "/images/bonsaiImages/CheeseFoam.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "ALOE VERA",
      image: "/images/bonsaiImages/AloeVera.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "KONJAC Boba",
      image: "/images/bonsaiImages/KonjacBoba.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "SEASONAL",
      image: "/images/bonsaiImages/Seasonal.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "LYCHEE JELLY",
      image: "/images/bonsaiImages/LycheeJelly.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "MANGO",
      image: "/images/bonsaiImages/Mango.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
    {
      name: "STRAWBERRY",
      image: "/images/bonsaiImages/Strawberry.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$1.00"
    },
  ],
  "Milk Tea": [
    {
      name: "CLASSIC",
      image: "/images/bonsaiImages/Classic.png",
      description: "Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "TARO",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Taro Root, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "MATCHA",
      image: "/images/bonsaiImages/MatchaMilkTea.png",
      description: "Ceremonial Matcha, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "THAI",
      image: "/images/bonsaiImages/ThaiMilkTea.png",
      description: "Aromatic Thai Blend, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "STRAWBERRY",
      image: "/images/bonsaiImages/Strawberry.png",
      description: "Strawberry, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "COCONUT",
      image: "/images/bonsaiImages/Coconut.png",
      description: "Coconut, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "HONEYDEW",
      image: "/images/bonsaiImages/Honeydew.png",
      description: "Honeydew, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "MANGO",
      image: "/images/bonsaiImages/Mango.png",
      description: "Mango, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "TIGER MILK",
      image: "/images/bonsaiImages/TigerMilk.png",
      description: "Brown Sugar, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
    {
      name: "AMARETTO",
      image: "/images/bonsaiImages/Amaretto.png",
      description: "Roasted Almond, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.50"
    },
  ],
  "Caffeinated Tea": [
    {
      name: "CHINA ROSE PETAL",
      image: "/images/bonsaiImages/ChinaRosePetal.png",
      description: "Black Tea, Rose Petal, Rose Water",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "THE DRIZZLE BLEND",
      image: "/images/bonsaiImages/TheDrizzleBlend.png",
      description: "Yerba Mate, Lemongrass, verbena",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "MOROCCAN MINT",
      image: "/images/bonsaiImages/MoroccanMint.png",
      description: "Kumquat Green Tea, Moroccan Mint",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "ELDERFLOWER OOLONG",
      image: "/images/bonsaiImages/ElderflowerOolong.png",
      description: "Oolong Elderflower, Fermented Pear",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
  ],
  "Herbal Tea": [
    {
      name: "BLOOD ORANGE",
      image: "/images/bonsaiImages/BloodOrange.png",
      description: "Rooibos, Saffron, Rose, Orange Peel, Hibiscus",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "ROYAL BLACKBERRY",
      image: "/images/bonsaiImages/RoyalBlackberry.png",
      description: "Rooibos, Kardadé, Hibiscus, Red Apple, Blackberry",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "RHUBARB DELIGHT",
      image: "/images/bonsaiImages/RhubarbDelight.png",
      description: "Rhubarb, Raspberry, Hibiscus, Apple",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "PROSECCO",
      image: "/images/bonsaiImages/Prosecco.png",
      description: "Apple, Pear, Nectarine, Prosecco, Osmanthus, Coconut, Rose",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
  ],
  "Coffee": [
    {
      name: "POUR OVER",
      image: "/images/bonsaiImages/PourOver.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$4.99"
    },
    {
      name: "COLD BREW",
      image: "/images/bonsaiImages/ColdBrew.png",
      description: "",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$4.99"
    },
    {
      name: "COFFEE MILK TEA",
      image: "/images/bonsaiImages/CoffeeMilkTea.png",
      description: "Coffee, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$5.99"
    },
  ],
  "Sparkling Tea": [
    {
      name: "LYSERØD",
      image: "/images/bonsaiImages/Lyserod.png",
      description: "Silver Needle, Oolong, Hibiscus",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "BLÅ",
      image: "/images/bonsaiImages/Bla.png",
      description: "Jasmine, White Tea, Darjeeling",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "LYSEGRØN",
      image: "/images/bonsaiImages/Lysegron.png",
      description: "Sencha, Green Tea, Orange Peel",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
  ],
  "Slushy": [
    {
      name: "BONSAI SLUSH",
      image: "/images/bonsaiImages/BonsaiSlush.png",
      description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "MANGO SLUSH",
      image: "/images/bonsaiImages/MangoSlush.png",
      description: "Mango, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "STRAWBERRY BLISS SLUSH",
      image: "/images/bonsaiImages/StrawberryBliss.png",
      description: "Strawberry, Lemon, Jasmine",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "WATERMELON SLUSH",
      image: "/images/bonsaiImages/WatermelonSlush.png",
      description: "Fresh Watermelon",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "TARO SLUSH",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Taro, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
    {
      name: "COCONUT SLUSH",
      image: "/images/bonsaiImages/Coconut.png",
      description: "Coconut, Earl Grey, Milk",
      tea: "",
      sugar: "",
      flavor: "",
      price: "$8.75"
    },
  ],
};