"use strict";
// interface Vehicle{
//     start():void;
//     stop():void;
//     brake():void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class Car implements Vehicle{
//     start(): void {
//         console.log("car start");
//     }
//     stop():void{
//         console.log("car stop");
//     }
//     brake():void{
//         console.log("car brake");
//     }
// }
// let v: Vehicle=new Car();
// v.start();
// v.stop();
// v.brake();
class A {
    method1() {
        console.log("method 1 from   A");
    }
}
class B extends A {
    method2() {
        console.log("method 2 from  B");
    }
}
let ob = new B();
ob.method1();
ob.method2();
//# sourceMappingURL=abstraction.js.map