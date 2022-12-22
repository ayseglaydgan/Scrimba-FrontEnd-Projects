import { menuArray } from './data.js';

document.addEventListener('click', function (event) {
    if (event.target.dataset.id) {
        handleOrderBtnClick(event.target.dataset.id);
    }

})



function handleOrderBtnClick(itemId) {
    console.log(itemId);
    console.log(menuArray)
    const targetMenuItem = menuArray.filter(function (menuItem) {
        return menuItem.id == itemId;
    })[0];
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