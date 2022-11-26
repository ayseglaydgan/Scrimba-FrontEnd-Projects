
const modalEl = document.getElementById('modal');
const closeEl = document.getElementById('modal-close-btn');


closeEl.addEventListener('click', function(){
  modalEl.style.display = 'none';
});

setTimeout(function(){
    modalEl.style.display = 'inline';
}, 3000)