const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

// Next Slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Previous Slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto Slide
let autoSlide = setInterval(nextSlide, 5000); // Slide every 5 seconds

// Navigation Buttons
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Pagination Dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoSlide();
  });
});

// Reset Auto Slide
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

// Initial Slide
showSlide(currentSlide);
