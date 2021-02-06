const slider = document.querySelector('.slider-container');
const sliders = Array.from(document.querySelectorAll('.slider'));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

const touchStart = () => {};
const touchEnd = () => {};
const touchMove = () => {};

sliders.forEach((slide, index) => {
  const image = slide.querySelector('img');
  image.addEventListener('dragstart', (e) => e.preventDefault());

  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);
  slide.addEventListener('mousedown', touchStart(index));
  slide.addEventListener('mouseup', touchEnd);
  slide.addEventListener('mouseleave', touchEnd);
  slide.addEventListener('mousemove', touchMove);
});
