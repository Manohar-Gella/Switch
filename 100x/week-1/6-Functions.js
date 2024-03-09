// Functions let you
// 1. Abstract out logic in your program
// 2. Take arguments as an input
// 3. Return a value as an output
// 4. You can think of them as an independent program that is supposed to do something
//  given an input
// 5. Functions CAN take other functions as input - this will confuse you (callbacks)

// function to display sum of two numbers
function Add(a,b){
    return a+b;
}

let Reuslt = Add(2, 5);
console.log(Reuslt);

// function to find sum of two nubers in prettyr format
function add(a, b){
    cal = a+b;
    return `${a} + ${b} = ${cal}`
}

let result = add(2, 3);
console.log(result)


// function that takes this sum and prints it in passive tense

function padd(a, b){
    cal = a+b;
    return `the sum of ${a} and ${b} is ${cal}`
}

let presult = padd(2, 3);
console.log(presult);