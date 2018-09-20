// const button = document.querySelector(".tweet-composer__button");
// const timeline = document.querySelector(".tweets-timeline__box");
// const texto = document.getElementById("tweetComposerInput");

// button.addEventListener("click", function(e){
//     e.preventDefault();
//     //cria variaveis
//     //cria elemento
//     const divTweet = document.createElement("div");
//     const linhatweet = document.createElement("p");
//     const tweet = document.createTextNode(texto.value);

//     //coloca o linha dentro da div
//     //coloca o texto dentro da linha
//     divTweet.appendChild(linhatweet);
//     linhatweet.appendChild(tweet);

    
//     //coloca elemento antes de outro elemento
//     timeline.insertBefore(divTweet, timeline.childNodes[0]);
// })

// const button = document.querySelector(".tweet-composer__button");
// const timeline = document.querySelector(".tweets-timeline");
// const texto = document.getElementById("tweetComposerInput");

// button.addEventListener("click", function(e){
//     e.preventDefault();

//    const newTweetBox = document.createElement("div");

//    newTweetBox.innerHTML = `<div class="tweets-timeline__box">
//    <div class="tweets-timeline__header">
//        <span class="tweets-timeline__name">Joice.js</span>
//        <span class="tweets-timeline__username">flores-joice</span>
//        <span class="tweets-timeline__date">1 de ago</span>
//    </div>
//    <p class="tweets-timeline__tweet">
//        ${texto.value}
//    </p>
//    <div class="tweets-timeline__footer">
//        tweet fixado
//    </div>
// </div>    `;

//    timeline.insertBefore(newTweetBox, timeline.childNodes[0]);

// })

//ou

const button = document.querySelector(".tweet-composer__button");
const timeline = document.querySelector(".tweets-timeline");
const texto = document.getElementById("tweetComposerInput");
const counter = document.getElementById("tweetComposerCounter");

texto.addEventListener("oninput", function(){
    counter = counter - texto.length;
    console.log(texto.length);
})

button.addEventListener("click", function(e){
    e.preventDefault();

    if(texto.value === undefined || texto.value === null || texto.value === "" || texto.value === " "){
        return false
    }

   const newTweetBox = document.createElement("div");

   newTweetBox.innerHTML = 
   `<div class="tweets-timeline__box">
        <div class="tweets-timeline__header">
            <span class="tweets-timeline__name">Joice.js</span>
            <span class="tweets-timeline__username">flores-joice</span>
            <span class="tweets-timeline__date">1 de ago</span>
        </div>
        <p class="tweets-timeline__tweet">${texto.value}</p>
        <div class="tweets-timeline__footer">
            <button class="tweets-timeline__delete-button">Excluir</button>
        </div>
    </div>`;

   timeline.insertBefore(newTweetBox, timeline.childNodes[0]);

   texto.value = "";

   const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");
   botaoExcluir.addEventListener("click", function(excluir){
       excluir.preventDefault();
       newTweetBox.remove();

   })

})

