// ---------------- Arrow Function ----------------
// Arrow functions provide a more concise syntax for writing function expressions and lexically bind the this value.
// They are often used for shorter functions or when you want to preserve the context of this.


const user = {
    name: 'Sonu',
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.name} to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.name = 'Sapna';
// user.welcomeMessage();

// console.log(this); // In the global context, 'this' refers to the global object (window in browsers, global in Node.js)

// function welcome(){
//     console.log(this.username);
// }

// welcome();


// const user2 = function() {
//     let username= 'Sham'
//     console.log(this.username);
// }

// user2(); // In this case, 'this' refers to the global object, so this.username is undefined

// const user3 = () => {
//     let username= 'Sham'
//     console.log(this);
// }

// user3(); // In arrow functions, 'this' is lexically bound, so it refers to the surrounding context, which is the global object here 
// and this.username is undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: 'Sonu'})

// console.log(addTwo(3, 4));
