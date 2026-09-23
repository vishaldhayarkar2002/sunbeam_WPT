const math = require('./Math04')

console.log(math)
console.log(typeof math)
math(10, 20)
// here math is object of type function
math.substract(20, 5)

// D:\CDAC\WPT>node Day08\demo05.js
// [Function: add] { substract: [Function: sub] }
// function
// Addition - 30
// Substraction - 15