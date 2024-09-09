// Vehicle Inventory Management System

// 1. Array Declaration and Basic Methods - Vehicles Inventory

let vehicles = [
    { id: 1, type: 'Car', brand: 'Toyota', year: 2018, price: 15000},
    { id: 2, type: 'Bike', brand: 'Yamaha', year: 2020, price: 7000 },
    { id: 3, type: 'Truck', brand: 'Ford', year: 2016, price: 25000 },
    { id: 4, type: 'Car', brand: 'Honda', year: 2019, price: 13000 }
];

// 2. Accessing Array Elements - Display a specific vehicle
console.log("Vehicle 2 :", vehicles[1]);

// 3. Modifying Array Elements - Update the price of a vehicle
vehicles[1].price = 7500;
console.log("Updated Price of Vehicle 2:", vehicles[1]);


// 4. Array Length - Total number of vehicles
console.log("Total number of vehicles:", vehicles.length);

// 5. Adding Elements to the Array (push, unshift) - Add new vehicles
vehicles.push({ id: 5, type: 'Bus', brand: 'Tata', year: 2025, price: 33000 });
vehicles.unshift({ id: 0, type: 'Bike', brand: 'Suzuki', year: 2017, price: 5000 });
console.log("After adding vehicles:", vehicles);

// 6. Removing Elements from the Array (pop, shift) - Remove oldest and latest vehicle
let removedLastVehicle = vehicles.pop();
let removedFirstVehicle = vehicles.shift();
console.log("After removing vehicles:", vehicles);

// 7. Looping through Arrays (forEach) - Display all vehicles
console.log("Current vehicles:");
vehicles.forEach(
    vehicle => {
        
        console.log(`${vehicle.type} - ${vehicle.brand} (${vehicle.year}): ${vehicle.price}`);

    }
);

// 8. Searching for an Element (indexOf, includes) - Search for a specific brand
let brands = vehicles.map(vehicle => vehicle.brand);
let indexHonda = brands.indexOf('Honda');
console.log("Index of Honda:", indexHonda);


// 9. Sorting an Array - Sort vehicles by price
vehicles.sort((a, b) => b.price - a.price);
console.log("Vehicles sorted by price:", vehicles);

// 10. Reversing an Array - Reverse vehicle list
vehicles.reverse();
console.log("Vehicles after reversing:", vehicles);

// 11. Slicing an Array (shallow copy) - Get first 2 vehicles
let firstTwoVehicles = vehicles.slice(0, 2);
console.log("First two vehicles:", firstTwoVehicles);






