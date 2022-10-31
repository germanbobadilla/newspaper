// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
import { Footer } from './components/footer-component/footer-component.js';
import { articles } from './components/_mocks_/mock-data.js';
const parentSlider = document.querySelector('.parent-carousel');

function printTitles() {
  const getArticles = articles.items;
  for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    img.setAttribute('src', getArticles[i].urlToImage);
    img.setAttribute('class', 'article-image');
    const h2 = document.createElement('h2');
    const pa = document.createElement('p');
    h2.innerHTML = `${getArticles[i].title}<br>`;
    pa.innerHTML = `${getArticles[i].description}`;
    parentSlider.appendChild(h2);
    parentSlider.appendChild(img);
    parentSlider.appendChild(pa);
  }
}

printTitles();

// for (let i = 0; i < items.length; i++) {

// }
addNavigation();
// import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);
