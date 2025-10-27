class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password() {
        return `${this._password.toUpperCase()}sonu`
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const Sonu = new User("sonu@gmail.com", "abcd")
console.log(Sonu.password);
console.log(Sonu.email);