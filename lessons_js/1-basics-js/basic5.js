// array in javascript
// this following example prints out the even numbers only

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
console.log("The even numbner of the array are");

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
        console.log(nums[i]);
    }
}