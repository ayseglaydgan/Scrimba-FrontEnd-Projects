import { catsData } from './data.js';

const emotionRadiosEl = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn');
const gifsOnly = document.getElementById('gifs-only-option');
const memeModal = document.getElementById('meme-modal');
const memeModalInner = document.getElementById('meme-modal-inner');
const closeMemeModal = document.getElementById('meme-modal-close-btn');


emotionRadiosEl.addEventListener('change', highlightCheckedOption)

closeMemeModal.addEventListener('click', closeModal)

getImageBtn.addEventListener('click', renderCat)


function closeModal(){
    memeModal.style.display = 'none';
}

function highlightCheckedOption(e){
    const radioArray = document.getElementsByClassName('radio');
    for(let radio of radioArray){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function renderCat(){
    const matchingCats = getMatchingCatsArray();
    const cat = getSingleCatObject(matchingCats);
    memeModalInner.innerHTML = `
    <img 
    class="cat-img" 
    src="./images/${cat.image}"
    alt="${cat.alt}"
    >
    `
    memeModal.style.display = 'flex'
    
}

function getSingleCatObject(cats){
    const randomIndex = Math.floor(Math.random() * cats.length);
    return cats[randomIndex];
}

function getMatchingCatsArray(){
    const isGif = gifsOnly.checked

    let selectEmotion = "";
    if(document.querySelector('input[type="radio"]:checked')){
        selectEmotion = document.querySelector('input[type="radio"]:checked').value;
    }
    const matchingCats = catsData.filter(function(cat){
        return cat.emotionTags.includes(selectEmotion) && cat.isGif === isGif;
    })
    return matchingCats;
}

function getEmotionsArray(cats){
    let emotionsArray = [];
    for(let cat of catsData){
        for(let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion);
            }
        }
    }
    return emotionsArray;
}

function renderEmotionsRadios(cats){
    let emotionRadiosString = "";
    const emotions = getEmotionsArray(cats);
    for(let emotion of emotions){
        emotionRadiosString += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
                <input 
                type='radio' 
                id="${emotion}"
                value='${emotion}'
                name="emotions">
        </div>
        `
    }
    emotionRadiosEl.innerHTML = emotionRadiosString;
    console.log(emotionRadiosString)
}

renderEmotionsRadios(catsData);
