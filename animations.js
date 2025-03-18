// Enhanced animations for Patient Dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the main header
    const header = document.querySelector('.header h1');
    typeWriter(header, 'MyHealth Dashboard', 100);
    
    // Add intersection observer for section animations
    const sections = document.querySelectorAll('.animate-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Add floating animation to emergency contact
    const emergencyContact = document.querySelector('.emergency-contact');
    if (emergencyContact) {
        emergencyContact.addEventListener('mouseenter', () => {
            emergencyContact.style.transform = 'translateY(-5px)';
        });
        emergencyContact.addEventListener('mouseleave', () => {
            emergencyContact.style.transform = 'translateY(0)';
        });
    }
    
    // Add hover effects to medical history items
    const medHistoryItems = document.querySelectorAll('#medical-history div');
    medHistoryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });
    
    // Animate sidebar links
    const sidebarLinks = document.querySelectorAll('aside a');
    sidebarLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.3s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 300 + (index * 100));
    });
    
    // Add progress bar for page scroll
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#3498db';
    progressBar.style.zIndex = '1000';
    progressBar.style.width = '0%';
    progressBar.style.transition = 'width 0.2s ease';
    document.body.appendChild(progressBar);
    
    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = `${scrollProgress}%`;
    });
    
    // Add notification animation
    const createNotification = () => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#2ecc71';
        notification.style.color = 'white';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.5s ease';
        notification.innerHTML = '<i class="fas fa-bell"></i> Your health data has been updated';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 500);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(100px)';
            notification.style.opacity = '0';
        }, 4000);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 4500);
    };
    
    // Show notification after 3 seconds
    setTimeout(createNotification, 3000);
});

// Typing effect for the main header
function typeWriter(element, text, speed = 100) {
    const icon = element.querySelector('i').outerHTML; // Save the icon HTML
    let i = 0;
    element.innerHTML = icon; // Reset to just the icon
    function type() {
        if (i < text.length) {
            element.innerHTML = icon + ' ' + text.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections with animate-section class
document.querySelectorAll('.animate-section').forEach(section => {
    observer.observe(section);
});

// Floating animation for emergency contact
const emergencyContact = document.querySelector('.emergency-contact');
if (emergencyContact) {
    emergencyContact.addEventListener('mouseenter', () => {
        emergencyContact.style.transform = 'translateY(-5px)';
    });
    emergencyContact.addEventListener('mouseleave', () => {
        emergencyContact.style.transform = 'translateY(0)';
    });
}

// Hover effects for medical history items
document.querySelectorAll('.history-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
});

// Animate sidebar links
document.querySelectorAll('.sidebar-links a').forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateX(-20px)';
    setTimeout(() => {
        link.style.transition = 'all 0.3s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
    }, index * 100);
});

// Progress bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Form validation and submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Validate form
        let isValid = true;
        this.querySelectorAll('input[required], select[required]').forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span> Processing...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Update summary table
            Object.entries(data).forEach(([key, value]) => {
                const summaryElement = document.getElementById(`summary${key.charAt(0).toUpperCase() + key.slice(1)}`);
                if (summaryElement) {
                    summaryElement.textContent = value;
                }
            });

            // Show summary
            document.getElementById('appointmentSummary').classList.add('visible');

            // Reset form
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Show success message
            showNotification('Appointment booked successfully!', 'success');

            // Scroll to summary
            document.getElementById('appointmentSummary').scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });
}

// Mobile sidebar toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current section in sidebar
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection); 