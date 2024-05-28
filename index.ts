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
console.log(student1.address);
console.log(student1);


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
        return "Student name is "+this.name+",age is "+this.age+",email is "+this.email+". Interested courses are "+this.course+". Address is "+this.city+" city,"+this.state+" state,"+this.pincode;
    }
}

const s1=new Student("Anoosha",21,"anooshasanugula@gmail.com",["HTML","CSS","Typescript"],"Vemulawada","Telangana",505307);
console.log(s1.getDetails());


//importing getValue function from the utils
const stringtype:getValue<string>={value:"Goldie"};
const numtype:getValue<number>={value:123};
const arraytype:getValue<number[]>={value:[21,22,23,24]};
console.log(stringtype);
console.log(numtype);
console.log(arraytype);


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
type nonNull=NonNullable<number|string|undefined|null>
type param=Parameters<(s:string)=>void>
type param1=Parameters<<T>(arg:T)=>T>
class C {
    constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;
type constrpar=ConstructorParameters<typeof Addres>;
type ret=ReturnType<()=>string>
type ret1=ReturnType<<T>()=>T>
class B{
    name="Goldie"
    id=1221
}
type instanceType=InstanceType<typeof B>

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


//Day-4 assignment 

/*type Students={
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
}*/
type few_prop=Pick<Students,"email" | "name">

let st1:Students={
    name:"Anoosha",
    age:21,
    email:"anoosha@gmail.com",
    course:["maths","english"],
    address:{
        city:"sircilla",
        state:"telangana",
        pincode:505307
    }
}

let st_few1:few_prop={
    email:"goldie@gmail.com",
    name:"goldie"
}

function update_few(st_few1:few_prop,st1:Students):Students{
    for (const update in st1) {
        const key = update as keyof few_prop;
        if(st_few1[key]!=undefined)
            st1[key] = st_few1[key];
    }
    return st1;
}

console.log(update_few(st_few1,st1));

type type_check<T> = T extends string ?"Yes" : "No";
let checking:type_check<string>;
let check:type_check<number>;

  type Employee ={
    name: string;
    age:number;
    lead?: Employee;
  }
let Employees:Employee[]=[];
  const emp1:Employee={
    name:"Goldie",
    age:21
  };
  const lead1:Employee={
    name:"Ranga",
    age:30
  };
  emp1.lead=lead1;
  const lead2:Employee={
    name:"Chandu",
    age:30
  };
  const emp2:Employee={
    name:"Jamuna",
    age:20,
    lead:lead2
  };
  
  const emp3:Employee={
    name:"Hari",
    age:23
  };
  const emp4:Employee={
    name:"Soujanya",
    age:20
  };
  const lead4:Employee={
    name:"Soujanya",
    age:20
  };
  emp4.lead=lead4;
  Employees.push(emp1);
  Employees.push(emp2);
  Employees.push(emp3);
  Employees.push(emp4);
console.log(Employees);

Employees.forEach(emp=>{
    if((emp.lead!=undefined)){
        if(emp.lead.name==emp.name){
            console.log(emp.name+" is lead");
        }
        else{
            console.log(emp.name+" is not lead");
        }
    }
    else{
        console.log(emp.name+" is not lead");
    }
});

//Day-5 assignment
type Fruity = {
    colour:string;
    vitamin?:string;
    seeds:boolean;
}
type Tree={
    name:string;
    height:number;
    gives_fruits?:boolean;
    flower:string|null;
    medicine:string|undefined|null;
    fruit?: Fruity;
    b?: any;
}
type RequiredType<Type>={
    [P in keyof Type] -? : Type[P];
};
type tree1 = RequiredType<Tree> & {
    fruit:RequiredType<Fruity>
}; 
// type RequiredType<Type> = {
//     [P in keyof Type]-?: Type[P] extends object ? RequiredType<Type[P]> : Type[P];
// };
// type tree1 = RequiredType<Tree>;
let an:tree1={
    name:"ansjsj",
    height:30,
    flower:"rose",
    medicine:"olo",
    gives_fruits:true,
    fruit:{
        colour:"red",
        vitamin:"D",
        seeds:true,
    },
    b: 12,
};

namespace Util{
    export function Concatenating<per1 extends Person>(p: per1):string {
        let result = '';
        Object.keys(p).forEach(key => {
            const value = p[key as keyof per1];
            if (typeof value === 'object' && value !== null) {
                result += Concatenating(value as per1);
            } else {
                result =result+ `${key}: ${value}`+` `;
            }
        });
        return result;
    }
}
interface Person{
    name: string;
    email:string;
    address: {
        street: string;
        city: string;
        country: string;
    }
}
const per1:Person = {
    name: 'Anoosha',
    email:"anoosha@gmail.com",
    address: {
        street: 'thippasandra',
        city: 'banglore',
        country: 'India'
    }
};

console.log(Util.Concatenating(per1));
