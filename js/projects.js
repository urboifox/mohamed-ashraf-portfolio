const loader = document.getElementById(`loader`);

window.addEventListener(`load`, () => {
  setTimeout(() => {
    loader.style.cssText = `
  opacity: 0;
  z-index: -1000`;
  }, 500);
});
