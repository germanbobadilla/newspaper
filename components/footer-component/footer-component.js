'use strict';
export const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
  font-size: 18px;
  li {
    font-weight: bold;
  }
  a {
    color: yellow;
  }
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

export class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}
