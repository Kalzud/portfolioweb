import '../css/app.css';
import './bootstrap';
import './cardreveal';
import './showservices';
import './showsides';
import './timeline';
import './typingSection6';

// Get the container element
var codeContainer = document.querySelector('.code-container');

// Define the content as a string
var codeContent = `
<span style="color: #808080;"><</span><span style="color: #007bff;">div</span> <span style="color: #ADD8E6;">class</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"card-title aboutMeHeading"</span> <span style="color: #ADD8E6;">style</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"font-size: xx-large;"</span><span style="color: #808080;">></span><span style="color: #FFFFFF;">About Me 😊</span><span style="color: #808080;"><</span><span style="color: #808080;">/</span><span style="color: #007bff;">div</span><span style="color: #808080;">></span>
<span style="color: #808080;"><</span><span style="color: #007bff;">div</span> <span style="color: #ADD8E6;">class</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"card-text"</span><span style="color: #808080;">></span><span style="color: #FFFFFF;">Hello, I'm <h4>Emmanuel Okala Uduma 🚀</h4>, and welcome to my portfolio</span><span style="color: #808080;"><</span><span style="color: #808080;">/</span><span style="color: #007bff;">div</span><span style="color: #808080;">></span>
<span style="color: #808080;"><</span><span style="color: #007bff;">div</span> <span style="color: #ADD8E6;">class</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"card-title"</span><span style="color: #808080;">></span><span style="color: #FFFFFF;">💡 The Hopeful end goal</span><span style="color: #808080;"><</span><span style="color: #808080;">/</span><span style="color: #007bff;">div</span><span style="color: #808080;">></span>
<span style="color: #808080;"><</span><span style="color: #007bff;">div</span> <span style="color: #ADD8E6;">class</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"card-text"</span><span style="color: #808080;">></span><span style="color: #FFFFFF;">Hopefully this is the beginning of a love story between my skills and the realization of your project.</span><span style="color: #808080;"><</span><span style="color: #808080;">/</span><span style="color: #007bff;">div</span><span style="color: #808080;">></span>
<span style="color: #808080;"><</span><span style="color: #007bff;">div</span> <span style="color: #ADD8E6;">class</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"card-title"</span><span style="color: #808080;">></span><span style="color: #FFFFFF;">🌟 Thanks</span><span style="color: #808080;"><</span><span style="color: #808080;">/</span><span style="color: #007bff;">div</span><span style="color: #808080;">></span>
<span style="color: #808080;"><</span><span style="color: #007bff;">div</span> <span style="color: #ADD8E6;">class</span><span style="color: #FFFFFF;">=</span><span style="color: #FF0000;">"card-text"</span><span style="color: #808080;">></span><span style="color: #FFFFFF;">Thank you for visiting, and I look forward to connecting with you! 🌟 Let's code the future together! 🌟</span><span style="color: #808080;"><</span><span style="color: #808080;">/</span><span style="color: #007bff;">div</span><span style="color: #808080;">></span>
`;

// Set the content of the container without interpreting HTML tags
codeContainer.innerHTML = codeContent;

var typed1 = new Typed(".autotype1", {
    strings: [
        '        <div class="card-title aboutMeHeading" style="font-size: xx-large;">About Me 😊</div>' +
        '        <div class="card-text">' +
        '            Hello, I\'m <h4>Emmanuel Okala Uduma 🚀</h4>, a passionate and' +
        '            self-motivated software engineering student based in the United Kingdom 🇬🇧.' +
        '            My journey into the world of software development began about three years ago,' +
        '            and it has been a thrilling adventure ever since.' +
        '        </div>' +
        '        <div class="card-title">💡 My Story:</div>' +
        '        <div class="card-text">' +
        '            The spark that ignited my passion for software development came when' +
        '            I was tasked with building my first social media web application as' +
        '            a school project. What started as a simple assignment soon became an' +
        '            all-consuming obsession. The thrill of creating something from scratch,' +
        '            with the power to impact the real world, was simply irresistible.' +
        '        </div>' +
        '        <div class="card-title">🌟 My Journey So Far:</div>' +
        '        <div class="card-text">' +
        '            Since those early days, I\'ve dabbled in a wide array of software development' +
        '            projects,' +
        '            ranging from Android applications to cross-platform solutions, web applications,' +
        '            desktop games, and more. With each project, my confidence grew,' +
        '            and I found myself eagerly taking on collaborative freelance work,' +
        '            not just for the paycheck, but because I\'m genuinely passionate' +
        '            about crafting software solutions.' +
        '        </div>'
    ],
    typeSpeed: 0,
    backSpeed: 5,
    showCursor: false,
});




