//const userEmail = "tri.ai"; // true
const userEmail = ""; // falsy

if (userEmail){
    console.log("got user email")
}
else {
    console.log("don't have email");
}

//falsy values
//  false , 0 , -0, BigInt 0n , "", null, undefined , NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

const arr = [];
if(arr.length === 0){
    console.log("array is empty");
}

const emptyObject = {};
// Object.keys(emptyObject) -> this returns a array
if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

// false==0 -> true, false == ''->true, 0==''-> true

//nullish coalescing operator (??): null undefined

let val1;

val1= 5 ?? 10; // assign 5
val1 = null ?? 10; // assignes 10
val1 = undefined ?? 10;

console.log(val1);