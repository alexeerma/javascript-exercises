const ftoc = function(fahrenheit) {
    let value = ((fahrenheit - 32) * (5/9));
    var roundedValue = (Math.round(value * 10) / 10);
    return roundedValue;
};


const ctof = function(celsius) {
    let value2 = (celsius * (9/5) + 32);
    var roundedValue2 = (Math.round(value2 * 10)/ 10);
    return roundedValue2;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/* FTOC 
store fahrenheit
(F-32) * 5/9 
decimal point conversion
return the value


*/

/* CTOF 
store fahrenheit
C * (9/5) + 32 
decimal point conversion
return the value
*/