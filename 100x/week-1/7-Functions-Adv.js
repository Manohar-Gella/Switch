// advanced way to call functions and call back and call back hell

function add(a, b, next){
    let result = a+b;
    console.log(result)
    next(result);
}
function refyn(data){
    console.log("The sum ans is: "+data);
}

function rerefyn(redata){
    console.log("The ans of sum is: "+redata);
}


let ans = add(2, 3, rerefyn);


// calculator function with various functions - seperate functions
function calculator(m, n, fnToCall){
    return fnToCall(m, n);
}

function Add(m, n){
    return m+n;
}
function Min(m, n){
    return m-n;
}
function Mul(m, n){
    return m*n;
}
function Div(m, n){
    return m/n;
}

let Result = calculator(2, 3, Min);
console.log(Result);
// calculator function with if statements

function fcalculator(x, y, op){
    if(op == '+'){
        return x+y;
    }
    else if(op == '-'){
        return x-y;
    }
    else if(op =='*'){
        return x*y;
    }
    else if(op == '/'){
        return x/y;
    }
    else{
        return `Wrong OP entered`;
    }
}

let calres = fcalculator(2, 3, '*');
console.log(calres);

// set time out functions

function grett(){
    console.log("Hello bro");
}

let message = setTimeout(grett, 3 * 1000);

// function that can find the length of a string

function findLength(x){
    let length = x.length;
    console.log(`Length of ${x} is : ${length}`);
}

let str = findLength('Manoahr');