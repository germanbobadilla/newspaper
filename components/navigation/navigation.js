export const addNavigation = () => {
  const navLinks = `
          <li>Software Engineering</li>
     `;
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  nav.appendChild(ul);
  ul.innerHTML = navLinks;
};
