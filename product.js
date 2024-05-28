const products = [
    {
        name: 'Classic Chocolate Box 1',
        price: 29.99,
        image: 'chocolate1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 2',
        price: 29.99,
        image: 'chocolate2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 3',
        price: 29.99,
        image: 'chocolate3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 4',
        price: 29.99,
        image: 'chocolate4.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 5',
        price: 29.99,
        image: 'chocolate5.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 6',
        price: 29.99,
        image: 'chocolate1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 7',
        price: 29.99,
        image: 'chocolate2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 8',
        price: 29.99,
        image: 'chocolate3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 9',
        price: 29.99,
        image: 'chocolate4.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 10',
        price: 29.99,
        image: 'chocolate5.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 11',
        price: 29.99,
        image: 'chocolate1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 12',
        price: 29.99,
        image: 'chocolate2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 13',
        price: 29.99,
        image: 'chocolate3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 14',
        price: 29.99,
        image: 'chocolate4.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },
    {
        name: 'Classic Chocolate Box 15',
        price: 29.99,
        image: 'chocolate5.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
    },

];


function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.reduce((count, item) => count + item.quantity, 0);
}

// Adding event listeners and functions for product page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});