const editList = document.querySelector('#edit-list');

editList.addEventListener('dblclick', function(event) {

  const item = event.target.closest('.edit-item');
  if (!item) return;

  if (item.classList.contains('editing')) return;

  
  const originalText = item.textContent;
  item.textContent = ''; 
  const input = document.createElement('input');
  input.value = originalText;
  item.appendChild(input);
  item.classList.add('editing');
  input.focus();

  let committed = false; 


  function commitEdit() {
    if (committed) return;
    committed = true;
    const newText = input.value.trim() || originalText;
    item.textContent = newText;
    item.classList.remove('editing');
  }

  function cancelEdit() {
    if (committed) return;
    committed = true;
    item.textContent = originalText;
    item.classList.remove('editing');
  }

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      commitEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  });

 input.addEventListener('blur', commitEdit);
});
