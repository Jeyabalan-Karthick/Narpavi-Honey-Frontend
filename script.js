// Mobile menu functionality
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('mobile-menu-icon');

    if (isMobileMenuOpen) {
        mobileNav.classList.add('active');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        mobileNav.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    isMobileMenuOpen = false;
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('mobile-menu-icon');

    mobileNav.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
}

// FAQ functionality
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const targetItem = faqItems[index];

    // Close all other FAQ items
    faqItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
        }
    });

    // Toggle the clicked item
    targetItem.classList.toggle('active');
}

// Video tour functionality
let currentCenterVideo = 0;
const videos = [
    {
        id: 0,
        title: "Main Honey Farm Tour",
        image: "/figmaAssets/group-1000005074.png",
    },
    {
        id: 1,
        title: "Beekeeping Process",
        image: "/figmaAssets/untitled-design--58--3.png",
    },
    {
        id: 2,
        title: "Honey Extraction",
        image: "/figmaAssets/untitled-design--59--1.png",
    }
];

// Set center video in video tour
function setCenterVideo(videoIndex) {
    const videos = [
        '/figmaAssets/group-1000005074.png',
        '/figmaAssets/untitled-design--58--3.png',
        '/figmaAssets/untitled-design--59--1.png'
    ];

    const centerImg = document.getElementById('center-video-img');
    if (centerImg && videos[videoIndex]) {
        centerImg.src = videos[videoIndex];
    }
}

// Navbar functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('mobile-menu-icon');

    if (mobileNav && menuIcon) {
        mobileNav.classList.toggle('active');

        if (mobileNav.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('mobile-menu-icon');

    if (mobileNav && menuIcon) {
        mobileNav.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 80;
                window.scrollTo({
                    top: target.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function setCenterVideo(videoId) {
    currentCenterVideo = videoId;
    const centerVideoImg = document.getElementById('center-video-img');
    if (centerVideoImg) {
        centerVideoImg.src = videos[videoId].image;
        centerVideoImg.alt = videos[videoId].title;
    }
}

// Gallery auto-scroll functionality
function initGalleryScroll() {
    const galleryScroll = document.getElementById('gallery-scroll');
    if (!galleryScroll) return;

    // Clone images for seamless loop
    const galleryItems = galleryScroll.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const clone = item.cloneNode(true);
        galleryScroll.appendChild(clone);
    });
}

// Product tabs functionality
function initProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Here you could add logic to filter products based on the selected tab
            // For now, we'll just handle the visual state
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (isMobileMenuOpen) {
                    closeMobileMenu();
                }
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}

// Add to cart functionality
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-cart-btn, .product-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#28a745';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);

            // Update cart count (simplified)
            updateCartCount();
        });
    });
}

// Update cart count
function updateCartCount() {
    const cartCounts = document.querySelectorAll('.nav-icon-count');
    cartCounts.forEach(count => {
        const currentCount = parseInt(count.textContent) || 0;
        count.textContent = currentCount + 1;
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.category-card, .product-item, .feature-card, .promise-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    // Simple search implementation - scroll to products section
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                        productsSection.scrollIntoView({ behavior: 'smooth' });
                    }

                    // Clear search input
                    this.value = '';
                }
            }
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initGalleryScroll();
    initProductTabs();
    initSmoothScrolling();
    initNavbarScroll();
    initAddToCartButtons();
    initScrollAnimations();
    initSearch();

    // Set initial FAQ state
    const firstFaqItem = document.querySelector('.faq-item');
    if (firstFaqItem) {
        firstFaqItem.classList.add('active');
    }

    // Initialize video tour
    setCenterVideo(0);

    console.log('Narpavai Honey website initialized successfully!');
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Form validation for newsletter (if added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Product quantity selector functionality
function initQuantitySelectors() {
    const quantitySelects = document.querySelectorAll('.quantity-select');

    quantitySelects.forEach(select => {
        select.addEventListener('change', function() {
            const quantity = parseInt(this.value);
            const productCard = this.closest('.product-item');

            if (productCard) {
                // Update any quantity-dependent elements
                const addButton = productCard.querySelector('.add-cart-btn');
                if (addButton && quantity > 1) {
                    const originalText = addButton.getAttribute('data-original-text') || addButton.textContent;
                    addButton.setAttribute('data-original-text', originalText);
                    addButton.textContent = `ADD ${quantity} TO CART`;
                } else if (addButton) {
                    const originalText = addButton.getAttribute('data-original-text');
                    if (originalText) {
                        addButton.textContent = originalText;
                    }
                }
            }
        });
    });
}

// Initialize quantity selectors when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initQuantitySelectors();
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [tabindex]');

    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.tagName === 'BUTTON') {
                    e.preventDefault();
                    this.click();
                }
            }
        });
    });

    // Add aria-labels for screen readers
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.setAttribute('aria-label', 'Search products');
    }

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
    }
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with placeholder or hide the image
            this.style.display = 'none';
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
}

// Product navigation functionality
let currentProductIndex = 0;
const products = [
    {
        name: "Murungai Honey",
        price: "Rs. 300/-",
        image: "client/public/figmaAssets/untitled-design--58--3.png"
    },
    {
        name: "Malai Thaen",
        price: "Rs. 670/-",
        image: "client/public/figmaAssets/untitled-design--59--1.png"
    },
    {
        name: "Pure Honey",
        price: "Rs. 450/-",
        image: "client/public/figmaAssets/untitled-design--58--3-1.png"
    },
    {
        name: "Multi Flower Honey",
        price: "Rs. 550/-",
        image: "client/public/figmaAssets/untitled-design--58--3-2.png"
    }
];

function navigateProducts(direction) {
    const productCards = document.querySelectorAll('.product-card-enhanced');
    const totalProducts = products.length;
    
    if (direction === 'next') {
        currentProductIndex = (currentProductIndex + 1) % totalProducts;
    } else if (direction === 'prev') {
        currentProductIndex = (currentProductIndex - 1 + totalProducts) % totalProducts;
    }
    
    // Update the first product card
    if (productCards[0]) {
        const product = products[currentProductIndex];
        const nextProduct = products[(currentProductIndex + 1) % totalProducts];
        
        // Update first card
        const firstCard = productCards[0];
        const firstImage = firstCard.querySelector('.product-image-enhanced');
        const firstName = firstCard.querySelector('.product-name-enhanced');
        const firstPrice = firstCard.querySelector('.product-price-enhanced');
        
        if (firstImage) firstImage.src = product.image;
        if (firstName) firstName.textContent = product.name;
        if (firstPrice) firstPrice.textContent = product.price;
        
        // Update second card
        if (productCards[1]) {
            const secondCard = productCards[1];
            const secondImage = secondCard.querySelector('.product-image-enhanced');
            const secondName = secondCard.querySelector('.product-name-enhanced');
            const secondPrice = secondCard.querySelector('.product-price-enhanced');
            
            if (secondImage) secondImage.src = nextProduct.image;
            if (secondName) secondName.textContent = nextProduct.name;
            if (secondPrice) secondPrice.textContent = nextProduct.price;
        }
    }
}

// Export functions for potential external use
window.NarpavaiHoney = {
    toggleMobileMenu,
    closeMobileMenu,
    toggleFAQ,
    setCenterVideo,
    validateEmail,
    navigateProducts
};