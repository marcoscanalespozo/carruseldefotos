let slider = document.querySelector('.slider1');
let sliderItems = document.querySelectorAll('.slider1 li');
let slideWidth = sliderItems[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }
  updateSlide();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  updateSlide();
}

function updateSlide() {
  let newPosition = -slideWidth * currentIndex;
  slider.style.transform = `translateX(${newPosition}px)`;
}

setInterval(nextSlide, 5000); // Cambiar de imagen cada 5 segundos
