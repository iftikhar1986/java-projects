// Function to calculate the sum of elements in an array
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumOfArray(numbers)); // Output: 15
  