const repeatString = function(data, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for (let i = 1; i <= times; i++) {
        string += data;
        
    }
      return string;
};



// Do not edit below this line
module.exports = repeatString;

