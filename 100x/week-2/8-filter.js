// to filter the even numbers in any array

let nums = [1, 2, 3 ,4 ,5];
let narr = []

for(let i = 1; i<nums.length; i++){
    if(nums[i]%2 == 0){
        narr.push(nums[i]);
        
    }
}


console.log(narr)


// now using filter

function filerit(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans = nums.filter(filerit);
console.log(ans)