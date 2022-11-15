const words = 'Java is the best languge of programing';

console.log(words.split(' '));

const type = ['Football', 'Basketball', 'Tennis', 'Voleyball'];

console.log(type.join('-'));

console.log(type.indexOf('Tennis'));

console.log(type.includes('Football'));

console.log(type.slice(0, 3));
console.log(type.slice(2, 4));

type.splice(2, 1, 'Chess');

console.log(type);
