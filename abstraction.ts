// interface Vehicle{
//     start():void;
//     stop():void;
//     brake():void;
// }

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



abstract class A {  
    method1(): void{
        console.log ("method 1 from   A");
            
        }
        abstract method2():void
    }
    class B extends A{
        method2(): void {
            console.log("method 2 from  B");
        }
    }
     
    let ob:A=new B();
    ob.method1();
    ob.method2();


