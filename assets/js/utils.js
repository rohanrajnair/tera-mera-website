/**
 * Utility functions for Tera Mera website
 * Performance optimizations, lazy loading, and helper functions
 */

class Utils {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.setupClickToCopy();
        this.setupDebouncedScroll();
        this.setupServiceWorker();
    }

    setupLazyLoading() {
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

    setupClickToCopy() {
        const phoneElement = document.querySelector('.contact-item:nth-child(2) p');
        if (phoneElement) {
            phoneElement.style.cursor = 'pointer';
            phoneElement.title = 'Click to copy';
            
            phoneElement.addEventListener('click', () => {
                const phoneNumber = phoneElement.textContent;
                navigator.clipboard.writeText(phoneNumber).then(() => {
                    // Show temporary feedback
                    const originalText = phoneElement.textContent;
                    phoneElement.textContent = 'Copied!';
                    phoneElement.style.color = 'var(--teal-primary)';
                    
                    setTimeout(() => {
                        phoneElement.textContent = originalText;
                        phoneElement.style.color = '';
                    }, 2000);
                });
            });
        }
    }

    setupDebouncedScroll() {
        // Performance optimization: Debounce scroll events
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

        // Apply debouncing to scroll events
        const debouncedScrollHandler = debounce(() => {
            // Scroll-based animations and effects
        }, 10);

        window.addEventListener('scroll', debouncedScrollHandler);
    }

    setupServiceWorker() {
        // Add service worker registration for PWA capabilities (optional)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Utility functions
    static formatPhoneNumber(phoneNumber) {
        const cleaned = phoneNumber.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumber;
    }

    static formatAddress(address) {
        return address.replace(/\n/g, ', ');
    }

    static isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static getRandomDelay(min = 0, max = 1000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static addLoadingAnimation(element, duration = 1000) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, this.getRandomDelay(0, 200));
    }
}

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Utils();
});
