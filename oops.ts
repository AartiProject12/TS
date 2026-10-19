class Student 
{
    studentName = "Aarti";
    age = 22;
    courseName = "BCA";

    Details() 
    {
        console.log(this.studentName);
        console.log( this.age);
        console.log( this.courseName);
    }
}

let s1 = new Student();
s1.Details();