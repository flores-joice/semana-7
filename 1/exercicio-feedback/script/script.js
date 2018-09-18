const botao = document.querySelector(".feedback__button");

botao.addEventListener("click", function(event){
    event.preventDefault();

    const adicionar = document.querySelector(".testimonials");

    //cria variavel com o valor do input do documento html
    const mensagem = document.getElementById("feedbackInputMessage");

    //cria paragrafo
    const paragrafo = document.createElement("p");

    const mensagemTeste = document.createTextNode(mensagem.value);
    paragrafo.appendChild(mensagemTeste);

    adicionar.appendChild(paragrafo);

})