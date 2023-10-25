// const arr = [4, 5, 3, 1, 4, 65, 2, 12, 5];

// const logFunc = (element, index) => {
//   console.log(`index ${index}, element ${element}`);
// };

// arr.forEach(logFunc);

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

// Change code below this line
const getSortedFriends = users => {
  const uniqeFriend = users
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
  return uniqeFriend;
};

console.log(getSortedFriends(users));
// Change code above this line

// const getTotalFriendCount = users => {
//   const totalFriends = users
//     .flatMap(user => user.friends)
//     .reduce((acc, friend) => {
//       friend = 1;
//       acc += friend;
//       return acc;
//     }, 0);
//   return totalFriends;
// };

// console.log(getTotalFriendCount(users));

// const getUsersWithFriend = (users, friendName) => {
//   const usersFriend = users.filter(user => user.friends.includes(friendName));
//   return usersFriend;
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, 'GoldieGentry'));

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   const generalBalanse = users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);

//   return generalBalanse;
// };

// console.table(getTotalBalanceByGender(users, 'male'));

// Change code above this line
// Change code below this line
// const getTotalFriendCount = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   const countFriends = allFriends.reduce((total, friend) => {
//     friend = 1;
//     return total + friend;
//   }, 0);

//   return countFriends;
// };
// // Change code above this line

// console.log(getTotalFriendCount(users));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstName, secondName) => firstName.localeCompare(secondName));

// // console.log(names);
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       console.log(pizza);
//       if (pizza !== pizzaName) {
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment`);
//       } else {
//         onSuccess(pizzaName);
//       }
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
// Change code below this line
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(iteam => iteam % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(iteam => iteam % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(iteam => iteam % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(iteam => iteam % 2 !== 0);

// const eachElementInThirdIsEven = thirdArrayfirstArray.every(iteam => iteam % 2 === 0);

// const eachElementInThirdIsOdd = thirdArrayfirstArray.every(iteam => iteam % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInFirstIsEven);
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books.sort((firstAuther, secondAuther) =>
//   firstAuther.author.localeCompare(secondAuther.author)
// );

// const sortedByReversedAuthorName = books.sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = books.sort(
//   (firstRat, seconddRat) => firstRat.rating - seconddRat.rating
// );

// const sortedByDescentingRating = books.sort(
//   (firstRat, secondRat) => firstRat.rating - secondRat.rating
// );
// Change code below this line
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .sort((authorOne, authorTwo) => authorOne.author.localeCompare(authorTwo.author))
//   .map(book => book.author);

// console.log(names);
