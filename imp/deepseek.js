// Logical operators:
// && returns the first falsy value
// || returns the first truthy value
// Falsy values: 0, false, null, "", undefined

console.log(0 && 12); // 0  (first falsy)
console.log(0 || 12); // 12 (first truthy)

// A function that is passed as an argument to a higher-order function is known as a callback function

const str = "sunbeam";
str[2];        // "n"
str[-2];       // undefined
str.charAt(1); // "u"
str.charAt(-1); // ""
str.at(1);     // "u"
str.at(-1);    // "m"

let text = "0123456789";
text.slice(2, 8);    // "234567"
text.slice(2);       // "23456789"
text.slice(-2);      // "89"
text.slice(-8, -2);  // "234567"

text.substring(-2);  // "0123456789" (negatives → 0)

// Difference: slice supports negative indexes; substring treats negatives as 0.