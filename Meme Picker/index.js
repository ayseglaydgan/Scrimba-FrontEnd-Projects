import {catsData} from '/data.js'

const emotionRadiosEl = document.getElementById('emotion-radios')


function getEmotionsArray(cats){
    let emotionsArray = [];
    for(let cat of catsData){
        for(let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray;
}

function renderEmotionsRadios(cats){
    let emotionRadiosString = "";
    const emotions = getEmotionsArray(cats);
    for(let emotion of emotions){
        emotionRadiosString += `<p>${emotion}</p>`
    }
    emotionRadiosEl.innerHTML = emotionRadiosString;
    console.log(emotionRadiosString)
}

renderEmotionsRadios(catsData);