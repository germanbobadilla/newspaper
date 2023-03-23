import Carousel from './carousel.js';

// Get the carousel container element from the DOM
const carouselContainer = document.querySelector('.carousel');

// Create a new Carousel instance with options
const carousel = new Carousel(carouselContainer, {
  nav: true,
  navPrev: '.prev-button',
  navNext: '.next-button',
  autoplay: true,
  interval: 5000
});

// Define the slides and their content
const slides = [
  {
    image: 'https://via.placeholder.com/600x300/FFC107/000000',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: 'https://via.placeholder.com/600x300/4CAF50/FFFFFF',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://via.placeholder.com/600x300/03A9F4/000000',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

// Add the slides to the carousel
slides.forEach((slide) => {
  const slideElement = document.createElement('div');
  slideElement.classList.add('slide');

  const imageElement = document.createElement('img');
  imageElement.src = slide.image;
  slideElement.appendChild(imageElement);

  const textElement = document.createElement('div');
  textElement.classList.add('slide-text');
  textElement.textContent = slide.text;
  slideElement.appendChild(textElement);

  carousel.addSlide(slideElement);
});
