const slider = document.querySelector(".slideInner");
const nextButton = document.querySelector(".next");
const backButton = document.querySelector(".back");

// Button navigation
nextButton.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

backButton.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

// Touch events for mobile
let startX;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;

  if (diffX > 0) {
    slider.scrollBy({ left: 100, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: -100, behavior: "smooth" });
  }
});

// Accordion
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Modal
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalSpan = document.querySelector(".close");

openModalBtn.onclick = function () {
  modal.style.display = "block";
};

closeModalSpan.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


