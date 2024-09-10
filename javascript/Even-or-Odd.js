// Function to check if the number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
console.log(checkEvenOdd(5));  // Output: "Odd"
console.log(checkEvenOdd(8));  // Output: "Even"