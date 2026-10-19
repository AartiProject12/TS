// let no=[1,2,4,4,2,4]
// let noset=new Set<number>();
// for(let numbers of no){
//     if(noset.has(numbers)){
//         console.log("Duplicate number is"+ numbers)
//     }
//     else{
//         noset.add(numbers);
//     }
// }



let colors= new Set<string> (["black","pink","yellow","white","purple","red"]);
 
colors.add("green");   // add
console.log(colors);

console.log(colors.has("red"));   // has ->true
console.log(colors.has("blue")); //false
colors.add("pink");

colors.delete("white"); //delete
console.log(colors.size);  // check size
console.log(colors);


// let mobrand=new Map<string,string>();

// mobrand.set("Apple", "Cupertino, USA");
// mobrand.set("Samsung", "Seoul, South Korea");
// mobrand.set("OnePlus", "Shenzhen, China");


// console.log(mobrand.get("Samsung"))  // check value

//  mobrand.delete("Apple");
//  console.log(mobrand);

//  mobrand.clear();
//  console.log(mobrand);









