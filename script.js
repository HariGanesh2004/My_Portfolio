// Mobile Navigation Menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');

    function openMobileMenu() {
        mobileMenuToggle.classList.add('active');
        navMenu.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Close mobile menu when clicking the close button
    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Close mobile menu when clicking the overlay
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', function() {
            closeMobileMenu();
        });
    }

    // Prevent closing when clicking inside the menu
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Typing animation for home section
    function typeText(elementId, text, speed = 100) {
        const el = document.getElementById(elementId);
        let i = 0;
        function typing() {
            if (i <= text.length) {
                el.textContent = text.substring(0, i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }
    typeText('typing-text', "Hello, I'm Hari Prasath", 90);
});

// Scroll Animation Logic
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

animatedElements.forEach(element => {
    observer.observe(element);
});

const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('sidebarOverlay');

sidebarToggle.onclick = function() {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
};

overlay.onclick = function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
};

// Reveal cards on scroll
const cards = document.querySelectorAll('.card');
const revealOnScroll = () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById('darkModeToggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
};

document.querySelectorAll('.skill-item').forEach((item, idx) => {
  item.style.animationDelay = `${idx * 0.1}s`;
});

document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.querySelector('.skills-wheel');
    if (wheel) {
        const items = wheel.querySelectorAll('.skill-item');
        const total = items.length;
        const radius = 140;
        items.forEach((item, i) => {
            const angle = (i / total) * 2 * Math.PI;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            item.style.left = `calc(50% + ${x}px)`;
            item.style.top = `calc(50% + ${y}px)`;
        });
    }
});