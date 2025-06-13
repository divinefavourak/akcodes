const darkModeToggle = document.createElement('div');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = darkModeToggle.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
document.body.appendChild(darkModeToggle); 
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = scrollPercentage + '%';
});
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden'); // Hides the loader after page fully loads
});
// Loader timeout (force hide after 3s even if page isn't fully loaded)
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    }, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
    // ===== Mobile Navigation Toggle =====
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.getElementById('nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.add('active');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    }
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // ===== Loading Animation =====
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loader = document.querySelector('.loader');
            if (loader) loader.style.display = 'none';
        }, 1000);
    });

    // ===== Project Filtering ===== (if you have projects page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.dataset.filter;
            
            projectCards.forEach(card => {
                card.style.display = (filterValue === 'all' || card.dataset.category === filterValue) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
});