const add = function (carts) {
  let total = 0;
  for (const cart of carts) {
    total += cart;
  }

  return total;
};

let result = add([23, 4, 8]);
console.log(result);
