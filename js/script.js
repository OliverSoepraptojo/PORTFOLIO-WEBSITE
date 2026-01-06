/* Burger menu */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger?.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

/* Portfolio temaer */
const temaCards = document.querySelectorAll(".tema-card");
const temaSections = document.querySelectorAll(".tema");

function hideAllThemes() {
  temaSections.forEach((s) => s.classList.remove("active"));
  temaCards.forEach((c) => c.classList.remove("active"));
}

temaCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(card.dataset.tema);
    if (!target) return;

    hideAllThemes();
    card.classList.add("active");
    target.classList.add("active");
    target.scrollIntoView({ behavior: "smooth" });
  });
});

/* Projekt cards (kun mobil klik) */
document.querySelectorAll(".doc-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (matchMedia("(hover: hover)").matches) return;
    card.classList.toggle("open");
  });
});
