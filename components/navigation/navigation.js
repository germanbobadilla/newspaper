export const addNavigation = () => {
  const navLinks = `
        <div class="navigation">
          <button class="sections">Sections</button>
          <ul>  
            <li class="navLinks">Software Engineering</li>
            <li class="navLinks">Computer Science</li>
            <li class="navLinks">Github</li>
            <li class="navLinks">FAANG</li>
            <li class="navLinks">Reddit</li>
            <li class="navLinks">Books</li>
            <li class="navLinks">Tutorials</li>
          </ul>
        </div>
     `;
  const nav = document.getElementById('nav');
  const ul = document.createElement('ul');
  nav.appendChild(ul);
  ul.innerHTML = navLinks;
};
