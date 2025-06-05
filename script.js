const btn = document.getElementById('readMoreBtn');
const content = document.getElementById('moreContent');

btn.addEventListener('click', () => {
  content.classList.toggle('hidden');
  btn.textContent = content.classList.contains('hidden') ? 'Baca Selengkapnya' : 'Sembunyikan';
});
