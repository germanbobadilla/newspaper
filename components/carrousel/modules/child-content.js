class Children {
  constructor(title, image, excert, image) {
    this.title = title;
    this.excert = excert;
    this.image = image;
  }
  createHeading() {
    let heading2 = document.createElement('h2');
    heading2.textContent = `${this.title}`;
  }

  makeExcert() {
    let para = document.createElement('p');
    para.textContent = `${this.excert}`;
  }

  makeImage() {
    let img = document.createElement('img');
    img.setAttribute('src', `${this.imgSource}`);
    img.setAttribute('alt', `${this.title}`);
    para.textContent = `${this.excert}`;
  }
}
export { Children };
