// array of normal numbers to their multiples of 2
// using normal method

const fuck = [1, 2, 3, 4, 5];
const tfuck = [];
for(let i = 0; i<fuck.length; i++){
    tfuck.push(fuck[i]*2)
}
console.log(tfuck);


// using map method
// map - is to map the one data type with the function

const nums = [1, 2, 3, 4, 5];

function multwo(i){
    return i*2;
}

let ans = nums.map(multwo);
console.log(ans)


// filtering