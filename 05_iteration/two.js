//for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}
//object -> myObject is not iterable , use forin

const myObject = {
    js: "javaSCript",
    cpp: 'C++',
    rb: "ruby",
    swift: "swift bt apple"
}

// for (const key of myObject) {
//     console.log(key);
// }

// Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United states of america");
map.set('Fr', "France");

console.log(map);

for (const [key,value] of map) {
    console.log(key,'->' , value);
}

