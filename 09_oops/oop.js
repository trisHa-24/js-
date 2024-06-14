//object literal -> object properties username , logincount etc , object method getUserDetails

const user = {
    username: "Trisha",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("got data");
        // console.log(this.username);
        console.log(this);
    }
}

// console.log(user.username);
// //console.log(user.getUserDetails());

// console.log(this);


//............constructor..........

//const promiseOne = new Promise();

// new -> constructor function : allows create multiple intences  through one object/object literal

function User(username, loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount ;
    this.isLoggedIn = isLoggedIn;
   

    this.greeting = function(){
        console.log(`wellcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Trisha", 10, true);
 const userTwo = new User("Updated", 15, false);

// userTwo will update the values of userOne if we dont use new  , which is wrong

// because of this we need to use new keyword new will create different intense 

console.log(userOne.constructor);
console.log(userTwo.constructor);



// ...... new........
// step1 ->  create new empty object 
// step2 -> call a constructor function
// step3 -> all the arguments will be injected into "this"
// step4 -> we get back from function