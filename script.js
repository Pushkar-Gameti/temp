name = "pushkar";
console.log("name:", name);
console.log("typeof name:", typeof name);
age = 21;
console.log("age:", age);
console.log("typeof age:", typeof age);
let msg = "hello";
console.log("msg:", msg);
console.log("typeof msg:", typeof msg);
const pi = 3.14;
console.log("pi:", pi);
console.log("typeof pi:", typeof pi);
msg = "bhai";
console.log("msg:", msg);
console.log("typeof msg:", typeof msg);
let a;
console.log("a:", a);
console.log("typeof a:", typeof a);
a = null;
console.log("a:", a);
console.log("typeof a:", typeof a);
{
    let a = 10;
    console.log("a2:", a);
}
{
    let a = 20;
    console.log("a3:", a);
}
console.log("a:", a);
let x = BigInt("12345678901234567890");
console.log("x:", x);
console.log("typeof x:", typeof x);
let y = Symbol("hello");
console.log("y:", y);
console.log("typeof y:", typeof y);

const student = {
    fullname: "Pushkar Gameti",
    age: 21,
    cgpa: 9.1,
    isPassed: true,
};
console.log("student:", student);
console.log("typeof student:", typeof student);
console.log("fullname by student.fullname:", student.fullname);
console.log("fullname by student['fullname']:", student['fullname']);
student.age++;
console.log("age after increment:", student.age);

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 10,
    mrp: 300,
};
product.price = product.mrp - ((product.offer / 100) * product.mrp);
console.log("product:",product);
console.log("abc"+123);

const profile = {
    username: "pushkar ✔️",
    isfollow: true,
    post: 5,
    followers: "10k",
    following: "10",

};
console.log("profile:",profile);