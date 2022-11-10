'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is yur pasta with ${ing1} and ${ing2} and ${ing3}`);
  },
};

//🎆🎆106 rest pattern and parameters🎆🎆

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//  but with spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

// if you need the element of the array individualy
console.log(...newArr);

//new menu

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu);

//copy arrays

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables are arrys , string, maps, sets, but not objects

const str = 'maysam';
const letter = [...str, ' ', 's.'];
console.log(letter);

console.log(...str);

//?? real world ex:

// const ingrediants = [
//   prompt("let's make pasta! Ingrediant 1?"),
//   prompt('ingrediant 2?'),
//   prompt('ingrediant 3?'),
// ];
// console.log(ingrediants);

// restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
// restaurant.orderPasta(...ingrediants); // better solution

//objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'tmara' };
console.log(newRestaurant);

//we made shallow copies of arrys using spread operator, we can do the same with objects instead of useing object .assign like so : ⏬
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'resto roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //🎆🎆 destructuring objects 🎆🎆 104

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // how to add default vaule
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variable while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // you need to wrap this in pareenthesis بين قوسين ()
// console.log(a, b);

// // Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//🎈🎈103 lecture 🎈🎈
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// this is mutating variables

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variable without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// // with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // recieve 2 return value from a function
// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // another feature for destructuring if we dont know the length of the array

// // default values

// const [p = 1, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);
