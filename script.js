// Header scroll effect with smooth transition
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.market-item, .property-card, .testimonial, .stat-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Run animation check on scroll and on page load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Mobile menu toggle with elegant animation
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Close mobile menu when window is resized to desktop size
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Create images directory placeholder
const checkImagesExist = () => {
    console.log('Note: You need to create an "images" directory and add the following images:');
    console.log('- hero-bg.jpg (New York skyline background)');
    console.log('- nyc.jpg (New York City image)');
    console.log('- hamptons.jpg (The Hamptons image)');
    console.log('- miami.jpg (Miami image)');
    console.log('- team.jpg (Team photo)');
    console.log('- property1.jpg (Luxury property image 1)');
    console.log('- property2.jpg (Luxury property image 2)');
    console.log('- Press logos: mansion-global.png, observer.png, ny-insider.png, jerusalem-post.png, digital-journal.png');
};

// Run on page load
window.addEventListener('load', checkImagesExist);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Property slider functionality for index page
document.addEventListener('DOMContentLoaded', function() {
    // For featured properties in index.html
    const prevButton = document.querySelector('.property-navigation .nav-link:first-child');
    const nextButton = document.querySelector('.property-navigation .nav-link:last-child');
    const propertyCards = document.querySelectorAll('.property-grid .property-card');
    let currentPropertyIndex = 0;
    let propertyCount = propertyCards.length;
    
    // Function to update property display
    function updatePropertyDisplay() {
        // Hide all property cards first
        propertyCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show current property and next one (if available)
        if (currentPropertyIndex < propertyCount) {
            propertyCards[currentPropertyIndex].style.display = 'block';
        }
        
        if (currentPropertyIndex + 1 < propertyCount) {
            propertyCards[currentPropertyIndex + 1].style.display = 'block';
        }
    }

    if (prevButton && nextButton && propertyCards.length > 0) {
        // Initially show only the first two properties (or all if less than 2)
        updatePropertyDisplay();
        
        // Add event listeners to navigation buttons
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPropertyIndex > 0) {
                currentPropertyIndex -= 2;
                if (currentPropertyIndex < 0) currentPropertyIndex = 0;
                updatePropertyDisplay();
            }
        });
        
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPropertyIndex + 2 < propertyCount) {
                currentPropertyIndex += 2;
                updatePropertyDisplay();
            }
        });
        for (let i = 0; i < propertyCards.length; i++) {
            if (i >= 2) {
                propertyCards[i].style.display = 'none';
            }
        }
        
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (propertyCount <= 2) return; // No need to navigate if 2 or fewer properties
            
            // Hide current properties
            propertyCards[currentPropertyIndex].style.display = 'none';
            propertyCards[(currentPropertyIndex + 1) % propertyCount].style.display = 'none';
            
            // Calculate new index (move back by 2)
            currentPropertyIndex = (currentPropertyIndex - 2 + propertyCount) % propertyCount;
            
            // Show new properties
            propertyCards[currentPropertyIndex].style.display = 'block';
            propertyCards[(currentPropertyIndex + 1) % propertyCount].style.display = 'block';
        });
        
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (propertyCount <= 2) return; // No need to navigate if 2 or fewer properties
            
            // Hide current properties
            propertyCards[currentPropertyIndex].style.display = 'none';
            propertyCards[(currentPropertyIndex + 1) % propertyCount].style.display = 'none';
            
            // Calculate new index (move forward by 2)
            currentPropertyIndex = (currentPropertyIndex + 2) % propertyCount;
            
            // Show new properties
            propertyCards[currentPropertyIndex].style.display = 'block';
            propertyCards[(currentPropertyIndex + 1) % propertyCount].style.display = 'block';
        });
    }
    
    // For property-item elements (if they exist in other pages)
    const propertyControlsPrev = document.querySelector('.property-controls a:first-child');
    const propertyControlsNext = document.querySelector('.property-controls a:last-child');
    const propertyItems = document.querySelectorAll('.property-item');
    let currentItemIndex = 0;

    if (propertyControlsPrev && propertyControlsNext && propertyItems.length > 0) {
        // Initially hide all properties except the first one
        for (let i = 1; i < propertyItems.length; i++) {
            propertyItems[i].style.display = 'none';
        }
        
        propertyControlsPrev.addEventListener('click', (e) => {
            e.preventDefault();
            propertyItems[currentItemIndex].style.display = 'none';
            currentItemIndex = (currentItemIndex - 1 + propertyItems.length) % propertyItems.length;
            propertyItems[currentItemIndex].style.display = 'block';
        });
        
        propertyControlsNext.addEventListener('click', (e) => {
            e.preventDefault();
            propertyItems[currentItemIndex].style.display = 'none';
            currentItemIndex = (currentItemIndex + 1) % propertyItems.length;
            propertyItems[currentItemIndex].style.display = 'block';
        });
    }
});