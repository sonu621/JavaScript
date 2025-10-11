// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'Sonu'
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sonu', isLoggedIn: false }
 
const regularUser = {
    email: 'sonu@gmail.com',
    fullname: {
        userFullname: 'Sonu Kumar',
        userLastName: 'Gupta'
    }
}

// console.log(regularUser.fullname.userFullname); // Sonu Kumar

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {...obj1, ...obj2}

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        userId: 1,
        userName: 'Sonu',
    },
    {
        userId: 2,
        userName: 'Kumar',
    },
    {
        userId: 3,
        userName: 'Gupta',
    }
]

users[1].userName
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sonu', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sonu' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('name')); // true
// console.log(tinderUser.hasOwnProperty('age')); // false


const course = {
    coursename: 'JavaScript',
    price: '999',
    courseInstructor: 'Sonu Kumar'
}

// console.log(course.coursename); // JavaScript

const {courseInstructor: instructure} = course // Destructuring
console.log(instructure);

