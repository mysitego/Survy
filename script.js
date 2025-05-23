// script.js for MoGraphic Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links that point to page sections
    // These are expected to be <a> tags within <nav> <ul> <li>
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default anchor click behavior
            event.preventDefault();

            // Get the target element's ID from the link's href attribute
            // The href attribute is expected to be like "#about", "#services", etc.
            const targetId = this.getAttribute('href');

            // Find the target element on the page
            // Check if targetId is not just "#" (which can link to top of page)
            if (targetId && targetId.length > 1) {
                try {
                    const targetElement = document.querySelector(targetId);

                    // If the target element exists, scroll to it smoothly
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    } else {
                        // Log an error if the target element doesn't exist
                        console.warn('Smooth scroll target not found for ID:', targetId);
                    }
                } catch (error) {
                    // Log an error if querySelector fails (e.g., invalid ID syntax)
                    // Though with href^="#", this is less likely for valid HTML IDs.
                    console.error('Error finding smooth scroll target:', targetId, error);
                }
            } else if (targetId === '#') {
                // Handle links that are just "#" - scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});
