
//Day-1 assignment
let st="anu";
let s:string="hello";
s="123";

type Students={
    name:string;
    age:number;
    email:string;
    course:string[];
    address:Address;

}
type Address={
    city:string;
    state:string;
    pincode:number;
}


let student1:Students={
    name:"anoosha",
    age:21,
    email:"anooshasanugula@gmail.com",
    course:["HTML","CSS","javascript","typescript"],
    address:{
        city:"Banglore",
        state:"Karnataka",
        pincode:257238
    }

}

console.log(student1.age);
console.log(student1.address.state);



function sum(num1:number,num2?:number):number{
    if(num2!=undefined){
        return num1+num2;
    }
    return num1;
   
}
 let a:number=sum(2,5);
 console.log(a);


 //Day-2 assignment
 import { getValue } from './utils';

class Addres{
    public city:string;
    public state:string;
    public pincode:number;
    constructor(city:string,state:string,pincode:number){
        this.city=city;
        this.state=state;
        this.pincode=pincode;
    }
}
class Student extends Addres{
    name:string;
    age:number;
    email:string;
    course:string[];
    constructor(name:string,age:number,email:string,course:string[],city:string,state:string,pincode:number){
        super(city,state,pincode);
        this.name=name;
        this.age=age;
        this.email=email;
        this.course=course;
        
    }
    getDetails():string{
        return "student name is "+this.name+",age is "+this.age+",email is "+this.email+". Interested courses are "+this.course+". Address is "+this.city+" city,"+this.state+" state,"+this.pincode;
    }
}

const s1=new Student("Anoosha",21,"anooshasanugula@gmail.com",["HTML","CSS","Typescript"],"Vemulawada","Telangana",505307);
console.log(s1.getDetails());



console.log(getValue("Goldie"));
console.log(getValue(123));
console.log(getValue([12,23,34]));
console.log(getValue(["anu","surya","tunnu"]));


interface Studentt{
    name:string;
    age:number;
    subjects:string[];
}

type createMap<Type> = {
    readonly [P in keyof Type]: Type[P];
}
type student = createMap<Studentt>;


interface Addr{
    city:string;
    state:string;
    pincode:number;
    name:string;
}
type createMap1<Type>={
    [p in keyof Type]:string;
}
type details=createMap1<Addr>; //mapping
type partial=Partial<Addr>;
type reonly=Readonly<Studentt>;
type req=Required<partial>
type pik=Pick<Addr,"pincode" | "name">
type omit=Omit<Addr,"city" | "state">
type exclu=Exclude<Studentt | Addr,Addr>
type extr=Extract<Studentt,{name:"string"}>

interface Fruit{
    vitamin:string;
    colour:string;
}
type FruitName="Apple" | "Banana" | "Kiwi";
const fruits:Record<FruitName, Fruit>={
    Apple:{vitamin:"A",colour:"red"},
    Banana:{vitamin:"E",colour:"yellow"},
    Kiwi:{vitamin:"D",colour:"green"}
};