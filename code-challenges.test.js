// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

//Pseudocode:
// input will be an array of numbers
// iterate on the array
// Use .map to iterate
// Multiply the value inside of the map by 3
// return the result
// output an array with all numbers multiplied


// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

//describe("multBy3"), () => {
//it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
// expect(multBy3(numberArray1)).toEqual([18,21,24,27,30])
//      expect(multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//    })
//  })

// multBy3 . takes in an array of numbers and returns an array with all the numbers multiplied by 3
//Reference Error: multby3 is not defined


//const multBy3 = (array) => {
//   return array.map(value => value * 3)
//}

// b) Create the function that makes the test pass.


// Assessement Questions:

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

//Pseudocode:
//function takes in a number as an argument
//argument decides if the number can be divided by 3 or not  return num % 3 !=0


// a) Create a test with expect statements for each of the variables provided.

//const num1 = 15
 //Expected output: "15 is divisible by three"
//const num2 = 0
//Expected output: "0 is divisible by three"
//const num3 = -7
//Expected output: "-7 is not divisible by three"
//

// describe("divisibleBy3"),() => {
// it ("takes a number as an argument and decides if the number is divisible by 3.",() => {
// expect(divisbleby3(num1)).toEqual("15 is divisible by three")
// expect(divisbleby3(num2)).toEqual("0 is divisible by three")
// expect(divisbleby3(num3)).toEqual("-7 is not divisible by three")
// })
// };


// Output:
// //FAIL  ./code-challenges.test.js
//  ● Test suite failed to run
//
//    Missing second argument. It must be a callback function.
//
//      66 | //
//      67 |
//    > 68 | describe("multBy3"), () => {
//         | ^

//The it blocks takes two arguments, a describtion and a callback which will contain
//the assertion.


// // b) Create the function that makes the test pass.
// Psuedocode:
//It needs an argument to return missing second argument must be a call function.
//
//const divisibleBy3= (num1) => {
//return num1.map(value => value % 3!=0)
//}

//Kept testing it muliple times and it not sure why not working.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//COMPLETED:

//Pseudocode:
// input will be an array of words
// iterate on the array
// use .map to iterate
// capitalize words with .toUpperCase()
// return results
// output of the array has all words capitalized


// const wordArray1 = ["Bunny", "Easter", "Egg"]
// //expected output  ["BUNNY", "EASTER, "EGG"]
// const wordArray2 = ["Candy","Grass","Duck"]
// //expected output  ["CANDY", "GRASS, "DUCK"]
//
// describe("wordsCapitalized", () => {
//  it("takes in an array of workds and returns an array with all the words capitalized", () => {
//    expect(wordsCapitalized(wordArray1)).toEqual["Bunny", "Easter", "Egg"]
//    //expect(wordcapitalized(wordArray2)).toEqual ["Candy", "Grass", "Duck"]
//  })
// })
//
// //wordsCapitalized- takes in an array of numbers and returns an array with all the words capitalized
// //ReferenceError: wordsCapitalized is not defined
//
// //declare the function that takes in the new array
// //this is a higher order function

// const wordsCapitalized = (array) => {
//   //create a local variable that maps through the array
//   let eachItem = array.map(value => {
//   //with each value access the first index and capitalize the letter than concatenate the remainder
//     return value[0].toUpperCase() + value.substring(1)
//   })
// //return the local variable joined into a string
// return eachItem.join("wordCapitalized ")
// }
//logging the function and pass in the array

//ReferenceError: wordcapitalized is not defined

// Output
// PASS  ./code-challenges.test.js
//  wordsCapitalized
//    ✓ takes in an array of workds and returns an array with all the words capitalized (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.296 s, estimated 1 s
// Ran all test suites.
// Done in 1.14s.
// learnacademy@LEARNs-Air week-2-assessment-ecostrong %
//

//
//  a) Create a test with expect statements for each of the variables provided.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


//Pseudocode:
// input will be an array of words
// iterate on the array
// use .map to iterate
// capitalize words with .toUpperCase()
// return results
// output of the array has all words capitalized


//   //create a local variable that maps through the array
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//
// describe("randomWords", () => {
// it("takes in an array of words and returns an array with all the words capitalized", () => {
// expect(randomWords(randomNouns1)).toEqual["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// //expect(randomeWords(randomeNouns2)).toEqual ["temperature", "database", "chopsticks", "mango", "deduction"]
//  })
//  })
//
// const randomWords = (array) => {
// let eachItem = array.map(value => {
// return value[0].toUppercase + value.substring(1)
//  })
// // //return the local variable joined into a string
// return eachItem.join("randomWords")
// };
//logging the function and pass in the array

//  b) Create the function that makes the test pass.

//First Attempt:
//FAIL  ./code-challenges.test.js
  //● Test suite failed to run
//Your test suite must contain at least one test.

// Second Attempt:
// FAIL  ./code-challenges.test.js
//  randomWords
//    ✕ takes in an array of words and returns an array with all the words capitalized (1 ms)
//  ● randomWords › takes in an array of words and returns an array with all the words capitalized
//    ReferenceError: wordsCapitalized is not defined

//Third Attempt:
 // FAIL  ./code-challenges.test.js
 //  randomWords
 //    ✕ takes in an array of words and returns an array with all the words capitalized (1 ms)
 //
 //  ● randomWords › takes in an array of words and returns an array with all the words capitalized
 //
 //    TypeError: value[(0 , 1)].toUppercase is not a function

//Note:toUpperCase() methods converts a string to uppercase letters, it does not change the original string.

//Fourth Attempt:

// PASS  ./code-challenges.test.js
//  randomWords
//    ✓ takes in an array of words and returns an array with all the words capitalized (2 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.296 s, estimated 1 s
// Ran all test suites.
//  Done in 1.22s.
// learnacademy@LEARNs-Air week-2-assessment-ecostrong %


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudocode:

//function takes in a string
//logs the index of the first vowel
//list out the vowels that will need to be searced for.
//vowels  a,e,i,o,u,A,E,I,O,U
////let ( int i = 0; i <word.length(); i++ {
// The index is always 0

//function firstV(str){
  //let test = str.search(/a,e,i,o,u,A,E,I,O,U/g)
  // console.log(vowelTester1)
  // console.log(vowelTester2)
  // console.log(vowelTester3)
//}
//
// // a) Create a test with expect statements for each of the variables provided.
//

// describe(vowelTester, () => {
// it("takes in a string of words and logs the index of the first vowel", () => {
// expect(vowelTester(vowelTester1)).toEqual["learn"]
// expect(vowelTester(vowelTester2)).toEqual ["academy"]
// expect(vowelTester(vowelTester3)).toEqual ["challenges"]
//  })
// })
// // const vowelTester = (string) => {
// // let test = str. search(/a,e,i,o,u,A,E,I,O,U/g)
// // return value[0].value.substring(1)
// //  })
// const vowelTester1 = "learn"
// // // Expected output: 1
// const vowelTester2 = "academy"
// // // Expected output: 0
// const vowelTester3 = "challenges"
// // // Expected output: 2

//OUTPUT:

 //FAIL  ./code-challenges.test.js
//  ● Test suite failed to run

  //  ReferenceError: vowelsTester is not defined

// Pseudocode:

// b) Create the function that makes the test pass.

// function firstV(str){
//   let test = str.search(/a,e,i,o,u,A,E,I,O,U/g)
//   console.log(vowelTester1)
//   console.log(vowelTester2)
//   console.log(vowelTester3)


// PASS  ./code-challenges.test.js
//   vowelTester
//     ✓ takes in a string of words and logs the index of the first vowel (16 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.148 s
// Ran all test suites.


//Note:
// It passed however it gave me back the following, not the first vowel, I am not
//sure why it is not executing the argument.



//  console.log
//     academy
//
//       at vowelTester (code-challenges.test.js:253:11)
//
//   console.log
//     challenges
//
//       at vowelTester (code-challenges.test.js:254:11)
//
//   console.log
//     learn
//
//       at vowelTester (code-challenges.test.js:252:11)
//
//   console.log
//     academy
//
//       at vowelTester (code-challenges.test.js:253:11)
//
//   console.log
//     challenges
