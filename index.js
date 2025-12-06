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
const slides = document.querySelectorAll(".gamma");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        history.replaceState(null, "", "#" + entry.target.id);
      }
    });
  },
  {
    root: document.querySelector(".container"), // your horizontal scroll container
    threshold: 0.6, // 60% visible → you can adjust
    rootMargin: "0px",
  }
);

slides.forEach((slide) => observer.observe(slide));

window.addEventListener("resize", handleResize);
