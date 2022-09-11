const carousel = document.querySelector('.imagens');
const images = document.querySelectorAll('.imagens img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var counter = 1;
const imgSize = images[0].clientWidth;

setInterval(() => {
  next.addEventListener('click', (e) => {
    increase();
    carousel.style.transform = 'translateX('+ (-imgSize*counter)+ 'px)'
  });
  prev.addEventListener('click', (e) => {
    decrease();
    carousel.style.transform = 'translateX('+ (-imgSize*counter)+ 'px)'
  });
  carousel.style.transform = 'translateX('+ (-imgSize*counter)+ 'px)'
  increase();
}, 2000);

function increase(){
  counter++;
  if (counter > (images.length - 1)) {
    counter = 0;
  }
};

function decrease(){
  counter--;
  if (counter < 0) {
    counter = (images.length - 1);
  }
};