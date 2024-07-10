document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    for (let link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset for sticky header
                    behavior: "smooth"
                });
            }
        });
    }

    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // You can add your own form submission logic here, like sending data to a server
        
        // Example: Logging form data to console
        const formData = new FormData(form);
        console.log('Form Data:', formData);
        
        // Clear the form after submission (optional)
        form.reset();
        
        // Display a confirmation message or redirect to a thank you page (optional)
        alert('Thank you for your message!');
    });
});
