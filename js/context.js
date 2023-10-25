// const showUser = {
//   userName: 'Petya',
//   showName() {
//     console.log(`Show user name ${showUser.userName}`);
//   },
// };

// showUser.showName();

// const userBooks = {
//   books: ['Three Friends', '1984', 'JS'],
//   addBook(bookName) {
//     const { books } = this;
//     books.push(bookName);
//   },
//   removeBook(bookName) {
//     const { books } = this;
//     for (const book of books) {
//       if (book === bookName) {
//         books.splice(books.indexOf(book), 1);
//       }
//     }
//   },
// };

// userBooks.addBook('Graf Monte Cristo');
// console.log(userBooks.books);
// userBooks.removeBook('Graf Monte Cristo');
// console.log(userBooks.books);

// const showUser = function (congr) {
//   console.log(`Our ${congr} ${this.userName}`);
// };

// const user = {
//   userName: 'Mango',
// };

// showUser.call(user, 'Congratulations');

// const greetService = function (guest) {
//   console.log(`Welcome ${guest} to our service ${this.service}`);
// };

// const nameService = {
//   service: 'Samsung',
// };
// greetService.call(nameService, ['Go']);

// const user = {
//   userName: 'Mango',
//   getUser() {
//     console.log(this);
//     console.log(this.tag);
//   },
// };

// const outerFunc = user.getUser;
// outerFunc();

// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert(this.name + (result ? ' logged in' : ' failed to log in'));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
let user = {
  name: 'John',
  age: 30,

  sayHi() {
    alert(this.name); // приведёт к ошибке
  },
};

let admin = user;
user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.

admin.sayHi(); // TypeError: Cannot read property 'name' of null
