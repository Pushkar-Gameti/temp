let str = "pushkar";

//template literals
let sentance = `my name is \n${str}`;
console.log(sentance);
let newstr = str.toUpperCase();
console.log(str);
console.log(newstr);
console.log(sentance.length);
let str1 = "      hello      bhai       .";
console.log(str1);
console.log(str1.trim());
let str2 = "0123456789";
console.log(str2.slice(0,5));
let res = str.concat(newstr);
console.log(res);
res = "hello" + res + res;
console.log(res);
let fullname = prompt("enter your fullname");
let username = "@"+fullname+fullname.length;
console.log("username:",username);

