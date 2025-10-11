// Primitive Data Types:-

// 7 data types:-

// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


// Reference Data Types (Non primitive):-
// 1. Arrays
// 2. Objects
// 3. Functions

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false
 
const bigNumber = 5975694077540976n

const heros = ['shaktiman', 'nagraj', 'flyingJatt'];
let myObj = {
    name: 'Sonu', 
    age : 24,
}

const myFunction = function() {
    console.log('Hello World!');
}

// console.log(typeof myFunction); // function
// console.log(typeof anotherId); // symbol

// -----------------------------------------------------

// Memory

// Stack Data Types (Primitive) - Stored in Stack
// Heap Data Types (Non-Primitive) - Stored in Heap