//------------- Arrays -------------//

// Arrays are used to store multiple values in a single variable
// Arrays are a special type of objects
// Arrays are created using square brackets []

const myArr = [1, 2, 3, 4, 5, 'Sonu', true]; // Array of numbers

// console.log(myArr); // [ 1, 2, 3, 4, 5, 'Sonu', true ]
// console.log(myArr[5]); // Sonu

// Arrays are zero indexed i.e. the first element is at index 0

// Arrays methods

myArr.push('4'); 
// console.log(myArr); // [ 1, 2, 3, 4, 5, 'Sonu', true, '4' ]
myArr.push(6);
// console.log(myArr); // [ 1, 2, 3, 4, 5, 'Sonu', true, '4', 6 ]
myArr.pop();
// console.log(myArr); // [ 1, 2, 3, 4, 5, 'Sonu', true, '4' ]

myArr.unshift('9'); 
// console.log(myArr); // [ '9', 1, 2, 3, 4, 5, 'Sonu', true, '4' ]

myArr.shift();
// console.log(myArr); // [ 1, 2, 3, 4, 5, 'Sonu', true, '4' ]

// console.log(myArr.includes(6)); // false

const newArr = myArr.join();

// console.log(myArr); // [ 1, 2, 3, 4, 5, 'Sonu', true, '4' ]
// console.log(newArr); // 1,2,3,4,5,Sonu,true,4


// Slice and Splice

const myNewArr1 = myArr.slice(1, 4);
// console.log(myNewArr1); // [ 2, 3, 4 ]

const myNewArr2 = myArr.splice(1, 4);
console.log(myNewArr2); // [ 2, 3, 4, 5 ]

// Difference between slice and splice
// 1. Slice does not modify the original array, it returns a new array
// 2. Splice modifies the original array, it returns the removed elements  