import routes from './routes.js';

export const addNavigation = () => {
  const navLinks = routes
    .map((link) => `<li><a href="${link.href}">${link.name}</a></li>`)
    .join('');
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'navLinks');
  nav.appendChild(ul);
  ul.innerHTML = navLinks;
};
