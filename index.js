// Helper function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main code to use the helper function
  const minRange = 1; // You can change the minimum value of the range
  const maxRange = 100; // You can change the maximum value of the range
  const randomNumber = getRandomNumber(minRange, maxRange);
  console.log(`Random number between ${minRange} and ${maxRange}: ${randomNumber}`);
  