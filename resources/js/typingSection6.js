var typed = new Typed(".autotype",{
    strings: ["Some of my Soft S^1000kills"],
    backDelay: 10000,
    startDelay: 12000,
    typeSpeed: 100,
    showCursor: false,


    onTypingPaused: () => {
        const searchlistcard = document.getElementById('searchlistcard');
        searchlistcard.classList.add('appear');
        console.log('card')
    },


    onTypingResumed: () => {
        const searchlist1 = document.getElementById('searchlist1');
        const searchlist2 = document.getElementById('searchlist2');
        const searchlist3 = document.getElementById('searchlist3');
        const searchlist4 = document.getElementById('searchlist4');
        searchlist1.classList.add('appear');
        searchlist2.classList.add('appear');
        searchlist3.classList.add('appear');
        searchlist4.classList.add('appear');
        console.log('first 4')
    },

    onComplete: () => {
        const searchlist5 = document.getElementById('searchlist5');
        const searchlist6 = document.getElementById('searchlist6');
        const searchlist7 = document.getElementById('searchlist7');
        const searchlist8 = document.getElementById('searchlist8');
        searchlist5.classList.add('appear');
        searchlist6.classList.add('appear');
        searchlist7.classList.add('appear');
        searchlist8.classList.add('appear');
        console.log('last 4')
    }
})


const fadeout = document.getElementById('fade-out');
const fadein = document.getElementById('fade-in');
// const fadeinbody = document.getElementById('fade-in-body');
// Function to check if the element is in the viewport and adjust opacity accordingly
function checkVisibility() {
    const fadeRect = fadeout.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (fadeRect.top < windowHeight && fadeRect.bottom >= 0) {
        // Element is in the viewport, so set its opacity to 1 (fade-in)
        fadeout.classList.add('fade-out');
        fadein.classList.add('fade-in');
        // fadeinbody.classList.add('autotype');
        // typed.start();
        setTimeout(() => {
            // fadein.classList.add('fade-in');
            typed.start();
        }, 4000);
        console.log('here');
    } else {
        // Element is not in the viewport, so set its opacity to 0 (hidden)
        // sectionTitle1.style.opacity = '0';
    }
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
window.addEventListener('resize', checkVisibility);
// Initial check
checkVisibility();
