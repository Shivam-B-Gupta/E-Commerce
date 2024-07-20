const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Navbar *************************
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          // Prevent default behavior
          event.preventDefault();

          // Remove the active class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));

          // Add the active class to the clicked link
          this.classList.add('active');
      });
  });
});

/////////////// Javascript for review section//////////////////

const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.review');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 3000);








