
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
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Floral",
      price: "$8.75"
    },
    {
      name: "BONSAI BLACK",
      image: "/images/bonsaiImages/BonsaiBlack.png",
      description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Floral",
      price: "$8.75"
    },
    {
      name: "MANGO CHILI LOCO",
      image: "/images/bonsaiImages/MangoChiliLoco.png",
      description: "Mango, Lemon, Kumquat, Chili, Salt, Jasmine",
      tea: "Jasmine",
      sugar: "Low",
      flavor: "Spicy, Fruity",
      price: "$8.75"
    },
    {
      name: "THE EARL OF MATCHA",
      image: "/images/bonsaiImages/MatchaMilkTea.png",
      description: "Ceremonial Matcha, Milk, Earl Grey",
      tea: "Matcha",
      sugar: "Medium",
      flavor: "Earthy, Creamy",
      price: "$8.75"
    },
    {
      name: "PINK MATCHA",
      image: "/images/bonsaiImages/PinkMatcha.png",
      description: "Ceremonial Matcha, Strawberry, Milk",
      tea: "Matcha",
      sugar: "Medium",
      flavor: "Fruity, Creamy",
      price: "$8.75"
    },
    {
      name: "DIRTY TARO",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Ceremonial Matcha, Taro, Milk, Earl Grey",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.75"
    },
    {
      name: "SHAY'S TARO",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Taro, Avocado, Milk, Earl Grey",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.75"
    },
    {
      name: "GINA'S TARO",
      image: "/images/bonsaiImages/GinasTaro.png",
      description: "Taro, Black Sesame, Milk, Earl Grey",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.75"
    },
    {
      name: "CHERRY BLOSSOM",
      image: "/images/bonsaiImages/CherryBlossom.png",
      description: "Amaretto, Strawberry, Milk, Earl Grey",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Fruity, Creamy",
      price: "$8.75"
    },
    {
      name: "MANGO TANGO",
      image: "/images/bonsaiImages/MangoTango.png",
      description: "Mango, Strawberry, Milk, Earl Grey",
      tea: "Earl Grey",
      sugar: "Low",
      flavor: "Sweet, Fruity",
      price: "$8.75"
    },
    {
      name: "PEACH LOVE & HAPPINESS",
      image: "/images/bonsaiImages/PeachLove&Happiness.png",
      description: "Strawberry, Peach, Rose, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Floral",
      price: "$8.75"
    },
    {
      name: "CREME DE ROSE",
      image: "/images/bonsaiImages/CremeDeRose.png",
      description: "Strawberry, Rose, Milk, Earl Grey",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Fruity, Floral, Creamy",
      price: "$8.75"
    },
  ],
  "Fruit Tea": [
    {
      name: "PASSION BURST",
      image: "/images/bonsaiImages/PassionBurst.png",
      description: "Passion Fruit, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Tangy",
      price: "$8.50"
    },
    {
      name: "LYCHEE DELIGHT",
      image: "/images/bonsaiImages/LycheeDelight.png",
      description: "Lychee, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Floral",
      price: "$8.50"
    },
    {
      name: "MANGO FRUIT",
      image: "/images/bonsaiImages/MangoFruitTea.png",
      description: "Mango, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Tangy",
      price: "$8.50"
    },
    {
      name: "KUMQUAT LEMON",
      image: "/images/bonsaiImages/KumquatLemon.png",
      description: "Kumquat, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Citrusy, Tangy",
      price: "$8.50"
    },
    {
      name: "ROSE GARDEN",
      image: "/images/bonsaiImages/RoseGarden.png",
      description: "Rose, Strawberry, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Floral, Citrusy",
      price: "$8.50"
    },
    {
      name: "STRAWBERRY BLISS",
      image: "/images/bonsaiImages/StrawberryBliss.png",
      description: "Strawberry, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Floral",
      price: "$8.50"
    },
  ],
  "Milk Tea": [
    {
      name: "CLASSIC",
      image: "/images/bonsaiImages/ClassicMilkTea.png",
      description: "Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Creamy, Floral",
      price: "$8.50"
    },
    {
      name: "TARO",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Taro Root, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.50"
    },
    {
      name: "MATCHA",
      image: "/images/bonsaiImages/MatchaMilkTea.png",
      description: "Ceremonial Matcha, Earl Grey, Milk",
      tea: "Matcha",
      sugar: "Medium",
      flavor: "Earthy, Creamy",
      price: "$8.50"
    },
    {
      name: "THAI",
      image: "/images/bonsaiImages/ThaiMilkTea.png",
      description: "Aromatic Thai Blend, Milk",
      tea: "Thai Blend",
      sugar: "High",
      flavor: "Spicy, Creamy",
      price: "$8.50"
    },
    {
      name: "STRAWBERRY",
      image: "/images/bonsaiImages/StrawberryMilkTea.png",
      description: "Strawberry, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Fruity, Creamy",
      price: "$8.50"
    },
    {
      name: "COCONUT",
      image: "/images/bonsaiImages/CoconutMilkTea.png",
      description: "Coconut, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.50"
    },
    {
      name: "HONEYDEW",
      image: "/images/bonsaiImages/HoneyDewMilkTea.png",
      description: "Honeydew, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Fruity, Creamy",
      price: "$8.50"
    },
    {
      name: "MANGO",
      image: "/images/bonsaiImages/MangoMilkTea.png",
      description: "Mango, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Fruity, Creamy",
      price: "$8.50"
    },
    {
      name: "TIGER MILK",
      image: "/images/bonsaiImages/TigerMilkTea.png",
      description: "Brown Sugar, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "High",
      flavor: "Sweet, Creamy",
      price: "$8.50"
    },
    {
      name: "AMARETTO",
      image: "/images/bonsaiImages/AmarettoMilkTea.png",
      description: "Roasted Almond, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.50"
    },
  ],
  "Tea": [
    {
      name: "CHINA ROSE PETAL",
      image: "/images/bonsaiImages/ChinaRosePetal.png",
      description: "Black Tea, Rose Petal, Rose Water",
      tea: "Black Tea",
      sugar: "Low",
      flavor: "Floral, Refreshing",
      price: "$8.75"
    },
    {
      name: "MOROCCAN MINT",
      image: "/images/bonsaiImages/MoroccanMint.png",
      description: "Kumquat Green Tea, Moroccan Mint",
      tea: "Kumquat Green Tea",
      sugar: "Low",
      flavor: "Minty, Citrusy",
      price: "$8.75"
    },
    {
      name: "BLOOD ORANGE",
      image: "/images/bonsaiImages/BloodOrange.png",
      description: "Rooibos, Saffron, Rose, Orange Peel, Hibiscus",
      tea: "Rooibos",
      sugar: "Low",
      flavor: "Citrusy, Floral",
      price: "$8.75"
    },
    {
      name: "PROSECCO",
      image: "/images/bonsaiImages/Prosecco.png",
      description: "Apple, Pear, Nectarine, Prosecco, Osmanthus, Coconut, Rose",
      tea: "Rooibos",
      sugar: "Low",
      flavor: "Fruity, Floral",
      price: "$8.75"
    },
  ],
  "Sparkling Tea": [
    {
      name: "LYSERØD",
      image: "/images/bonsaiImages/Lyserod.png",
      description: "Silver Needle, Oolong, Hibiscus",
      tea: "Oolong",
      sugar: "Low",
      flavor: "Floral, Refreshing",
      price: "$8.75"
    },
    {
      name: "BLÅ",
      image: "/images/bonsaiImages/Bla.png",
      description: "Jasmine, White Tea, Darjeeling",
      tea: "White Tea",
      sugar: "Low",
      flavor: "Floral, Refreshing",
      price: "$8.75"
    },
    {
      name: "LYSEGRØN",
      image: "/images/bonsaiImages/Lysegron.png",
      description: "Sencha, Green Tea, Orange Peel",
      tea: "Sencha",
      sugar: "Low",
      flavor: "Citrusy, Refreshing",
      price: "$8.75"
    },
  ],
  "Slushy": [
    {
      name: "MANGO SLUSH",
      image: "/images/bonsaiImages/MangoSlush.png",
      description: "Mango, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Tangy",
      price: "$8.75"
    },
    {
      name: "STRAWBERRY BLISS SLUSH",
      image: "/images/bonsaiImages/StrawberryBliss.png",
      description: "Strawberry, Lemon, Jasmine",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Floral",
      price: "$8.75"
    },
    {
      name: "WATERMELON SLUSH",
      image: "/images/bonsaiImages/WatermelonSlush.png",
      description: "Fresh Watermelon",
      tea: "Jasmine",
      sugar: "Medium",
      flavor: "Fruity, Refreshing",
      price: "$8.75"
    },
    {
      name: "TARO SLUSH",
      image: "/images/bonsaiImages/TaroMilkTea.png",
      description: "Taro, Earl Grey, Milk",
      tea: "Earl Grey",
      sugar: "Medium",
      flavor: "Nutty, Creamy",
      price: "$8.75"
    },
  ],
};