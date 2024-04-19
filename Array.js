//Switch
//============Mini App====================
//let user = "Admin";
// switch (user) {
//   case "Admin":
//     console.log("you have got full access to the website");
//     break;
//   case "Mentor":
//     console.log("you have got course access");
//     break;
//   case "student":
//     console.log("you have got access to purchase course student");
//     break;
//   default:
//     console.log("you have normal user");
// }

// =====================Date==============

// const now = new Date();
// console.log(now.toString()); // toString is a inbuild Method
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getTime());
// console.log(now.getMinutes());
// console.log(now.getHours());
// console.log(now.getMonth());

//=================Array==========

//let Name = ["Ram", "Satyam", "Puneet", "sudhir", "Shyam", "Rahul"];
//console.log(name);
// Name.push("Aman");
// console.log(Name);

//console.log(Name.slice(1, 3));
// Name.splice(1, 3);
// console.log(Name);

// let lastname = ["Mishra", "shukla", "Mishra", "Tiwari", "Yadav", "Mishra"];
// let middelname = ["Kumar", "kuamr", "Kumar", "kumar", "kumar", "kumar"];
// let fullName = Name.concat(middelname, lastname);
// console.log(fullName);

//let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(number.copyWithin(1, 2, 4));

//=================Loop==============
// ==============for Loop============

//let mobile = ["mobile 1", "mobile 2", "mobile 3", "mobile 4"];
// let phone = [];
// for (let i = 0; i < mobile.length; i = i + 1) {
//   //console.log(mobile[i].toUpperCase());
//   phone.push(mobile[i].toUpperCase());
// }
// console.log(phone);

//================while Loop===========
//=====================================

// let fruits = ["mango", "Gavava", "backberry", "orange"];//Assigntment
// let fruit = [];
// let i = 0;
// while (i <= fruits.length) {
//   i = i + 1;
//   fruit.splice(fruits[i].toUpperCase());
//   fruit.splice(fruits[i].toLowerCase());
// }
// console.log(fruit);

// ========================do while Loop=========
//===============================================

// let tech = ["javascript", "java", "springboot", "django", "react"];//Assignment
// let teaches = [];
// for (let teaches of tech) {
//   // technology is a variable
//   teaches.push(tech);
// }
// console.log(teaches);

// ===================Functions============
// ========================================

// function Satyam() {
//   let num = 2;
//   console.log(num * num);
// }
// Satyam();

// function AreaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }

// let result = AreaOfCircle(8);
// console.log(result);

// function sumOfAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i = i + 1) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// }
// console.log(sumOfAll(10, 20, 30, 40, 50, 60, 70, 80, 90));

// let userDetails = {
//   firstName: "satyam",
//   LastName: "Mishra",
//   role: "trainee",
//   logincount: "25",
//   courselist: [],
//   buyCourse: function (coursename) {
//     this.courselist.push(coursename);
//   },
//   getcoursecount: function () {
//     return `${this.firstName} is already opt the course ${this.courselist.length}`;
//   },
// };
// userDetails.buyCourse("I have already purchase the course");
// console.log(userDetails.getcoursecount());

// =======================HOF=================
// ===========================================

// const back = (n) => {
//   return n ** 2;
// };
// function cube(back, n) {
//   return back(n) * n;
// }
// console.log(cube(back, 3));

// function courseName() {
//   console.log("Welcome to Student");
// }
// setTimeout(courseName, 2200);

// setInterval(() => {
//   console.log("hi Friends");
// }, 2000);
1;
// ================forEach==========
// =================================

// let arr1 = ["hello", "hi", "hola", "how are u"];

// arr1.forEach((val) => {
//   return console.log(val);
// });

// const arr1 = [1, 2, 3, 4, 5, 6];
// const var1 = arr1.map((val1) => console.log(val1 * val1));

// const arr1 = ["india", "America", "England", "NewZealand"];
// const result = arr1.filter((message) => message.includes("land"));
// console.log(result);

// const num = [1, 2, 3, 4, 5, 6];
// const sum = num.reduce((acc, current) => acc + current, 2);
// console.log(sum);

// =============Destructuring ,spread and rest operator=======
// ===========================================================

// const sci = [2.72, 3.14, 9.81, 37, 100, 1000, 345, 445, 466, 56];
// let [e, pi, g, bt, boilingt] = sci;
// let [num1, num2, ...rest] = sci;
// console.log(sci);

// ===============Rest Operator===========
// ================================

// function sumTwo(...rest) {
//   let sum = 0;
//   for (const x of rest) {
//     sum = sum + x;
//   }
//   return sum;
// }
// console.log(sumTwo(1, 2, 3, 4, 5, 4, 6, 5, 7, 8, 9));

// ==============Spread Operator========
// =====================================

// function sumTwo(x, y) {
//   return x + y;
// }
// let vari = [5, 6];
// console.log(sumTwo(...vari));
