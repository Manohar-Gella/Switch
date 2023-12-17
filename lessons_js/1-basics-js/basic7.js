// larges number in an array

// Example array
const numbers = [3, 8, 2, 10, 5];

// Check if the array is empty
if (numbers.length === 0) {
  console.log("Array is empty");
} else {
  // Initialize the largest number with the first element of the array
  let largestNumber = numbers[0];

  // Iterate through the array to find the largest number
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }

  // Print the result
  console.log("The largest number is:", largestNumber);
}
