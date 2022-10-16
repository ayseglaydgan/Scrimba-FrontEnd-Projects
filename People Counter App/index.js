let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl)
console.log(saveEl)

let counter = 0;

function increment() {
    counter += 1;
    countEl.textContent = counter;
}

// function reset() {
//     counter = 0;
//     countEl.textContent = counter;
// }

function save() {
    let countStr = counter + " - ";
    saveEl.textContent += countStr;
    console.log(countStr );
    countEl.textContent = 0;
    counter = 0;
}