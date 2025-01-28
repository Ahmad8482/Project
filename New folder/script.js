"Strict mode";
// Spread Operator

// const fruits = ["apple", "banana", "cherry"];
// const vegetables = ["carrot", "potato", "cucumber"];

// /// Task 1 merging array
// const groceryList = ["bread", ...fruits, ...vegetables];
// console.log(groceryList);

// // Task 2 copy and modifying object

// const person = {
//   name: "ALi",
//   age: 30,
// };
// const updatedPerson = { ...person, city: "Lahore" };
// console.log(updatedPerson);

// // Task3 Passing Array Elements as Argument
// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [10, 20, 30];
// console.log(sum(...numbers));

// Rest Parameters
// function findMax(...nums) {
//   const max = Math.max(...nums);
//   return max;
// }
// const numbers = [10, 20, 30];
// console.log(findMax(...numbers));
// console.log(findMax(5, 10, 15, 20), findMax(-1, -5, -10, 0));
// const colors = ["red", "blue", "green", "yellow", "purple"];
// const [primary1, primary2, ...secondaryColors] = colors;
// console.log(primary1, primary2, secondaryColors);

// function addAll(...nums) {
//   const sum = nums.reduce(function (a, b) {
//     return a + b;
//   });
//   return sum;
// }
// console.log(addAll(10, 30, 30, 40, 40));

// function mergeAndFilterOdd(...arrays) {
//   const array = arrays.flat();
//   const odds = array.filter(function (e) {
//     // return e % 2 ? e : false;
//     return e % 2 !== 0;
//   });
//   return odds;
// }

// console.log(mergeAndFilterOdd([1, 2, 3], [4, 5, 6], [7, 8, 9]));

// Array Destructuring
// Task 1
// const numbers = [10, 20, 30, 40, 50];
// const [num1, num2, ...restNumbers] = numbers;
// console.log(num1, num2, restNumbers);
// const [first, , third] = numbers;
// console.log(first, third);

// Task 3 : Default Values
// const colors = ["red", "blue"];
// const [primary1, primary2, primary3 = "green"] = colors;
// console.log(primary1, primary2, primary3);

// Object Destructuring
// const user = {
//   name: "Ali",
//   age: 25,
//   city: "Karachi",
// };
// const { name, age, city } = user;
// console.log(name, age, city);

// const user = {
//   name: "Ali",
//   age: 25,
//   city: "Karachi",
// };
// const { name: userName, age, city: userCity } = user;
// console.log(userName, age, userCity);
// const product = {
//   title: "Laptop",
//   price: 1000,
// };
// const { title, price, stock = 50 } = product;
// console.log(title, price, stock);

// const employee = {
//   id: 1,
//   personalInfo: {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   jobDetails: {
//     title: "Developer",
//     department: "IT",
//   },
// };
// const { firstName, lastName } = employee.personalInfo;
// console.log(firstName, lastName);
// const { title } = employee.jobDetails;
// console.log(title);
// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Sara", grade: 92 },
//   { name: "John", grade: 78 },
// ];

// const { name: studentsName, grade: studentsGrade } = students[0];
// console.log(studentsGrade, studentsName);
// const person = { name: "Ali", age: 30 };
// // greet(person);
// function greet({ name, age }) {
//   console.log(`Hello , My name is ${name} and I am ${age} years old`);
// }
// greet(person);

// IIFE Function

// (function add() {
//   console.log(`Hello, IIFE is working`);
// })();
// (function sum(a, b) {
//   console.log(a + b);
// })(5, 10);
// const currentDate = (function current() {
//   const current = new Date();
//   console.log(current);
// })();

// currentDate;
// const date = new Date();
// console.log(date.getFullYear(), date.getDate(), date.getMonth() + 1);
// (function sum(x, y, z = 1) {
//   console.log(x + y + z);
// })(10, 20);

// (function increment() {
//   let counter = 0;
//   for (let i = 0; i < 10; i++) {
//     counter += i;
//   }
//   console.log(counter);
// })();
// const Cart = (function () {
//   let cart = [];
//   return {
//     addItem: function (item) {
//       cart.push(item);
//     },
//     getItems: function () {
//       return cart;
//     },
//   };
// })();
// Cart.addItem("Apple");
// Cart.addItem("Banana");
// console.log(Cart.getItems());
// function multiple(a) {
//   return function multipleb(b) {
//     return a * b;
//   };
// }
// // console.log(multiple(10)(20));
// const call = multiple(20);
// console.log(call(30));
// function greet(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }
// const ali = greet("Hi");
// console.log(ali("Ahmad"));
// function div(a) {
//   return function div2(b) {
//     return b / a;
//   };
// }
// const dividedby2 = div(2);
// const dividedby = dividedby2(10);
// console.log(dividedby2(20));
// function power(base, exponent) {
//   return Math.pow(base, exponent);
// }
// Function.prototype.square = function square(base) {
//   return (exponent) => this(exponent, base);
// };
// const sq = power.square(2);
// console.log(sq(10));
// console.log(sq(30));
