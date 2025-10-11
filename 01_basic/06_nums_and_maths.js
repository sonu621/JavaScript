// ----------------- Numbers -----------------

const score = 100;
// console.log(score);

const balance = new Number (100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.1299;
// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));



// ----------------- Maths ------------------


// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.6)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
// console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random() * 10); // random number between 0 and 10
// console.log((Math.random() * 10) + 1); // random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20 (both inclusive)