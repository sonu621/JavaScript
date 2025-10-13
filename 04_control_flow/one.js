// ------------------ Control Flow ------------------

// Control flow is the order in which individual statements, instructions or function calls are executed or evaluated.
// In JavaScript, control flow is determined by conditional statements, loops, and function calls.
// Control flow allows you to control the execution of your code based on certain conditions or criteria.


// If statement

const isUserloggedIn = true
if(2 == '2'){
    // console.log('executed'); // executed
}

// const temperature = 40
// if(temperature === 30){
//     console.log('Less than 50');
// }else{
//     console.log('More than 50');
// }


const score = 75
if(score > 50){
    const power = 'flying'
    // console.log(`You are a superhero with ${power} power`);
}

// const balance = 1000
// // if(balance > 500)
//     // console.log('Yes I have greater then 500'), console.log('I am happy'); // This is not a good practice   
// if(balance < 500){
//     console.log('Yes less than 500');
// }else if (balance < 750){
//     console.log('less than 750');
// }else if (balance < 900){
//     console.log('less than 900');
// }else{
//     console.log('less than 1200'); // less than 1200
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFronEmail = true

if(userLoggedIn && debitCard){
    console.log('Allow to buy'); // Allow to buy
}

if(loggedInFromGoogle || loggedInFronEmail){
    console.log('Allow to login');
}