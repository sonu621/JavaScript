// ------------- Scopes in JavaScript -------------
// Scopes are the current context of code, which determines the accessibility of variables to JavaScript.
// Scopes can be global or local (function scope or block scope).
// Variables defined outside any function or block are in the global scope and can be accessed from anywhere in the code.

let a = 10 // Global Scope Variable
const b = 20 // Global Scope Variable
var c = 30 // Global Scope Variable

if (true){
    let a = 40 // Block Scope Variable
    const b = 50 // Block Scope Variable
    var c = 60 // Function Scope Variable (not block scope)
    // console.log("Inside Block: ", a); // 40
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = 'Sonu' // Function Scope Variable

    function two(){
        const website = 'sonu.com' // Function Scope Variable
        // console.log(username);
    }
    // console.log(website); // Error: website is not defined
    two();
}
one();

if (true){
    const username = 'Sonu'
    if (username === 'Sonu'){
        const website = ' sonu.com'
        // console.log(username + website);
    }
    // console.log(website); // Error: website is not defined
}

// console.log(username); // Error: username is not defined


// -------------------- Interesting Fact --------------------
// In JavaScript, var is function-scoped, while let and const are block-scoped. 
// This means that variables declared with var inside a block (like an if statement) are accessible outside that block, 
// but variables declared with let or const are not.

console.log(addone(5));

function addone(num){
    return num + 1;
}


console.log(addTwo(5));
const addTwo  = function(num){
    return num + 2;
}

