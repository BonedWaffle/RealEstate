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

// Simple property slider functionality
const prevButton = document.querySelector('.property-controls a:first-child');
const nextButton = document.querySelector('.property-controls a:last-child');
const propertyItems = document.querySelectorAll('.property-item');
let currentPropertyIndex = 0;

if (prevButton && nextButton && propertyItems.length > 0) {
    // Initially hide all properties except the first one
    for (let i = 1; i < propertyItems.length; i++) {
        propertyItems[i].style.display = 'none';
    }
    
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        propertyItems[currentPropertyIndex].style.display = 'none';
        currentPropertyIndex = (currentPropertyIndex - 1 + propertyItems.length) % propertyItems.length;
        propertyItems[currentPropertyIndex].style.display = 'block';
    });
    
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        propertyItems[currentPropertyIndex].style.display = 'none';
        currentPropertyIndex = (currentPropertyIndex + 1) % propertyItems.length;
        propertyItems[currentPropertyIndex].style.display = 'block';
    });
}