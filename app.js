let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");

  // Update navigation buttons
  document.getElementById("prevBtn").disabled = n === 0;
  document.getElementById("nextBtn").disabled = n === totalSlides - 1;

  // Update counter
  document.getElementById("slideCounter").textContent = `${
    n + 1
  } / ${totalSlides}`;

  // Update progress bar
  const progress = ((n + 1) / totalSlides) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;

  // Re-highlight code blocks
  if (window.Prism) {
    setTimeout(() => Prism.highlightAll(), 100);
  }
}

function changeSlide(direction) {
  const newSlide = currentSlide + direction;
  if (newSlide >= 0 && newSlide < totalSlides) {
    currentSlide = newSlide;
    showSlide(currentSlide);
  }
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    changeSlide(1);
  } else if (e.key === "Home") {
    currentSlide = 0;
    showSlide(currentSlide);
  } else if (e.key === "End") {
    currentSlide = totalSlides - 1;
    showSlide(currentSlide);
  }
});

// Initialize
showSlide(0);
