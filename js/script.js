document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentId = btn.getAttribute("data-target");
    const content = document.getElementById(contentId);

    if (!content) return;

    const isVisible = content.classList.contains("max-h-96");

    if (isVisible) {
      // Sembunyikan
      content.classList.remove("max-h-96", "opacity-100", "mt-4");
      content.classList.add("max-h-0", "opacity-0");

      // Ganti teks berdasarkan teks awal
      if (btn.dataset.original === "rencanakan") {
        btn.textContent = "Rencanakan Perjalanan";
      } else {
        btn.textContent = "Read More";
      }
    } else {
      // Tampilkan
      content.classList.remove("max-h-0", "opacity-0");
      content.classList.add("max-h-96", "opacity-100", "mt-4");

      if (btn.textContent.trim().toLowerCase() === "rencanakan perjalanan") {
        btn.dataset.original = "rencanakan";
        btn.textContent = "Hide";
      } else {
        btn.dataset.original = "readmore";
        btn.textContent = "Hide";
      }
    }
  });
});
