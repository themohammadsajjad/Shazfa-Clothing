// Email Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email-input');
    const successMessage = document.getElementById('success-message');
    const inputBorder = document.querySelector('.input-border');

    // Update input border on input change
    emailInput.addEventListener('input', function() {
        if (emailInput.value) {
            inputBorder.style.width = '100%';
        } else {
            inputBorder.style.width = '0%';
        }
    });

    // Form submission
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        
        if (email) {
            // Hide form and show success message
            emailForm.style.display = 'none';
            successMessage.style.display = 'flex';
            
            // Reset form after 3 seconds
            setTimeout(function() {
                emailForm.style.display = 'flex';
                successMessage.style.display = 'none';
                emailInput.value = '';
                inputBorder.style.width = '0%';
            }, 3000);
        }
    });

    // Parallax effect for background decorations
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        updateParallax();
    });

    window.addEventListener('scroll', function() {
        scrollY = window.scrollY;
        updateParallax();
    });

    function updateParallax() {
        const circle1 = document.querySelector('.circle-1');
        const circle2 = document.querySelector('.circle-2');
        const geoSquare = document.querySelector('.geometric-square');
        const geoCircle = document.querySelector('.geometric-circle');

        if (circle1) {
            const translateX1 = mouseX * 0.02;
            const translateY1 = scrollY * 0.2 + mouseY * 0.02;
            circle1.style.transform = `translate(${translateX1}px, ${translateY1}px)`;
        }

        if (circle2) {
            const translateX2 = -mouseX * 0.01;
            const translateY2 = -scrollY * 0.3 - mouseY * 0.01;
            circle2.style.transform = `translate(${translateX2}px, ${translateY2}px)`;
        }

        if (geoSquare) {
            const scale1 = 1 + scrollY * 0.0005;
            geoSquare.style.transform = `rotate(45deg) scale(${scale1})`;
        }

        if (geoCircle) {
            const scale2 = 1 + scrollY * 0.0003;
            geoCircle.style.transform = `scale(${scale2})`;
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation classes on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animateElements = document.querySelectorAll('.stat-item, .contact-item, .social-icon');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Email validation
    emailInput.addEventListener('blur', function() {
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue && !emailPattern.test(emailValue)) {
            emailInput.style.borderBottomColor = '#ff4444';
        } else if (emailValue) {
            emailInput.style.borderBottomColor = '#b76e79';
        } else {
            emailInput.style.borderBottomColor = '#e0e0e0';
        }
    });

    // WhatsApp button tooltip visibility
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('.whatsapp-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
            }
        });

        whatsappBtn.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.whatsapp-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    }

    // Add loading state to submit button
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        emailForm.addEventListener('submit', function(e) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 3000);
        });
    }

    // Prevent form resubmission on page refresh
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // Initialize parallax on load
    updateParallax();
});

// Performance optimization: debounce scroll and mousemove events
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

// Optional: Add console message
console.log('%cShazfa Clothing', 'font-size: 24px; font-weight: bold; color: #b76e79;');
console.log('%cComing Soon 2026', 'font-size: 14px; color: #666666;');
