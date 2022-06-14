// intalize variables
let tweetInput = document.querySelector('#tweetInput');
let submitTweet = document.querySelector('#addTweetBtn');
let TweetDiv = document.querySelector('#newsFeed')

// Empty Array To Store The Tweets
let arrayOfTweets = [];

// check if there is tweets in local storage
if(localStorage.getItem("tweets")){
    arrayOfTweets =JSON.parse(localStorage.getItem("tweets"))
}

// Trigger get data from local storage function
getLocalStorgeData()

// Add Tweet
submitTweet.onclick = function(){
    if(tweetInput.value !== ""){
        addTweetToArray(tweetInput.value); //Add Tweet To Array of Tweets
        tweetInput.value = ""; //Empty Input Field
    }
}

function addTweetToArray(tweetText){
    // Tweet Data
    const tweet = {
        id: Date.now(),
        title: tweetText,
    }

    // push tweet to array of tweets
    arrayOfTweets.push(tweet);

    // add tweets to page
    addTweetToPageFrom(arrayOfTweets);

    // add tweet to local storage
    addDataToLocalStorge(arrayOfTweets);
}

function addTweetToPageFrom(arrayOfTweets){
    // Empty Tweet div
    // TweetDiv.innerHTML = "";
    // Looping on array of tweets
    arrayOfTweets.forEach((tweet)=>{
        // create main div
        let div =document.createElement('div');
        div.className = "feed-tweet";
        var img = document.createElement('img');
        img.classList='tweet-img';
        img.setAttribute('height', '45px');
        img.setAttribute('width', '45px');
        img.src = 'images/twetterrr.png';
        div.appendChild(img);
        div.setAttribute('data-id',tweet.id);
        let childDiv = document.createElement('div');
        childDiv.className = "feed-tweet-details";
        div.appendChild(childDiv);
        let tweeterDetailsDiv = document.createElement("div");
        tweeterDetailsDiv.classList ="tweeter-details";
        childDiv.appendChild(tweeterDetailsDiv);
        let tweeterName = document.createElement("a");
        tweeterName.classList = "twitter-name";
        tweeterName.appendChild(document.createTextNode("Amal Mousa"));
        tweeterDetailsDiv.appendChild(tweeterName);
        let tweeterSpan =document.createElement('span');
        tweeterSpan.classList = "tweeter-handle";
        tweeterSpan.appendChild(document.createTextNode("@amal.sattari .1s"));
        tweeterName.appendChild(tweeterSpan);
        let moreIcon = document.createElement("i");
        moreIcon.classList ="ri-more-fill";
        tweeterDetailsDiv.appendChild(moreIcon);
        let tweetText = document.createElement("div");
        tweetText.classList = "tweet-text";
        childDiv.appendChild(tweetText);
        let tweetTextPar = document.createElement("p");
        tweetText.appendChild(tweetTextPar);
        tweetTextPar.appendChild(document.createTextNode(tweet.title));
        let tweetIcons = document.createElement('div');
        tweetIcons.className = "tweet-icons";
        childDiv.appendChild(tweetIcons);
        // icon1
        let buttonOne = document.createElement('button');
        tweetIcons.appendChild(buttonOne);
        let iconOne = document.createElement("i");
        iconOne.classList="ri-chat-1-line";
        buttonOne.appendChild(iconOne);
        // icon two
        let buttonTwo = document.createElement('button');
        tweetIcons.appendChild(buttonTwo);
        let iconTwo = document.createElement("i");
        iconTwo.classList="ri-repeat-2-fill";
        buttonTwo.appendChild(iconTwo);
        // icon three
        let buttonThree = document.createElement('button');
        tweetIcons.appendChild(buttonThree);
        let iconThree = document.createElement("i");
        iconThree.classList="ri-heart-3-line";
        buttonThree.appendChild(iconThree);
        // icon four
        let buttonFour = document.createElement('button');
        tweetIcons.appendChild(buttonFour);
        let iconFour = document.createElement("i");
        iconFour.classList="ri-upload-2-line";
        buttonFour.appendChild(iconFour);
        // create delete icon
        // let icon = document.createElement("i");
        // icon.className = "ri-delete-bin-7-line";
        // icon.appendChild(document.createTextNode("X"));
        // div.appendChild(icon);

        // add tweet div to main tweet container
        TweetDiv.appendChild(div)
    })
}

function addDataToLocalStorge(arrayOfTweets){
    window.localStorage.setItem("tweets",JSON.stringify(arrayOfTweets));
}

function getLocalStorgeData(){
    let data = window.localStorage.getItem("tweets");
    if(data){
        let tweets =JSON.parse(data);
        addTweetToPageFrom(tweets);
    }
}
// clear local storage
// window.localStorage.removeItem("tweets")