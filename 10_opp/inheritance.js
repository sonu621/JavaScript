class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`Course added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "1234")

chai.addCourse();

const tea = new User("masalatea")

tea.logMe();
console.log(chai instanceof Teacher);