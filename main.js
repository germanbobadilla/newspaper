// Create a hamburger menu that it gets displayed when resizing the window
// to a smaller size.

import slider from './module/slider.js';

const images = [
  'images/hamburger1.jpg',
  'images/hamburger2.jpg',
  'images/hamburger3.jpg',
  'images/hamburger4.jpg',
  'images/hamburger5.jpg',
];

const sliderElement = document.querySelector('.slider');
const sliderImage = document.querySelector('.slider__image');
const sliderNext = document.querySelector('.slider__button--next');
const sliderPrev = document.querySelector('.slider__button--prev');

const sliderInstance = slider(images);

sliderNext.addEventListener('click', () => {
    sliderImage.src = sliderInstance.next();
});

sliderPrev.addEventListener('click', () => {
    sliderImage.src = sliderInstance.prev();
});