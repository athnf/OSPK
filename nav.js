// Burger Menu Toggle
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Navbar Hide/Show on Scroll
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = "translateY(0)";
        return;
    }
    
    if (currentScroll > lastScroll && !mobileMenu.classList.contains('hidden')) {
        // Scrolling down & menu is open
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & past threshold
        navbar.style.transform = "translateY(-100%)";
    } else {
        // Scrolling up
        navbar.style.transform = "translateY(0)";
    }
    
    lastScroll = currentScroll;
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.getElementsByTagName('a');
Array.from(mobileLinks).forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        burgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Close mobile menu when resizing to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        mobileMenu.classList.add('hidden');
        burgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});