// for(let i=0;i<10000;i++){
//     console.log("hello bhai");
// }
// console.log("loop ended");

// //for-of loop
// let strvar = "puskarbhai";
// for(let i of strvar){
//     console.log("i=", i);
// }

// //for-in loop
// const profile = {
//     username: "pushkar ✔️",
//     isfollow: true,
//     post: 5,
//     followers: "10k",
//     following: "10",

// };
// for(let key in profile){
//     console.log("key =", key,"value =", profile[key]);
// }

// guessing game
let gameNum = 25;
let userNum = prompt("enter a number between 1 to 100");
while(userNum!=gameNum){
    if(userNum<gameNum){
        console.log("your number is low");
    }else{
        console.log("your number is high");
    }
    userNum = prompt("entered is wrong, try again");
}
console.log("you win the game");