class MakeCarrousel {
  constructor(id, width, height, animate, time) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.animate = animate;
    this.time = time;
    this.dots = dots;
    this.arrow = arrows;
  }

  animate() {}
}

function createSlide(id, parent, width, height) {
  let divWrapper = document.createElement('div');
  let canvasElem = document.createElement('canvas');
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  let ctx = canvasElem.getContext('2d');

  return {
    ctx: ctx,
    id: id
  };
}

function createReportList(wrapperId) {
  let list = document.createElement('ul');
  list.id = wrapperId + '-reporter';

  let canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);

  return list.id;
}

export { create, createReportList };
