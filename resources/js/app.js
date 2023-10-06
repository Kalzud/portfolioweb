import '../css/app.css';
import './bootstrap';
import './timeline';







// app.js

// import { Timeline } from './timeline.js';

// // Now you can use the Timeline class in app.js
// const timelineContainers = document.querySelectorAll('.timeline-container');

// timelineContainers.forEach((container) => {
//   const timeline = new Timeline('.timeline', container);
// });













































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



// "use strict"; //enables strict mode so as to catch coding mistakes and unsafe actions and throw errors

// //this function would act as a universal function making query selection
// // easier it would take two arguments the slector(class) as first argument and
// // then the all which is set to default false as second argument.
// // if all = false then the function uses querySelector accepting just a single which is the first element with the selector class
// //but if all = true then the function uses the querySelectorAll to takes mulitple elements on that page that have the slector class
// function qs(selector, all = false) {
//   return all ? document.querySelectorAll(selector) : document.querySelector(selector);
// }
// //assigning all the selected queries to constants,
// // note the true in the section qs selects all elements with class section and puts it in a node list
// const sections = qs('.section', true);
// const timeline = qs('.timeline');
// const line = qs('.line', true);
// line.style.bottom = `calc(100% - 20px)`; //puts line bottom 20 pixels below container bottom
// let prevScrollY = window.scrollY; //initilise a variable prevScrollY with the current scroll position of the window
// let up, down; //this variables would be used to decide if the user is scrolling up or down
// let full = false; //this variable would be used to determine if a scroll distance has been met it is initially set to false
// let set = 0;//this variable is going to be used to hold a value used in scrolling effect
// const targetY = window.innerHeight * .8; //this variabl ewould be used for comparison in scroll handler, it is set to 80 percent of window innerheight (visible area on browser)

// function scrollHandler(e) {
//   const {scrollY} = window; //uses destructing assignment to etract the scrollY (thats the vertical position on page) property from the window
//   up = scrollY < prevScrollY;// if the scrollY position is less that the prevScrollY (which was the initial scroll position) that would mean the user is scrolling up (remember the y axis starts from 0 and increases downwards)
//   down = !up;
//   const timelineRect = timeline.getBoundingClientRect();
// //   const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

//   const dist = targetY - timelineRect.top;
//   console.log(dist);


//     if (down && !full) {
//         set = Math.max(set, dist);
//         line.style.bottom = `calc(100% - ${set}px)`;
//     }

//     if (dist > timeline.offsetHeight + 50 && !full) {
//         full = true;
//         line.style.bottom = `-50px`;
//     }



//   sections.forEach(item => {
//     // console.log(item);
//     const rect = item.getBoundingClientRect(); //     console.log(rect);

//     if (rect.top + item.offsetHeight / 5 < targetY) {
//       item.classList.add('show-me');
//     }
//   }); // console.log(up, down);

//   prevScrollY = window.scrollY;
// }

// scrollHandler();
// line.style.display = 'block';
// window.addEventListener('scroll', scrollHandler);
