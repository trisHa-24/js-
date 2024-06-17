class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    
    get password(){
           return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const trisha = new User("trisha@gmail.com", "abc");

console.log(trisha.password);


