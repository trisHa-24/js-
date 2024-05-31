// singleton -> constructor
//Object.create

//object literals dont make singleton

const mySym = Symbol("key1");//declare symbol first and then use inside object as mentioned

const jsUser = {
    name: "Trisha",
    "full name": "Trisha Mondal",
    [mySym]: "myKey1",//only way to store symbol
    age: "22",
    location: "Kolkata",
    email: "trisha@gmail.com",
    isLogged: false,
    lastLoginDays: ["monday", "saturday"]
}


console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // only way to access
console.log(jsUser[mySym]); // only way to console symbol


jsUser.email = "trisha@chatgpt.com";
//Object.freeze(jsUser); // any further changes will not be reflected in object
jsUser.email ="abc@gmail.com";

console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user!");
}
jsUser.greetingTwo = function(){
    console.log(`Hey ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());