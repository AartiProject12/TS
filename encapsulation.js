"use strict";
// class Animal{
//     sound(){
//         console.log("animal make sound");
//     }
// }
// class Cat extends Animal{
//     sound() {
//         console.log("Cat..");
Object.defineProperty(exports, "__esModule", { value: true });
//     }
// }
// let d=new Cat();
// d.sound();
class Bank {
    balance = 1500;
    getBankBalance() {
        console.log("Current balance:", this.balance);
    }
    deposit(no) {
        this.balance = this.balance + no;
        console.log("After deposit:", this.balance);
    }
    withdraw(no) {
        this.balance = this.balance - no;
        console.log("After Withdraw:", this.balance);
    }
}
let bal = new Bank();
bal.getBankBalance();
bal.deposit(100);
bal.withdraw(200);
bal.getBankBalance();
//# sourceMappingURL=encapsulation.js.map