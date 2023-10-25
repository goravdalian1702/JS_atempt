// const add = function (carts) {
//   let total = 0;
//   for (const cart of carts) {
//     total += cart;
//   }

//   return total;
// };

// let result = add([23, 4, 8]);
// console.log(result);

// const calculateTotalPrice = iteams => {
//   let total = 0;
//   for (const iteam of iteams) {
//     total += iteam;
//   }

//   return total;
// };

// const result = calculateTotalPrice([54, 28, 105, 70, 92, 17, 20, 124]);
// console.log('General total: ', result);

// const findSmallestNumber = numbers => {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (smallestNumber > number) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// const result = findSmallestNumber([51, 4, 34, 6, 7, 12, 43, 9, 2]);
// console.log(result);

// const changeCase = string => {
//   const letters = string.split('');
//   let changeLetters = '';

//   for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLowerCase()) {
//       changeLetters += letter.toUpperCase();
//     } else {
//       changeLetters += letter.toLowerCase();
//     }
//   }

//   return changeLetters;
// };

// console.log(changeCase('qweRT'));
// console.log(changeCase('fdgERgeE'));

// const labels = 'ggrtggtrtrhg';

// for (const label of labels) {
//   console.log(label);
// }

// const names = ['Gor', 'Ann', 'Atom'];

// const lastIndex = names.length - 1;

// const change = names.slice(0, lastIndex);
// console.log(change);

// const indexName = names.indexOf('Gor');
// names.splice(indexName, 0, 'Vany');
// console.log(names);

// function getExtremeElements(array) {
//   // Change code below this line
//   const lastIndex = array.length - 1;

//   let newArr = [];
//   newArr.push(array[0], array[lastIndex]);
//   return newArr;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const words = message.split(' ');
//   let total = 0;
//   for (const word of words) {
//     total += pricePerWord;
//   }
//   return total;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let finalArr = firstArray.concat(secondArray);
//   if (finalArr.length > maxLength) {
//     return finalArr.slice(0, maxLength);
//   }

//   return finalArr;
//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function includes(array, value) {
//   // Change code below this lin
//   let result = false;
//   for (const iteam of array) {
//     if (iteam === value) {
//       result = true;
//       return result;
//     }
//   }
//   return result;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 17));

// console.log(includes([1, 2, 3, 4, 5], 3));

function findLongestWord(string) {
  // Change code below this line
  const arr = string.split(' ');
  let longestWord = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;

  // Change code above this line
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
