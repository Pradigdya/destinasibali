document.querySelectorAll('.read-more-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const contentId = btn.getAttribute('data-target');
    const content = document.getElementById(contentId);

    if (!content) return;

    content.classList.toggle('hidden');
    btn.textContent = content.classList.contains('hidden') ? 'Baca Selengkapnya' : 'Sembunyikan';
  });
});