document.addEventListener('DOMContentLoaded', function() {
    // ===== Mobile Navigation =====
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.getElementById('nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.add('active');
        });
    }
    
    if (navClose && navLinks) {
        navClose.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    }
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // ===== Loading Animation =====
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    });

    // ===== Dark Mode Toggle ===== (Safe Implementation)
    if (!document.querySelector('.dark-mode-toggle')) {
        const darkToggle = document.createElement('div');
        darkToggle.className = 'dark-mode-toggle';
        darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
        
        if (document.body) {
            document.body.appendChild(darkToggle);
            
            darkToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const icon = darkToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-moon');
                    icon.classList.toggle('fa-sun');
                }
            });
        }
    }
});