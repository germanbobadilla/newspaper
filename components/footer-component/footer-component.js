export class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        font-size: 18px;
      </style>
      <footer>
        <nav>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="work.html">Work</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </footer>
    `;
  }
  disconnectedCallback() {
    this.innerHTML = ``;
  }
  // const footerTemplate = document.getElementById('footer-element');
  // document.body.appendChild(footerTemplate.children);

  // Defining the footer element
}
