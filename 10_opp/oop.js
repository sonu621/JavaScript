const user = {
    name: "Sonu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`User name is ${this.name} and login count is ${this.loginCount}`);
        // console.log(this);
    }
}
// console.log(user.getUserDetails())


const user1 = {
    name: "Sonu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`User name is ${this.name} and login count is ${this.loginCount}`);
        // console.log(this);
    }
}

// console.log(user.getUserDetails())

function User(name, loginCount, signedIn){
    this.name = name;
    this.loginCount = loginCount;
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`Welcome ${this.name}`);
    }

    return this
}

const user2 = new User("Sham", 12, false)
const user3 = new User("Sapna", 26, true)
console.log(user2);
console.log(user3);
console.log(user1.constructor);
