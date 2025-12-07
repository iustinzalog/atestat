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

window.addEventListener("resize", handleResize);
