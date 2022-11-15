//const products = [
//  { name: 'Radar', price: 1300, quantity: 4 },
//  { name: 'Scanner', price: 2700, quantity: 3 },
//  { name: 'Droid', price: 400, quantity: 7 },
//  { name: 'Grip', price: 1200, quantity: 9 },
//];
//
//function getAllPropValues(propName) {
//  // Change code below this line
//  const propArray = [];
//
//  for (const product of products) {
//    const keys = Object.keys(product);
//    for (const key of keys) {
//      console.log(key);
//      if (key === propName) {
//        propArray.push(product[key]);
//      }
//    }
//  }
//
//  return propArray;
//  // Change code above this line
//}
//
//let result = getAllPropValues('name');
//console.log(result);

// Напиши функцію calculateTotalPrice(productName), яка
//приймає один параметр productName - назва товару.Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.
// Change code below this line

// Change code below this line
// Change code below this line
/**const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    const newProduct = {
      ...newPotion,
    };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    let resalt = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        resalt = `Found ${oldName} change to ${newName} `;
      }
    }
    return console.log(resalt);
  },
  // Пиши код выше этой строки
};
console.log('atTheOldToad.getPotions()', atTheOldToad.getPotions());

console.log(
  "atTheOldToad.addPotion('Dragon breath', 300)",
  atTheOldToad.addPotion('Dragon breath', 300)
);

console.log("atTheOldToad.removePotion('Сок жабы')", atTheOldToad.removePotion('Stone skin'));

console.log(
  "atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')",
  atTheOldToad.updatePotionName('Stone skin', 'poliform')
);
const bookShelf = {
  books: ['The Last Kingdom'],
  getBooks() {
    console.log(this);
  },
};

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
**/

// Change code below this line
// Change code below this line
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    const newProduct = {
      ...newPotion,
    };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const indexPoition = this.potions.indexOf(potionName);
        this.potions.splice(indexPoition, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion('Speed potion');
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
