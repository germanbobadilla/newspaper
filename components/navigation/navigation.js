import routes from './routes.js';
export const addNavigation = () => {
  const navLinks = routes.map((name, key) => {
    `<ul ${key}><li><a>${name}<a/></li></ul>`;
    return navLinks;
  });
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'navLinks');
  nav.appendChild(ul);
  ul.innerHTML = navLinks;
};
