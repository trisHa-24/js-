// let myName = "trisha     ";
// let sureName = "mondal    ";

// console.log(myName.length);
// // console.log(myName.trim().length);

// console.log(myName.truelength); // want to create this method

let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.trisha = function(){
    console.log(`trisha is present in all object`);
} // we are accesing object and defining a function or method here will be inheritted in all the child objects(array,string,objectetc);

heroPower.trisha();
myHeros.trisha();

Array.prototype.heyTrish = function(){
    console.log(`Trisha says hiiie`);
}

myHeros.heyTrish();
//heroPower.heyTrish();

//.........inheritence............

const user = {
    name: "Trisha",
    email: "Trish@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
} 

const TASupport = {
    makeAssingment: 'Js assingment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= user;

//modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUser = "Tri     ";

String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length} `);
}

anotherUser.trueLength();

const myName = "Trisha   ";
myName.trueLength();
"Sami  ".trueLength();