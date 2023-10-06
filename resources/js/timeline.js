"use strict";

class Timeline {
  constructor(selector, container) {
    this.timeline = container.querySelector(selector);
    this.line = this.timeline.querySelector('.line');
    this.sections = this.timeline.querySelectorAll('.section');
    this.prevScrollY = window.scrollY;
    this.up = false;
    this.down = false;
    this.full = false;
    this.set = 0;
    this.targetY = window.innerHeight * 0.8;

    this.initialize();
  }

  initialize() {
    this.line.style.bottom = `calc(100% - 20px)`;

    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  scrollHandler() {
    const { scrollY } = window;
    this.up = scrollY < this.prevScrollY;
    this.down = !this.up;
    const timelineRect = this.timeline.getBoundingClientRect();
    const dist = this.targetY - timelineRect.top;

    if (this.down && !this.full) {
      this.set = Math.max(this.set, dist);
      this.line.style.bottom = `calc(100% - ${this.set}px)`;
    }

    if (dist > this.timeline.offsetHeight + 50 && !this.full) {
      this.full = true;
      this.line.style.bottom = `-50px`;
    }

    this.sections.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top + item.offsetHeight / 5 < this.targetY) {
        item.classList.add('show-me');
      }
    });

    this.prevScrollY = window.scrollY;
  }
}

// export { Timeline };

// Initialize each timeline separately
const timelineContainers = document.querySelectorAll('.timeline-container');

timelineContainers.forEach((container) => {
  const timeline = new Timeline('.timeline', container);
});
