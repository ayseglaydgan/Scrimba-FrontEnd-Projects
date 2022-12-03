import { catsData } from './data.js';

const emotionRadiosEl = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn');



emotionRadiosEl.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    const radioArray = document.getElementsByClassName('radio');
    for(let radio of radioArray){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){
    const selectEmotion = document.querySelector('input[type="radio"]:checked').value
    console.log(selectEmotion)
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