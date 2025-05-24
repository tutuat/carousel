const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('ul li');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
  
  showSlide(currentIndex);