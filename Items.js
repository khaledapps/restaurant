const burgerAdditions = [
  {
    id: 1,
    title: "Extra Cheese",
    extraPrice: 1.0,
    image: require("./assets/addition-cheese.png"),
  },
  {
    id: 2,
    title: "Ketchup",
    extraPrice: 0,
    image: require("./assets/addition-ketchup.png"),
  },
  {
    id: 3,
    title: "Pickles",
    extraPrice: 0,
    image: require("./assets/addition-pickles.png"),
  },
];

const pizzaAdditions = [
  {
    id: 4,
    title: "Cool Ranch",
    extraPrice: 2.5,
    image: require("./assets/addition-cool-ranch.png"),
  },
  {
    id: 5,
    title: "Bold BBQ",
    extraPrice: 2.5,
    image: require("./assets/addition-bold-bbq.png"),
  },
  {
    id: 6,
    title: "Fiery Peri",
    extraPrice: 2.5,
    image: require("./assets/addition-fiery.png"),
  },
];

const burgerOptions = [
  {
    id: 1,
    type: "multiple",
    title: "Additions",
    options: burgerAdditions,
  },
];
const pizzaOptions = [
  {
    id: 2,
    type: "multiple",
    title: "Additions",
    options: pizzaAdditions,
  },
];

const items = [
  {
    id: 1,
    title: "Burger",
    image: require("./assets/category-burger.png"),
    items: [
      {
        id: 1,
        name: "Cheese Burger",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 26.99,
        image: require("./assets/burger-cheese.png"),
        options: burgerOptions,
      },
      {
        id: 2,
        name: "Chicken Burger",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 22.99,
        image: require("./assets/burger-chicken.png"),
        options: burgerOptions,
      },
      {
        id: 3,
        name: "Double Whopper Burger",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 29.99,
        image: require("./assets/burger-double-whopper.png"),
        options: burgerOptions,
      },
      {
        id: 4,
        name: "Smokey Burger",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 29.42,
        image: require("./assets/burger-smokey.png"),
        options: burgerOptions,
        isTopPick: true,
      },
      ,
      {
        id: 5,
        name: "Veg Burger",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 18.59,
        image: require("./assets/burger-veg.png"),
        options: burgerOptions,
        isTopPick: true,
      },
    ],
  },
  {
    id: 2,
    title: "Pizza",
    image: require("./assets/category-pizza.png"),
    items: [
      {
        id: 6,
        name: "Cheese Lovers",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 26.99,
        image: require("./assets/pizza-cheese-lovers.png"),
        options: pizzaOptions,
      },
      {
        id: 7,
        name: "BBQ Chicken",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 32.99,
        image: require("./assets/pizza-bbq.png"),
        options: pizzaOptions,
        isTopPick: true,
      },
      {
        id: 8,
        name: "Veg Pizza",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 19.99,
        image: require("./assets/pizza-veg.png"),
        options: pizzaOptions,
      },
    ],
  },
  {
    id: 3,
    title: "Noodles",
    image: require("./assets/category-noodles.png"),
    items: [
      {
        id: 9,
        name: "Japanese Soba",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 22.99,
        image: require("./assets/noodles-japanese-soba.png"),
        // options: burgerOptions,
      },
      {
        id: 10,
        name: "Stir Fry Udon",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 23.99,
        image: require("./assets/noodles-stir-fry-udon.png"),
        // options: burgerOptions,
        isTopPick: true,
      },
      {
        id: 11,
        name: "Pasta",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 29.99,
        image: require("./assets/category-noodles.png"),
        // options: burgerOptions,
      },
    ],
  },
  {
    id: 4,
    title: "Salad",
    image: require("./assets/category-salads.png"),
    items: [
      {
        id: 12,
        name: "Cheese Salad",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 17.95,
        image: require("./assets/salad-cheese.png"),
        // options: burgerOptions,
      },
      {
        id: 13,
        name: "Chef Salad",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 18.99,
        image: require("./assets/salad-chef.png"),
        // options: burgerOptions,
      },
    ],
  },
  {
    id: 5,
    title: "Sweets",
    image: require("./assets/category-sweets.png"),
    items: [
      {
        id: 14,
        name: "Pancake",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 15.99,
        image: require("./assets/category-sweets.png"),
      },
      {
        id: 15,
        name: "Waffles",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 18.99,
        image: require("./assets/sweets-waffles.png"),
      },
    ],
  },
  {
    id: 6,
    title: "Drinks",
    image: require("./assets/category-beverages.png"),
    items: [
      {
        id: 16,
        name: "Pepsi",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 2,
        image: require("./assets/drinks-pepsi.png"),
      },
      {
        id: 17,
        name: "Orange Juice",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 8,
        image: require("./assets/drinks-orange.png"),
      },
      {
        id: 18,
        name: "Strawberry Juice",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis, a, voluptatem excepturi minus ",
        price: 8,
        image: require("./assets/drinks-strawberry.png"),
      },
    ],
  },
];

export default items;
