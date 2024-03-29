// split and slice are only useful things


// Finding lenght of the string
let name = 'Manohar';
console.log(name.length);



// Finding the index of a sting in a sentece or group of strings
// .indexOf -> keyword to be used/rememberd
function findIndex(str, target){
    console.log(`Index of ${target} is ${str.indexOf(target)}`)
}

let find = findIndex('Manohar Gella', 'Gella');



// .lastindexOf -> give the index number of mulitiple same words

function lastIndex(string, targets){
    console.log(`Index of ${targets} is ${string.lastIndexOf(targets)}`)
}

let lfind = lastIndex('Manohar Gella Gella', 'Gella');



// slicing of string in JS

function sliceing(str, start, end){
    console.log(`Original str is ${str}`);
    console.log(`After slicing ${str.slice(start, end)}`)
}

let sname = sliceing('Manohar Gella', 0, 7);

// simple slicing

console.log("Manohar Gella".slice(0, 7));


// replacing strings

function replacestr(str, target, replacer){
    console.log(`original strign is ${str}`);
    console.log(`After Replacement: ${str.replace(target, replacer)}`);
}

let exe = replacestr("Manohar Gella", "Manohar", "Neriyya");


// spliting
// splits string in array 

let value = 'Hi this is Manohar Gella';
const avalue = value.split(" ");
console.log(avalue);


// dlimeter spliting

let value2 = 'Hi, this, is, Manohar, Gella';
const avalue2 = value.split(",");
console.log(avalue2);



// triming
// tims the unwanted space in the begining and the end of the stirng
let message = "          Neriyya Gella           ";
console.log(message)
console.log(message.trim())


// To upper the text

let tobeupper = 'manohar';
console.log(tobeupper.toUpperCase());


// To lower case
let tobelower = 'GELLA';
console.log(tobelower.toLocaleLowerCase());
