// Array of products with prices
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Headphones", price: 200 },
    { name: "Smartwatch", price: 150 },
    { name: "Tablet", price: 300 }
  ];


  function printArray(array){
    for(let item of array){
       console.log(item);
    }
}

function filterByPrice(products){
    return (products.price > 500)
}

let result = products.filter(filterByPrice);

printArray(products);

console.log('-------------')

printArray(result);