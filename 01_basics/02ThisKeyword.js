const user = {
    username:"Saksham",
    price: 999,

    welcomeMessage: function() {
       // console.log('${this.username} , welcome to website');
        //console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
// whenever u are referring to current context you'll use this keyword
//console.log(this);

//object inside browser is window object



// function chai(){
//     //let username = "saksham"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "saksham"
//     console.log(this.username);
// }


//arrayfunction

const chai = () => {
    let username = "saksham"
    console.log(this);
}

//this keyword inside arrow function gives undefined value or we can't use this keyword inside arrow function 

//****explicit return when you are using return keyword */

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }



//implicit return 
// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "saksham"})
console.log(addtwo(3, 4))



//****if you are using curly braces then you have to use return keyword whereas if you are using paranthesis then you don't need to use return keyword  */

















































