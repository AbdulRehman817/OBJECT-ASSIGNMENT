

// var object={
//     FirstName:"Abdul",
//     lastName:"Rehman",
//     Age:16,
//     Hobbies:["cricket","football","hockey"]
// }
// console.log(object.FirstName)
// console.log(object.lastName)
// console.log(object.Age)
// console.log(object.Hobbies[1])
// object.isActive=true
// console.log(object)
// console.log("FirstName" in object )

// for(var key in object){
// console.log(key,object[key])
// }


// function Student(firstname,lastname,rollnumber,age){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.rollnumber=rollnumber;
//     this.age=age;
//     this.getfullname=function( ){
//         return `${this.firstname} ${this.lastname}`;
//     }
   
// }

// var student1= new Student("Ahmed","Ali",999,16)
// var student2= new Student("Owais","Ahmed",969,18)
// var student3= new Student("Umer","Arif",949,19)

// console.log(student1.getfullname())
// console.log(student2.getfullname())
// console.log(student3.getfullname())



// Assignment 1:
// var object={
//     Name:"AbdulRehman",
//     Email:"abc@gmail.com",
//     Password:"xxxxxxxxxx",
//     Age:17,
//     Gender:"Male",  
//     City:"Karachi"
// }

// console.log("City"in object)
// console.log("firstname"in object)
// console.log("lastname"in object)



// Assignemnt 2:

function Student(Firstname,Lastname,Age,Rollnumber){
this.Firstname=Firstname;
this.Lastname=Lastname;
this.Age=Age;
this.Rollnumber=Rollnumber;
this.getfullname=function(){
    return`${Firstname}${Lastname}`
}

}

var student1=new Student("Ahmed","Ali",17,999)
var student2=new Student("Ahmed","Anas",18,989)
var student3=new Student("Ahmed","Adil",19,979)
console.log(student1.getfullname())
console.log(student2.getfullname())
console.log(student3.getfullname())