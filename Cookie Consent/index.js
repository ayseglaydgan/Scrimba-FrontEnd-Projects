
const modalEl = document.getElementById('modal');
const closeEl = document.getElementById('modal-close-btn');
const formEl = document.getElementById('consent-form');


closeEl.addEventListener('click', function(){
  modalEl.style.display = 'none';
});

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('form submitted');
});

setTimeout(function(){
    modalEl.style.display = 'inline';
}, 3000)