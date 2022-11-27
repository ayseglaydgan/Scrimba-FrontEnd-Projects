
const modalEl = document.getElementById('modal');
const closeEl = document.getElementById('modal-close-btn');
const formEl = document.getElementById('consent-form');
const modalTextEl = document.getElementById('modal-text');
const acceptBtnEl = document.getElementById('accept-btn');

console.log("acceptBtnEl", acceptBtnEl.innerHTML);


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

acceptBtnEl.addEventListener('click', function(){
    let newModalText = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>`
    modalTextEl.innerHTML = newModalText;
    setTimeout(function(){
        document.getElementById('upload-text').textContent = `Making the sale...`
    }, 1500);
});

