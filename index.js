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
console.log(student1.address.state);
function sum(num1, num2) {
    if (num2 != undefined) {
        return num1 + num2;
    }
    return num1;
}
var a = sum(2, 5);
console.log(a);
//Day-2 assignment
var utils_1 = require("./utils");
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
        return "student name is " + this.name + ",age is " + this.age + ",email is " + this.email + ". Interested courses are " + this.course + ". Address is " + this.city + " city," + this.state + " state," + this.pincode;
    };
    return Student;
}(Addres));
var s1 = new Student("Anoosha", 21, "anooshasanugula@gmail.com", ["HTML", "CSS", "Typescript"], "Vemulawada", "Telangana", 505307);
console.log(s1.getDetails());
console.log((0, utils_1.getValue)("Goldie"));
console.log((0, utils_1.getValue)(123));
console.log((0, utils_1.getValue)([12, 23, 34]));
console.log((0, utils_1.getValue)(["anu", "surya", "tunnu"]));
