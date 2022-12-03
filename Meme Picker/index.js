import { catsData } from './data.js';

const emotionRadiosEl = document.getElementById('emotion-radios')

emotionRadiosEl.addEventListener('change', function(e){
    console.log(e.target.id);
})


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