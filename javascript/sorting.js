// Define product objects
const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      category: "Electronics",
      stock: 5,
      description: "A high-performance laptop for everyday use.",
      discount: 10, // Discount in percentage
    },
    {
      id: 2,
      name: "Smartphone",
      price: 500,
      category: "Electronics",
      stock: 10,
      description: "A smartphone with all the latest features.",
      discount: 5,
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
      category: "Accessories",
      stock: 15,
      description: "Noise-cancelling headphones for immersive sound.",
      discount: 15,
    }
  ];

  function printArray(array){
        for(let item of array){
           console.log(item);
        }
  }

  function sortOnPrice(product1, product2){
        return product1.price - product2.price;
  }

  products.sort(sortOnPrice);
 console.log(products);
  
 
  