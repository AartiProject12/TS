"use strict";
// let str = "12 people in the classroom";
// let num=parseInt(str);
// console.log(num);
// num++;
// let newstring=num+"people in the classroom";
// console.log(newstring);
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    eat() {
        console.log("animal is eating");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Cat meows");
    }
}
//upcasting
let catt = new Cat();
let ani = catt;
ani.eat();
//downcasting
let anii = new Cat();
let cat = anii;
cat.eat();
cat.meow();
//# sourceMappingURL=casting.js.map