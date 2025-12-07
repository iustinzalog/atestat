function toggleCheckbox() {
  const checkbox = document.getElementById("sactive");
  checkbox.checked = !checkbox.checked;
  document
    .querySelectorAll('input[type="checkbox"][class="cbgrup"]')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });
}
const container = document.getElementById("cont");
container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const label = document.querySelector(`label[for="${this.id}"]`);
    if (this.checked) {
      label.textContent = "Citeste mai putin!";
    } else {
      label.textContent = "Citeste mai mult!";
    }
  });
});
function handleResize() {
  const checkbox = document.getElementById("sactive");
  if (window.innerWidth > 995) {
    checkbox.checked = false;
  }
}
window.addEventListener("resize", handleResize);
