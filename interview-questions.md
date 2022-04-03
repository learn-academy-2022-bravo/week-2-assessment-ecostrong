# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: Well they are similar because they are both passed through a function.  So if you want to know about the parameter this is the variable name. If you want to know about what value you passed in the parameters this is an argument

  Researched answer: A parameter is inside the parentheses of a variable.
  Arguments are variables given to the function to execute. But parameters are  definitions and arguments are in invocations.

                        Parameters
  function test (parameter1, parameter2){
       return ( parameter1 + parameter 2) ;
  }

  test (5,6 ) ;
Arguments

2. The JavaScript built in method .map() takes predefined parameters.
*What are they? Which are required and which are optional?

  Your answer: Well I know .map method is used for arrays, to iterate a sequence.

  Researched answer: The JavaScript built in method .map() creates a new array. The array has the results of calling on the function and on every element in the calling array. .Map takes in the function definition at its first parameter.


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



3. What is the difference between map and filter?

  Your answer: Map iterates the elements in the array, filter only takes the elements wanted in the array. Such as only cats, if a list of animals is in the array or even numbers, leaving the odd. Filter lets you select the elements that you want to show case in the output.

  Researched answer:
Map returns the array of information from the original array.
Filter returns a subset of the original array based on a customized criteria.
Filter can remove elements that don't belong.

4. What is the difference between a function and a method?

  Your answer: A function provides instructions, a method is how the function will be executed.

  Researched answer: Functions are like recipes. Functions can execute a set of instructions and are recyclable.
Methods are also a set of instructions that perform a task, but is associated with an object and periods are used to call a method on the object.

For example: the .toLowerCase is called on a string variable, which returns "happyeaster"

var str = 'HappyEaster';
var str1 = str.toLowerCase();



5. What is object destructuring?

  Your answer: Object destructuring is taking apart and breaking down. Makes code cleaner and easier to work with.

  Researched answer: Object destructuring is to take an object or an array and convert it into smaller objects, or smaller elements or smaller variables.

  let person = {
      firstName: 'John',
      lastName: 'Doe'
  };
  let firstName = person.firstName;
let lastName = person.lastName;

Object destructuring is another way to assign properties of an object to variables.

let { firstName: fname, lastName: lname } = person;

//In this example, the firstName and lastName properties are assigned to the fName and lName variables

let { property1: variable1, property2: variable2 } = object;

let { firstName, lastName } = person;
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I don't know, but I do know what resource I would use to find that answer. I do know that in sailing Hoist is a term used to signal to raise the mast.

  Researched answer: Hoisting is a phenomenon where you can access variables and function declarations before they are declared. They are lifted or raised to the top of your code, and you can reference them before they are declared. So the Javascript engine knows they exist and will not give you an error.  

From W3Schools example.
  x = 5; // Assign 5 to x

  elem = document.getElementById("demo"); // Find an element
  elem.innerHTML = x;                     // Display x in the element

  var x; // Declare x

  output: 5


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Classes can inherit information from other classes. This creates a parent and child relationship. It also keeps code from being repetitive. Classes are not real things themselves but a definition of things, and a collection of attributes and behaviors. We learn that our child class is able to inherit from a parent class.  When a child class inherits from a parent class, it gets access to all the parent class' properties and methods.  

2. React: Is a JavaScript library for building user interfaces. It was developed by face book and is a popular framework for building user interfaces. It is a tool for builing UI components. It can build single-page applications and allows us to create resuable UI components that can be reused over again on different pages or applications. Every React application has a root component. Every application has a tree of components. React, react to state changes and updates the DOM.

3. React state: React state is the data that you want to display, when the component is rendered.
 The output is a react element.

4. React lifecycle methods: Each component has several "lifecycle methods". These methods are called in the following order when an instance of a component is being created and inserted into the DOM. They are Mounting, Updating, Unmounting.

Mouting means putting elements into  the Dom
Updating is when a component is updated.
Unmounting is when a component is removed from the DOM.


5. DOM: When a web page is loaded, the browser creates a Document Object Model of the page. The DOM is a structure representation of HTML elements that are present in a webpage or web app. DOM is the entire UI of the application and represents as tree data structure
