let myLeads = ["www.google.com", "www.facebook.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById("ul-el"); 

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    
})

function renderLeads(){
let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    listItems += "<li>" + myLeads[i] + "</li>";

   /*const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);*/
}
ulEl.innerHTML = listItems;
}