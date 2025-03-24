export const cafes = [
  {
    id: 1,
    title: "Starbucks",
    descr: "Лучшее место для кофе и сэндвичей в городе",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    menu: [
      {
        name: "Биг Сэндвич с ветчиной",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        price: 2200,
        descr: "Свежий сэндвич с ветчиной, сыром и салатом",
        type: "sandwich",
      },

      {
        name: "Капучино",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        price: 900,
        descr: "Ароматный капучино с мягкой пенкой",
        type: "pizza",
      },
    ],
  },
  {
    id: 2,
    title: "Coffeedelia",
    descr: "Место для ценителей настоящего кофе и выпечки",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    menu: [
      {
        name: "Мокко",
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        price: 950,
        descr: "Кофе мокко с шоколадом и взбитыми сливками",
        type: "tea",
      },
      {
        name: "Круассан с шоколадом",
        img: "https://images.unsplash.com/photo-1512058564366-c9e1d31714af",
        price: 750,
        descr: "Свежеиспечённый круассан с начинкой из шоколада",
        type: "coffee",
      },
    ],
  },
  {
    id: 3,
    title: "Burger Heroes",
    descr: "Сочные бургеры и освежающие напитки",
    img: "https://images.unsplash.com/photo-1601924582971-bbe6d6a2ef56",
    menu: [
      {
        name: "Чизбургер Классический",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
        price: 1990,
        descr: "Сочный бургер с говядиной, сыром чеддер и соусом",
        type: "sandwich",
      },
      {
        name: "Лимонад клубничный",
        img: "https://images.unsplash.com/photo-1558640469-62cdbb4c7d90",
        price: 700,
        descr: "Освежающий напиток с натуральной клубникой",
        type: "tea",
      },
    ],
  },
];

export const benefits = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    text: "Order will be ready in less than 15 minutes",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/135/135620.png",
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
