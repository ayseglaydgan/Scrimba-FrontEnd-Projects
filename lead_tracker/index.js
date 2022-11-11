let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el"); 

const tabs = [ {url: "https://www.google.com"} ]

tabBtn.addEventListener("click", function(){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

const addHttpsIfMissing = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }
}

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";
    console.log(myLeads);
    for (let i = 0; i < leads.length; i++) {
        console.log(myLeads[i]);
        listItems += `
        <li id= list>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    /*const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li);*/
    }
    ulEl.innerHTML = listItems;
    
}

inputBtn.addEventListener('click', function() {
    myLeads.push(addHttpsIfMissing(inputEl.value));
    render(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
})

deleteBtn.addEventListener('dblclick', function(){
    console.log('double click');
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
