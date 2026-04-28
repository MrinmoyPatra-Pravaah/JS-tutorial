"use strict"; // trats the code as modern JavaScript and helps to catch common coding mistakes

//alert("hello"); //we are using node.js not browser so alert will not work here. it is used in browser to show pop up message

console.log(3+3); 
console.log("hello world");

//data types in JavaScript
//1. primitive data types
// number, string, boolean, null, undefined, symbol
//2. non-primitive data types
// object, array, function

//primitive data types
//1. number
let num = 5;
console.log(num);
console.log(typeof num); //typeof is used to check the data type of a variable


//2. string
let str = "hello world";
console.log(str);
console.log(typeof str);

//3. boolean
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);


//4. null
let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);

//5. undefined
let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

//6. symbol
let sym = Symbol("description");
console.log(sym);
console.log(typeof sym);

//non-primitive data types
//1. object
let obj = {
    name: "Mrinmoy",
    age: 23,
    city: "Kolkata"
};
console.log(obj);
console.log(typeof obj);

//2. array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);

//3. function

function greet(name) {
    return "Hello " + name;
}
console.log(greet("Mrinmoy"));
console.log(typeof greet);

