const name ="Trisha";
const repoCount = 50;

console.log(name + repoCount + "Value");//backdated

console.log(`Hello my name is ${name} & my age ${repoCount}`);//string interpoletion

//string declartion can be done in this way also
const gameName = new String('Among-Us');

//it stores as key value pair -> 0->A , 1->m and so on

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('U'));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);

const rev = gameName.slice(-7,4);
console.log(rev);
console.log(anotherString);

const str = "   Tri ha  ";
console.log(str);
console.log(str.trim());

const url = "https://trisha%2001mondal";

console.log(url.replace('%2001' , '-'));
console.log(url.includes('tri'));
