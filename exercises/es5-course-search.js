"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "49.00",
  },
];


//1. When does the PROG200 course start?
for (const course of courses) {
  if (course.CourseId === "PROG200") {
    console.log(`The PROG200 course starts:  ${course.StartDate}`);
  }
}


//1.1 using find
function isPROG200(course) {
  return course.CourseId == "PROG200"
}

//array methods
let course = courses.find(isPROG200)
console.log(course.StartDate);




// // What is the title of the PROJ500 course?
// for (const course of courses) {
//   if (course.CourseId === "PROJ500") {
//     console.log(`The title of the PROJ500 course is ${course.Title}`);
//   }
// }

// // What are the titles of the courses that cost $50 or less? // What classes meet in "Classroom 1"?
// for (const course of courses) {
//   if (Number(course.Fee) <= 50) {
//     console.log(`Inexpensive course: ${course.Title}`);
//   }
// }

// let inexpensiveCourseTitles = [];

// for (const course of courses) {
//   if (Number(course.Fee) <= 50) {
//     inexpensiveCourseTitles.push(course);
//   }
// }

// console.log("Inexpensive course list: ",inexpensiveCourseTitles);

// let filmName = "Bobbie Boots";
// let result = filmName.indexOf("Bob");
// console.log(result);

