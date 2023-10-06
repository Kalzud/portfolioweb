"use strict"; //enables strict mode so as to catch coding mistakes and unsafe actions and throw errors

class Timeline {
    // This class takes in two parameters the selector which would be the class of element
    // (in this case .timeline) and the container of that element (in this case the timeline-container)
  constructor(selector, container) {
    // here the values to be initialized are assigned and the timeline is
    // assigned to the selector in a particular container
    // for example it would take element of class timeline
    // in a particular element of class timeline-container
    this.timeline = container.querySelector(selector);
    //then every other variable would now be based on this timeline
    this.line = this.timeline.querySelector('.line');
    this.sections = this.timeline.querySelectorAll('.section');
    this.prevScrollY = window.scrollY; //initialize a variable prevScrollY with the current vertical scroll position of the window
    this.up = false; //this variables would be used to decide if the user is scrolling up
    this.down = false; //this variables would be used to decide if the user is scrolling down
    this.full = false; //this variable would be used to determine if a scroll distance (full length of .timeline element) has been met it is initially set to false
    this.set = 0; //this variable is going to be used to hold a value of max scroll value
    this.targetY = window.innerHeight * 0.8; //this variable would be used for comparison in scroll handler, it is set to 80 percent of window innerheight (visible area on browser)

    this.initialize();
  }

  initialize() {
    this.line.style.bottom = `calc(100% - 20px)`; //puts line bottom 20 pixels below container bottom

    window.addEventListener('scroll', this.scrollHandler.bind(this)); //add scroll event listener to window so it is called when the user scrolls
  }

  scrollHandler() {
    const { scrollY } = window; //uses destructing assignment to extract the scrollY (thats the vertical position on page) property from the window
    // ya I know there is no need explaining but i forget sometimes so here it is
    // the scrollY compares against the this.prevScrollY that was assigned to
    // the original window vertical scroll position
    // if it is smaller that means the user has scrolled up cause the
    // y axis start from 0 and increase downwards so the top is less.
    // once a scroll up has now been confirmed if the scrollY is less that prevScrollY then
    // the boolean value of true is assigned to the 'up' variable
    // ofc if scrollY>prevScrollY then up is false
    this.up = scrollY < this.prevScrollY;
    // this line is simply assigning the opposite of whatever the up value is to the down
    // cause ofc the user cannot scroll up and down at the same exact simultaneous same time
    // (yes I know i used similar words at the same time it's to lay emphasis and avoid confusion)
    // anyways that means if the user is scrolling up than user is not scrolling down
    // hence is up is true, down is false and viceversa
    this.down = !this.up;
    // timelineReact is created with the getBoundingClientRect which gives the dimension
    // and position of timeline relative to the viewport
    const timelineRect = this.timeline.getBoundingClientRect();
    //vertical distance between the targetY(we set that to 80% of window innerheight (visible area)) and the top of .timeline element
    const dist = this.targetY - timelineRect.top;

    // this if code block directly below would check if the user is scrolling down (down = true)
    // and if full is false (we have not yet reached the full length of .timeline element)
    // if both conditions are passed then we set the 'set' to the max value between it and the dist
    // that is if Math.max(0, 5) then set is 5. then it goes on to set the line bottom value this.set pixels
    // below the container bottom making it look like the line goes up as user scrolls down
    if (this.down && !this.full) {
      this.set = Math.max(this.set, dist);
      this.line.style.bottom = `calc(100% - ${this.set}px)`;
    }

    // this code block would check if the dist is greater that the
    // .timeline.offsetHeight (height of .timeline element)
    // + 50 pixels (essentially checking if we have gone passed the element)
    // and if the full is still false. If both conditions are met then we set
    // full to true saying essentially reached the end of the .timeline element and we move the
    // line 50 pixels upwards essentially hidding it
    if (dist > this.timeline.offsetHeight + 50 && !this.full) {
      this.full = true;
      this.line.style.bottom = `-50px`;
    }

    //iterates through all elements with .section
    this.sections.forEach((item) => {
    //calculates its positon relative to viewport using getBoundingClientRect()
      const rect = item.getBoundingClientRect();
      //checks if top of element + one fifth of height is less than targetY
      if (rect.top + item.offsetHeight / 5 < this.targetY) {
        //if so adds css styling show-me
        item.classList.add('show-me');
      }
    });

    this.prevScrollY = window.scrollY; //update the prevScrollY for use on the next scroll
  }
}


// Initialize each timeline separately
const timelineContainers = document.querySelectorAll('.timeline-container');

timelineContainers.forEach((container) => {
  const timeline = new Timeline('.timeline', container);
});
