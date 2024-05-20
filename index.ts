let st="anu";
let s:string="hello";
s="123";

type Student={
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


let student1:Student={
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