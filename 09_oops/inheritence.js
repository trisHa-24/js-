class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userOne = new Teacher("Trisha1","trisha@gmail.coom", "1234");

userOne.addCourse();
const userTwo = new User("Trisha2");
userTwo.logMe();
userOne.logMe();


console.log(userOne === userTwo);
console.log(userOne instanceof User );
console.log(userOne instanceof Teacher);