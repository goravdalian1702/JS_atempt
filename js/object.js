/*
* Робимо з колекцією товаров в корзині
* - getItems()
* - add(product)
* - remove(productName)
* - clear();
* - countTotalPrice()
* - increaseQuantity(productName)
*- decreaseQuantity(productName)

* {name: 'apple', price: 50}
* {name: 'grap', price: 70}
* {name: 'lemon', price: 60}
* {name: 'strawberry', price: 110}
// */

// const cart = {
//   iteams: [],
//   getIteams() {
//     return this.iteams;
//   },
//   add(product) {
//     const { iteams } = this;
//     for (const { name, price } of iteams) {
//       if (name === product.name) {
//         console.log;
//       }
//     }
//     const newProduct = { ...product, quantity: 1 };
//     this.iteams.push(newProduct);
//   },
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantatity(productName) {},
// };
// console.table(cart);

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'grap', price: 70 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getIteams());

// // console.log(cart.countTotalPrice());

// cart.remove('lemon');
// console.table(cart.getIteams());

// cart.clear();
// console.log(cart.getIteams());

// cart.increaseQuantity('grap');
// console.table(cart.getIteams());

// cart.decreaseQuantatity('lemon');
// console.table(cart.getIteams());

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(calculateTotalPrice('Radar'));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const oldNameIndex = this.books.indexOf(oldName);
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(oldNameIndex, 1, newName);
//       }
//     }
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// console.log(bookShelf.books);
//   add(product) {
//     for (const iteam of this.iteams) {
//       if (iteam.name === product.name) {
//         iteam.quantity += 1;
//         return;
//       }
//     }

//     const newProducrt = {
//       ...product,
//       quantity: 1,
//     };
//     this.iteams.push(newProducrt);
// //   },
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }

//     const newProduct = {
//       ...newPotion,
//     };

//     potions.push(newProduct);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const element = potions[i];
//       console.log(element);
//       if (potionName === element.name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       let potion = potions[i];
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }
//   },
//   // Change code above this line
// };

/*getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions. */

// console.table(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// atTheOldToad.addPotion({ name: 'Speed potion', price: 460 });
// console.table(atTheOldToad.getPotions());

// // atTheOldToad.removePotion('Dragon breath');
// // console.table(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.table(atTheOldToad.getPotions());

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Kiwi', online: false },
//   { name: 'Ajax', online: false },
// ];

// // for (const friend of friends) {
// //   console.log(friend.name);
// //   friend.newrop = 555;
// // }

// // console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of friends) {
//     if (friend.name === name) {
//       console.log(`Yesss, we find ${name}`);
//     }
//   }
// };

// findFriendByName(friends, 'Poly');

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
// Change code below this line
const sortByAscendingBalance = users => {
  const userBalance = [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );
  return userBalance;
};
// Change code above this line
// Change code above this line

console.table(sortByAscendingBalance(users));
