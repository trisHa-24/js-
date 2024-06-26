// const tinder = new Object() -> singleton 
const tinderUser = {}

tinderUser.id ="1234ab";
tinderUser.name = "tri";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser ={
    email: "tri@gmail.com",
    fullname: {
        userfullname:{
            firstname: "trisha",
            lastname: "mondal"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({}, obj1, obj2); // {}-> source , remaining destination

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const user = [
    {
        id: 1,
        email: "t@gmail,com"
    },
    {
        id: 1,
        email: "t@gmail,com"
    },
    {
        id: 1,
        email: "t@gmail,com"
    }

]
user[1].email; 
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //this gives array of keys , similarly ,value for value

// console.log(Object.entries(tinderUser));//[['id':'123abx'], [..],....., [..]]

// console.log(tinderUser.hasOwnProperty('isLogged'));


///////////////////////////////////

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {coursename, price, courseInstructor} = course; //object destructure

console.log(coursename);

