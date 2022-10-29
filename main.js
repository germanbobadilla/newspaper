// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
import { Footer } from './components/footer-component/footer-component.js';
import { articles } from './components/_mocks_/mock-data.js';
const items = articles.items;
// for (let i = 0; i < items.length; i++) {

// }
addNavigation();
// import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);
