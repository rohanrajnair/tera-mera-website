/**
 * Navigation functionality for Tera Mera website
 * Handles mobile menu, smooth scrolling, and navbar effects
 */

class Navigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupNavbarScrollEffect();
        this.setupKeyboardNavigation();
    }

    setupMobileMenu() {
        if (!this.hamburger || !this.navMenu) return;

        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('open');
            this.navMenu.classList.toggle('active');

            // Accessibility: toggle aria-expanded
            const expanded = this.hamburger.classList.contains('open');
            this.hamburger.setAttribute('aria-expanded', expanded);
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('open');
                this.navMenu.classList.remove('active');
                this.hamburger.setAttribute('aria-expanded', false);
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupNavbarScrollEffect() {
        if (!this.navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                // Slightly transparent teal with shadow
                this.navbar.style.background = 'rgba(0, 128, 128, 0.95)';
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                // Solid teal at the top
                this.navbar.style.background = 'var(--teal-primary)';
                this.navbar.style.boxShadow = 'none';
            }
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu if open
                if (this.hamburger && this.navMenu) {
                    this.hamburger.classList.remove('open');
                    this.navMenu.classList.remove('active');
                    this.hamburger.setAttribute('aria-expanded', false);
                }
            }
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
