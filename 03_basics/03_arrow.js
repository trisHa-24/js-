const user = {
    username: "Trisha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome `);
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage()

// console.log(this); // empty  , but in browser it gives window(cause that's the global context in browser)


//...........arrow fn..............

// function chai(){
//    // console.log(this); this will give us a lot of values

//    let username = "Trisha";
//    console.log(this.username); // undefined
//    console.log(this); // Object[global]{},a long value
// }
// chai();

const chai = () => {
    let username = "Trisha";
    console.log(this.username);// undefined
    console.log(this);//returns {}, empty paranthesis
}
chai();