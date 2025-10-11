// ---------------- IIFE ----------------
// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that runs as soon as it is defined. 
// It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(function chai (){
    console.log(`DB connected`);
})();

((name) => {
    console.log(`DB connected using arrow function ${name}`);
})('Sonu');

