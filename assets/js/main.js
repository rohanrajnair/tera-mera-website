/**
 * Tera Mera Restaurant Website - Main JavaScript Entry Point
 * Initializes all modules and handles global functionality
 */

// Import all modules
import './navigation.js';
import './animations.js';
import './utils.js';

/**
 * Main application class
 */
class TeraMeraApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupGlobalEventListeners();
        this.initializeComponents();
        this.setupPerformanceOptimizations();
    }

    setupGlobalEventListeners() {
        // Handle page load
        window.addEventListener('load', () => {
            this.onPageLoad();
        });

        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            this.onVisibilityChange();
        });

        // Handle window resize
        window.addEventListener('resize', this.debounce(() => {
            this.onWindowResize();
        }, 250));
    }

    initializeComponents() {
        // Add loading animation to menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // Initialize decoration animations
        this.animateDecorations();
    }

    setupPerformanceOptimizations() {
        // Preload critical images
        this.preloadImages();
        
        // Setup intersection observer for performance
        this.setupPerformanceObserver();
    }

    onPageLoad() {
        console.log('Tera Mera website loaded successfully');
        
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
        
        // Initialize any components that need full page load
        this.initializePostLoadComponents();
    }

    onVisibilityChange() {
        if (document.hidden) {
            // Page is hidden, pause animations
            this.pauseAnimations();
        } else {
            // Page is visible, resume animations
            this.resumeAnimations();
        }
    }

    onWindowResize() {
        // Handle responsive adjustments
        this.adjustForViewport();
    }

    initializePostLoadComponents() {
        // Components that need to wait for full page load
        const heroTagline = document.querySelector('.hero-tagline');
        if (heroTagline) {
            // Add any post-load hero animations here
        }
    }

    animateDecorations() {
        const motifs = document.querySelectorAll('.section-motif, .hero-motif, .logo-motif, .footer-motif');
        
        motifs.forEach((motif, index) => {
            motif.style.animationDelay = `${index * 0.5}s`;
            motif.style.animation = 'rotate 20s linear infinite';
        });
    }

    preloadImages() {
        const criticalImages = [
            'assets/images/logo-clean.png',
            'assets/images/food.jpg',
            'assets/images/cheers.jpg',
            'assets/images/exterior-hero.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    setupPerformanceObserver() {
        // Monitor performance and adjust accordingly
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'navigation') {
                        console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
                    }
                }
            });
            observer.observe({ entryTypes: ['navigation'] });
        }
    }

    pauseAnimations() {
        document.body.style.animationPlayState = 'paused';
    }

    resumeAnimations() {
        document.body.style.animationPlayState = 'running';
    }

    adjustForViewport() {
        // Handle viewport-specific adjustments
        const isMobile = window.innerWidth <= 768;
        document.body.classList.toggle('mobile', isMobile);
    }

    debounce(func, wait) {
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
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TeraMeraApp();
});

// Export for potential module usage
export default TeraMeraApp;
