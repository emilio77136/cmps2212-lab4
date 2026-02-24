const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');
filterBar.addEventListener('click', function(event) {
 if (!event.target.matches('.filter-btn')) return;

  const clickedBtn = event.target;

  filterBtns.forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
 
  const filter = clickedBtn.dataset.filter;

  cards.forEach(card => {
    if (filter === 'all') {
      card.classList.remove('hidden'); 
    } else {
   
      card.classList.toggle('hidden', card.dataset.category !== filter);
    }
  });
});
