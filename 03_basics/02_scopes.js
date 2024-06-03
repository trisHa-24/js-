let a = 200;

if(true){
    let a = 1;
    const b = 20;
    var c = 30;
    console.log("Inner:", a);
}

console.log(a);
//console.log(b);
console.log(c);

//nested scope

function one(){
    const username = "trisha"

    function two(){
        const website = "youTube";
        console.log(username);//can access username
    }

    //console.log(website); //can't access website
   two();
}
one();

// ............ interesting ...........

addone(5);//this won't create any problem

function addone(num) {
    return num + 1;
}
addone(5);

//addTwo(2) // can not access 'addTwo' before initialization
const addTwo = function(num){
    return num+1;
}//this also called expression
addTwo(5);