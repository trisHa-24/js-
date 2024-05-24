// Primtive : copy of a data is made 
//7 types : string , Number , Boolean ,undefined, null, Symbol, BigInt , 

//+++++++++++++++++++++++++++
//stack -> primitive,
//heap -> non-primitive

let myName = "Trisha";
let anotherName = myName;// it is a copy of myName so anychange into this copy won't effect the myName var 
anotherName = "mondal"; 
console.log(myName);
console.log(anotherName);


let user1={
    email:"abc@gmail.com",
    upi: "abc@ybl"
}

let user2 = user1;//both are pointing to the same address
//it is storing the reference of user1 so it will change the actual value present at the heap

user2.email = "xyz@gmail.com";

console.log(user1.email);
console.log(user2.email);

