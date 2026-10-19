// let str = "12 people in the classroom";
// let num=parseInt(str);
// console.log(num);
// num++;
// let newstring=num+"people in the classroom";
// console.log(newstring);




class Animal {
    eat():void {
        console.log("animal is eating");
    }
}
class Cat extends Animal{
    meow():void {
        console.log("Cat meows");
    }
}
//upcasting
let catt=new Cat();
let ani:Animal=catt;
ani.eat();

//downcasting
let anii:Animal=new Cat();
let cat=anii as Cat;
cat.eat();
cat.meow();





