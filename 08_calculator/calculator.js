const add = function(num1,num2) {
    let sumAdd = num1 + num2; 
    return sumAdd;
};

const subtract = function(num1,num2) {
    let sumSub = num1 - num2;
    return sumSub;
};

const sum = function(arr) {
  
  sumSum = arr.reduce((a, b) => a + b, 0);
    return sumSum;

     
};

const multiply = function(arr) {
    sumMply = arr.reduce((a, b) => a * b, 1);
    return sumMply;
};

const power = function(num1,num2) {
    let sumPwr = num1 ** num2;
    return sumPwr;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
/* const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial (n-1); 
};*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
