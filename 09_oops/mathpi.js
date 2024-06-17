const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

//console.log(Math.PI);
//Math.PI = 5;
//colsole.log(Math.PI);

const tea = {
    name: "Ginger Tea",
    price: 250,
    inAvailable: true,

    onOrder: function () {
        console.log("Cant take order");
    }
};



// console.log(Object.getOwnPropertyDescriptor(tea, "name"));

Object.defineProperty(tea, "name", {
    writable: false,
    enumerable: false //name is not iteratable
});

// console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key,value] of Object.entries(tea)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
     
}


