// Define the Carousel class
export default class Carousel {
  constructor(container, options = {}) {
    this.container = container;
    this.slides = [];
    this.currentSlideIndex = 0;
    this.autoplayTimer = null;

    // Set options
    const defaultOptions = {
      nav: true,
      navPrev: '.carousel-prev',
      navNext: '.carousel-next',
      autoplay: false,
      interval: 5000
    };
    this.options = { ...defaultOptions, ...options };

    // Set up navigation buttons
    if (this.options.nav) {
      const prevButton = document.querySelector(this.options.navPrev);
      if (prevButton) {
        prevButton.addEventListener('click', () => this.moveLeft());
      }

      const nextButton = document.querySelector(this.options.navNext);
      if (nextButton) {
        nextButton.addEventListener('click', () => this.moveRight());
      }
    }

    // Start autoplay if enabled
    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }

  addSlide(slide) {
    this.slides.push(slide);
    this.container.appendChild(slide);
  }

  removeSlide(slide) {
    const index = this.slides.indexOf(slide);
    if (index > -1) {
      this.slides.splice(index, 1);
      this.container.removeChild(slide);
    }
  }

  moveLeft() {
    const newIndex = this.currentSlideIndex - 1;
    this.showSlide(newIndex < 0 ? this.slides.length - 1 : newIndex);
  }

  moveRight() {
    const newIndex = this.currentSlideIndex + 1;
    this.showSlide(newIndex >= this.slides.length ? 0 : newIndex);
  }

  showSlide(index) {
    this.slides[this.currentSlideIndex].classList.remove('active');
    this.currentSlideIndex = index;
    this.slides[this.currentSlideIndex].classList.add('active');
  }

  startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      this.moveRight();
    }, this.options.interval);
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }
}
