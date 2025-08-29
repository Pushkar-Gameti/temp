// let marks = [20,40,83,84,93,84,67];
// console.log(marks);
// console.log(marks.length);
// // for (let i=0;i<marks.length;i++){
// //     console.log(marks[i]);
// // }
// let sum = 0;
// for (let val of marks){
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(`avg of class is ${avg}`);

let foodItems = ["potato", "burger", "litchi","tomato"];
console.log(foodItems);
foodItems.push("chips", "burger","panner");
console.log(foodItems);
console.log(foodItems.pop()+" is deleted");
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);
let marvelHero = ["ironman","thor"];
let dcHero = ["superman","batman"];
let heroes = marvelHero.concat(dcHero);