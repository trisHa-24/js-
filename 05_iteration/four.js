const coding = ["js", "ruby", "java", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item) => {console.log(item);})


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); // dont execute the function here just pass the function


// coding.forEach((item, index, arr) => {
//     console.log(item, index , arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        file: 'js' 
    },
    {
        languageName: "C++",
        file: 'cpp' 
    },
    {
        languageName: "java",
        file: 'java' 
    }
]

myCoding.forEach((item)=>{
   console.log(item.file);
})

