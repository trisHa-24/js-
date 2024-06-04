//for in
const myObject = {
    js: "javaSCript",
    cpp: 'C++',
    rb: "ruby",
    swift: "swift bt apple"
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
}

const prog = ["js","cpp","ruby"];

for (const key in prog) {
    console.log(key);
    console.log(prog[key]);
}

// map cant be iterated like this use forof