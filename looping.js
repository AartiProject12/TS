"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let colors = ["black", "white", "grey", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
let no = 12;
for (let i = 0; i <= 3; i++) {
    no++; //13, 14,15, 16
}
while (no < 17) {
    no++; //17
}
no--; // 16
console.log(no); //16
//let no1=5;
//let no2=10;
//let temp=no1;
//no1=no2;
//no2=temp;
//console.log(no1);
//console.log(no1);
let emails = ["abc@gmail.com", "xyz@gmail.com", "lmn@gmail.com"];
for (let i = 0; i <= emails.length; i++) {
    let email = emails[i];
    console.log(email);
}
//let favPlaces = ["Raigad", "Shaniwarwada", "Pandharpur"];
//for (let place of favPlaces)
//{
//console.log(place)
//}
let favPlaces = ["Raigad", "Shaniwarwada", "Pandharpur"];
for (let place in favPlaces) {
    console.log(place);
}
let ob = {
    name: "Aarti Sarade",
    duration: "2 mon",
};
for (let key in ob) {
    console.log(key);
}
//swap no without temp variable
let no1 = 10;
let no2 = 5;
no1 = no1 + no2;
no2 = no1 - no2;
no1 = no1 - no2;
console.log(no1);
console.log(no2);
//# sourceMappingURL=looping.js.map