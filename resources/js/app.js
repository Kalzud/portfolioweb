import '../css/app.css';
import './bootstrap';





{/* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script> */}

    // var typed = new Typed(".autotype",{
    //     strings: ["Hello, I'm Emmanuel Okala Uduma 🚀, a passionate and"+
    //                 "self-motivated software engineering student based in the United Kingdom 🇬🇧."+
    //                 " My journey into the world of software development began about three years ago,"+
    //                 "and it has been a thrilling adventure ever since."],
    //     typeSpeed: 10,
    //     // loop: true
    // })


// //Function for hidden elements animations when they are visible in DOM viewport
// function observeHiddenElements() {
//     /*intersection observer would take a callback function as an arguments
//     and would be invoked whenever an observed element enters or exists the viewport*/
//     const observer = new IntersectionObserver((entries) => {
//         /*entries contain objects observed and information about them like visibility etc.
//         with the for each it iterates through the objects
//          */
//         entries.forEach((entry) => {
//             // for each it checks its isIntersecting property (is it visible to the viewport)
//             if (entry.isIntersecting) {
//                 // if it is visible it applies the show css to the element (entry.target)
//                 entry.target.classList.add('show');
//             } else {
//                 //else it would remove it so the normal hidden css is applied (entry.target)
//                 entry.target.classList.remove('show');
//             }
//         });
//     });
//     //gets all the elements with the hidden className
//     const hiddenElements = document.querySelectorAll('.hidden');
//     //iterates through all this elements and observes using the intersectionObserver
//     hiddenElements.forEach((el) => observer.observe(el));

//     // //for animation from right side
//     // const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
//     // hiddenElementsRight.forEach((el) => observer.observe(el));
// }



"use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const {
    scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach(item => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add('show-me');
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);
