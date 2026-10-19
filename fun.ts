// function login(username: string, pass: string) {
//     console.log("Username:",username);
//     console.log("Password:",pass);
//     console.log("Login Success");
// }

// login("Admin", "Admin@1");


// function Addition()
// {
//     let no1=2;
//     let no2=3;
//     let result=no1+no2;
//     console.log(result);

// }
// Addition()

// function Addition(no1:number,no2:number){
//     let result=no1+no2;
//     console.log(result);
// }
// Addition(23,34)

function addition(...numbers:number[]){
    let sum=0;
    for(let num of numbers){
        sum=sum+num;
    }
    console.log("Sum=",sum);
}
addition(12,3,5,60)
addition(46,56,89,0,9)