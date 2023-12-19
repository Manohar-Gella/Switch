// in this whole thing "Split and slice are only important"

// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.
// ________________________________________________________________________________

// Length - to find no of elements in the word
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World");
  
  // indexOf - to find specific position of the element
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World");
  
  // lastIndexOf - to find specific position of element of the last word for example - "Manohar Gell Neriyya Gella Nirmala Glella"
  // the lastIndex find the "target" ex: lets say find "Gella" it takes the last index of that element used in the lines of ocde
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");
  
  // slice - slice a word using the numbers like - "Manohar Gella" 0, 7 slice and gives the "Manohar" as the output
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);
  
  // substring - not used on this date
  // substring is similar to slice 
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);
  
  // replace - to reaplce a word with other word    
  // neriyya gella , replace neriyya with manohar - "Manohar Gella"
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split - to split a sentence into array
  // "Manohr Gella" - slipit(" "), ["Manohar", "Gella"]
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");