const myArr = [0, 1, 2, 3, 6];
const myHero= ["loki", "captain", "iron man"];

const myArr2 = new Array(12, 14, 20, 6);

//array methods

// myArr.push(6);
// myArr.pop(); //remove from back -6

// myArr.unshift(9);
// myArr.shift(); //remove from front -> 9 will be removed

// console.log(myArr.includes(9)); //9 present or not
// console.log(myArr.indexOf(9));


// const newArr = myArr.join();// converts the whole arr into string and store it in the new arr

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A ", myArr);

const myn1= myArr.slice(1,3);// copy from myArr and paste myn1 , 3ind is not gonna included

console.log(myn1);
console.log("after slice: ", myArr);

const myn2= myArr.splice(1,3);//cut from myArr and paste in myn2 , 3ind will get included

console.log(myn2);
console.log("after splice:", myArr);
