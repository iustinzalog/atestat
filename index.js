function toggleCheckbox() {
  const checkbox = document.getElementById("sactive");
  checkbox.checked = !checkbox.checked;
  document
    .querySelectorAll('input[type="checkbox"][class="cbgrup"]')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });
}
function handleResize() {
  const checkbox = document.getElementById("sactive");
  if (window.innerWidth > 995) {
    checkbox.checked = false;
  }
}
const viewport = document.querySelector(".container");
let isScrolling;
viewport.addEventListener("scroll", () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    // on scroll end, compute nearest slide and snap
    const slideWidth = window.innerWidth;
    const index = Math.round(viewport.scrollLeft / slideWidth);
    viewport.scrollTo({ left: index * slideWidth, behavior: "smooth" });
  }, 80); // 80ms after last scroll event
});

window.addEventListener("resize", handleResize);
