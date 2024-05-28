function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(contactForm);

        // Send the data to the PHP script
        fetch('magical.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message.');
            });

        // Clear the form after submission
        contactForm.reset();
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     updateCartCount();
//      updateCartTotal();
//      displayCartItems();
// });
//
// let cart = [];
//
// function addToCart(name, price) {
//     const existingItem = cart.find(item => item.name === name);
//     if (existingItem) {
//         existingItem.quantity++;
//     } else {
//         cart.push({ name, price, quantity: 1 });
//     }
//     updateCartCount();
// }
//
// function updateCartCount() {
//     const cartCountElement = document.getElementById('cart-count');
//     cartCountElement.textContent = cart.reduce((count, item) => count + item.quantity, 0);
// }
// function updateCartTotal() {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
//     document.getElementById('cart-total').textContent = cartTotal;
// }
// document.addEventListener('DOMContentLoaded', () => {
//     updateCartCount();
// });
//
// function displayCartItems() {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let cartItemsContainer = document.querySelector('.cart-items');
//     cartItemsContainer.innerHTML = '';
//
//     cart.forEach(item => {
//         let cartItem = document.createElement('div');
//         cartItem.className = 'cart-item';
//         cartItem.innerHTML = `
//             <h3>${item.name}</h3>
//             <p>Price: $${item.price}</p>
//             <p>Quantity: ${item.quantity}</p>
//         `;
//         cartItemsContainer.appendChild(cartItem);
//     });
// }