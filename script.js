document.addEventListener('DOMContentLoaded', function() {
    // Set the 'About' section as active by default
    document.querySelector('#about').classList.add('active');

    // Add click event listeners to all navbar links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Remove 'active' class from all sections
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Add 'active' class to the target section
                targetSection.classList.add('active');

                // Smooth scroll to the target section
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});