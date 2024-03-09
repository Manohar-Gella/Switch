// Variabels in JS

// let
// var
// const

// Data types in JS

// Strings, numbers and booleans
// if else
// Loops-for loops


// 1. Write the program to greet a person given their first and last name 
let name = "Manohar";
let age = 19;
const sex = "male";
let isMarried = false;
console.log(name);
console.log(age);
console.log(sex);
console.log(isMarried);

// 2. Write a program that greets a person based on their gender. (If else) 
let fname = "Manohar";
let lname = "Gella";
let fullname = fname + " " + lname;
console.log(fullname);

// 3. Write a program that counts from 0 - 1000 and prints (for loop)
if(sex=='male'){
    console.log(`Hey Mr ${fname}`)
}
else if(sex =='female'){
    console.log(`Hey miss`)
}

// 3. Write a program that counts from 0 - 1000 and prints (for loop)
let sum = 0;

for (let i = 0; i <= 5; i++) {
  sum += i;
}

console.log("The sum from 0 to 1000 is:", sum);

// Complex perimitives in JS

// Array
// Objects

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let about = {
    name: "Manohar",
    age: 19,
    sex: "male"
};

// finding even numbers of an given array
for(let i = 0; i<=numbers.length; i++){
    if(numbers[i]%2 == 0){
        console.log(numbers[i])
    }
}
// finding biggest number in an array
let big = 0;

for(let i = 0; i<=numbers.length; i++){
    if(numbers[i]>big){
        big = numbers[i]
    }
}

console.log(about);
console.log(big);

// greeting up on their genders
let user = [{
    name: "Manohar",
    age: 18,
    sex: "male"
},
{
    name: "Neriyya",
    age: 40,
    sex: "male"
},
{
    name: "Nirmala",
    age: 40,
    sex: "female"
},
{
    name: "Pavithra",
    age: 30,
    sex: "female"
}];

for(let i = 0; i<user.length; i++){
    if(user[i].sex == "male"){
        console.log(user[i]);
    }
}

// reversing an array
numbers.reverse();
console.log(numbers);