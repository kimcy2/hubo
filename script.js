const filter = document.getElementById("filter");
const cards = Array.from(document.querySelectorAll(".card"));

filter.addEventListener("input", () => {
  const q = filter.value.trim();
  cards.forEach(card => {
    const name = card.dataset.name || "";
    card.style.display = name.includes(q) ? "" : "none";
  });
});
