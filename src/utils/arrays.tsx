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
    question: "What's your preferred level of sweetness?",
    answers: ['Very Sweet', 'Slightly Sweet', 'Not Sweet', 'No Sugar']
  },
  {
    question: "Do you prefer milk-based or fruit-based drinks?",
    answers: ['Milk-based', 'Fruit-based']
  },
  {
    question: "How much caffeine do you want?",
    answers: ['High Caffeine', 'Low Caffeine', 'No Caffeine']
  }
];

export const recommendations: Recommendation[] = [
  { name: "Bonsai Black", description: "Our signature drink with a perfect balance of flavors!" },
  { name: "Yucha Green", description: "A refreshing green tea with a citrusy twist." },
  { name: "Passion Burst", description: "A fruity explosion for those who love vibrant flavors." },
  { name: "Classic Milk Tea", description: "A timeless favorite for traditional boba lovers." },
  { name: "Taro Milk Tea", description: "Creamy and sweet, perfect for those with a sweet tooth." },
  { name: "Lychee Delight", description: "A delicate fruit tea for a light, refreshing experience." }
];