"use strict";

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
  //OR shorter version
  //   return arrayValue > 60;
}

//.find method (function) Returns the value of the first element in the array where condition in the function is true,
// and undefined otherwise.
let firstValueOver60 = numbers.find(isOver60);
console.log(firstValueOver60);
