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



$(document).ready(function () {
    // Function to show/hide the corresponding card divs on hover
    $(".service1").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden1").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden1").hide();
    });
    $(".service2").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden2").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden2").hide();
    });
    $(".service3").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden3").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden3").hide();
    });
    $(".service4").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden4").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden4").hide();
    });
    $(".service5").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden5").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden5").hide();
    });
    $(".service6").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden6").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden6").hide();
    });
    $(".service7").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden7").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden7").hide();
    });
    $(".service8").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden8").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden8").hide();
    });
    $(".service9").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden9").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden9").hide();
    });
    $(".service10").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden10").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden10").hide();
    });
    $(".service11").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden11").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden11").hide();
    });
    $(".service12").hover(function () {
        // Show the corresponding hidden card
        $(".servicehidden12").show();
    }, function () {
        // Hide the corresponding hidden card when mouse leaves
        $(".servicehidden12").hide();
    });
});
