let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023");
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));  //sec

let newDate = new Date();
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));



