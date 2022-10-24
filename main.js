// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
addNavigation();
import { Footer } from './components/footer-component/footer-component.js';
// import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);

// API Calls
// fetchWeatherAPI();

// Designing the slider class

class Slider {
     constructor(mov, time, state){
          this.mov = mov;
          this.time = time;
          this.state = state;
     }

     static parentSlides = "Slider";
     static 

     getSlides() {
          for (const slide of this.slides){
               yield slide
          }
     }
}

const parentSlider = document.querySelector('.parent-slider');
const slides = parentSlider.querySelectorAll('.child-slider');

console.log(frames);

slides.getSlides('left', '200', false)