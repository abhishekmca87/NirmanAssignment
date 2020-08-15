//1.Direct Object
var Emp1={id:1,name:"abhi"};
var salarydes={value:1000,enumerable:true,writable:false};
Object.defineProperty(Emp1,"salary",salarydes);
Emp1.salary=2000;
console.log(Emp1);


//2.Using Class
class Emp{
constructor(id,name){
    Object.defineProperty(this,"id",{value:id,enumerable:true,writable:false,configurable:true});
    Object.defineProperty(this,"name",{value:name,enumerable:true,writable:false,configurable:true});
}

}
let eich=new Emp(1,"Abhishek");
console.log(eich);