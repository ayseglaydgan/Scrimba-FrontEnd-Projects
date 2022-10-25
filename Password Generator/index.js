
const character_1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; //91 characters

const character_2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let len = 4;

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

let length = document.getElementById("length");


let flag = false;


function generatePassword(){
    let password_one = "";
    let password_two = "";

    let chars =  !flag ? character_1 : character_2;

    for(let i = 0; i < len; i++){
        
        password_one += chars[Math.floor(Math.random() * chars.length)];
        password_two += chars[Math.floor(Math.random() * chars.length)];   
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

/*function copyToClipboard() {
    const elem = document.createElement('password-one');
    elem.value = passwordOne.textContent;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
 }*/

 function toggleNonAlpha(){
    flag = !flag;
    if(!flag){
        document.getElementById("symbols-numbers").textContent = "DONT INCLUDE SYMBOLS AND NUMBERS";
    }
    else{
        document.getElementById("symbols-numbers").textContent = "INCLUDE SYMBOLS AND NUMBERS";
    }
 }


