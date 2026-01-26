// creative.js - Original creative component module
export function initializeCreativeComponent() {
  const button = document.getElementById('whitePageButton');

  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'white';
    document.documentElement.style.backgroundColor = 'white';
  });
}
