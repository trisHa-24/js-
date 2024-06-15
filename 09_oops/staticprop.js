class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const Trisha = new User("Trisha");

//console.log(Trisha.createId()); // can not accessed because of static id

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const user1 = new Teacher("User1", "u1@gmail.com");

user1.logMe();
console.log(user1.createId());