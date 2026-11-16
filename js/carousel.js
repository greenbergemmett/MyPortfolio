// Project carousels: one slide visible at a time per .project-carousel
const slideIndex = {};

function showSlides(n, c) {
  const carousel = document.getElementById("carousel" + c);
  if (!carousel) return;

  const slides = carousel.getElementsByClassName("mySlides");
  const dots = carousel.getElementsByClassName("dot");
  if (!slides.length) return;

  if (n > slides.length) n = 1;
  if (n < 1) n = slides.length;
  slideIndex[c] = n;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

  slides[n - 1].style.display = "block";
  if (dots[n - 1]) dots[n - 1].classList.add("active");
}

function plusSlides(n, c) {
  showSlides((slideIndex[c] || 1) + n, c);
}

function currentSlide(n, c) {
  showSlides(n, c);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-carousel").forEach(el => {
    showSlides(1, el.id.replace("carousel", ""));
  });
});
