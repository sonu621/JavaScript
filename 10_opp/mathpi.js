// ------ Object.getOwnPropertyDescriptor(Math) -------

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// ------- Define Property -------
const chai = {
    name: 'Tea',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log(`Order placed for ${this.name}`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for (let [key, value] of Object.entries(chai)){
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}