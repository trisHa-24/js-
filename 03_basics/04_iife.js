//immediately Invoked function expressions IIFE

// function chai() {
//     console.log('DB CONNECTED');
// }
// chai();

(function chai() {
    //named iife
    console.log('DB CONNECTED');
})(); //we need to tell where to end the code block because of that we need to give ; manually here

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} )("tri");
