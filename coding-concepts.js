// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: Output: Bravo & separately  Output: 2022
//I believe it would split the string.

// b) Verify and explain:
// Output
// [
  // 'B', 'r', 'a', 'v',
  // 'o', ' ', '2', '0',
  // '2', '2'
//

// .split method litterally splits each value of the string, creating separate output.
// It divides a string into ordered list of substrings, puts the substrings into an array, and returns the array.

// // --------------------2) What will this log?
//
// const greeter = (name) => {
// `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: nothing because this is not a function.

//it would have to be
//const greeter =(name) => {
//  return "Hello, LEARN Student"
//}
//console.log(greeter())

// // b) Verify and explain: I was correct as it logged undefined.

// // --------------------3) What will this log?
//
//var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)
//
// // a) Your answer: It will multiple the numbers in the array by 2 as this is a .map * 2.
//So is should be output of: 8, 10, 12, 14, 16
// // b) Verify and explain: I was correct, it logged [ 8, 10, 12, 14, 16 ]
//
// // --------------------4) What will this log?
//
 // var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 // console.log(onlyOdds)
//
// // a) Your answer: This is a filter method so it wants only odd numbers in the output.
//This function will then divide ever number by 2 with % 2, so if it can't be divided by 2 then it must be odd. So output would be [11, 13, 15]
// // b) Verify and explain: I was correct output: [ 11, 13, 15 ]
//
// // --------------------5) What will this log?
//
// var myCodingSkills = {
//  languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
//  console.log(myCodingSkills.languages[0])
// //
// // a) Your answer: I believe this would log "Javascript" since it is asking for the element
//languages in the console log, and the [0], index value of the string.
// // b) Verify and explain: I was correct it logged JavaScripit only.
//
//
// // --------------------STRETCH: What will this log?
//
// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Bravo",
//     this.year = 2022
//   }
// }
// var learnStudent = new Learn("George")
// console.log(learnStudent)
//
// // a) Your answer: This will create a new class, and it would put "George" in the position
// of the static name, so it should log "George", "Bravo", 2022, as it calls the construtor with new.
// // b) Verify and explain: I was sort of correct, as the output was { student: 'George', cohort: 'Bravo', year: 2022 } I left out the classes.
