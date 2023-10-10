import '../css/app.css';
import './bootstrap';
import './cardreveal';
import './showsides';
import './timeline';
import './typingSection6';


const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
const fadeInRightElements = document.querySelectorAll('.fade-in-right');
const fadeInUpElements = document.querySelectorAll('.fade-in-up');
const fadeInDownElements = document.querySelectorAll('.fade-in-down');

// Function to check if the element is in the viewport and adjust opacity accordingly
function checkVisibility() {
    fadeInLeftElements.forEach(function (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
            // Element is in the viewport, so set its opacity to 0 (fade-out)
            element.classList.add('fade-in-left');
        } else {
            // Element is not in the viewport, so set its opacity to 1 (visible)
            element.classList.remove('fade-in-left');
        }
    });

    fadeInRightElements.forEach(function (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
            // Element is in the viewport, so set its opacity to 0 (fade-out)
            element.classList.add('fade-in-right');
        } else {
            // Element is not in the viewport, so set its opacity to 1 (visible)
            element.classList.remove('fade-in-right');
        }
    });

    fadeInUpElements.forEach(function (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
            // Element is in the viewport, so set its opacity to 0 (fade-out)
            element.classList.add('fade-in-up');
        } else {
            // Element is not in the viewport, so set its opacity to 1 (visible)
            element.classList.remove('fade-in-up');
        }
    });

    fadeInDownElements.forEach(function (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
            // Element is in the viewport, so set its opacity to 0 (fade-out)
            element.classList.add('fade-in-down');
        } else {
            // Element is not in the viewport, so set its opacity to 1 (visible)
            element.classList.remove('fade-in-down');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initial check
checkVisibility();
