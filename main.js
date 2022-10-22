// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
addNavigation();
import { Footer } from './components/footer-component/footer-component.js';
import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);

// API Calls
fetchWeatherAPI();
