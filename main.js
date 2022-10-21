// import { setConcentGallery } from './components/content-gallery/content-gallery.js';
import { addNavigation } from './components/navigation/navigation.js';
import { Footer } from './components/footer-component/footer-component.js';
const btn = document.getElementById('showFooter');
addNavigation();
function showFooter() {
  return customElements.define('footer-component', Footer);
}

function removeFooter() {
  return customElements.define('footer-component', Footer);
}

btn.addEventListener('click', (event) => {
  showFooter();
});

// Footer();

localStorage.setItem('myCat', 'Tom');
const cat = localStorage.getItem('myCat');

console.log(cat);
