let score = undefined;

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (not a number)
//true => 1 , false =>0


let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1 => true
// " " =>false;
//"abc" =>true

let n = 33;
let stringN = String(n);
console.log(typeof stringN);