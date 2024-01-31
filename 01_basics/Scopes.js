let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("inner: ", a);
}

//whatever is written inside if is block scope and else other is global scope
//whatever is written inside scope shouldn't go outside


//console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "saksham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   //console.log(website);
   two()
}

//one()

//inside function can access outside variable or we can say that child function can access parent variable

if(true){
    const username = "saksham"
    if(username==="saksham"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ++++++++++ interesting +++++++++

function addone(num){
    return num + 1
}

addone(5)


//expression
const addtwo = function(num){
    return num + 2
}

addtwo(5) //you can't access this before function declaration unlike in case of above syntax






















