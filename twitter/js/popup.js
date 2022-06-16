// intilaize variabels
const tweetBtn = document.querySelector('#tweetBtn');
const closeBtn  = document.querySelector('#closeBtn');


// popup function
function togglePopup(){
    document.querySelector("#popup-1").classList.toggle('active');
}

// event
tweetBtn.addEventListener('click',()=>{
    togglePopup()
    closeBtn.addEventListener('click',()=>{
        document.querySelector("#popup-1").classList.remove('active');
    })
});


