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


texto.addEventListener("keyup", function(){
    const textBox = this;
    const maxLength = 280;
    const counter = document.getElementById("tweetComposerCounter");
    const valorAtual = maxLength - textBox.value.length;

    counter.innerHTML = valorAtual;
    if(textBox.value.length > maxLength){
        textBox.value = textBox.value.substring(0, maxLength);
    }
    if(valorAtual <= 15){
        counter.style.color = "red";
    } else if (valorAtual < 0){
        button.disabled = true;   
    } else {
        counter.style.color = "white";
        button.disabled = false;
    }
  
})

button.addEventListener("click", function(e){
    e.preventDefault();

    if(texto.value === undefined || texto.value === null || texto.value === "" || texto.value === " "){
        return false
    }

    //data
    const date = new Date();
    const month = date.toLocaleDateString("pt-br", {
        month: "short"
    });
    const day = date.getDate();

    //hora
    const horario = new Date;
    const hs = horario.getHours();
    const tempMin = horario.getMinutes();
    const min = tempMin > 9 ? tempMin : '0' + tempMin;
    //const seg = horario.getSeconds();


   const newTweetBox = document.createElement("div");

   newTweetBox.innerHTML = 
   `<div class="tweets-timeline__box">
        <div class="tweets-timeline__header">
            <span class="tweets-timeline__name">Joice.js</span>
            <span class="tweets-timeline__username">flores-joice</span>
            <span class="tweets-timeline__date"> ${day} de ${month} às ${hs}:${min}</span>
        </div>
        <p class="tweets-timeline__tweet">${texto.value}</p>
        <div class="tweets-timeline__footer">
            <button class="tweets-timeline__delete-button">Excluir</button>
        </div>
    </div>`;

   timeline.insertBefore(newTweetBox, timeline.childNodes[0]);

   texto.value = "";
   counter.innerHTML = 280;

   const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");
   botaoExcluir.addEventListener("click", function(excluir){
       excluir.preventDefault();
       newTweetBox.remove();

   })

})

