import { menuArray } from './data.js'

function getMenuHtml(menu) {
    let menuHtml = '';
    menu.forEach(function (menuItem) {
        console.log(menuItem);
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
                        <button class = "add-order-btn">+</button>
                    </div>
                </div>
    
        `
    })
    return menuHtml;
}


function renderMenu() {
    document.getElementById('menu').innerHTML = getMenuHtml(menuArray);
}

renderMenu();