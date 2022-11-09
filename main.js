// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
import { Footer } from './components/footer-component/footer-component.js';
import { articles } from './components/_mocks_/mock-data.js';
const parentSlider = document.querySelector('.parent-carousel');

function printTitles() {
  const getArticles = articles.items;
  for (let i = 0; i < 10; i++) {
    const slideContent = document.createElement('div');
    slideContent.innerHTML = `    
      <div class="slide-content">  
        <a href=${getArticles[i].url} target="_blank"><img src="${getArticles[i].urlToImage}" alt="${getArticles.title}"></a>
        </div>
      <div>
        <a href=${getArticles[i].url} target="_blank"><h2>${getArticles[i].title}</h2></a>
        <p>${getArticles[i].description}</p>
      </div    
    `;
    parentSlider.appendChild(slideContent);
  }
}
printTitles();

// for (let i = 0; i < items.length; i++) {

// }
addNavigation();
// import { fetchWeatherAPI } from './components/navigation/weather/weather-api.js';

// Footer();
customElements.define('footer-component', Footer);
