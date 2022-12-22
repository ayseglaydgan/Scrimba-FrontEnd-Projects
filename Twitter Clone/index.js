import { tweetsData } from './data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4());

document.addEventListener('click', function (event) {
    if (event.target.dataset.like) {
        console.log(event.target.dataset);
        handleLikeClick(event.target.dataset.like);
    }
    else if (event.target.dataset.retweet) {
        handleRetweetClick(event.target.dataset.retweet);
    }
    else if (event.target.dataset.reply) {
        handleReplyClick(event.target.dataset.reply);
    }
    else if (event.target.id === 'tweet-btn') {
        handleTweetBtnClick()
    }
})


function handleLikeClick(tweetId) {
    console.log(tweetId);
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId;
    })[0];
    targetTweetObj.isLiked ? targetTweetObj.likes-- : targetTweetObj.likes++;
    targetTweetObj.isLiked = !targetTweetObj.isLiked;
    renderFeed();

}

function handleRetweetClick(tweetId) {
    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId;
    })[0];
    targetTweetObj.isRetweeted ? targetTweetObj.retweets-- : targetTweetObj.retweets++;
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
    renderFeed();
    console.log(targetTweetObj.retweets);
}


function handleReplyClick(replyId) {
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden');
}

function handleTweetBtnClick() {
    const tweetInput = document.getElementById('tweet-input');
    if (tweetInput.value === '') {
        return;
    }
    console.log(tweetInput.value);
    const newTweet = {
        handle: `@Scrimba`,
        profilePic: `images/scrimbalogo.png`,
        likes: 0,
        retweets: 0,
        tweetText: tweetInput.value,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    }
    tweetInput.value = '';
    tweetsData.unshift(newTweet);
    renderFeed();
}


function getFeedHtml(tweets) {
    let tweetHtml = '';

    tweets.forEach(function (tweet) {
        let likeIconClass = '';
        let retweetIconClass = '';
        likeIconClass = tweet.isLiked ? 'liked' : '';
        retweetIconClass = tweet.isRetweeted ? 'retweeted' : '';
        console.log(likeIconClass);
        let repliesHtml = '';
        if (tweet.replies.length > 0) {
            tweet.replies.forEach(function (reply) {
                repliesHtml += `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${reply.handle}</p>
                                <p class="tweet-text">${reply.tweetText}</p>
                            </div>
                        </div>
                </div>
                `
            })
        }

        tweetHtml += `
                    <div class="tweet">
                        <div class="tweet-inner">
                            <img src="${tweet.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${tweet.handle}</p>
                                <p class="tweet-text">${tweet.tweetText}</p>
                                <div class="tweet-details">
                                    <span class="tweet-detail">
                                        <i class="fa-comment-dots fa-regular" data-reply="${tweet.uuid}"></i>
                                        ${tweet.replies.length}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-heart ${likeIconClass}" data-like="${tweet.uuid}"></i>
                                        ${tweet.likes}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                                        ${tweet.retweets}
                                    </span>
                                </div>   
                            </div>            
                        </div>
                            <div class="hidden" id="replies-${tweet.uuid}">
                                ${repliesHtml}
                            </div> 
                        
                    </div>`
    });
    return tweetHtml;
}

function renderFeed() {
    document.getElementById('feed').innerHTML = getFeedHtml(tweetsData);
}

renderFeed();