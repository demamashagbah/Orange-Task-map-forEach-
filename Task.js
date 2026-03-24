/*
 * Exercise 1
 *
 * Double each number in the array
 */
 function doubleNumbers(arr) {
    return arr.map(n => n * 2);
}
 // Test Case:
 console.log(doubleNumbers([1, 2, 3])); // Result: [2, 4, 6]

 /*
 * Exercise 2
 *
 * Convert numbers to strings
 *
 * Test Case:
 * console.log(numbersToStrings([1,2,3]))
 *
 * Result:
 * ["1","2","3"]
*/
  function numbersToStrings(arr) {
    return arr.map(n => n.toString());
}

console.log(numbersToStrings([1, 2, 3])); // ["1", "2", "3"]

/*
 * Exercise 3
 *
 * Make all names uppercase
 *
 * Test Case:
 * console.log(upperCaseNames(["ali","sara"]))
 *
 * Result:
 * ["ALI","SARA"]
*/
 let names = ["ali" , "sara"]
function upperCaseNames(arr){
  return names.map( n => n.toUpperCase())
}
console.log( upperCaseNames(names))

/*
 * Exercise 4
 *
 * Add 5 to each number
 *
 * Test Case:
 * console.log(addFive([10,20,30]))
 *
 * Result:
 * [15,25,35]
*/

function addFive(arr){
 return arr.map( n => n+5)
}
console.log(addFive([10,20,30]))

/*
 * Exercise 5
 *
 * Get only the name from objects
 *
 * Test Case:
 * console.log(getNames([
 * {name:"Ali",age:20},
 * {name:"Sara",age:25}
 * ]))
 *
 * Result:
 * ["Ali","Sara"]
*/
function getNames(arr){
   return arr.map(n => n.name)
}
console.log(getNames([
  {name:"Ali",age:20},
  {name:"Sara",age:25}
  ]))

  /*
 * Exercise 6
 *
 * Return the length of each word
 *
 * Test Case:
 * console.log(wordLengths(["apple","dog"]))
 *
 * Result:
 * [5,3]
*/
function wordLengths(arr){
  return arr.map((w) => {return w.length})
}
 console.log(wordLengths(["apple","dog"]))

 /*
 * Exercise 7
 *
 * Multiply each number by its index
 *
 * Test Case:
 * console.log(valTimesIndex([2,3,4]))
 *
 * Result:
 * [0,3,8]
*/

function valTimesIndex(arr){
 return arr.map((number , index) => {return number * index})
}

console.log(valTimesIndex([2,3,4]))

/*
 * Exercise 8
 *
 * Create array of usernames starting with "@"
 *
 * Test Case:
 * console.log(makeUsernames([
 * {username:"ahmad"},
 * {username:"sara"}
 * ]))
 *
 * Result:
 * ["@ahmad","@sara"]
*/

function makeUsernames(arr){
  return arr.map((user) => {return "@"+ user.username} )
}

console.log(makeUsernames([
  {username:"ahmad"},
 {username:"sara"}
  ]))

  /*
 * Exercise 9
 *
 * Create array of squares
 *
 * Test Case:
 * console.log(squareNumbers([2,3,4]))
 *
 * Result:
 * [4,9,16]
*/

 function squareNumbers(arr){
    return arr.map( n => n * n)
}

 console.log(squareNumbers([2,3,4]))

/*
 * Exercise 10
 *
 * Convert words to their first letter
 *
 * Test Case:
 * console.log(firstLetters(["Ali","Sara"]))
 *
 * Result:
 * ["A","S"]
*/
function firstLetters(arr) {
    return arr.map(word => word[0]);
}

// Test Case:
console.log(firstLetters(["Ali", "Sara"])); // ["A", "S"]

/*
 * Exercise 11: Count total sum using forEach
*/
function sumNumbers(arr) {
  let total = 0;
  arr.forEach(num => {
    total += num;
  });
  return total;
}

/*
 * Exercise 12: Count how many numbers are even
*/
function countEven(arr) {
  let count = 0;
  arr.forEach(num => {
    if (num % 2 === 0) {
      count++;
    }
  });
  return count;
}

/*
 * Exercise 13: Create array where each number becomes number * 10
*/
function timesTen(arr) {
  return arr.map(num => num * 10);
}

/*
 * Exercise 14: Add property "adult" depending on age
*/
function addAdult(arr) {
  return arr.map(person => {
    return {
      ...person,
      adult: person.age >= 18
    };
  });
}

/*
 * Exercise 15: Create array of prices after adding 10 tax
*/
function addTax(arr) {
  return arr.map(price => price + 10);
}

/*
 * Exercise 16: Count how many numbers are greater than 50
*/
function countBig(arr) {
  let count = 0;
  arr.forEach(num => {
    if (num > 50) {
      count++;
    }
  });
  return count;
}

/*
 * Exercise 17: Convert numbers to "Number: X"
*/
function labelNumbers(arr) {
  return arr.map(num => `Number: ${num}`);
}

/*
 * Exercise 18: Get product names
*/
function productNames(arr) {
  return arr.map(item => item.product);
}

/*
 * Exercise 19: Create array where each number becomes number + index
*/
function addIndex(arr) {
  return arr.map((num, i) => num + i);
}

/*
 * Exercise 20: Create array of boolean values (true if even)
*/
function isEvenArray(arr) {
  return arr.map(num => num % 2 === 0);
}

