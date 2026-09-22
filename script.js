const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.sticker-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    cards.forEach(card => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
    });
  });
});