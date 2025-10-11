//---------- Objects ----------

// Objects are non-primitive data types that allow us to store collections of data in key-value pairs.
// Objects are created using curly braces {}

const person = {
    name: 'Sonu',
    age: 24,
    loaction: 'Saudi',
    isLoggedIn: false,
    hobbies: ['Coding', 'Traveling', 'Sleeping']
}

// console.log(person.name); // Sonu
// console.log(person['hobbies']); // [ 'Coding', 'Traveling', 'Sleeping' ]

person.greeting = function(){
    console.log('Hey Sonu!'); // Hey Sonu!
}

console.log(person.greeting()); // Hey Sonu!