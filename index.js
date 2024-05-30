"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Day-1 assignment
var st = "anu";
var s = "hello";
s = "123";
var student1 = {
    name: "anoosha",
    age: 21,
    email: "anooshasanugula@gmail.com",
    course: ["HTML", "CSS", "javascript", "typescript"],
    address: {
        city: "Banglore",
        state: "Karnataka",
        pincode: 257238
    }
};
console.log(student1.age);
console.log(student1.address);
console.log(student1);
function sum(num1, num2) {
    if (num2 != undefined) {
        return num1 + num2;
    }
    return num1;
}
var a = sum(2, 5);
console.log(a);
var Addres = /** @class */ (function () {
    function Addres(city, state, pincode) {
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
    return Addres;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, email, course, city, state, pincode) {
        var _this = _super.call(this, city, state, pincode) || this;
        _this.name = name;
        _this.age = age;
        _this.email = email;
        _this.course = course;
        return _this;
    }
    Student.prototype.getDetails = function () {
        return "Student name is " + this.name + ",age is " + this.age + ",email is " + this.email + ". Interested courses are " + this.course + ". Address is " + this.city + " city," + this.state + " state," + this.pincode;
    };
    return Student;
}(Addres));
var s1 = new Student("Anoosha", 21, "anooshasanugula@gmail.com", ["HTML", "CSS", "Typescript"], "Vemulawada", "Telangana", 505307);
console.log(s1.getDetails());
//importing getValue function from the utils
var stringtype = { value: "Goldie" };
var numtype = { value: 123 };
var arraytype = { value: [21, 22, 23, 24] };
console.log(stringtype);
console.log(numtype);
console.log(arraytype);
var C = /** @class */ (function () {
    function C(a, b) {
    }
    return C;
}());
var B = /** @class */ (function () {
    function B() {
        this.name = "Goldie";
        this.id = 1221;
    }
    return B;
}());
var fruits = {
    Apple: { vitamin: "A", colour: "red" },
    Banana: { vitamin: "E", colour: "yellow" },
    Kiwi: { vitamin: "D", colour: "green" }
};
var st1 = {
    name: "Anoosha",
    age: 21,
    email: "anoosha@gmail.com",
    course: ["maths", "english"],
    address: {
        city: "sircilla",
        state: "telangana",
        pincode: 505307
    }
};
var st_few1 = {
    email: "goldie@gmail.com",
    name: "goldie"
};
function update_few(st_few1, st1) {
    for (var update in st1) {
        var key = update;
        if (st_few1[key] != undefined)
            st1[key] = st_few1[key];
    }
    return st1;
}
// console.log(update_few(st_few1,st1));
var updated_st = __assign(__assign({}, st1), st_few1);
console.log(updated_st);
var checking;
var check;
var Employees1 = [];
var emp1 = {
    name: "Goldie",
    age: 21
};
var lead1 = {
    name: "Ranga",
    age: 30
};
emp1.lead = lead1;
var lead2 = {
    name: "Chandu",
    age: 30
};
var emp2 = {
    name: "Jamuna",
    age: 20,
    lead: lead2
};
var emp3 = {
    name: "Hari",
    age: 23
};
var emp4 = {
    name: "Soujanya",
    age: 20
};
var lead4 = {
    name: "Soujanya",
    age: 20
};
emp4.lead = lead4;
//   Employees.push(emp1);
//   Employees.push(emp2);
//   Employees.push(emp3);
//   Employees.push(emp4);
// console.log(Employees);
var Employees = [
    {
        name: "Goldie",
        age: 21,
        lead: {
            name: "Ranga",
            age: 30,
            lead: {
                name: "hari",
                age: 30,
            },
        },
    },
    {
        name: "Jamuna",
        age: 20,
        lead: {
            name: "Chandu",
            age: 30,
            lead: {
                name: "Jam1",
                age: 20,
                lead: {
                    name: "Chandrasheker",
                    age: 30,
                    lead: {
                        name: "Jamuna",
                        age: 20,
                    },
                },
            },
        },
    },
];
// Employees.forEach(emp=>{
//     if((emp.lead!=undefined)){
//         if(emp.lead.name==emp.name){
//             console.log(emp.name+" is lead");
//         }
//         else{
//             console.log(emp.name+" is not lead");
//         }
//     }
//     else{
//         console.log(emp.name+" is not lead");
//     }
// });
Employees.forEach(function (emp) {
    if ((emp.lead !== undefined)) {
        if (recursivelyCheck(emp.lead, emp.name)) {
            console.log(emp.name + " is lead");
        }
        else {
            console.log(emp.name + " is not lead");
        }
    }
    else {
        console.log(emp.name + " is not lead");
    }
});
function recursivelyCheck(obj, emp) {
    if (obj.name === emp)
        return true;
    else {
        if (obj.lead !== undefined)
            return recursivelyCheck(obj.lead, emp);
        else {
            return false;
        }
    }
}
// type RequiredType<Type> = {
//     [P in keyof Type]-?: Type[P] extends object ? RequiredType<Type[P]> : Type[P];
// };
// type tree1 = RequiredType<Tree>;
var an = {
    name: "ansjsj",
    height: 30,
    flower: "rose",
    medicine: "olo",
    gives_fruits: true,
    fruit: {
        colour: "red",
        vitamin: "D",
        seeds: true,
    },
    b: 12,
};
var Util;
(function (Util) {
    function Concatenating(p) {
        var result = '';
        Object.keys(p).forEach(function (key) {
            var value = p[key];
            if (typeof value === 'object' && value !== null) {
                result += Concatenating(value);
            }
            else {
                result = result + "".concat(key, ": ").concat(value) + " ";
            }
        });
        return result;
    }
    Util.Concatenating = Concatenating;
})(Util || (Util = {}));
var per1 = {
    name: 'Anoosha',
    email: "anoosha@gmail.com",
    address: {
        street: 'thippasandra',
        city: 'banglore',
        country: 'India'
    }
};
console.log(Util.Concatenating(per1));
