"use strict";
// Basic Types
let id = 5;
let company = "Planet01";
let isPublished = true;
let x = "Hello";
let age;
age = 123;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "hello", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid;
pid = "2";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 5] = "Up";
    Direction1[Direction1["Down"] = 6] = "Down";
    Direction1[Direction1["Left"] = 7] = "Left";
    Direction1[Direction1["Right"] = 8] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "String";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Rigt";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
// let customerId = cid as number;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
// console.log(brad.register());
// console.log(brad, mike);
// Sub Classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
// console.log(emp.register());
// Generics
