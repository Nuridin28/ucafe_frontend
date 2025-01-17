import mock1 from "../assets/png/mock1.jpg";
import sandwith from "../assets/png/sandwitch.jpg";
import paris from "../assets/png/paris.png";
import time from "../assets/png/time.png";

export const cafes = [
  {
    id: 1,
    title: "Cafe1",
    descr: "Some descr for cafe",
    img: mock1,
    menu: [
      {
        name: "Нано говяжье комбо",
        img: sandwith,
        price: 2790,
        descr: "Нано бургер говяжий + картофель фри + соус кетчуп + напиток",
      },
      {
        name: "sandwitch",
        img: sandwith,
        price: 500,
        descr: "taste",
      },
    ],
  },
  {
    id: 2,
    title: "Cafe2",
    descr: "Some descr for cafe",
    img: mock1,
    menu: [
      {
        name: "Нано говяжье комбо",
        img: sandwith,
        price: 2790,
        descr: "Нано бургер говяжий + картофель фри + соус кетчуп + напиток",
      },
      {
        name: "sandwitch",
        img: sandwith,
        price: 500,
        descr: "taste",
      },
    ],
  },
  {
    id: 3,
    title: "Cafe3",
    descr: "Some descr for cafe",
    img: mock1,
    menu: [
      {
        name: "Нано говяжье комбо",
        img: sandwith,
        price: 2790,
        descr: "Нано бургер говяжий + картофель фри + соус кетчуп + напиток",
      },
      {
        name: "sandwitch",
        img: sandwith,
        price: 500,
        descr: "taste",
      },
    ],
  },
  {
    id: 4,
    title: "Cafe4",
    descr: "Some descr for cafe",
    img: mock1,
  },
  {
    id: 5,
    title: "Cafe5",
    descr: "Some descr for cafe",
    img: mock1,
  },
  {
    id: 6,
    title: "Cafe6",
    descr: "Some descr for cafe",
    img: mock1,
  },
];

export const benefits = [
  {
    img: time,
    text: "Order will be ready in less than 15 minutes",
  },
  {
    img: paris,
    text: "Only fresh and natural products",
  },
];

export const cafeMenuItems = [
  "all",
  "sandwiches",
  "coffee",
  "tea",
  "drinks",
  "other",
];
