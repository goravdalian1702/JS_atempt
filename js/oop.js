// class User {
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeMail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Poly', email: 'mango2323@gmail.com' });
// console.log(mango);

// mango.changeMail('gor34@gmail.com');
// console.log(mango.getEmail());
// console.log(mango.email);

// const dog = { name: 'dog' };
// const cat = Object.create(dog);
// cat.name = 'cat';
// console.log(cat);
// class Car {
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #price;
//   #role;
//   constructor({ name, model, price, role }) {
//     this.name = name;
//     this.model = model;
//     this.#price = price;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mercedes = new Car({
//   name: 'mercedes',
//   model: 'Maybach',
//   price: 500000,
//   role: Car.Roles.ADMIN,
// });
// console.log(mercedes.role);
// mercedes.role = Car.Roles.EDITOR;
// console.log(mercedes.role);

// class User {
//   static #arrEmail = [];
//   static isThereRightEmail(email) {
//     return User.arrEmail.includes(email);
//   }
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//     User.#arrEmail.push(email);
//   }
// }

// const mango = new User({ name: 'Mango', email: 'mango123@gmail.com' });

// console.log(User.isThereRightEmail('m'));

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get getName() {
//     return this.name;
//   }

//   // Сеттер email
//   set newName(cd) {
//     this.name = cd;
//   }
// }
// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.getName); // mango@mail.com
// mango.newName = 'mango@supermail.com';
// console.log(mango.getName); // mango@supermail.com

class Car1 {
  static AAA = 'AAA';
  static carInfo(obj) {
    console.log(obj);
  }
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  get getprice() {
    return this.price;
  }
  set getprice(newPrice) {
    this.price = newPrice;
  }
}

const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q8',
  price: 50000,
});
Car1.carInfo(carInstance);
console.log(carInstance.getprice);
