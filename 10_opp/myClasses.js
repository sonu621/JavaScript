// ----------------------------- ES6 in JavaScript Classes -----------------------

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc@123`
    }
    changeUSername() {
        return `New username is ${this.name.toUpperCase()}`
    }
}

const chaiUser = new User("Sonu", "sonu@gmail.com", "1234")

console.log(chaiUser.encryptPassword());
console.log(chaiUser.changeUSername());