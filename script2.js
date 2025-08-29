let a = 5;
let b = '5';

console.log("5 == '5': ",a == b);
console.log("5 === '5': ",a === b);
console.log("!(6<5): ",!(6<5));

let age = 17;
if(age>=18){
    console.log("age is 18 or above");
}else{  
    console.log("age is below 18");
}

console.log(age>18?"adult":"not adult");

// alert("hello bhai");
// let name = prompt("enter your name");
// console.log("name:", name);

let number = prompt("enter a number");
if(number%5==0){
    console.log(number+" is multiple by 5");
}else{
    console.log(number+" is not multiple by 5");
}