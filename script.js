document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap Carousel initialization (already there, just for context)
    var myCarousel = document.querySelector('#heroCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Adjust slider interval as needed (e.g., 5 seconds)
        wrap: true
    });

    // Function to animate the counter
    const animateCounter = (element, target) => {
        let current = 0;
        const duration = 2000; // 2 seconds for animation
        const increment = target / (duration / 10); // Calculate increment for smoother animation

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target; // Ensure it doesn't overshoot
                element.textContent = Math.floor(current).toLocaleString(); // Format with commas
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString(); // Ensure final value is accurate
            }
        };
        requestAnimationFrame(updateCounter);
    };

    // Get all elements with the 'counter-value' class
    const counterElements = document.querySelectorAll('.counter-value');

    // Loop through each counter element and start the animation
    counterElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        if (!isNaN(target)) { // Ensure target is a valid number
            // Start counting when the page loads
            animateCounter(element, target);
        }
    });

});