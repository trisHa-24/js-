// ES6

// class User {
//     constructor(username, email, password){
//         this.username=username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("Trisha", "trisha@ex.com", "123");

// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

///behind the scence 

function User(username, email, password){
     this.username = username;
     this.email = email;
     this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new User("Tris", "tris@ex.com", "000");
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());
