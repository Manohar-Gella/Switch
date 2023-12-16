// terminal clock in javascript

function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  // Update the time every second
  setInterval(displayTime, 1000);
  
  // Initial display
  displayTime();
  