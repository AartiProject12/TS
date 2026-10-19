"use strict";
// let name:string = "India is my country";
Object.defineProperty(exports, "__esModule", { value: true });
// let name2:string="I am indian"
// // length of string
// console.log(name.length); 
// //char at index
// console.log(name.charAt(10));
// // convert into uppercase
// let uppercase = name.toUpperCase();
// console.log(uppercase);
// // convert into lowecase
// let lowercase = name.toLowerCase();
// console.log(lowercase);
// // find first index 
// let indexOfI = name.indexOf('i');   
// console.log(indexOfI);
// // find last index
// let lIndex = name.lastIndexOf('i') 
// console.log(lIndex);
// // starts with
// let StartWithSK = name.startsWith("In");
// console.log(StartWithSK);
// // ends with
// let EndsWtihGE = name.endsWith("try");
// console.log(EndsWtihGE);
// // check if string contain something
// let isContain=name.includes("is");
// console.log(isContain);
// // create substring
// let lan =name.substring(11);
// console.log(lan);
// // get first word
// let fword=name.substring(0,5);
// console.log(fword);
// // split string into words
// let words:string[]=name.split(" ");
// console.log(words);
// // replace word
// let newname=name.replace("country","nation");
// console.log(newname);
// let result = name.concat(name2);
// console.log(result);
// let str: string = "typescript";
// let rev: string = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str[i];
// }
// console.log("Original:"+str);
// console.log("Reverse:"+ rev);
let str = "typescript";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
if (str === rev) {
    console.log(" Is Palindrome");
}
else {
    console.log("Not Palindrome");
}
//# sourceMappingURL=string.js.map