"use strict";

//defining a function
// function add(number1, number2) {
//   //number1, number2 are parameters
//   let result = number1 + number2;
//   return result;
// }
// 1. function keyword
// 2. function name
// 3. parenthesis() hold the parameters (input variables) separated by commas
// 4. curly braces are a code block and enclose the function body (the steps)

// let add = (number1, number2) => {
//   let result = number1 + number2;
//   return result;
// }; //if function is more than one line curly braces ({}) are needed and the return keyword is neeeded
//1. delete function keyword, add arrow after the argument list
//2. remove the name, make the function anonymous
//3. assign the arrow function into a variable

let add = (number1, number2) => number1 + number2;
//if function is one line then curly braces ({}) are not needed and the return keyword is implicit (automatic/assumed)

//calling a function
let output = add(2, 2); //function name followed by parenthesis
//          <-------
//when called the function returns its output into the variable on the left
console.log(output); //4
