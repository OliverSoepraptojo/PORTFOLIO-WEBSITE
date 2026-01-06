/* =========================
   BURGER MENU
========================= */

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

/* =========================
   PORTFOLIO TEMAER
========================= */

const temaCards = document.querySelectorAll(".tema-card");
const temaSections = document.querySelectorAll(".tema");

// Skjul alle temaer
function hideAllThemes() {
  temaSections.forEach((section) => {
    section.classList.remove("active");
  });

  temaCards.forEach((card) => {
    card.classList.remove("active");
  });
}

// Klik på tema-kort
temaCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = card.dataset.tema;
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    hideAllThemes();

    card.classList.add("active");
    targetSection.classList.add("active");

    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

const docCards = document.querySelectorAll(".doc-card");

docCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (window.matchMedia("(hover: hover)").matches) return;
    card.classList.toggle("open");
  });
});
