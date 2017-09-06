/** Algorithm Practice from FreeCodeCamp **/

// Reversing a string

function reverseString(str) {
  return str.split('').reverse().join(''); // the chaining processworks by running the array inside the execution of functions
}

// Factorializing a number, i.e. 5! = 120

function factorialize(num) {
  if (num < 0) {
    return;
  }
  for (var product=1; num > 0; num--) {
    product *= num;
  }
  return product;
}

function factorializeRecurs(num) {
  return num < 0 ? undefined : num <= 1 ? 1 : num * factorializeRecurs(num - 1);
} /** This recursive version works by chaining each result onto itself, and then resolving all the way up when it reaches 1. **/

// Check for palindrome

function palindrome(str) {
  return str.replace(/[\W_]/g, "").toLowerCase() === str.replace(/[\W_]/g, "").toLowerCase().split('').reverse().join('');
}

palindrome("Test*-421"); // false

// Find length of the longest word

function findLongestWord(str) {
  var strArray = str.split(' ');
  var newMax = 0;
  for (i = 0; i < strArray.length; i++) {
    if (strArray[i].length > newMax) {
      newMax = strArray[i].length;
    }
  }
  return newMax;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6

// Title case a sentence

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (i=0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

titleCase("I'm a little tea pot"); //I'm A Little Tea Pot

// Largest number within multiple Arrays

function largestOfFour(arr) {
  var newArr = [];
  for (var i=0; i < arr.length; i++) {
        arr[i] = arr[i].sort(function(a,b) {
      return b - a;
    });
    newArr.push(arr[i][0]);
    }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[5, 27, 39, 1001]

//
