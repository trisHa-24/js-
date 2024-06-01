
function sayName() {
    console.log("T");
    console.log("R");
    console.log("I");
}

// sayName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers(2, "a");

function addTwoNumbers(num1, num2){
        return (num1 + num2);
} 
let result = addTwoNumbers(2,3);
// console.log(result);

function f(username ="sam"){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(f());
// console.log(f("Trish"));


//rest operator
function calculateCartPrice(val1,val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 500,400)); // return array , val1->200, val2->300 and rest in num1

const user = {
    username: "trisha",
    prices: 199
}

function handleObject(anyObject){
    console.log(`user is ${anyObject.username} and price ${anyObject.price}`);
}

//handleObject(user); price : undefined typo price, prices 
handleObject({
    username: "sam",
    price: 20
})

const arr = [200, 300, 400];

function returnSecValue(getArr){
    return getArr[1];
}

console.log(returnSecValue(arr));