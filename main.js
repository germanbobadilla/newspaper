// Create a hamburger menu that it gets displayed when resizing the window
// to a smaller size.
function main() {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-button');
  const menuClose = document.querySelector('.menu-close');

  menuButton.addEventListener('click', () => {
    menu.classList.add('menu--open');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
}
