// Basic Types
let id: number = 5;
let company: string = "Planet01";
let isPublished: boolean = true;
let x: any = "Hello";

let age: number;

age = 123;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "hello", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number;

pid = "2";

// Enum
enum Direction1 {
  Up = 5,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "String",
  Down = "Down",
  Left = "Left",
  Right = "Rigt",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid

// let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

// console.log(emp.register());

// Generics
