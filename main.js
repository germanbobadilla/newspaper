// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
import { Footer } from './components/footer-component/footer-component.js';
import { articles } from './components/_mocks_/mock-data.js';
console.log(articles.items[2].title);
addNavigation();
// import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);
