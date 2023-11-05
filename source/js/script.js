let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (sliderButton) {
  let flag = false;
  sliderButton.addEventListener('click', function () {
    if (!flag) {
      slider.classList.add('slider--after');
      flag = true;
    } else {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    }
    
  });
}
