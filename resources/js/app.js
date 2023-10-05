import '../css/app.css';
import './bootstrap';

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
