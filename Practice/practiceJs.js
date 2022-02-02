// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
  undefined
  printHello()
  'Hello there!'
  printHello = () => "Hello there!";
  () => "Hello there!"
  printHello
//   () => "Hello there!"
  // Original addition function
  function addition(a, b) {
    return a + b;
  }
  undefined
  addition(3,4)
  7
//   addition(a,b)=>a+b;
//   VM315:1 Uncaught SyntaxError: Malformed arrow function parameter list
//   addition(a,b) => a+b;
//   VM371:1 Uncaught SyntaxError: Malformed arrow function parameter list
  addition = (a, b) => a + b;
  (a, b) => a + b
  // Original doubleAddition function
  function doubleAddition(c, d) {
      var total = addition(c, d) * 2;
      return total;
    }
  
    doubleAddition = (c, d) => addition(c, d) * 2;
  (c, d) => addition(c, d) * 2
  // Original doubleAddition function
  function doubleAddition(c, d) {
      var total = addition(c, d) * 2;
      return total;
    }
  
    doubleAddition = (c, d) => addition(c, d) * 2;
  (c, d) => addition(c, d) * 2
  doubleAddition(3,2);
  10
  doubleAddition(33,25);
  116
  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  undefined
  function listLoop(userList) {
     for (var i = 0; i < userList.length; i++) {
       console.log(userList[i]);
     }
  }
  undefined
  let userlist=["A","B","C","D","E","F"];
  undefined
  function listLoop(userList) {
     for (var i = 0; i < userList.length; i++) {
       console.log(userList[i]);
     }
  }
  undefined
//   listloop[]
//   VM658:1 Uncaught SyntaxError: Unexpected token ']'
//   listloop();
//   VM687:1 Uncaught ReferenceError: listloop is not defined
//       at <anonymous>:1:1
//   (anonymous) @ VM687:1
//   listLoop();
//   VM625:2 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
//       at listLoop (<anonymous>:2:33)
//       at <anonymous>:1:1
//   listLoop @ VM625:2
//   (anonymous) @ VM716:1
//   listLoop();
//   VM625:2 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
//       at listLoop (<anonymous>:2:33)
//       at <anonymous>:1:1
//   listLoop @ VM625:2
//   (anonymous) @ VM745:1
//   listLoop(friends);
//   VM625:3 Sarah
//   VM625:3 Greg
//   VM625:3 Cindy
//   VM625:3 Jeff
//   undefined
  let vegitables=["Carrots","Peas","Lettuce","Tomatoes"];
  undefined
  for(var i=0;i<vegitables.length;i++){
      console.log("I love" + vegitables[i]);
  }
//   VM1132:2 I loveCarrots
//   VM1132:2 I lovePeas
//   VM1132:2 I loveLettuce
//   VM1132:2 I loveTomatoes
//   undefined
  let variables=["1","2","3","4","5","6"];
  undefined
  for(var i=0; i < variables.length; i++){
      console.log("My Rank is" +variables[i]);
  }
  
  for(var i =0;i<5;i++){
      console.log("I am"+i);
  }
//   I am0
// VM1614:2 I am1
// VM1614:2 I am2
// VM1614:2 I am3
// VM1614:2 I am4
// undefined
 
//import the data from data.js
const tabledata= data;
// Reference the HTML table using d3
var tbody=d3.select("tbody");
// With this code, we:

// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
// Simple JavaScript console.log statement
function printHello(){
    console.log("Hello there");
}

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

addition = (a, b) => a + b;


// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  doubleAddition = (c, d) => addition(c, d) * 2;


let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }