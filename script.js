const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('ul li');

let currentIndex = 0;
function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== index);
    });
}
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
  
  showSlide(currentIndex);