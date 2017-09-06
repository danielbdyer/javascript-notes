/**

Javascript Notes:
Six different types of operators: numbers, strings, Booleans, objects, functions, and undefined values.

-----------------------------------------------------------------------------------

Numbers:
-	Calculations with fractional numbers are estimations and not precise values.
-	Arithmetic operators apply here. One new one: % -- remainder. **/

314 % 100 = 14.

/**

-	Special numbers: Infinity and -Infinity, but they are not mathematically solid.
It will quickly lead to NaN, “not a number” 		|= 0 / 0, or Infinity - Infinity.

Assigning variables means that you update the value –
Initializing it means you create it, and requires a var beforehand the variable.
	When declared with no value, they are undefined. Math operations on it will produce NaN.

-----------------------------------------------------------------------------------

Strings:
-	A string literal is an explicitly called string with quotes or double quotes.
-	If you choose one or the other, make sure any inner quotes of that kind that are in the string are escaped out – or just use single quotes for a string that has doubles.
-	Can be concatenated for multi-part strings with a +, and you can continue to add to a variable with a +=, and you can input variables using the concatenation method
-	.length can go after a string variable or a string literal **/
var stringVariable = “Dog” /** can have bracket notation to call a character, i.e., **/

stringVariable[0]; /** returns “D”

Finding the last character? **/

stringVariable(stringVariable.length - 1)
/** -	String values are immutable and cannot be altered once created. The only way to change it would be to assign it a new string

-----------------------------------------------------------------------------------

Arrays:
-	Multi-dimensional array: **/
var teamscore = [[“Bulls”, 23], [“White Sox”, 45]]
teamScore[0,1]; /** returns 23
-	Arrays can be updated/altered by doing: **/
teamscore[0][1] = 24;
/** -	Multi-dimensional access is possible: **/

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];

arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; /** equals 11

- Regarding .push(), .pop(), .shift(), and .unshift() on Arrays -

/** .push takes one or more parameters and pushes them to the end of an array, e.g.,
arr.push(para1) or ([para2, para3, para-n]) *//
var arr = [1,2,3];
arr.push(4);
/** arr is now [1,2,3,4]

- .pop() functions pop the last entry – any kind of entry, whether number, string, or another nested array – off the array. **/
var oneDown = [1, 4, 6].pop();
return oneDown; // “6”
/**
-	.shift() functions just like .pop() except it takes off the first
-	.unshift() functions just like .push() except it puts new parameters at the start of the array

- We can be thinking of a queue as an abstract data structure – keeping items in order. New items added at the back, old items removed from the front.
-	Bracket notation on a variable can be used to access nested *arrays* – but not objects.

-----------------------------------------------------------------------------------

Objects:

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
A good use for Objects: Lookup Tables!

So here's a sample object:	**/

var cat = {
   "name": "Whiskers",
   "legs": 4,
   "tails": 1,
   "enemies": ["Water", "Dogs"]
};

cat.tails; // 1

// And a more complex one:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;  // "secrets"

// Object Properties:

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

// If the property of the object has a space, it is accessible by bracket notation.

myObj[“Property Two”];

// Accessing Object Properties with Variables:

var someProp = "propName";
var myObj = {
  propName: "Some Value"
}
myObj[someProp]; // "Some Value"

// You can also update an object property much like you would a variable (and if it does not exist, it will be added.)

myObj[“propName”] = “New string one”; // or
myObj.propNameTwo = “New string two”;

// and delete it by using something like

delete myObj.propNameTwo;

// Object properties (i.e., propName) can be checked to see if they exist by using .hasOwnProperty method, i.e.,

myObj.hasOwnProperty(“propName”); /** true

-----------------------------------------------------------------------------------

Functions:

Passing values to functions using arguments **/

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

// return statements can be used to back out of a function and return a value.

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); /** 8

-----------------------------------------------------------------------------------

Variables:
Variables can be local (inner-function) or global (initialized outside of a function).
If there are conflicting variable definitions in a function, between local and global types, local takes precedence.
	Variables that are used without the var keyword are automatically created in global scope.
	Variables that are initialized inside of a function with var keep their local scope. **/

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // "foo"
console.log(loc); /** "undefined"

-----------------------------------------------------------------------------------

if / else if / else logic:

A common structure to check validity of an argument is the if-true structure as seen below. **/

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
return "No, it's false";
}

// A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:

function isEqual(a,b) {
  if (a === b) {
      return true;
    } else {
      return false;
    }
}

// compared to

function isEqual(a,b) {
return a === b;
}

/** You can also return early from a function so if neither argument is met the function won’t get executed.

-----------------------------------------------------------------------------------

Two types of equality operator

== checks the two values and returns true or false, and will convert one type to another
=== (strict equality) checks the two values and their data types (number, string, etc.) for equality
!= and !== are the same sort of premise, and check for incongruity instead.
<, <=, >, and >= will all convert data types and do not do strict comparison.
&& and || are ‘logical and’ and ‘logical or’ operators, and can be used to check for two equalities.

-----------------------------------------------------------------------------------

LOOPS

do loops vs. while loops:
A “do” loop always executes its body at least once, and then checks for a test after execution (“while”)

for loops (in most cases are shorter and clearer than a while construct)
    i++, i += n, or i -= n
1. initialize loop (define variable);
2. check loop (conditional logic);
3. update loop (delta for each iteration)

break statement:	if you don’t define a second, you can use conditional logic inside your variable and jump out of the loop on match
(for example, match a remainder to zero for divisibility.)
continue also serves a similar purpose.

commonly, for loops can iterate through an array, i.e. **/

var arr = [10,9,8,7,6];
for (var i=0; i < arr.length; i++) {
  console.log(arr[i]);
}

// OR

var arr = [
  [1,2], [3,4], [5,6]
];

for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

/**

-----------------------------------------------------------------------------------

Switch

Switches have to have breaks, otherwise you will just also execute the next “switch” case in the code.
Sometimes you may want this – you just need to be careful about it. default case at the end of it.

Switches are useful when you have many options to choose from / don’t require if/else logic.

**/

switch (num) {
  case value1:
  case value2:
  case value3: check for rules on where to use quotes etc. for case and where it is not necessary
    result = “1, 2, or 3”;
    break;
  case value4:
    statement4;
    break;
default:
    defaultStatement; /**

-----------------------------------------------------------------------------------

Booleans as a data type are never written with quotes.

Regex: regex101.com is a great tester and can produce a lot of basic regex strings by default

-----------------------------------------------------------------------------------
