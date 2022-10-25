console.log("hello");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; //91 characters

let len = 0;

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

let length = document.getElementById("length");


function generatePassword(){
    let password_one = "";
    let password_two = "";
    for(let i = 0; i < len; i++){
        password_one += characters[Math.floor(Math.random() * characters.length)];
        password_two += characters[Math.floor(Math.random() * characters.length)];
    }  

    passwordOne.textContent = password_one;
    passwordTwo.textContent = password_two;
}

function increment(){
    if(len < 15)
        len += 1;
    else if(len >= 15)
        len = 15;
    length.textContent = len;
}

function decrement(){
    if(len > 4)
        len -= 1;
    else if(len <= 4)
        len = 4;
    length.textContent = len;
}

/*function copyToClipboard(e) {
    let passToCopy = e.target.innerText
    navigator.clipboard.writeText(passToCopy)
}
const outputArr = document.getElementsByClassName('output')

Array.from(outputArr).forEach(output => output.addEventListener('click', copy))*/




