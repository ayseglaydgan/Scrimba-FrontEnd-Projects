let myLeads = [];


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById("ul-el"); 

const addHttpsIfMissing = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }
}


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener('click', function() {
    myLeads.push(addHttpsIfMissing(inputEl.value));
    renderLeads();
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
})

deleteBtn.addEventListener('click', function() {
    //remove the input item from the array
    myLeads.pop(inputEl.value);
    renderLeads();
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
})



function renderLeads(){
    let listItems = "";
    console.log(myLeads);
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
        listItems += `
        <li id= list>
            <a id= myLeads target='_blank' href='${myLeads[i]}'>
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