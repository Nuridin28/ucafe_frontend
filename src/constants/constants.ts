import mock1 from "../assets/png/mock1.jpg";
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
        name: "sandwitch",
        img: "",
        price: 500,
        descr: "taste",
      },
      {
        name: "sandwitch",
        img: "",
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
  },
  {
    id: 3,
    title: "Cafe3",
    descr: "Some descr for cafe",
    img: mock1,
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
