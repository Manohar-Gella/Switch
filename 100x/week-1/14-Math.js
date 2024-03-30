function mathMethods(value) {
    console.log("Original Value:", value);
    
    // Round value
    let rounded = Math.round(value);
    console.log("After round():", rounded);
  
    // up rounding
    let ceiling = Math.ceil(value);
    console.log("After ceil():", ceiling);
  
    // down rounding
    let flooring = Math.floor(value);
    console.log("After floor():", flooring);
  
    // random value generator
    let randomValue = Math.random();
    console.log("After random():", randomValue);
    
    // max value of numbers
    let maxValue = Math.max(5, 10, 15);
    console.log("After max():", maxValue);
  
    // min value of numbers
    let minValue = Math.min(5, 10, 15);
    console.log("After min():", minValue);
  
    // power of number value
    let powerOfTwo = Math.pow(value, 2);
    console.log("After pow():", powerOfTwo);
  

    // square root of a value
    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);