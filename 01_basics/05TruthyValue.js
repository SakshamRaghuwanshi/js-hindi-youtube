// const username = "saksham.ai"

// if(username){
//     console.log("Got user email");
// }else{
    // console.log("Don't have user email");
// }

//TruthyValues
//When u assume that inside string is a true value its called truthy value

const username = "[]"

if(username){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values

//"0", 'false', " ", [],{}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


//***Nullish Coalescing Operator (??): null undefined****/
//Kind of used to handle any kind of errors

let val1;
val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")


//***switch case statements*****/

// switch (keys){
//     case value:

//     break;

//     default:
//         break;
// }

const month = 3

switch (month){
    case 1:
        console.log("January");
        break;

        default:
            break;
}
















































