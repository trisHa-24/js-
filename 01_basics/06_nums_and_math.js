const score=400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 123.89966;
console.log(num.toPrecision(4));
const num1 =1123.899;
console.log(num1.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

///..........maths..........
console.log(Math);
console.log((Math.random()*10 )+ 1); 
// to avoid 0 [1....9]
// 0.5 * 10 => 0 , so +1

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);

