
// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    mobileMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
}

// FAQ toggle functionality
function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const item = content.parentElement;
    const icon = item.querySelector('.faq-icon');
    
    // Close all other FAQ items
    const allItems = document.querySelectorAll('.faq-item');
    const allContents = document.querySelectorAll('.faq-content-item');
    const allIcons = document.querySelectorAll('.faq-icon');
    
    allItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
            allContents[i].classList.remove('active');
        }
    });
    
    // Toggle current item
    item.classList.toggle('active');
    content.classList.toggle('active');
}

// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.querySelector('.newsletter-input').value = '';
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-link, .mobile-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                mobileMenu.classList.remove('active');
            }
        });
    });
    
    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // Here you would implement actual search functionality
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'white';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Cart and wishlist functionality (placeholder)
    const cartButton = document.querySelector('.navbar-icons .icon-button:first-child');
    const wishlistButton = document.querySelector('.navbar-icons .icon-button:nth-child(2)');
    
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            alert('Cart functionality coming soon!');
        });
    }
    
    if (wishlistButton) {
        wishlistButton.addEventListener('click', function() {
            alert('Wishlist functionality coming soon!');
        });
    }
    
    // Category card buttons
    const categoryButtons = document.querySelectorAll('.card-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.category-card').querySelector('.card-title').textContent;
            alert(`Viewing ${cardTitle} collection!`);
        });
    });
    
    // Hero shop now button
    const heroButton = document.querySelector('.hero-button');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            // Scroll to product categories section
            const categoriesSection = document.querySelector('.product-categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.category-card, .testimonial-card, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.remove('active');
            menuButton.classList.remove('active');
        }
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}
