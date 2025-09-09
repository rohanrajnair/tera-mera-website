/**
 * Animation utilities for Tera Mera website
 * Handles scroll animations, parallax effects, and interactive elements
 */

class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallaxEffects();
        this.setupHoverEffects();
        this.setupTypingEffect();
        this.setupScrollProgress();
        this.setupFloatingButton();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll(
                '.menu-category, .hours-card, .contact-item, .about-text, .about-image'
            );
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
    }

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroPattern = document.querySelector('.hero-pattern');
            if (heroPattern) {
                heroPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.menu-category, .hours-card, .contact-item').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    setupTypingEffect() {
        // Removed typing effect for more natural feel
    }

    setupScrollProgress() {
        // Removed scroll progress bar for cleaner, more natural feel
    }

    setupFloatingButton() {
        const floatingBtn = document.createElement('button');
        floatingBtn.innerHTML = '↑';
        floatingBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
            transition: all 0.2s ease;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            font-size: 16px;
            font-weight: 300;
        `;
        
        floatingBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        floatingBtn.addEventListener('mouseenter', () => {
            floatingBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        floatingBtn.addEventListener('mouseleave', () => {
            floatingBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        document.body.appendChild(floatingBtn);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                floatingBtn.style.opacity = '1';
                floatingBtn.style.transform = 'translateY(0)';
            } else {
                floatingBtn.style.opacity = '0';
                floatingBtn.style.transform = 'translateY(20px)';
            }
        });
    }

    animateDecorations() {
        const motifs = document.querySelectorAll('.section-motif, .hero-motif, .logo-motif, .footer-motif');
        
        motifs.forEach((motif, index) => {
            motif.style.animationDelay = `${index * 0.5}s`;
            motif.style.animation = 'rotate 20s linear infinite';
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
});
