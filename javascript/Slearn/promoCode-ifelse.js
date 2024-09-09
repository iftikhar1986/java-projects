/*
    program that checks if a user enters a valid promo code and applies a discount if the promo code is correct.

*/

let originalPrice = 100; // Original price of the product
let promoCodeInput = "SAVE20";  // User's input for the promo code

// Define a valid promo code and its discount
let validPromoCode = "SAVE20";
let discountPercentage = 20;

// Check if the entered promo code is valid
if(promoCodeInput == validPromoCode){
        // Calculate the discount and final price
        let discountAmount = (originalPrice * discountPercentage) / 100;
        let finalPrice = originalPrice - discountAmount;

        // Output the results
    console.log("Promo code applied! You get a " + discountPercentage + "% discount.");
    console.log("Final Price after discount: $" + finalPrice);

}else {
    // Output if the promo code is invalid
    console.log("Invalid promo code. Please try again.");
}
