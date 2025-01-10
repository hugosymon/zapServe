// Carrossel
const carousel = document.querySelector('.carousel-benefi');
const items = document.querySelectorAll('.carousel-item-benefi');
const prevButton = document.querySelector('.control.prev');
const nextButton = document.querySelector('.control.next');
const indicators = document.querySelectorAll('.indicators-benefi .indicator');

let currentIndex = 0; 
const totalItems = items.length;

function updateCarousel(index) {
  if (index < 0) {
    currentIndex = totalItems - 1; 
  } else if (index >= totalItems) {
    currentIndex = 0; 
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100; 
  carousel.style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator, idx) => {
    indicator.classList.toggle('active-benefi', idx === currentIndex);
  });
}

prevButton.addEventListener('click', () => {
  updateCarousel(currentIndex - 1); 
});

nextButton.addEventListener('click', () => {
  updateCarousel(currentIndex + 1); 
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    updateCarousel(index); 
  });
});

updateCarousel(currentIndex);
