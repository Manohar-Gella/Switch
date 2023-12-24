// counter 0 -30 seconds in javascript.
function countdown() {
    let count = 30;
  
    const timer = setInterval(() => {
      console.clear(); // Clears the console on each iteration for a cleaner display
  
      if (count >= 0) {
        console.log(count);
        count--;
      } else {
        clearInterval(timer); // Stop the countdown when it reaches 0
      }
    }, 1000); // Update every second
  }
  
  // Start the countdown
  countdown();
  