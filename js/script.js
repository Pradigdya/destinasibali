document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentId = btn.getAttribute("data-target");
    const content = document.getElementById(contentId);

    if (!content) return;

    const isVisible = content.classList.contains("max-h-96");

    if (isVisible) {
      // Sembunyikan dengan animasi
      content.classList.remove("max-h-96", "opacity-100", "mt-4");
      content.classList.add("max-h-0", "opacity-0");
      btn.textContent = "Read More";
    } else {
      // Tampilkan dengan animasi
      content.classList.remove("max-h-0", "opacity-0");
      content.classList.add("max-h-96", "opacity-100", "mt-4");
      btn.textContent = "Hide";
    }
  });
});
