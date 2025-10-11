// ---------------- Dates in JavaScript ----------------
// Dates are used to work with dates and times in JavaScript.
// Date objects are created using the Date() constructor.

let myDate = new Date();
// console.log(myDate); // Current Date and Time
// console.log(myDate.toString()); // Current Date and Time in String Format
// console.log(myDate.toDateString()); // Current Date in String Format
// console.log(myDate.toLocaleDateString()); // Current Date in Locale Date Format
// console.log(myDate.toDateString()); // Current Date in String Format
// console.log(typeof myDate); // object

let myCreatedDate = new Date(2025, 9, 8, 5, 30, 0); // Year, Month (0-11), Day, Hours, Minutes, Seconds
// console.log(myCreatedDate.toString()); // Fri Jan 31 2020 05:30:00 GMT+0530 (India Standard Time)

let myTimeStamp = Date.now(); // Current Timestamp in milliseconds
// console.log(myTimeStamp); // 1580424873251
// console.log(myCreatedDate.getTime()); // Timestamp of the created date in milliseconds
// console.log(myCreatedDate.getTime()); // 1744229400000

// console.log(Math.floor(Date.now()/1000)); // Current Timestamp in seconds

// console.log(newDate.getMonth()); // Month (0-11)
console.log(newDate.getDay()); // Day of the week (0-6)