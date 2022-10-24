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

// class Slider {
//      constructor(mov, time, state){
//           this.mov = mov;
//           this.time = time;
//           this.state = state;
//      }

//      static parentSlides = "Slider";
//      static

//      getSlides() {
//           for (const slide of this.slides){
//                yield slide
//           }
//      }
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
