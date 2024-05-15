class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ujjwal`
    }

    set password(value){
        this._password = value
    }
}

const ujjwal = new User("h@ujjwal.ai", "abc")
console.log(ujjwal.email);