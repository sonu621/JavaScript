const name = "Sonu";
const repoAge = 25;

// console.log(name + repoAge + " Value");
// console.log(`Hey my name is ${name} and I am ${repoAge} years old.`);


const gameName = new String ('Sonu');

// console.log(gameName);

// console.log(gameName.length);
// console.log(gameName._proto__);
// console.log(gameName.charAt(2)); to get character at index 2
// console.log(gameName.indexOf('o')); to get index of character 'o'
// console.log(gameName.toUpperCase()); to convert string to uppercase

const newString = gameName.substring(0, 3);
// console.log(newString);

const anotherString = gameName.slice(0, 4);
// console.log(anotherString);

const newString1 = "   Sonu   ";
// console.log(newString1);
// console.log(newString1.trim()); to remove spaces from start and end

const url = "https://sonu.com/learn%20%name=js";

// console.log(url.replace('%20', '?')); // to replace %20 with ?

const testName = "S-o-n-u";
console.log(testName.split('-')); // to convert string to array