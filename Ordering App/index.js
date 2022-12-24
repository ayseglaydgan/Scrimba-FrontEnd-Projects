import { menuArray } from './data.js';


document.addEventListener('click', function (event) {
    let name = '';
    if (event.target.dataset.id) {
        handleOrderBtnClick(event.target.dataset.id);
    }
    else if (event.target.id === 'complete-order-btn') {
        handleCompleteOrderBtnClick();
    }
    else if (event.target.id === 'pay-btn') {
        handlePayBtnClick();
    }
})

let firstTime = true;
let totalPrice = 0;

function handleOrderBtnClick(itemId) {
    console.log(itemId);
    console.log(menuArray)

    const targetMenuItem = menuArray.filter(function (menuItem) {
        return menuItem.id == itemId;
    })[0];
    console.log(targetMenuItem.name);
    let orderedHtml = '';
    let totalHtml = '';
    if (firstTime) {
        orderedHtml += `<div class="order-header">
                        Your order
                        </div>`
        firstTime = false;
    }

    totalPrice += targetMenuItem.price;
    orderedHtml += `
    <div class = "order-item">
        <p class = "order-item-name">${targetMenuItem.name}</p>
        <p class = "order-item-price">$${targetMenuItem.price}</p>
    </div>
    `
    totalHtml += `
    <div class = "order-total">
        <p class = "order-total-price">Total Price:</p>
        <p class = "order-total-price">$${totalPrice}</p>
    </div>
    <div class = "complete-order">
        <button id= "complete-order-btn" class= "complete-order-btn">Complete Order</button>
    </div>
    `
    document.getElementById('order').innerHTML += orderedHtml;
    document.getElementById('total').innerHTML = totalHtml;
}

function handleCompleteOrderBtnClick() {
    let modalHtml = '';
    modalHtml = `

        <div class="modal-inner" id="modal-inner">
            <p class="header">Enter card details</p>
            <form id="consent-form">
                <input type=text id="card-name" name="card-name" placeholder="Enter your name" required>

                <input type=number id="card-number" name="card-number" placeholder="Enter card number" required>

                <input type=number id="card-CVV" name="card-CVV" placeholder="Enter card CVV" required>

                <button type="submit" id="pay-btn" class="pay-btn">Pay
                </button>
            </form>
        </div>
    
    `
    document.getElementById('modal').innerHTML = modalHtml;

}

function handlePayBtnClick(e) {

    const name = document.getElementById('card-name').value;

    if (name === '') {
        return;
    }

    let infoMessageHtml = '';
    document.getElementById('modal').style.display = 'none';
    document.getElementById('order').style.display = 'none';
    document.getElementById('total').style.display = 'none';
    infoMessageHtml = `
    <div class="info-message">
        <p class="info-message-text">Thanks ${name} ! Your order is on its way !</p>
    </div>
    `
    document.getElementById('info-message').innerHTML = infoMessageHtml;
}



function getMenuHtml(menu) {
    let menuHtml = '';
    menu.forEach(function (menuItem) {
        menuHtml += `
                <div class = "menu-item">
                    <div class = "menu-item-left">
                        <p class = "menu-emoji">${menuItem.emoji}</p>
                        <div class = "menu-details">
                            <p class = "menu-item-name">${menuItem.name}</p>
                            <p class = "menu-item-ingredients">${menuItem.ingredients}</p>
                            <p class = "menu-item-price">$${menuItem.price}</p>
                        </div>
                    </div>
                    <div>
                        <button id= "add-order-btn" data-id="${menuItem.id}">+</button>
                    </div>
                </div>`

    })
    return menuHtml;
}


function renderMenu() {
    document.getElementById('menu').innerHTML = getMenuHtml(menuArray);

}

renderMenu();