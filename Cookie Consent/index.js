
const modalEl = document.getElementById('modal');
const closeEl = document.getElementById('modal-close-btn');
const formEl = document.getElementById('consent-form');
const modalTextEl = document.getElementById('modal-text');
const acceptBtnEl = document.getElementById('accept-btn');
const declineBtnEl = document.getElementById('decline-btn');
const btnContainerEl = document.getElementById('button-container');

setTimeout(function(){
    modalEl.style.display = 'inline';
    closeEl.disabled = true;
}, 3000)


closeEl.addEventListener('click', function(){
  modalEl.style.display = 'none';
});

acceptBtnEl.addEventListener('click', function(e){
    e.preventDefault();

    const formData = new FormData(formEl);
    console.log(formData);
    const name = formData.get('name');
    console.log(name);
    const email = formData.get('email');
    console.log(email);

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
    
    setTimeout(function(){
        closeEl.disabled = false;
        document.getElementsByClassName('modal-inner')[0].innerHTML = `<h2>Thanks 
        <span id="formName">${name}</span>
        you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
    },3000);
    
});

declineBtnEl.addEventListener('mouseenter', function(){
    btnContainerEl.classList.toggle('reverse');
    
});




