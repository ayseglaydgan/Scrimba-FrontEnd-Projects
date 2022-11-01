let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById("ul-el"); 

const addHttpsIfMissing = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }
}

inputBtn.addEventListener('click', function() {
    myLeads.push(addHttpsIfMissing(inputEl.value));
    renderLeads();
    inputEl.value = "";
    
})



function renderLeads(){
    let listItems = "";
    console.log(myLeads);
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `

    /*const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li);*/
    }
    ulEl.innerHTML = listItems;
    
}