// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// 
//break and continue

// for(let index=1; index<=20; index++){
//     if(index==5){
//         console.log('detected 5');
//         break
//     }
//     console.log('Value of i is ${index}');
// }



// for(let index=1; index<=20; index++){
//     if(index==5){
//         console.log('detected 5');
//         continue
//     }
//     console.log('Value of i is ${index}');
// }



//DoWhileLoop

// let score = 11

// do {
//     console.log('Score is ${score}');
//      score++
// } while(score <= 10);

//for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings){
    // console.log('Each char is ${greet}')
}

//map

//They are known for unique values

const map = new Map()
map.set('IN', "India")
map.set('AUS', "Australia")
map.set('FR', "France")
map.set('USA', "United States of America")

// console.log(map);


for (const [key, value] of map){
    console.log(key, ':-', value);
}

























