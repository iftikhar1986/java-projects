let user = {
    name: 'Syed Iftikhar',
    email: 'iftikhar.uddin.fazal@gmail.com',
    phone: '+974 55523243',
    address: {
        zone: 378,
        building: 24,
        street: 'al-rayyan'  // Corrected spelling of "street"
    },
    order: [
        {
            oid: 1,
            amount: 2000,
            date: '20th Nov, 2021'  // Changed "data" to "date"
        },
        {
            oid: 2,
            amount: 3000,
            date: '21st Nov, 2021'  // Corrected to "21st"
        }
    ]
};

const product = {
    pid: 101,
    name: 'TV',  // Added quotes around 'TV'
    brand: 'Sony',  // Added quotes around 'Sony'
    price: 4000,
    inventory: [
        {
            size: 7,
            units: 1600
        },
        {
            size: 8,
            units: 130303
        }
    ]
};

//console.log(product);
//updating a product 
product.inventory[0].units = 10
console.log(product);


// console.log(user);
// console.log(typeof user);

// console.log("User name is: "+user.name);
// console.log("Order Place are:"+user['order'][0]['amount']);