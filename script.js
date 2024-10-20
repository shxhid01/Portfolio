document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#about').classList.add('active');
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section ID
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        targetSection.classList.add('active');
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});