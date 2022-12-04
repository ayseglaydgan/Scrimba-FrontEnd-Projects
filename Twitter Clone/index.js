import { tweetsData } from './data.js';

const tweetInput = document.getElementById('tweet-input');
const tweetButton = document.getElementById('tweet-btn');

tweetButton.addEventListener('click', function(){
    console.log(tweetInput.value);
});

function getFeedHtml(tweets){
    let tweetHtml = '';
    tweets.forEach(function (tweet) {
        tweetHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-comment-dots fa-regular"></i>
                            ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-heart fa-solid"></i>
                            ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-retweet fa-solid"></i>
                            ${tweet.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
    </div>`
    });
    return tweetHtml;
}

function renderFeed(){
    document.getElementById('feed').innerHTML = getFeedHtml(tweetsData);
}

renderFeed();