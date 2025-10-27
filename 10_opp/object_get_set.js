const User = {
    _email: 'sonu@gmail.com',
    _password: 1234,


    get email(){
        return this._email.toLocaleLowerCase()
    },
    set email(value) {
        this._email = value
    }
}

const Sonu = Object.create(User)
console.log(Sonu.email);
// console.log(Sonu.password);
