// ========================================
// Theme Management
// ========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ========================================
// Navigation
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
    });
});

// Active link highlighting based on scroll position
const sections = document.querySelectorAll('.section, .hero');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Hero Roles Animation (Typed Effect)
// ========================================
const roleText = document.querySelector('.role-text');
const roles = [
    'Deep Learning Engineer',
    'Full-Stack Developer',
    'Cloud Architect',
    'AI/ML Researcher',
    'Problem Solver'
];

let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
        roleText.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        roleText.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && currentCharIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation after page load
setTimeout(typeRole, 1000);

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll reveal animations
const animatedElements = document.querySelectorAll(
    '.about-text, .education-card, .timeline-item, .project-card, ' +
    '.skill-category, .cert-card, .achievement-card, .contact-item, .contact-form'
);

animatedElements.forEach(el => observer.observe(el));

// ========================================
// Contact Form Validation & Submission
// ========================================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const honeypotInput = document.getElementById('website');
const formSuccess = document.getElementById('formSuccess');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Real-time validation
nameInput.addEventListener('blur', () => {
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Please enter a valid name (at least 2 characters)';
        nameInput.style.borderColor = '#ef4444';
    } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '';
    }
});

emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderColor = '#ef4444';
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '';
    }
});

messageInput.addEventListener('blur', () => {
    if (!validateMessage(messageInput.value)) {
        messageError.textContent = 'Please enter a message (at least 10 characters)';
        messageInput.style.borderColor = '#ef4444';
    } else {
        messageError.textContent = '';
        messageInput.style.borderColor = '';
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    // Honeypot check (spam prevention)
    if (honeypotInput.value !== '') {
        console.log('Spam detected');
        return;
    }
    
    // Validate all fields
    let isValid = true;
    
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Please enter a valid name (at least 2 characters)';
        nameInput.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    if (!validateMessage(messageInput.value)) {
        messageError.textContent = 'Please enter a message (at least 10 characters)';
        messageInput.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    if (isValid) {
        // In a real application, you would send the data to a server here
        // For this static site, we'll just show a success message
        
        // Simulate form submission
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        
        // Show success message
        formSuccess.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
    }
});

// ========================================
// Performance Optimizations
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations if needed
// (Currently not needed but can be used for optimization)

// ========================================
// Accessibility Enhancements
// ========================================

// Focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add keyboard navigation styles
const style = document.createElement('style');
style.textContent = `
    body:not(.keyboard-nav) *:focus {
        outline: none;
    }
    
    body.keyboard-nav *:focus {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ========================================
// Initial Page Load Enhancements
// ========================================
window.addEventListener('load', () => {
    // Remove any loading state
    document.body.classList.add('loaded');
    
    // Start animations
    console.log('Portfolio loaded successfully');
});

// Preload critical images
const preloadImages = [
    'assets/images/profile-placeholder.jpg',
    'assets/images/project-revival-ai.jpg',
    'assets/images/project-career-guidance.jpg'
];

preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
});
