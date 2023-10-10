// Function to handle the card reveal animation
function revealCards(cards) {
    cards.forEach(function (card, index) {
        setTimeout(function () {
            card.style.transform = 'translateX(0)';
            card.style.opacity = '1';

            card.addEventListener('mouseenter', function () {
                card.style.transform = 'scale(1.5)'; // Expand on hover
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = 'scale(1)'; // Return to normal size on hover out
            });

        }, index * 500); // Adjust the delay as needed (500ms = 0.5 seconds)
    });
}

// Use Intersection Observer to trigger the reveal when the section is in the viewport
const section = document.querySelector('.hobbies');
const cards = section.querySelectorAll('.card-hidden');

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            observer.unobserve(section); // Stop observing once the section is in view
            revealCards(cards);
        }
    });
}, {
    threshold: 0.1 // Adjust this threshold as needed to trigger the animation earlier or later
});

observer.observe(section);
