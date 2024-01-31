//Immediately Invoked Function Expressions

// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()

(function chai(){
    //named IIFE
    console.log('DB CONNECTED');
})();

//Global scope ke pollution se pblm hoti hai kai baar uss global scope ke jo bhi declrn. hain usko hatane ke liye iifi ka use kiya


( (name) => {
    //Unnamed IFFE
    console.log('DB CONNECTED TWO ${name}');
})('saksham')















