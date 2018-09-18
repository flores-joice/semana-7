/*
const titulo = document.getElementById("formTitle");
const titulo2 = document.querySelector(".news__title")
console.log(titulo)
console.log(titulo2)*/


//-----------retorna uma mensagem Alert---------------
const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
   // const email = input.value;
    //alert(` O email ${email} foi cadastrado com sucesso!`);
    const email2 = document.getElementById("newsInputEmail").value;
    alert(`O email ${email2}foi cadastrados com sucesso"`)

})
