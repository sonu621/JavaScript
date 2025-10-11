// console.log("2" > 2);
// console.log("2" < 2);
// console.log("2" >= 2);
// console.log("2" <= 2);
// console.log("2" == 2);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check (==) and comparison operators (<, >, <=, >=) work differently.
// Comparison convert null to a number, treating it as 0.
// That's why null >= 0 is true and (1) null > 0 is false. 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);