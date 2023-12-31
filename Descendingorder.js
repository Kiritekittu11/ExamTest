const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter an array of numbers (comma-separated): ', (input) => {
  const numbers = input.split(',').map(Number);
  const sortedArray = sortDescending(numbers);
  console.log('Sorted array in descending order:', sortedArray);
  rl.close();
});
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}