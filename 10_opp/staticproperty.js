class User {
    constructor(name) {
        this.name = name
    }

    logMe() {
        // console.log(`Username is ${this.name}`);
    }

    createID() {
        return `1234`
    }
}

const Sonu = new User("Sonu")
console.log(Sonu.createID());

class Teacher extends User {
    constructor(email) {
        super(email)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "Sonu@gamil.com")
console.log(iphone.logMe());