function toggleDescription(event) {
  const btn = event.target;
  const shortDesc = btn.previousElementSibling.previousElementSibling;
  const fullDesc = btn.previousElementSibling;

  if (shortDesc.classList.contains("hidden")) {
    shortDesc.classList.remove("hidden");
    fullDesc.classList.add("hidden");
    btn.textContent = "More";
  } else {
    shortDesc.classList.add("hidden");
    fullDesc.classList.remove("hidden");
    btn.textContent = "Less";
  }
}

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
