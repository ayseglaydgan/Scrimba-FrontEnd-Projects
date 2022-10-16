let countEl = document.getElementById("count-el");

console.log(countEl)

let counter = 0;

function increment() {
    counter += 1;
    countEl.innerText = counter;
}

