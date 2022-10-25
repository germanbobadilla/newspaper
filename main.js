// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
addNavigation();
import { Footer } from './components/footer-component/footer-component.js';
// import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);

// Anja

const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

nextButton.addEventListener('click', (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
