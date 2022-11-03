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
    <div class="child-slide active" id="child-slide">
      <a href=${getArticles[i].url} target="_blank"><img src="${getArticles[i].urlToImage}" alt="${getArticles.title}"></a>
      <a href=${getArticles[i].url} target="_blank"><h2>${getArticles[i].title}</h2></a>
      <p>${getArticles[i].description}</p>
    </div>
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

//  Search

// const handleSearch = function (e) {
//   e.preventDefault();
//   let term = e.target.elements['search'].value;
//   let setTerm = term
//     .toLowerCase()
//     .split(' ')
//     .filter(function (token) {
//       return token.trim() !== '';
//     });

// };

// document.addEventListener('submit', handleSearch);

function draw() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

draw();
