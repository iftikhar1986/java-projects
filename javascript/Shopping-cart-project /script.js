// script.js

// Basic Setup

// Step 1: Array to store products and cart items
let products = [];
let cart = [];

// Step 2: Function to render products
function renderProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear the list before re-rendering

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Step 3: Function to render cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Clear the cart before re-rendering
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

// Step 4: Add to Cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

// Step 5: Handle form submission to add new product
const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    const nameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('product-price');

    const newProduct = {
        id: products.length + 1,
        name: nameInput.value,
        price: parseFloat(priceInput.value)
    };

    products.push(newProduct);
    renderProducts();

    // Clear the form
    nameInput.value = '';
    priceInput.value = '';
});

// Step 6: Checkout functionality
const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = []; // Clear the cart
        saveCartToLocalStorage(); // Save cart state
        renderCart(); // Re-render the cart
    }
});

// Basic initialization
renderProducts();

// Advanced Concepts

// Closure Example
const cartManager = (() => {
    let cart = [];
    
    return {
        addToCart: (product) => {
            cart.push(product);
            return cart;
        },
        getCart: () => cart
    };
})();

// Modify addToCart to use cartManager
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cartManager.addToCart(product);
    renderCart();
}

// Promise Example: Simulate fetching products
function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000); // Simulates network delay
    });
}

// Async/Await Example: Load products asynchronously
async function loadProducts() {
    const fetchedProducts = await fetchProducts();
    products = fetchedProducts;
    renderProducts();
}

loadProducts(); // Load products on page load

// LocalStorage Example
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        renderCart();
    }
}

// Save cart on checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        cart = []; // Clear the cart
        saveCartToLocalStorage(); // Save cart state
        renderCart(); // Re-render the cart
    }
});

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);

// Module Pattern Example
// productModule.js (not in this file but for completeness)
export const productModule = (() => {
    const products = [];

    const addProduct = (product) => {
        products.push(product);
    };

    const getProducts = () => products;

    return {
        addProduct,
        getProducts
    };
})();

