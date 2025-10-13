// ----------------- Truthy in JS------------------

const userEmail = "sonu.kumar@gmail.com"

// if (userEmail){
//     console.log('Got the user email');
// }else{
//     console.log("Don't have user email");
// }

const userEmail1 = ''

if(userEmail1){
    console.log('Got the user email');
}else{
    console.log("Don't have user email");
}


// --------- Falsy values in JS -------------------
// false, 0, -0, BigInt onabort, "", null, undefined, NaN ---- these all are falsy values

// ------------ Truth values in JS ----------------
// "0", "false", " ", [], {}, function(){} ------ these all are truthy values

if (userEmail1.length === 0){
    console.log("Array is empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);

// ------------------ Terniary Operator ------------------

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")