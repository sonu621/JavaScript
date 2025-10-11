// ---------- Functions in JavaScript ----------
// Functions are one of the fundamental building blocks in JavaScript.
// A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.
// To use a function, you must define it somewhere in the scope from which you wish to call it.


function greetUser() {
    console.log('S');
    console.log('o');
    console.log('n');
    console.log('u');
}

// greetUser(); // Function Call


function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// addTwoNumbers(4, 5); // Function Call with arguments 4 and 5 
// addTwoNumbers(3, null); // Function Call with arguments 3 and null (null is treated as 0)


function anotherNumber(num1, num2){
    // let result = num1 + num2; // Local Scope Variable
    // return result;

    return num1 + num2; // Directly
}

const result = anotherNumber(4, 5); // Function Call with arguments 4 and 5
// console.log('Result: ', result); // 9

function loginUserMessage(username = 'Guest') {
    if(!username){
        console.log('Please enter a  valid username');
        return;
    }
    return `Hello ${username}, welcome back!`;
}

// console.log(loginUserMessage('Sonu')); // Hello Sonu, welcome back!
// console.log(loginUserMessage()); // Hello undefined, welcome back! (if no argument is passed, it will be undefined)


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100, 400, 500))

const user = {
    username: 'Sonu',
    price: 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Username is Sonu and price is 500

// handleObject({username: 'Sonu', price: 500}); // Username is Sonu and price is 500

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); // 2
console.log(returnSecondValue([`100`, `200`, `300`])); // 200

