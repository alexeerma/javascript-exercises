const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };
// Do not edit below this line
module.exports = sumAll;


// num1 , num2
// loop num1 TILL num2, and every number in between needs to be added to the sum
// loop 1 goes to sum, 2 goes to sum, 3 goes to sum and so on.

