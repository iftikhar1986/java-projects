// Vehicle Inventory Management System

// 1. Array Declaration and Basic Methods - Vehicles Inventory
let vehicles = [
    { id: 1, type: 'Car', brand: 'Toyota', year: 2018, price: 15000 },
    { id: 2, type: 'Bike', brand: 'Yamaha', year: 2020, price: 7000 },
    { id: 3, type: 'Truck', brand: 'Ford', year: 2016, price: 25000 },
    { id: 4, type: 'Car', brand: 'Honda', year: 2019, price: 13000 }
  ];
  
  // 2. Accessing Array Elements - Display a specific vehicle
  console.log("Vehicle 2:", vehicles[1]);
  
  // 3. Modifying Array Elements - Update the price of a vehicle
  vehicles[1].price = 7500;
  console.log("Updated Price of Vehicle 2:", vehicles[1]);
  
  // 4. Array Length - Total number of vehicles
  console.log("Total number of vehicles:", vehicles.length);
  
  // 5. Adding Elements to the Array (push, unshift) - Add new vehicles
  vehicles.push({ id: 5, type: 'Car', brand: 'Tesla', year: 2021, price: 35000 });
  vehicles.unshift({ id: 0, type: 'Bike', brand: 'Suzuki', year: 2017, price: 5000 });
  console.log("After adding vehicles:", vehicles);
  
  // 6. Removing Elements from the Array (pop, shift) - Remove oldest and latest vehicle
  let removedLastVehicle = vehicles.pop();
  let removedFirstVehicle = vehicles.shift();
  console.log("After removing vehicles:", vehicles);
  
  // 7. Looping through Arrays (forEach) - Display all vehicles
  console.log("Current vehicles:");
  vehicles.forEach(vehicle => {
    console.log(`${vehicle.type} - ${vehicle.brand} (${vehicle.year}): $${vehicle.price}`);
  });
  
  // 8. Searching for an Element (indexOf, includes) - Search for a specific brand
  let brands = vehicles.map(vehicle => vehicle.brand);
  let indexHonda = brands.indexOf('Honda');
  console.log("Index of Honda:", indexHonda);
  
  // 9. Sorting an Array - Sort vehicles by price
  vehicles.sort((a, b) => a.price - b.price);
  console.log("Vehicles sorted by price:", vehicles);
  
  // 10. Reversing an Array - Reverse vehicle list
  vehicles.reverse();
  console.log("Vehicles after reversing:", vehicles);
  
  // 11. Slicing an Array (shallow copy) - Get first 2 vehicles
  let firstTwoVehicles = vehicles.slice(0, 2);
  console.log("First two vehicles:", firstTwoVehicles);
  
  // 12. Find Element in Array (find) - Find the first expensive vehicle
  let expensiveVehicle = vehicles.find(vehicle => vehicle.price > 20000);
  console.log("First expensive vehicle:", expensiveVehicle);
  
  // 13. Filter Elements in Array - Get vehicles under $15,000
  let affordableVehicles = vehicles.filter(vehicle => vehicle.price < 15000);
  console.log("Vehicles under $15,000:", affordableVehicles);
  
  // 14. Transform Elements Using Map - Create an array of vehicle descriptions
  let vehicleDescriptions = vehicles.map(vehicle => `${vehicle.brand} (${vehicle.year}): $${vehicle.price}`);
  console.log("Vehicle Descriptions:", vehicleDescriptions);
  
  // 15. Check Condition on All Elements (every) - Are all vehicles post-2015?
  let allRecentVehicles = vehicles.every(vehicle => vehicle.year > 2015);
  console.log("Are all vehicles post-2015?", allRecentVehicles);
  
  // 16. Check If Any Element Passes Test (some) - Do we have any expensive vehicles?
  let hasExpensiveVehicle = vehicles.some(vehicle => vehicle.price > 30000);
  console.log("Is there any vehicle priced above $30,000?", hasExpensiveVehicle);
  
  // 17. Reduce Array to Single Value - Sum of all vehicle prices
  let totalValue = vehicles.reduce((acc, vehicle) => acc + vehicle.price, 0);
  console.log("Total value of all vehicles:", totalValue);
  
  // 18. Flatten a Nested Array (flat) - Example of array flattening (for nested details, not relevant here)
  let nestedArray = [[1, 2], [3, 4, [5]]];
  console.log("Flattened array:", nestedArray.flat(2));
  
  // 19. Fill Array with Static Value - Create a filled array
  let filledArray = new Array(3).fill('New Vehicle');
  console.log("Filled array:", filledArray);
  
  // 20. Find Index of Element (findIndex) - Find index of a vehicle based on year
  let vehicleIndex = vehicles.findIndex(vehicle => vehicle.year === 2020);
  console.log("Index of 2020 vehicle:", vehicleIndex);
  
  // 21. Create a Copy of an Array (slice) - Clone vehicle array
  let clonedVehicles = vehicles.slice();
  console.log("Cloned vehicles:", clonedVehicles);
  
  // 22. Remove Specific Elements Using splice - Remove a specific vehicle by index
  vehicles.splice(1, 1);  // Remove vehicle at index 1
  console.log("After removing a specific vehicle:", vehicles);
  
  // 23. Sort Array of Objects by Property - Sort by brand name
  vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
  console.log("Vehicles sorted by brand:", vehicles);
  
  // 24. Check if a Variable is an Array
  console.log("Is vehicles an array?", Array.isArray(vehicles));
  
  // 25. Shallow Copy Using Spread Operator - Another way to clone vehicles
  let shallowCopy = [...vehicles];
  console.log("Shallow copy of vehicles:", shallowCopy);
  
  // 26. Get the First and Last Element of an Array
  console.log("First vehicle:", vehicles[0]);
  console.log("Last vehicle:", vehicles[vehicles.length - 1]);
  
  // 27. Check If All Elements Are Equal - Check if all vehicle types are the same
  let areAllCars = vehicles.every(vehicle => vehicle.type === 'Car');
  console.log("Are all vehicles cars?", areAllCars);
  
  // 28. Use concat to merge arrays - Adding more vehicles
  let newVehicles = [
    { id: 6, type: 'Car', brand: 'BMW', year: 2022, price: 40000 },
    { id: 7, type: 'Truck', brand: 'Dodge', year: 2018, price: 28000 }
  ];
  let allVehicles = vehicles.concat(newVehicles);
  console.log("All vehicles after merge:", allVehicles);
  
  // 29. Split a string into an array - Brands split into letters
  let brand = "Mercedes";
  let splitBrand = brand.split('');
  console.log("Split brand:", splitBrand);
  
  // 30. Join an array into a string - Join letters back into a string
  let joinedBrand = splitBrand.join('');
  console.log("Joined brand:", joinedBrand);
  
  // 31. Nested array operations - Find and filter from nested details (if applicable)
  let nestedVehicles = [[{ id: 1, brand: 'Mini' }, { id: 2, brand: 'Audi' }]];
  console.log("Nested vehicles flattened:", nestedVehicles.flat());
  
  // 32. Destructuring Arrays - Get the first two vehicles
  let [firstVehicle, secondVehicle] = vehicles;
  console.log("First two vehicles:", firstVehicle, secondVehicle);
  
  // 33. Find the max price vehicle using reduce
  let maxPriceVehicle = allVehicles.reduce((prev, current) => (prev.price > current.price ? prev : current), allVehicles[0]);
  console.log("Vehicle with highest price:", maxPriceVehicle);
  
  // 34. Use of every with conditions - Check if every vehicle's price is above 5k
  let allAbove5k = allVehicles.every(vehicle => vehicle.price > 5000);
  console.log("All vehicles priced above $5,000:", allAbove5k);
  
  // 35. Custom sorting function - Sort vehicles by year then by price
  allVehicles.sort((a, b) => {
    if (a.year === b.year) {
      return a.price - b.price;
    }
    return a.year - b.year;
  });
  console.log("Vehicles sorted by year and price:", allVehicles);
  
  
  // *** New Concepts ***
  
  // 36. Array.from() - Create an array from an iterable or array-like object
  let vehicleString = 'Car,Bike,Truck,Car';
  let arrayFromString = Array.from(vehicleString.split(','));
  console.log("Array created from string:", arrayFromString);
  
  // 37. Array.of() - Create a new array with the given elements
  let newVehicleArray = Array.of('Car', 'Bike', 'Truck');
  console.log("New array created using Array.of():", newVehicleArray);
  
  // 38. Array.some() - Check if at least one vehicle is newer than 2019
  let someNewVehicles = vehicles.some(vehicle => vehicle.year > 2019);
  console.log("Are there any vehicles newer than 2019?", someNewVehicles);
  
  // 39. Array.copyWithin() - Copy part of an array within itself
  let pricesArray = allVehicles.map(vehicle => vehicle.price);
  pricesArray.copyWithin(1, 0, 2);  // Copy the first two prices to positions starting from index 1
  console.log("Array after copyWithin:", pricesArray);
  
  // 40. Array.reduceRight() - Reducing array from right to left
  let reducedFromRight = pricesArray.reduceRight((acc, price) => acc + price, 0);
  console.log("Sum of prices (reduceRight):", reducedFromRight);
  