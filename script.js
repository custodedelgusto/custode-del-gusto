/* ============================================
   CUSTODE DEL GUSTO - JAVASCRIPT
   ============================================ */

// === VARIABILI GLOBALI ===
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// === DOM READY ===
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFilters();
    initCart();
    initForms();
    initScrollEffects();
});

// === NAVIGAZIONE ===
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu mobile
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Chiudi menu al click su link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        }
    });
}

// === FILTRI PRODOTTI ===
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Rimuovi active da tutti
            filterBtns.forEach(b => b.classList.remove('active'));
            // Aggiungi active al corrente
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            products.forEach(product => {
                if (filter === 'all' || product.dataset.category === filter) {
                    product.classList.remove('hidden');
                    product.style.animation = 'fadeIn 0.5s ease';
                } else {
                    product.classList.add('hidden');
                }
            });
        });
    });
}

// === CARRELLO ===
function initCart() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeBtns = document.querySelectorAll('.close');
    const checkoutBtn = document.querySelector('.btn-checkout');
    
    // Aggiungi al carrello
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const product = {
                id: this.dataset.product,
                name: productCard.querySelector('h4').textContent,
                price: parseFloat(this.dataset.price),
                quantity: 1
            };
            
            addToCart(product);
            showNotification('Prodotto aggiunto al carrello!');
        });
    });
    
    // Chiudi modali
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cartModal.classList.remove('active');
            if (checkoutModal) checkoutModal.classList.remove('active');
        });
    });
    
    // Click fuori dal modal
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) cartModal.classList.remove('active');
        if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    });
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Il carrello è vuoto!', 'error');
                return;
            }
            cartModal.classList.remove('active');
            if (checkoutModal) checkoutModal.classList.add('active');
        });
    }
    
    // Aggiorna visualizzazione carrello
    updateCartDisplay();
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(product);
    }
    
    saveCart();
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 30px;">Il carrello è vuoto</p>';
        cartTotal.textContent = '€0,00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>€${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    <span class="remove-item" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = `€${total.toFixed(2).replace('.', ',')}`;
}

// === FORMS ===
function initForms() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const checkoutForm = document.getElementById('checkout-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Messaggio inviato con successo! Ti risponderemo presto.');
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Iscrizione completata! Grazie per esserti iscritto.');
            this.reset();
        });
    }
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Ordine completato con successo! Riceverai una email di conferma.');
            cart = [];
            saveCart();
            updateCartDisplay();
            document.getElementById('checkout-modal').classList.remove('active');
            this.reset();
        });
    }
}

// === SCROLL EFFECTS ===
function initScrollEffects() {
    // Smooth scroll per anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Altezza navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === NOTIFICHE ===
function showNotification(message, type = 'success') {
    // Rimuovi notifiche esistenti
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Stili inline per la notifica
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#1a472a' : '#dc3545'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    // Aggiungi stile animazione se non esiste
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Rimuovi dopo 4 secondi
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

// === FUNZIONE PER APRIRE CARRELLO (opzionale) ===
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) cartModal.classList.add('active');
}
